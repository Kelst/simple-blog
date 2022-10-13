import {BuyMeCoffee, Section, SocialNetworks, Title,Cover, PostGrid, Post, Button} from "../components"
import {useState} from "react"
import Head from 'next/head'
import { loadPosts } from "./api/posts"
const LOAD_MORE_STEPS=2
export default function Home({initialPosts,total}) {
  const [posts,setPosts]=useState(initialPosts)
  const [loadedAmount,setLoadAmount]=useState(LOAD_MORE_STEPS)
  const [loading,setLoading]=useState(false)
  const isLoadButton=total>loadedAmount
  console.log(total);
  const getMorePost=async()=>{
      setLoading(true)
      try{
        const data=await fetch(`/api/posts?start=${loadedAmount}&end=${loadedAmount+LOAD_MORE_STEPS}`)
        .then(resp=>resp.json());
        setLoadAmount(loadedAmount+LOAD_MORE_STEPS)
        console.log(data.posts);
        setPosts([...posts,...data.posts])
        setLoading(false)
      }catch(e){
        console.log(e);
        setLoading(false)
      }
  }
  return (
    <>
    <Head>
      <title>My blog</title>
    </Head>
    <Section>
      <Cover title="Vlad </br> Bezkorovainiy"/>
      <SocialNetworks/>
      <BuyMeCoffee/>
    </Section>
    <Section>
      <Title>New Post</Title>
      <PostGrid>
        {posts.map((post)=>(<Post key={post.slug.current} {...post}/>))}
      </PostGrid>
    {
      isLoadButton&&(
        <div style={{display:"flex",justifyContent:"center"}}>
          <Button onClick={getMorePost} disabled={loading}>
            Load More Posts
          </Button>
        </div>
      )
    }
    </Section>
    </>
  )
}
export const getServerSideProps=async()=>{
  const {posts,total}=await loadPosts(0,LOAD_MORE_STEPS)
  return {
    props:{
      initialPosts:posts,
      total
    }
    }
  
}

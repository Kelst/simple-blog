import { Article, Content, Title } from '../../components';
import styles from './styles.module.scss';
import { client } from '../../lib/client';
import {format} from "date-fns"
import Head from 'next/head'

const Post = ({ post }) => {
    console.log(post);
    const date=format(new Date(post.publishedDate),"dd MM yyyy")
	return <>
      <Head>
      <title>{post.meta_title}</title>
    </Head>
    <Article backUrl="/" className={styles.post}>
        <Title className={styles.postTitle}>{post.title}</Title>
        <p className={styles.postDate}>
        {date}
        </p>
        <Content body={post.body}/>
        
    </Article>
    </>
};
export default Post;
export async function getStaticPaths(){
const query=`*[_type=="post"]{slug{current}}`
const posts=await client.fetch(query)
console.log(posts.length);
const paths=posts.map((post)=>({
    params:{
        slug:post.slug.current
    }
}))
return {
    paths,fallback:"blocking"
}
}
export async function getStaticProps({params:{slug}}){
const query=`*[_type=="post"&&slug.current=='${slug}'][0]`

const post =await client.fetch(query)
return {
    props:{
        post
    }
}
}
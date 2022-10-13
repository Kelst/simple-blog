import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const clientConfig={
    projectId:"0q8t0bhy",
    dataset:"production"
}

export const client=sanityClient({
    projectId:clientConfig.projectId,
    dataset:clientConfig.dataset,
    apiVersion:"2022-10-02",
    token:process.env.TOKEN_SANITY,
    useCdn:true,
    ignoreBrowserTokenWarning:true
})
const builder=imageUrlBuilder(client)
export const urlFor=(source)=>builder.image(source);
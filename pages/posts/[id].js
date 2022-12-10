import {getSinglePost} from "../../lib/api";
import Head from "next/head";
import styles from '../../styles/Home.module.css';

export async function getServerSideProps(ctx){
    // console.log(ctx)
    let {id} = ctx.params;
    // console.log(id);
    let post = await getSinglePost(id);
    // console.log(post)
    return {
        props:{
            post
        }
    }
}

export default function Post({post}) {
    console.log(post);
    return (

        <div className={styles.container}>

            <Head>
                {/* <title>{post.title}</title> */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="description" content={post.excerpt}></meta>
                <title>{post.title}</title>
                <meta property="og:url" content={post.id} key="ogurl" />
                <meta property="og:image" content={post.featuredImage.node.sourceUrl} key="ogimage" />
                <meta property="og:site_name" content="Puppy Buz" key="ogsitename" />
                <meta property="og:title" content={post.title} key="ogtitle" />
                <meta property="og:description" content={post.excerpt} key="ogdesc" />
            </Head>
            <main>                
                <div dangerouslySetInnerHTML={{__html:post.excerpt}} />
                <br />
                <br />
                <div dangerouslySetInnerHTML={{__html:post.content}} />
            </main>

        </div>
    )
}
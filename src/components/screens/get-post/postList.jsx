import Post from "./post";

import styles from './postList.module.css'


function PostList(postsObj){
    let posts = postsObj.postsObj;

    return(
        <section className={styles.postList}>
            {posts.length ? (posts.map(post => (
                <Post key={post.id} post={post}/>
            )))
                : <p> No posts yet!</p>
            }


        </section>
    );
}

export default PostList
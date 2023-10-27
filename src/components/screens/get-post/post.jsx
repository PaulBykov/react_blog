
import styles from "./postList.module.css";

function Post({post}){
    return(
        <div className={styles.post}>
             <h4>
                 {post.title}
             </h4>

            <span>
                {post.text}
            </span>
        </div>
    );

}


export default Post
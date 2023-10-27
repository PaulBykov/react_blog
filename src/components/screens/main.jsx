import AddNewPost from "./create-post/addNewPost";
import PostList from "./get-post/postList";
import {useState} from "react";
import {posts as postData} from "../data/post.data";

function Main(){
    const [posts, setPosts] = useState(postData);
    return(
        <main>
            <AddNewPost setPosts = {setPosts}/>
            <PostList postsObj = {posts}/>
        </main>
    );
}


export default Main
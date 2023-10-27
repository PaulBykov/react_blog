import styles from './addNewPost.module.css'
import {useState} from "react";



const clearData = {
    title: '',
    text: '',
}
function AddNewPost({setPosts}){
    const [data, setData] = useState(clearData);


    const createPost = (e) =>{
        e.preventDefault();

        setPosts(prev => [{id: prev.length + 1, ...data}, ...prev]);

        setData(clearData);
    }

    return(
        <form className={styles.addPost}>
            <div className={styles.info}>
                <img src='/images/userIcon.jpg'
                     className={styles.icon}
                     alt="userIcon">
                </img>

                <div className = {styles.input}>
                    <textarea className={styles.title}
                              placeholder="Тема"
                              onChange={e =>
                                  setData(prev => ({
                                      ...prev, title: e.target.value
                                  }))}
                              value={data.title}
                              required>
                    </textarea>

                    <textarea className={styles.msg}
                              placeholder = "Пишите здесь"
                              onChange={e =>
                                  setData(prev => ({
                                      ...prev, text: e.target.value
                                  }))}
                              value={data.text}
                              required>
                    </textarea>

                    <button type="submit"
                            className={styles.submitButton}
                            onClick={e => createPost(e)}>
                        Опубликовать
                    </button>
                </div>

            </div>

        </form>
    );
}


export default AddNewPost
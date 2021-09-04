import {useCollection} from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import Posts from './Posts'
function Post() {
    const [realtimePost , loading , error] = useCollection(
        db.collection('posts').orderBy('timestamp' , 'desc')
    )
    return (
        <article>
            {realtimePost?.docs.map(post => 
                (
                    
                        <Posts
                            key = {post.id}    
                            name = {post.data().name}
                            message = {post.data().message}
                            email = {post.data().email}
                            timestamp = {post.data().timestamp}
                            image = {post.data().image}
                            PostImage = {post.data().imagetopost}
                        />
                    
                )
            )}
        </article>
    )
}

export default Post

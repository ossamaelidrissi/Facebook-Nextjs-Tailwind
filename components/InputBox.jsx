import Image from 'next/image'
import {useSession} from 'next-auth/client'
import {EmojiHappyIcon, VideoCameraIcon} from '@heroicons/react/outline'
import {CameraIcon } from "@heroicons/react/solid"
import {useRef , useState} from 'react'
import firebase from 'firebase'
import { db , storage } from '../firebase'


function InputBox() {
    
        const [session] = useSession();
        const inputRef = useRef(null)
        const postImage = useRef(null)
        const [imagetopost , setImagetopost ] = useState(null);

    const account = href => {
        window.location.href = href
    }

    const submit = e => {
        e.preventDefault();
        if (!inputRef.current.value) return;

        db.collection('posts').add({
                message:inputRef.current.value,
                name : session.user.name,
                email : session.user.email,
                image : session.user.image ,
                timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                imagetopost : imagetopost
           }).then(doc => {
               if(imagetopost){
                   const uploadTask = storage.ref(`posts/${doc.id}`).putString(imagetopost,'data_url')
                   removeImage();

                   uploadTask.on('state_change',null, error => console.error(error) , () => {
                       // when the upload complete
                       storage.ref('posts').child(doc.id).getDownloadURL().then(url => {
                           db.collection('posts').doc(doc.id).set({
                               postImage : url
                           } 
                           ,
                            { merge:true})
                       })
                   })
               }
           })

           inputRef.current.value = '';
    }
    const addimageToPost = e => {
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = readerEvent => {
            setImagetopost(readerEvent.target.result)
        }
    }

    const removeImage = () => {
        setImagetopost(null);
    }
    return (
        <section className = "bg-white p-2 rounded-2xl shadow-md text-gray-500 font-meduim mt-6 ">
            <article className = "flex space-x-4 p-4 items-center">
                <Image 
                    className = "rounded-full cursor-pointer"
                    src = {session.user.image}
                    width = {40}
                    height = {40}
                    layout = "fixed"
                    onClick = {() => {account("https://web.facebook.com/ossama.elidrissi.144")}}
                />
                <form className = "flex flex-1">
                    <input
                        ref = {inputRef}
                        className = "outline-none rounded-full h-12 flex-grow px-5 bg-gray-100 " 
                        type = "text"
                        placeholder ={ `You can choose an image  ${session.user.name}?`}
                     />
                        <button onClick = {submit} type = "submit" className = "hidden"></button>
                        <input type = "file" ref = {postImage}  hidden onChange = {addimageToPost}/>
                </form>

                {imagetopost && (
                    <div onClick = {removeImage} className = "flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
                        <img src = {imagetopost} alt = "Post image" className = "h-10 object-contain" />
                        <p className = "text-xs text-red-500 text-center">Remove</p>
                    </div>  
                )}
            </article>
            <article className = "flex justify-evenly border-t">
                <section className = "inputIcon hidden sm:inline-flex">
                    <VideoCameraIcon className = "h-7 text-red-500" />
                    <p className = "text-xs sm:text-sm xl:text-base">Live Video</p>
                </section>
                <section className = "inputIcon animate-bounce" onClick = { () => {postImage.current.click()}}>
                    <CameraIcon className = "h-7 text-green-400 " />
                    <p className = "text-xs sm:text-sm xl:text-base">Photo/Video</p>
                </section>
                <section className = "inputIcon hidden sm:inline-flex">
                    <EmojiHappyIcon className = "h-7 text-yellow-500" />
                    <p className = "text-xs sm:text-sm xl:text-base">Feeling/Activity</p> 
                </section>
                
            </article>
        </section>
    )
}

export default InputBox

import Image from 'next/image'
import {useRouter} from 'next/router'
function StoryCard({name , src , profile , link}) {
    const router = useRouter();
    const account = href => {
        window.location.href = href
    }

    return (
        <article className = "relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in             hover:scale-105 hover:animate-pulse">
            <Image className = "absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10 " src = {profile} height = {40} width = {40} layout = "fixed" objectFit = "cover" onClick = {() => {account(link)}}/>
            <Image className = "object-cover filter brightness-75 rounded-full lg:rounded-3xl  " src = {src} height = {100} width = {100} layout = "fill" onClick = {() => {account(link)}} />

            <p className = "absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate ">{name}</p>

        </article>  
    )
}

export default StoryCard

import Image from 'next/image'
export default function Contact({name , src}) {
    return (
        <section className = "flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-200 rounded-xl">
            
                <Image className = "rounded-full" src = {src} objectFit = "cover" width = {50} height = {50} layout = "fixed" />
                <p>{name}</p>
            
        </section>
    )
}

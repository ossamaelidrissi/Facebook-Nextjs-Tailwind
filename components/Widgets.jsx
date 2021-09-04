import { SearchIcon } from '@heroicons/react/outline'
import {EmojiHappyIcon, VideoCameraIcon ,DotsHorizontalIcon}   from '@heroicons/react/solid'
import Contact from './Contact'
export default function Widgets() {
    const contacts = [
        {src : "https://links.papareact.com/f0p" , name : "Jeff Bezos"},
        {src : "https://links.papareact.com/kxk" , name : "Elon Musk"},
        {src : "https://links.papareact.com/zvy" , name : "Bill gates"},
        {src : "https://links.papareact.com/snf" , name : "Mark Zuckerberg"},
        {src : "https://links.papareact.com/d0c" , name : "Hary Poter"},
        {src : "https://links.papareact.com/r57" , name : "James Bond"},
    ]
    return (
        <section className = "hidden lg:flex flex-col w-60 p-2 mt-5">
            <section className = "flex items-center justify-between text-gray-500 mb-5 ">
                <h2 className = "text-xl">Contacts</h2>
                <div className = "flex space-x-2 cursor-pointer">
                    <VideoCameraIcon className = "h-7"/>
                    <SearchIcon className = "h-7"/>
                    <DotsHorizontalIcon className = "h-7"/>
                </div>
            </section>
            {contacts.map(contact => (
                <Contact key = {contact.src} src = {contact.src} name = {contact.name}  />
            ))}
        </section>
    )
}



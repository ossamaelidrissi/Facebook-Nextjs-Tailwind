import Image from 'next/image'
import {BellIcon , ChatIcon , ChevronDownIcon , HomeIcon , UserGroupIcon , ViewGridIcon , MenuIcon} from '@heroicons/react/solid'
import {FlagIcon , PlayIcon , SearchIcon , ShoppingCartIcon} from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon'
import {useSession,signOut } from 'next-auth/client'

export default function Header() {

    const [session] = useSession();

    return (
        
            <header className = "flex items-center sticky top-0 z-50 p-2 bg-white lg:px-5 shadow-md">
                {/* Left */}

                    <section className = "flex items-center">

                        <Image src = "https://links.papareact.com/5me" width = {55} height = {55} layout = "fixed" alt="facebook logo"  />
                        <div className = "flex ml-2 items-center rounded-full bg-gray-100 p-2">
                            <SearchIcon className = "h-7 text-gray-600 mr-2" /> 
                            <input type="text" placeholder = "Search Facebook" className = "outline-none bg-gray-100 items-center flex hidden md:inline-flex"  />
                        </div>

                    </section>

                {/* Center */}

                    <section className="flex justify-center flex-grow">

                        <nav className = "flex items-center space-x-6 md:space-x-2 hidden md:inline-flex">
                            <HeaderIcon Icon = {HomeIcon} active />
                            <HeaderIcon Icon = {FlagIcon} />
                            <HeaderIcon Icon = {PlayIcon} />
                            <HeaderIcon Icon = {ShoppingCartIcon} />
                            <HeaderIcon Icon = {UserGroupIcon} />
                            <HeaderIcon Icon = {MenuIcon} only/>
                        </nav>

                    </section>

                {/* Right */}

                    <section className = "flex items-center cursor-pointer  sm:space-x-2 justify-end">
                       
                        <Image
                            className = "rounded-full cursor-pointer"
                            onClick = {signOut}
                            src = {session.user.image}  
                            alt = 'profile picture'
                            height = {40}
                            width = {40}
                            layout='fixed'
                        />
                        

                       
                        
                        <p className = 'whitespace-nowrap font-semibold pr-3 hover:bg-gray-100 p-2 rounded-xl'>{session.user.name}</p>
                        <ViewGridIcon className = "icon animate-spin" />
                        <ChatIcon className = "icon " />
                        <BellIcon className = "icon " />
                        <ChevronDownIcon className = "icon animate-bounce" />
                    </section>
            </header>
    )
}

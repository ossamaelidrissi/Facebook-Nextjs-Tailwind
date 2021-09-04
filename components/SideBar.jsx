import {useSession} from 'next-auth/client'
import {UsersIcon,  CalendarIcon, ChevronDoubleDownIcon, ChevronDownIcon, ClockIcon, DesktopComputerIcon, ShoppingBagIcon, UserGroupIcon } from '@heroicons/react/solid'
import SideBarRow from './SideBarRow'


export default function SideBar() {

    // const click  = link => {
    //     document.location.href = "https://web.facebook.com/groups/feed/"
    // }

    const [session , loading] = useSession()
    return (
        
            <aside className = "hidden sm:inline p-2 mt-5 max-w-[600px] xl:min-w-[300px] sticky r-0"> 
                <SideBarRow src = {session.user.image} title = {session.user.name} />
                <SideBarRow Icon = {UsersIcon} text = 'Friends' />
                <SideBarRow Icon = {UserGroupIcon} text = 'Groups'/>
                <SideBarRow Icon = {ShoppingBagIcon} text = 'Marketplace' />
                <SideBarRow Icon = {DesktopComputerIcon} text = 'Watch' />
                <SideBarRow Icon = {CalendarIcon} text = 'Events' />
                <SideBarRow Icon = {ClockIcon} text = 'Memories' />
                <SideBarRow Icon = {ChevronDownIcon} text = 'See more' />
            </aside>
        
    )
}

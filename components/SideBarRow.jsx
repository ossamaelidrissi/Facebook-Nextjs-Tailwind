import Image from "next/image"

function SideBarRow({title , src , Icon , text}) {
    return  <article className = "cursor-pointer flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl"> 
               { src && (
                    <Image src = {src}  alt = "Profile pictue" width = {30} height = {30} layout = "fixed" className = "rounded-full" />
                )}
                
               { Icon && (
                    <Icon className = "h-8 w-8 text-blue-500" />
                )}


                <p className = "hidden sm:inline-flex font-meduim">{text}</p>
                <h1 className = "hidden sm:inline-flex font-semibold ">{title}</h1>
                
            

            </article>
}

export default SideBarRow

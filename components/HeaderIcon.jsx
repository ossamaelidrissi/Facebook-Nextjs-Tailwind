export default function HeaderIcon({Icon , active , only}) {

    return <article className = {`flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl hover:text-blue-600 active:border-bactive:border-blue-600 ${active && 'text-blue-600'}`}> 
                <Icon className = "h-5 sm:h-7 mx-auto" /> 
          </article>

}

import { ChatAltIcon , ShareIcon , ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'
export default function Posts({image , PostImage , message , timestamp ,name }) {
    return (
        <article className = "flex flex-col">

            {/* Headrer ( userimage , username  , message) */}

            <section className = "p-5 bg-white rounded-t-2xl mt-5 shadow-sm">
                <section className = "flex items-center space-x-2">

                    {/* userimage , time , name */}

                    <img src={image} alt="user image" width = {40} height = {40} className = "rounded-full" />
                    <section>
                        <p className = "font-medium	">{name}</p>
                        <p className = "text-sm text-gray-400">{new Date(timestamp?.toDate()).toLocaleString()}</p>
                    </section>
                </section>
                <p className = "pt-7">{message}</p>
            </section>

            {/* Post Image */}

            {PostImage && (
                <article className = "relative h-56 md:h-96 bg-white">
                    <Image src = {PostImage} objectFit = "cover" layout = "fill"/>
                </article>
            )}

            {/* Footer */}
            <section className = "flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t py-2 px-9">
                <section className = "inputIcon">
                    <ThumbUpIcon className = "h-4" />
                    <p className = "text-xs sm:text-base">Like</p>
                </section>

                <section className = "inputIcon">
                    <ChatAltIcon className = "h-4" />
                    <p className = "text-xs sm:text-base">Comment</p>
                </section>

                <section className = "inputIcon">
                    <ShareIcon className = "h-4" />
                    <p className = "text-xs sm:text-base">Share</p>
                </section>
            </section>
        </article>
    )
}

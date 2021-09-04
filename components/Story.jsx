import StoryCard from "./StoryCard"

function Story() {

    const stories = [
        {   
            number : 1,
            name : "Ossama Elidrissi",
            src : "https://avatars.githubusercontent.com/u/87373195?v=4",
            profile : "https://links.papareact.com/l4v",
            link : "https://www.instagram.com/ossaaaamaa/"
        },
        {
            number : 2,
            name : "Elon Musk",
            src : "https://links.papareact.com/4zn",
            profile : "https://links.papareact.com/kxk",
            link : "https://twitter.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        },
        {
            number : 3,
            name : "Jeff Bezos",
            src : "https://links.papareact.com/k2j",
            profile : "https://links.papareact.com/f0p",
            link : "https://www.instagram.com/jeffbezos/"

        },
        {
            number : 4,
            name : "Mark Zuckerberg",
            src : "https://links.papareact.com/xql",
            profile : "https://links.papareact.com/snf",
            link : "https://www.instagram.com/zuck/"
        },
        {
            number : 5,
            name : "Bill Gates",
            src : "https://links.papareact.com/4u4",
            profile : "https://links.papareact.com/zvy",
            link : "https://www.instagram.com/thisisbillgates/"
        },
    ]
    return (
        <nav className = "flex justify-center space-x-3 mx-auto">
            {stories.map(story => (
                <StoryCard key = {story.number} name = {story.name} src = {story.src} profile = {story.profile} link = {story.link}/>
            ))}
        </nav>
    )
}

export default Story

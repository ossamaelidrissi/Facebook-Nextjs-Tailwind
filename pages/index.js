import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import { getSession } from 'next-auth/client'
import Login from '../components/Login'

export default function Home({ session }) {

  if(!session) return <Login />;

  return (
    <div className = "h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Ossama | Facebook</title>
        <meta name="description" content="Build Facebook clone with next js and tailwind css " />
        <link rel="icon" href="https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico?_nc_eui2=AeGSQ5RzALnXpfMPUTAEL_laaBWfmC2eGbdoFZ-YLZ4ZtzFAArpCbUnN-CBg1eP_1zwteCkNVb-wy1__C3nbReYJ" />
        <link rel="canonical" href="http://ossama-facebook.com/" />
      </Head>

      {/* Header */}
      <Header />

      <main className = "flex">

        <SideBar />

        
        <Feed />

        
        <Widgets />

      </main>

    </div>
  )
}


export async function getServerSideProps(context){

  // get the user
  const session =  await getSession(context);

  return{
    props: {
      session
    }
  }
}
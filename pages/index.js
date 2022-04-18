import Cardjob from '../components/Cardjob'
import Navbar from '../components/Navbar'
import { getJobs } from '../controllers/getJobs'
import Head from 'next/head'
import Home from '../components/Home'

export default function App({jobsProp}) {
  return (
    <div>
        <Head>
                <title>Tradehelm Careers</title>
                <meta name="description" content="Majorkey jobs page" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>
        </Head>
        <Navbar />
        <Home jobs={jobsProp}/>
    </div>
  )
}

export const getStaticProps = async() =>{
  const jobsProp = await getJobs()
  return{
    props:{
      jobsProp
    }
  }
}

import Head from "next/head"
import { Navbar } from "../ui"


export const Layout = ({ children, title }) => {

  return (
    
    <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name="author" content="Ronald Diaz" />
            <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
            <meta name="keywords" content={`${title}, pokemon, pokedex`} />

            <meta property="og:title" content={`Informacion sobre ${title}`} />
            <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
            <meta property="og:image" content="	http://localhost:3000/img/banner.jpg" />
        </Head>

        <Navbar />

        <main style={{
            padding: '5px 20px'
        }}>
            { children }
        </main>
    </>  

  )
}

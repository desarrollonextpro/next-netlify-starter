import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <p>Estás mirando la página de inicio, navega a 
          <a href="/productos">/productos</a>
          para ver la app web
        </p>

      </main>

      <Footer />
    </div>
  )
}

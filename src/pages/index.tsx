import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'

import { Container } from '../styles/pages/home'

const Home: React.FC = () => {
    return (
        <Container>
            <Head>
                <title>SteamBackground</title>
            </Head>
            <Header />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mt-20">
                <div className="flex justify-center items-center ">
                    <div className="w-4/5 lg:w-2/4 text-center">
                        <h1 className="leading-none tracking-tight">
                            Hello World
                        </h1>
                        <p>Boilerplate Next.Js</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Home

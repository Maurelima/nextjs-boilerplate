import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/home'

const Home: React.FC = () => {
    return (
        <Container>
            <Head>
                <title>Boilerplate</title>
            </Head>
        </Container>
    )
}

export default Home

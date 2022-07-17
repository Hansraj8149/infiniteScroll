import React from 'react'
import NavScrollExample from './NavScrollExample'
import { Container } from 'react-bootstrap'
import UseEffectApi from './useEffectApi'

const Home = () => {
    return (
        <Container fluid='md'>
            <NavScrollExample />
            <UseEffectApi />
        </Container>
    )
}

export default Home
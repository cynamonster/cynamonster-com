
import React from "react"
import {Container, Segment, Divider, Header} from 'semantic-ui-react'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Ben Cynamon's Contact Info" />
    <Container className="blog-container">

    <Header as="h1" textAlign="center" className="header-text">Blog</Header>

    <Segment inverted textAlign={"left"} padded='very'>
        <Header as='h2' 
        // textAlign='center'
        >
            Begin Your Day with a Run
        </Header>
        {/* <Header sub textAlign='center'> */}
            <i>February 29, 2020</i>
        {/* </Header> */}
        <Divider />
        <p>Begin your day with a run.</p>
        <p>Shake yourself of your dreams. Bring yourself into reality.</p>
        <p>Let every leaf on every tree dance before you like 8 billion fragile, invaluable souls.</p>
        <p>Some fresh and full of life. Others have wrinkled and prepare to let go of this journey they've shared.</p>
        <p>You leap, rhythmically, from foot to foot.</p>
        <p>You're dancing too!</p>

        <br />

        <p>Watch scattered sunlight fragments relagate from magnificent trees to the bushes and shrubs below.</p>
        <p>Some green towers over its fellow flora yet they remain inseparable, their roots intertwined, each plant comprising a mere piece of an ecosystem.</p>

        <br />

        <p>Return home and rinse yourself like an acorn in a storm, knowing incalculable potential lies within you no matter how much you are stepped on or dropped or ignored.</p>
    </Segment>
    </Container>
  </Layout>
)

export default Blog


import React from "react"
import {Container, Segment, Divider, Header} from 'semantic-ui-react'
import Layout from "../components/layout"
import SEO from "../components/seo"

const RISING_ASIA_LINK = "https://www.amazon.com/How-Filthy-Rich-Rising-Asia/dp/1594632332/"

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

        <p>Draw breath deeply through your nose before exhaling through your mouth,</p>
        <p>letting your breathing find a tempo slower than the pounding drumbeat of your rubber-insulated feet.</p>
        <p>
          If only a yogi could see you now. They would be forgiven for mistaking your breathing exercise for meditation.
          You definitely aren't meditating, right? Isn't that all about sitting still, not jumping around?
        </p>
        <p>No matter.</p>
        <p>The thought melts away like your the dreams which lingered in your mind during your morning's first moments of waking, each now a mere memory of a memory.</p>
        <p>You've far more pressing matters to consider:</p>
        <li> - A supposed friend who's spoken ill behind your back.</li>
        <li> - An unintented impoliteness imparted on an acquaintance.</li>
        <li> - A reoccurring feeling you're living sub-optimally and already missed the oppportunity to reach your maximum potential.</li>

        <br />

        <p>You may find yourself trekking over a variety of terrains.</p>
        <p>Your footsteps may massage the gravel rocks you come across.</p>
        <p>
          The sound of tiny grinding stones may remind you of home-made musical shaker instruments and being far more concerned with fruit juice flavors
          than tax report filings and you may wonder what you wouldn't give away to award all you know now to who you were then but 
          <a href={RISING_ASIA_LINK}>
            while the yearning for another chance at youth tempts us all, you are strong enough to hold fast to the truth that time works not that way.
          </a>
        </p>

        <br />

        <p>Let the satisfyingly crisp crunch of steps over dried leaves catapult you from these contemplations.</p>
        <p>The breeze sings through dancing leaves, urging you to ignore the philosophical implications of what you're stepping on.</p>
        <p>I'll take the blame for that one, hah, but the leaf cares not what you think of it.</p>
        <p>Isn't that something?</p>
        <p>
          You could expel a blimb's worth of breath interlaced with every insult imaginable, including the entertaining items endearingly entrusted to 
          you from the initial languages of international friends.
        </p>
        <p>The leaf knows better. It is a leaf, no matter what one says of it.</p>

        <br />

        <p>
          Return home and rinse yourself like an acorn in a storm, knowing incalculable potential lies within you no matter how much you are 
          stepped on or dropped or ignored.
        </p>
    </Segment>
    </Container>
  </Layout>
)

export default Blog

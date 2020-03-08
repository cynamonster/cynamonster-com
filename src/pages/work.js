import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Container, Segment, Header, Image} from 'semantic-ui-react'

import igem from '../images/igem2018-mock.png'
import pad from '../images/PAD-iphone-mock.png'


const Work = () => (
  <Layout>
    <SEO title="Ben Cynamon - Work Experience" />
    {/* <section class="recent-projects"> */}
      <Container>
        <br />
        <br />

        <a rel="noopener noreferrer" target="_blank" href="https://github.com/cynamonster/pad-stat-track">
          <Segment padded='very' raised compact textAlign='center' inverted>
            <Header as='h2'>Supporting Florida State University's<br />College of Medicine</Header>
            <p>Lead the full-stack development of a React Js web app amplified by a serverless Amazon Web Services DynamoDB.</p>
            <Image size='large' src={pad} centered />
          </Segment>
        </a>

        <br />
        <br />

        <a rel="noopener noreferrer" target="_blank" href="http://2018.igem.org/Team:FSU">
          <Segment padded='very' raised compact textAlign='center' inverted>
            <Header as='h2'>Documenting Synthetic Biological Research</Header>
            <p>Relied on by the International Genetically Engineered Machines research team at Florida State University to lead development of their digital presence.</p>
            <Image size='large' src={igem} centered />
          </Segment>
        </a>
      </Container>
      

      {/* <div class="recent-projects__main-text">Featured Work</div> */}
      
      
      {/* <div class="recent-projects__projects">
        <a rel="noopener noreferrer" target="_blank" href="http://2018.igem.org/Team:FSU">
          <div class="recent-projects__projects--card animated zoomIn">
            <div class="recent-projects__projects--card--img"><img alt="IGEM 2018" src={igem} /></div>
            <div class="recent-projects__projects--card--overlay">
              <div class="recent-projects__projects--card--main-text">Synthetic Biology Research Team</div>
              <div class="recent-projects__projects--card--sub-text">International Genetically Engineered Machines</div>
            </div>
          </div>
        </a>
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/cynamonster/pad-stat-track">
          <div class="recent-projects__projects--card animated zoomIn">
            <div class="recent-projects__projects--card--img"><img alt="PAD App" src={pad} /></div>
            <div class="recent-projects__projects--card--overlay">
              <div class="recent-projects__projects--card--main-text">Florida State University's<br /><i>College of Medicine</i></div>
              <div class="recent-projects__projects--card--sub-text">Static Muscular Stretching for Treatment of<br />Peripheral Arterial Disease</div>
            </div>
            </div>
          </a>
        </div> */}
      
    {/* </section> */}
  </Layout>
)
export default Work;
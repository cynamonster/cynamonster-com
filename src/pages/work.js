import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import igem from '../images/igem2018-mock.png'
import pad from '../images/PAD-iphone-mock.png'

const Work = () => (
  <Layout>
    <SEO title="Ben Cynamon - Work Experience" />
    <section class="recent-projects">
      {/* <div class="recent-projects__main-text">Featured Work</div> */}
      <div class="recent-projects__projects">
        <a target="_blank" href="http://2018.igem.org/Team:FSU">
          <div class="recent-projects__projects--card animated zoomIn">
            <div class="recent-projects__projects--card--img"><img src={igem} /></div>
            <div class="recent-projects__projects--card--overlay">
              <div class="recent-projects__projects--card--main-text">Synthetic Biology Research Team</div>
              <div class="recent-projects__projects--card--sub-text">International Genetically Engineered Machines</div>
            </div>
          </div>
        </a>
        <a target="_blank" href="https://github.com/cynamonster/pad-stat-track">
          <div class="recent-projects__projects--card animated zoomIn">
            <div class="recent-projects__projects--card--img"><img src={pad} /></div>
            <div class="recent-projects__projects--card--overlay">
              <div class="recent-projects__projects--card--main-text">Florida State University's<br /><i>College of Medicine</i></div>
              <div class="recent-projects__projects--card--sub-text">Static Muscular Stretching for Treatment of<br />Peripheral Arterial Disease</div>
            </div>
            </div>
          </a>
        </div>
    </section>
  </Layout>
)
export default Work;
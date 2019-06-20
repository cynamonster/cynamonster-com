import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

import hero from '../images/ClubDayHeadshot03.jpg'

const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" />
    <main class="about">
      <div className="about__container animated fadeInLeft">
        <div class="about--img"><img src={hero} /></div>
        <div class="about__main">
          <div class="about__main--big-text">
            <h1>I'm Ben Cynamon</h1>
            <p><em>(pronounced like the spice)</em></p>
            <br />
            <p>B.S. '19, Florida State University</p>
            <br />
            <p>Experienced full-stack React, NodeJS, and WordPress developer. Former Apple technical adviser proficient with the Adobe Creative Suite.</p>
            <br />
          </div>
          <div class="about__main--small-text animated fadeInRight">
            
            <a target="_blank" href="https://github.com/cynamonster/cynamonster-com">
              <button>
                Site repository &nbsp;
                <FontAwesomeIcon icon={faChevronCircleRight} />
              </button>
            </a>

            <Link to="/work">
              <button>
                Past Work &nbsp;
                <FontAwesomeIcon icon={faChevronCircleRight} />
              </button>
            </Link>

          </div>
        </div>
      </div>
    </main>
  </Layout>
)

export default IndexPage
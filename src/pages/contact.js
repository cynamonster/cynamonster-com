import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Ben Cynamon's Contact Info" />
    <div class="contact">
      <section>
        <h1 className="animated fadeInDown">Glad you'd like to connect!</h1>
        <a href="mail:ben@cynamonster.com"><i class="far fa-envelope animated fadeIn slow"></i></a>
        <h2 className="animated fadeInUp">Send me an email, ben@cynamonster.com</h2>
      </section>
    </div>
  </Layout>
)

export default SecondPage

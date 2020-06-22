import React from 'react'

import Layout from 'components/layout'
import Hero from 'components/sections/hero'
import ContactUs from 'components/sections/contactUs'

const Home = () => (
  <Layout title="Home" path="/">
    <Hero />
    <ContactUs />
  </Layout>
)

export default Home

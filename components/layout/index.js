import React from 'react'

import Footer from 'components/footer'
import Meta from 'components/layout/meta'

const Layout = ({ children, title, description, path, image, noCrawl }) => (
  <>
    <Meta title={title} path={path} image={image} noCrawl={noCrawl} description={description} />
    { children }
    <Footer />
  </>
)

export default Layout

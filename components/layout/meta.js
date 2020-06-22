import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import { SITE_TITLE, DEFAULT_OG_TYPE, DEFAULT_DESCRIPTION, DEFAULT_IMAGE, AUTHOR, FB_SITE, FB_APP_ID, TWITTER_HANDLE, SITE_URL } from 'config'

const Meta = ({ title, path, image, description, noCrawl, type }) => {
  const pageProps = {
    path: `${SITE_URL}${path}`,
    locale: 'en',
    image: typeof image === 'string' ? image : DEFAULT_IMAGE,
    fullTitle: path === '/' ? `${SITE_TITLE} | ${title}` : `${title} | ${SITE_TITLE}`,
    fullUrl: `${SITE_URL}${path}`,
    description: typeof description === 'string' ? description : DEFAULT_DESCRIPTION,
    type: typeof type === 'string' ? type : DEFAULT_OG_TYPE
  }

  return (
    <Head>
      <title>{ pageProps.fullTitle }</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      { noCrawl ? <meta name='robots' content='noindex, nofollow' /> : <meta name='robots' content='index, follow' /> }
      <meta name="author" content={AUTHOR} />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content={SITE_TITLE} />
      <link rel='canonical' href={pageProps.fullUrl} />
      <meta name="title" content={title}></meta>
      <meta name='description' content={pageProps.description} />
      <meta property='og:title' content={pageProps.fullTitle} />
      <meta property='og:url' content={pageProps.fullUrl} />
      <meta property='og:type' content={pageProps.type} />
      <meta property='og:description' content={pageProps.description} />
      <meta property='og:image' content={pageProps.image} />
      <meta property='og:site_name' content={FB_SITE} />
      { FB_APP_ID ? <meta property='fb:app_id' content={FB_APP_ID} /> : null }
      { TWITTER_HANDLE ? <meta property='twitter:creator' content={TWITTER_HANDLE} /> : null }
      <meta property='og:locale' content={pageProps.locale} />
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:title' content={pageProps.fullTitle} />
      <meta property='twitter:description' content={pageProps.description} />
      <meta property='twitter:url' content={pageProps.fullUrl} />
      <meta property='twitter:image:src' content={pageProps.image} />
      <link rel="shortcut icon" href="/static/favicon.ico"></link>
    </Head>
  )
}

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  noCrawl: PropTypes.bool,
  type: PropTypes.string
}

export default Meta

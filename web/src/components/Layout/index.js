import React from 'react'
import Menu from '../Menu'
import Footer from '../Footer'

import styles from './layout.module.css'

import {graphql} from 'gatsby'

export const query = graphql`
  query SiteTitleQuery {
    site: sanityFrontpage(_id: {regex: "/(drafts.|)frontpage/"}) {
      title
    }
  }
`

const Layout = ({data, children}) => {
  const {title} = data.site

  return (
    <>
      <Menu siteTitle={title} />
      <div className={styles.content}>{children}</div>
      <Footer />
    </>
  )
}

export default Layout

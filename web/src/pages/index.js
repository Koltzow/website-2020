import React from 'react'
import SEO from '../components/Seo'
import Layout from '../components/Layout'
import ContentRenderer from '../components/ContentRenderer'
import {graphql} from 'gatsby'

const Index = props => {
  console.log(props)

  const {data} = props

  if (!data) {
    return (
      <Layout>
        <h1>Missing data</h1>
      </Layout>
    )
  }

  const {title, description} = data.frontpage

  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <div>
        <ContentRenderer blocks={description} />
      </div>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query FrontPage {
    frontpage: sanityFrontpage(description: {}) {
      description {
        _key
        _type
        style
        listItem
        level
        markDefs {
          _key
          _type
          href
        }
        children {
          _key
          _type
          text
          marks
          
        }
      }
      title
    }
  }
`

import React from "react"
import { pagePath } from '../helpers/page-path'
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFound = props => (
  <Layout currentPath={pagePath(props.location)}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFound
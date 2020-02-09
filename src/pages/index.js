import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const H1 = styled.h1`
  position: absolute;
  top: 30%;
  text-align: center;
  width: 100%;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <H1>Coming soon...</H1>
  </Layout>
)

export default IndexPage

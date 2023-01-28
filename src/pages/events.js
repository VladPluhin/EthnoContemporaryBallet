import * as React from "react"
import {  graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SectionMain from '../components/sectionMain/sectionMain.js'


const ProjectsPage = ({data}) => {
  // const dataMainSection = {...data.contentfulHome.heroSection}
  // const dataProductsSection = {...data.contentfulHome.productsSection}
  return (
    <Layout>
    {/* <SectionMain data={dataMainSection}/> */}
    </Layout>
  )
}

export const Head = () => <Seo title="Projects Page" />

export default ProjectsPage

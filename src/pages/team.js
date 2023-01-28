import * as React from "react"
import {  graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SectionMain from '../components/sectionMain/sectionMain.js'


const ProductsPage = ({data}) => {
  // const dataMainSection = {...data.contentfulProductsPage.sectionMain}
  // const dataProductsSection = {...data.contentfulProductsPage.sectionProducts}
  // const dataAllContentfulProduct = [...data.allContentfulProduct.nodes] 
  return(
    <Layout>
      {/* <SectionMain data={dataMainSection} key={dataMainSection.id}/>
    */}
    </Layout>
  )
}



export const Head = () => <Seo title="Products" />
export default ProductsPage

export const query = graphql`
{
  allContentfulMainSlide(filter: {nameBlock: {eq: "MainSectionSlide"}}) {
    totalCount
    nodes {
      bgColor
      colorText
      contentful_id
      layerOnImage
      nameBlock
      slideBgImage {
        url
        description
      }
      slideDescription {
        raw
      }
      title
    }
  }


  allContentfulSectionAboutUs(filter: {nameBlock: {eq: "SectionAboutUS"}}) {
    nodes {
      button
      buttonText
      id
      sectionColor
      textColor
      title
      description {
        raw
      }
    }
  }

  allContentfulPersonCard(filter: {nameBlock: {eq: "person"}}) {
    nodes {
      bgColorAnimation
      bgColorCard
      colorText
      namePersone
      personImage {
        description
        url
      }
      slug
      position
      id
    }
  }

}
`




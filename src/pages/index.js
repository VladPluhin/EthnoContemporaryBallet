import * as React from "react"
import {  graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SectionMain from "../components/sectionMain/sectionMain"
import SectionAbout from "../components/sectionAbout/sectionAbout"
import SectionTeam from "../components/sectionTeam/sectionTeam"
import SectionEvents from '../components/sectionEvents/sectionEvents'


const IndexPage =({data}) => {
const dataMainSeaction = [...data.allContentfulMainSlide.nodes]
const dataSectionAbout = {...data.allContentfulSectionAboutUs.nodes[0]}
const dataSectionTeam  = [...data.allContentfulPersonCard.nodes]

  return (
    <Layout>
      <SectionMain  data={dataMainSeaction}/>
      <SectionAbout data={dataSectionAbout}/>
      <SectionTeam data = {dataSectionTeam} textDes={data.teamDesBclok}/>
      <SectionEvents data = {[...data.oldEvents.nodes]} textDes={data.textOldEvents} key={data.oldEvents.nodes.id}/>
      <SectionEvents data = {[...data.newEvents.nodes]} textDes={data.textNewEvents} key={data.oldEvents.nodes.id}/>
    </Layout>
  )
}


export const Head = () => <Seo title="Home" />

export default IndexPage


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
      subtitle
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

  newEvents: allContentfulCardEvent(filter: {nameBlock: {eq: "CardNewEvent"}}) {
    nodes {
      descriptionEvent {
        raw
      }
      nameBlock
      newEvent
      newEvents
      slug
      title
      nameEvent
      date
      textBtn
      previewText
      id
      image {
        url
        description
      }
    }
  }
  oldEvents: allContentfulCardEvent(filter: {nameBlock: {eq: "CardOldEvents"}}){
    nodes {
      descriptionEvent {
        raw
      }
      nameBlock
      newEvent
      newEvents
      slug
      title
      nameEvent
      date
      textBtn
      id
      previewText
      image {
        url
        description
      }
    }
  }

  teamDesBclok: allContentfulDescriptionBlock(filter: {nameBlock: {eq: "teamDesBclok"}, textDescription: {}}) 
      {
        nodes {
          title
          textDescription {
            raw
          }
          nameBlock
          id
        }
      }

    textOldEvents: allContentfulDescriptionBlock(filter: {nameBlock: {eq: "textOldEvents"}, textDescription: {}})
     {
        nodes {
          title
          textDescription {
            raw
          }
          nameBlock
          id
        }
      }
    textNewEvents: allContentfulDescriptionBlock(filter: {nameBlock: {eq: "textNewEvents"}, textDescription: {}})
        {
        nodes {
          title
          textDescription {
            raw
          }
          nameBlock
          id
        }
      }
    
    
}`
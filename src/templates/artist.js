import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {  graphql, Link } from "gatsby"


export default () => {
  // const nextPage= {...data.next.nodes[0]}
  // const prevPage= {...data.previous.nodes[0]}
  // const prodData= {...data.allContentfulPersonCard.nodes[0]}
     return (
       <Layout>
          <section className="section-article">
               <div className="container">
                      <article>
                        dadadadadadasdadadad aq qq ddqd   wfwefwffw  ew 
                    </article>
                      {/* <ul  className="section-article__pagination ">
                        <li>
                          {prevPage.slug &&  <Link to={ `/products/${prevPage.slug}`}  className="link prev ">Previos Product</Link>}
                        </li>
                        <li>
                          {nextPage.slug && <Link to={ `/products/${nextPage.slug}`}  className="link  next"> Next Product</Link>}
                        </li>
                      </ul> */}
               </div>
          </section>
       </Layout>
     );
   };


export const query = graphql`
query MyQuery( 
  $slug:String
  $previousPostSlug: String
  $nextPostSlug: String
) {
     

      allContentfulPersonCard(filter: {slug: {eq: $slug}}) {
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

      previous: allContentfulPersonCard(filter: {slug: {eq:$previousPostSlug}}) {
        nodes {
          slug
          namePersone
        }
      }

      next: allContentfulPersonCard(filter: {slug: { eq: $nextPostSlug }}) {
        nodes {
          slug
          namePersone
        }
      }
    }
`

export const Head = () => <Seo title="Team" />
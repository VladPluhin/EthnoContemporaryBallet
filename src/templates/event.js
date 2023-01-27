import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {  graphql, Link } from "gatsby"
import { renderRichText } from 'gatsby-source-contentful/rich-text';

export default ({data}) => {
  // const nextPage= {...data.next.nodes[0]}
  // const prevPage= {...data.previous.nodes[0]}
  // const prodData= {...data.allContentfulProduct.nodes[0]}
     return (
       <Layout>
          {/* <section className="section-article">
               <div className="container">
                  <ul>
                    
                  </ul>

                      <article>
                        {prodData.title && <h1 className="section-article__title">{prodData.title}</h1> }
                        {prodData.descriptionText && <h4 className="section-article__subtitle">{prodData.descriptionText}</h4>} 
                        {prodData.articleImage.url &&  <div className="section-article__image">
                            <img src={prodData.articleImage.url} alt={prodData.articleImage.description}/>
                        </div>}
                       
                        <div className="section-article__contetn">
                            {prodData.articleContent &&  <>{renderRichText(prodData.articleContent)}</>}
                            {prodData.btnText && <div className="section-article__btn-wrap">
                               <a href="" className="link ">{prodData.btnText}</a>
                            </div>
                            }
                        </div>
                    </article>
                      <ul  className="section-article__pagination ">
                        <li>
                          {prevPage.slug &&  <Link to={ `/products/${prevPage.slug}`}  className="link prev ">Previos Product</Link>}
                        </li>
                        <li>
                          {nextPage.slug && <Link to={ `/products/${nextPage.slug}`}  className="link  next"> Next Product</Link>}
                        </li>
                      </ul>
               </div>
          </section> */}
       </Layout>
     );
   };


// export const query = graphql`
// query MyQuery( 
//   $slug:String
//   $previousPostSlug: String
//   $nextPostSlug: String
// ) {
//       allContentfulProduct(filter: {slug: {eq: $slug}}) {
//           nodes {
//               articleContent {
//                 raw
//               }
//               articleImage {
//                 url
//                 description
//               }
//               btnText
//               slug
//               title
//               descriptionText
//           }
//       }
//       previous: allContentfulProduct(filter: {slug: { eq: $previousPostSlug }}) {
//         nodes {
//           slug
//           title
//         }
//       }
//       next: allContentfulProduct(filter: {slug: { eq: $nextPostSlug }}) {
//         nodes {
//           slug
//           title
//         }
//       }
//     }
// `

export const Head = () => <Seo title="Product" />
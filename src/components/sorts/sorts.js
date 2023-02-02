function getsortedData(data, name) {
  for (const element in data) {
    if(data[element].nameBlock === name) {
      return(data[element].sectionBlocks)
    }
  }
}

function getsortedCards(data, name) {
  const personDatas = []
   for (const element in data) {
      if(data[element].nameBlock === name) {
        personDatas.push(data[element])  
      }
  }
  return personDatas
} 

// function getSortedNav(data) { 

//   console.log(data)
//   let navData = []

//   data.forEach(element => {
//      if(element.textUrl) {
//         element.sectionBlocks.map((link)=> {
//           if(link.slug) {
//             navData=[...navData, link.textUrl={id: link.id,  textNavLink: link.nameEvent ? link.nameEvent : link.namePersone, linkSludg: link.slug }]
//           }
//        })
//        navData=[...navData, element.textUrl= {  id: element.id, textNavLink: element.textNavigationLink, linkSludg: element.textUrl}]
//       }
//   });
// }


export {getsortedData, getsortedCards }
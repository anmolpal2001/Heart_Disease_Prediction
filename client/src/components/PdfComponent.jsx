import React from 'react'
import {Page,Document,Text,View,StyleSheet} from '@react-pdf/renderer'
import logo from '../assets/logo.png'
// const styles = StyleSheet.create({
//   body: {
//     paddingTop: 35,
//     paddingBottom: 65,
//     paddingHorizontal: 35,
//   },
//   title: {
//     fontSize: 24,
//     textAlign: "center",
  
//   },
//   text: {
//     margin: 12,
//     fontSize: 14,
//     textAlign: "justify",
 

//   },
//   image: {
//     marginVertical: 15,
//     marginHorizontal: 100,
//   },
//   header: {
//     fontSize: 12,
//     marginBottom: 20,
//     textAlign: "center",
//     color: "grey",
  
//   },
//   pageNumber: {
//     position: "absolute",
//     fontSize: 12,
//     bottom: 30,
//     left: 0,
//     right: 0,
//     textAlign: "center",
//     color: "grey",
 
//   },
// });

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const PdfComponent=()=> (
        // <Document>
        //     <Page style={styles.body}>
        //     <Text style={styles.header} fixed>Report</Text>
        //       <Image style={styles.image} src={logo} />
        //       <Text style={styles.text}>
        //         {/* <ul>
        //             <li>Age:20</li>
        //             <li>Gender:male</li>
        //         </ul> */}
        //         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime odit cum facilis quibusdam repellat? Dolore sapiente veritatis vero architecto iusto adipisci dolorem sed, ullam impedit! Impedit debitis distinctio id laboriosam?
        //       </Text>
        //       <Text style={styles.pageNumber}>1/1</Text>
        //       </Page>
        // </Document>


  <Document>
      <Page size="A4" style={styles.page}>
          <View style={styles.section}>
             <Text>Section #1</Text>
          </View>
         <View style={styles.section}>
           <Text>Section #2</Text>
         </View>
        </Page>   
            </Document>

)
  
export default PdfComponent

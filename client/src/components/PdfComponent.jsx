import React from "react";
import {
  Page,
  Document,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import logo from "../assets/heartt.png";
// const styles = StyleSheet.create({
//   body: {
//     paddingTop: 35,
//     paddingBottom: 65,
//     paddingHorizontal: 35,
//   },
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     padding: 20, //added
//   },
//   title: {
//     position: "absolute",
//     fontSize: 24,
//     textAlign: "center",
//     marginBottom: 20, //added
//   },
//   text: {
//     // margin: 12, // removed
//     fontSize: 14,
//     textAlign: "justify",
//     marginBottom: 10, //added
//   },
//   image: {
//     marginVertical: 15,
//     marginHorizontal: 100,
//   },
//   // header: {
//   //   fontSize: 12,
//   //   marginBottom: 20,
//   //   textAlign: "center",
//   //   color: "grey",
//   // },
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
  body: {
    // paddingTop: 20,
    // paddingBottom: 50,
    paddingHorizontal: 10,
  },
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    // marginRight: "auto", // Add this line
    // marginLeft: "auto", // Add this line
    left : 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  mainHeading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#386BC0",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "normal",
    marginBottom: 10,
  },
  section: {
    marginBottom: 10,
  },
  attribute: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  attributeLabel: {
    fontWeight: "normal",
    marginRight: 5,
    fontSize: 16,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  attributeValue: {
    color: "grey",
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  websiteName: {
    position: "absolute",
    top: 23,
    right : 0,
    fontSize: 12,
    color: "grey",
    marginTop: 10,
  },
});

// const MyDoc = () => (
//   <Document>
//     <Page style={styles.page}>
//       <View style={styles.body}>

//         <Text style={styles.title}>Report</Text>
//         <Image style={styles.image} src={logo} />
//         <Text style={styles.text}>
//           <ul>
//             <li>hero</li>
//           </ul>
//         </Text>
//         <Text
//           style={styles.pageNumber}
//           render={({ pageNumber, totalPages }) =>
//             `${pageNumber} / ${totalPages}`
//           }
//           fixed
//         />
//       </View>
//     </Page>
//   </Document>
// );

const MyDoc = ({ userData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.body}>
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} />
          <View>
            <Text style={styles.mainHeading}>Heart Health Report</Text>
            <Text style={styles.websiteName}>www.healthcareheart.com</Text>
          </View>
        </View>
        <View style={styles.line} />
        <Text style={styles.heading}>Patient Information</Text>
        <View style={styles.section}>
          <View style={styles.attribute}>
            <Text style={styles.attributeLabel}>Name:</Text>
            <Text style={styles.attributeValue}>{userData.name}</Text>
          </View>
          <View style={styles.attribute}>
            <Text style={styles.attributeLabel}>Age:</Text>
            <Text style={styles.attributeValue}>{userData.age} years</Text>
          </View>
          <View style={styles.attribute}>
            <Text style={styles.attributeLabel}>Gender:</Text>
            <Text style={styles.attributeValue}>{userData.gender}</Text>
          </View>
          <View style={styles.attribute}>
            <Text style={styles.attributeLabel}>Date:</Text>
            <Text style={styles.attributeValue}>{userData.date}</Text>
          </View>
          <View style={styles.attribute}>
            <Text style={styles.attributeLabel}>Time:</Text>
            <Text style={styles.attributeValue}>{userData.time}</Text>
          </View>
        </View>
        <View style={styles.line} />
        <Text style={styles.heading}>Medical Parameters</Text>
        <View style={styles.section}>
          {Object.entries(userData.parameters).map(([label, value]) => (
            <View style={styles.attribute} key={label}>
              <Text style={styles.attributeLabel}>{label}:</Text>
              <Text style={styles.attributeValue}>{value}</Text>
            </View>
          ))}
        </View>
        <View style={styles.line} />
        <View style={styles.section}>
          <Text style={styles.title}>Conclusion</Text>
          <Text style={styles.subtitle}>Based on our analysis :</Text>
          <Text style={styles.subtitle}>
          {userData.name}'s heart health appears to be within normal ranges for his
            age and gender. However, further evaluation and monitoring may be
            recommended by a healthcare professional to ensure optimal heart
            health.
          </Text>
        </View>
        <View style={styles.line} />
        <View style={styles.section}>
          <Text style={styles.title}>Additional Recommendations</Text>
          <Text style={styles.subtitle}>
            - Maintain a healthy lifestyle with regular exercise and a balanced
            diet.
          </Text>
          <Text style={styles.subtitle}>
            - Follow up with a healthcare provider for routine check-ups and
            screenings.
          </Text>
          <Text style={styles.subtitle}>
            - Avoid smoking and excessive alcohol consumption.
          </Text>
          <Text style={styles.subtitle}>
            - Manage stress through relaxation techniques and adequate sleep.
          </Text>
        </View>
        <View style={styles.line} />
        <View style={styles.section}>
          <Text style={styles.title}>Note:</Text>
          <Text style={styles.subtitle}>
            This report is for informational purposes only and should not
            replace professional medical advice. Please consult a healthcare
            provider for personalized diagnosis and treatment.
          </Text>
        </View>
      </View>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);

export default MyDoc;

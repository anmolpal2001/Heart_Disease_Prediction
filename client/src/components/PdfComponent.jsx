import React from "react";
import {
  Page,
  Document,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import logo from "../assets/logo.png";
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 20, //added
  },
  title: {
    position: "absolute",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20, //added
  },
  text: {
    // margin: 12, // removed
    fontSize: 14,
    textAlign: "justify",
    marginBottom: 10, //added
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  // header: {
  //   fontSize: 12,
  //   marginBottom: 20,
  //   textAlign: "center",
  //   color: "grey",
  // },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const MyDoc = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.body}>
    
        <Text style={styles.title}>Report</Text>
        <Image style={styles.image} src={logo} />
        <Text style={styles.text}>
          <ul>
            <li>hero</li>
          </ul>
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </View>
    </Page>
  </Document>
);

export default MyDoc;

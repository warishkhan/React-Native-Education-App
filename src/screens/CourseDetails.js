import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Cards from '../api/Cards';


const CourseDetails = ({navigation,route}) => {
    const id = route.params.id;
    // console.log(id);
    const selectedCourse = Cards.find((element)=>{
        return id === element.id;
    })
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={selectedCourse.image}
            resizeMode="contain"
            style={styles.images}
          />
          <Text style={styles.titletext}>{selectedCourse.title}</Text>
          <Text style={styles.titleDesc}>{selectedCourse.description}</Text>
          <Text style={styles.titleDescs}>{selectedCourse.course1}</Text>
          <Text style={styles.titleDescs}>{selectedCourse.course2}</Text>
          <Text style={styles.titleDescs}>{selectedCourse.course3}</Text>
          <View>
            <TouchableOpacity
              style={styles.courseBtn}
              onPress={() =>
                navigation.navigate("Course")
              }
            >
              <Text style={styles.textBtn}>${selectedCourse.price}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "95%",
      shadowColor: "skyblue",
      shadowOffset: { width: 25 },
      shadowOpacity: 0.7849,
      shadowOpacity: { height: 10 },
      elevation: 5,
      marginHorizontal: 10,
      borderWidth: 0,
    },
    imageContainer: {
      width: "90%",
      borderRadius: 36,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    images: {
      width: "100%",
      aspectRatio: 1,
      height: 300,
    },
    titletext: {
      color: "skyblue",
      fontWeight: "bold",
      fontSize: 25,
      margin: 10,
    },
    titleDesc: {
      fontSize: 20,
      color: "black",
      textAlign: "center",
      color:"grey"
    },
    titleDescs:{
        color: "green",
        fontWeight: "bold",
        fontSize: 25,
    },
    textBtn: {
      textAlign: "center",
      fontWeight: "bold",
      color: "#fff",
    },
    courseBtn: {
      width: 200,
      textAlign: "center",
      backgroundColor: "skyblue",
      padding: 5,
      margin: 10,
      borderRadius: 5,
      shadowColor: "purple",
      shadowOffset: { width: 30 },
      shadowOpacity: 3.7849,
      shadowOpacity: { height: 10 },
      elevation: 10,
      marginHorizontal: 10,
      borderWidth: 0,
    },
  });

export default CourseDetails

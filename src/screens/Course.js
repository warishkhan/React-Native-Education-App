import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Cards from "../api/Cards";

const Course = ({ navigation }) => {
  const cardsItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={styles.images}
          />
          <Text style={styles.titletext}>{item.title}</Text>
          <Text style={styles.titleDesc}>{item.description}</Text>
          <View>
            <TouchableOpacity
              style={styles.courseBtn}
              onPress={() =>
                navigation.navigate("CourseDetails", { id: item.id })
              }
            >
              <Text style={styles.textBtn}>Course Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={Cards}
      renderItem={cardsItem}
    />
  );
};

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
export default Course;

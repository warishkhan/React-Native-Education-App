import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import Menu from "../component/Menu";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
      <Image resizeMode="contain" style={styles.img} source={require('../../assets/Study-area.jpg')}/>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Welcome To {props.channelName}</Text>
        <Text style={[styles.headerText,{color:'skyblue'}]}>Education App</Text>
      </View>
      <Text style={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptates quidem neque eaque suscipit porro.</Text>
      <View>
        <Menu/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    backgroundColor: "#fff",
    alignItems: "center",
    height:'100%',
    width:'auto',
    flexDirection:'column',
    marginTop:40
  },
  imgContainer:{
   borderWidth:1,
   borderColor:"black",
   width:"90%",
   height:"35%",
   borderRadius:15,
  },
  img:{
   width:'100%',
   height:"90%"
  },
  textContainer:{
   marginBottom:20,
   marginTop:20
  },
  headerText:{
    fontSize:24,
    textTransform:'uppercase',
    textAlign:'center'
  },
  desc:{
    paddingHorizontal:30,
    fontSize:20,
    marginTop:10,
    lineHeight:30
  }
});

export default Home;

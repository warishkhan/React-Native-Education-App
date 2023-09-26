import { StyleSheet, Text, View,Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.headercontainer}>
      <Text style={styles.text}>Warish Khan</Text>
      <Text style={styles.texts}>I am a Full Stack Developer</Text>
      <Image style={styles.img} source={require("../../assets/MyPic.png")} resizeMode='contain'/>  
      <View style={styles.about}>
        <Text style={{color:'#fff',fontSize:15,fontWeight:'bold',textAlign:'center',padding:10}}>About Us</Text>
        <Text style={{color:'#fff',fontSize:15,padding:20}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptates quidem neque eaque suscipit porro.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptates quidem neque eaque suscipit porro.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptates quidem neque eaque suscipit porro.</Text>
      </View> 
      <Text style={{fontSize:15,paddingTop:10,fontWeight:'bold'}}>FOLLOW ME ON SOCIAL NETWORK</Text>
      <View style={styles.social}>
       <TouchableOpacity style={styles.touch} onPress={()=>Linking.openURL("https://www.youtube.com")}>
       <Image style={styles.imgs} resizeMode='contain' source={require("../../assets/utube.png")}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.touch} onPress={()=>Linking.openURL("https://www.facebook.com")}>
       <Image style={styles.imgs} resizeMode='contain' source={require("../../assets/fb.png")}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.touch} onPress={()=>Linking.openURL("https://www.instagram.com")}>
       <Image style={styles.imgs} resizeMode='contain' source={require("../../assets/insta.png")}/>
       </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headercontainer: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color:"skyblue",
    fontSize:30,
    fontWeight:'bold',
    margin:20
  },
  texts:{
    color:"grey",
    fontWeight:'bold',
    fontSize:20
  },
  img:{
    width:150,height:150,margin:10
  },
  about:{
    backgroundColor:"skyblue"
  },
  social:{
    width:"80%",
    justifyContent:'space-around',
    flexDirection:'row',
    margin:20,
    
  },
  touch:{
    width:"100%",
  },
  imgs:{
    width:"100%",
    height:50
  }
})
export default About

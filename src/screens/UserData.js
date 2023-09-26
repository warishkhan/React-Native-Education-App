import { StyleSheet, Text, View, FlatList,Image } from "react-native";
import React, { useEffect, useState } from "react";

const UserData = () => {
  const [myData, setMyData] = useState([]);

  const getUserData = async () => {
    try {
      const res = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const data = await res.json();
      setMyData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const showUserData = ({ item }) => {
    // console.log(item);
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imgContain}>
          <Image style={styles.imageHolder} source={{uri:item.image}} resizeMode="contain"/>
        </View>
        <View style={styles.deatails}>
          <View style={styles.bioContainer}>
          <Text style={styles.bioText}>Bio-Data</Text>
          <Text style={styles.bioId}>{item.id<10 ?`#0${item.id}` : `#${item.id}`}</Text>
          </View>
          <Text style={styles.bioIds}>Name : {item.name}</Text>
          <Text style={styles.bioIds}>Email : {item.email}</Text>
          <Text style={styles.bioIds}>Phone : {item.mobile}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.headercontainer}>
      <Text style={styles.text}>List of Students</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={myData}
        renderItem={showUserData}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headercontainer: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "skyblue",
    fontSize: 25,
    padding: 10,
  },
  mainContainer:{
    display:'flex',
    alignItems:'center',
    // justifyContent:'center',
    width:350,
    height:462,
    borderRadius:5,
    shadowColor: "black",
    shadowOffset: { width: 30 },
    shadowOpacity: 0.7849,
    shadowOpacity: {height:10},
    elevation:5,
    marginHorizontal:10,
    borderWidth:0,
    marginTop:20,
    shadowRadius:3
  },
  imgContain:{
    display:'flex',
    alignItems:'center',
    // borderWidth:1,
    // borderColor:'red',
    width:350,
    height:200,
    marginTop:10
  },
  imageHolder:{
    borderRadius:100,
    width:340,
    height:180,
    margin:5,
    aspectRatio:1
  },
  deatails:{
    backgroundColor:"black",
    height:250,
    width:340
  },
  bioContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10
  },
  bioText:{
    color:"white",
    fontSize:20,
       fontWeight:"bold"
      },
      bioId:{
    fontWeight:"bold",
    color:'white'
  },
      bioIds:{
    fontWeight:"bold",
    color:'white',
    marginBottom:15,
    padding:10
  }
});
export default UserData;

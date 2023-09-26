import { StyleSheet, Text, TextInput, View ,TouchableOpacity, ScrollView} from 'react-native'
import React, { useState } from 'react'
import ExpoCheckbox from 'expo-checkbox/build/ExpoCheckbox';

const Contact = ({navigation}) => {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")
const [message, setMessage] = useState("")
const [agree, setAgree] = useState(false)

const submit = ()=>{
  if (name === "" || email ===""|| phone===""){ alert("Please fill all fields")}  else{
    alert(`Thank you ${name}, we will get back to you soon`);
    navigation.navigate("Home")
  }
}

  return (
    <ScrollView>
    <View style={styles.main}>
      <Text style={styles.header}>Level Up Your Knowledge</Text>
      <Text style={styles.headerInfo}>You can Reach Us anytime via WarTech@war.com</Text>
      <View style={styles.textInput}>
        <Text style={styles.labels}>Enter Your Name</Text>
        <TextInput style={styles.inputCon} placeholder='WarTech' value={name} onChangeText={(name)=>setName(name)}/>
      </View>
      <View style={styles.textInput}>
        <Text style={styles.labels}>Enter Your Email</Text>
        <TextInput style={styles.inputCon} placeholder='WarTech@war.com' value={email} onChangeText={(email)=>setEmail(email)}/>
      </View>
      <View style={styles.textInput}>
        <Text style={styles.labels}>Enter Your Phone</Text>
        <TextInput style={styles.inputCon} placeholder='1234567890' value={phone} onChangeText={(phone)=>setPhone(phone)}/>
      </View>
      <View style={styles.textInput}>
        <Text style={styles.labels}>How can we help you?</Text>
        <TextInput style={styles.inputCon} placeholder='write here' numberOfLines={5} multiline={true}
          value={message} onChangeText={(message)=>setMessage(message)}
        />
      </View>
      <View style={
        {flexDirection: "row", justifyContent:"space-between",width:300}} >
        <ExpoCheckbox 
         value={agree} onValueChange={()=>setAgree(!agree)} color={agree ? "skyblue" : undefined}
        />
        <Text>I agree to the Terms and Conditions</Text>
      </View>
      <TouchableOpacity
      disabled={!agree}
       onPress={submit}
      style={[styles.btn,{
        backgroundColor: agree ? "skyblue" : "grey"
      }]}
       >
        <Text style={{color:'#fff',fontSize:20,textAlign:'center',padding:5}} >Submit</Text>
      </TouchableOpacity>
      
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  main:{
    display:"flex",
    // justifyContent: "center",
    alignItems:'center',
  },
  header:{
    fontSize : 20 ,
    color :"#3498db",
    fontWeight:'bold',
    margin:10
  },
  headerInfo:{
    fontSize : 15 ,
    color :"grey",
    marginBottom:10
  },
  textInput:{
    width:"100%"
  },
  labels:{
    marginHorizontal:15
  },
inputCon:{
  borderWidth: .7,
  borderColor: "#ccc",
  lineHeight:1,
  padding:10,
  margin:15
},
btn:{
  backgroundColor:"skyblue",
  width:300,
  marginTop:15,
  borderRadius:10
}
})

export default Contact

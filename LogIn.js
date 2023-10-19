import React, { useState,useEffect } from "react";
import { Button, TextInput, View, StyleSheet, Text, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

export default function LogIn() {

  const [adminAddress, setAdminAddress] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const navigation = useNavigation();
  const route = useRoute();
  const paramName = route.params.name;


  // const condition=()=>{
  //   if(props.route.params==='user'){
  //     return (<Text>If you are new, Click Me to Register!</Text>);
  //   }
  // }

  // useEffect(() => {
  //   setAdminAddress("");
  //   setAdminPassword("");
  // }, [setAdminAddress,setAdminPassword]);

  const NavigateRoute = () => {
    navigation.navigate('SignUp');
  }


  const UserDashB = () => {

    // console.log('hi');
    //console.log('paramName:', paramName);
    // console.log('adminAddress:', adminAddress);
    // console.log('adminPassword:', adminPassword);

    if (paramName === 'admin') {
      if (adminAddress === 'Admin@gmail.com' && adminPassword === 'Admin') {
        navigation.navigate('AdminDashboard');
      } else {
        Alert.alert('Incorrect Email or Password! Kindly enter correct email and password.');
      }
    }

    if (paramName === 'user') {
      if (adminAddress === 'User@gmail.com' && adminPassword === 'User') {
        navigation.navigate('UserDashboard');
      } else {
        Alert.alert('Incorrect Email or Password! Kindly enter correct email and password.');
      }
      
    }

    setAdminAddress("");
    setAdminPassword("");
  }
  return (
    <View style={styles.extremeOuterView}>
      <Text style={styles.title}> {paramName} LogIn </Text>
      <TextInput style={styles.input} value={adminAddress} placeholder="Enter your gmail" onChangeText={(text) => { setAdminAddress(text) }} />
      <TextInput style={styles.input} value={adminPassword} placeholder="Enter your password" onChangeText={(text) => { setAdminPassword(text) }} />

      <View style={styles.button}>
        <Button title="LogIn" onPress={UserDashB} />
      </View>

      {paramName === 'user' &&
        <Pressable
          style={({ pressed }) => [{ backgroundColor: pressed ? 'white' : 'yellow' }, styles.pressable]}
          onPress={() => NavigateRoute()}
        >

          <Text
            style={styles.register
            }>New here? Click to SignUp!</Text>

        </Pressable>}

      {/* {condition} */}
    </View>
  );


}


const styles = StyleSheet.create({
  input: {
    //   backgroundColor: 'black',
    //   textShadowColor: 'white'
    height: 40,
    marginHorizontal: 50,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
  pressable: {
    marginHorizontal: 100
  },
  button: {
    borderColor: "blue",
    borderWidth: 2,
    marginHorizontal: 120,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'black',
    marginVertical: 24,
    textAlign: 'center'
  },
  extremeOuterView: {
    backgroundColor: '#F0E68C',
    flex: 1
  },
  register: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '400',
  },


  // mainView:{
  //         backgroundColor: '#FFFF00',

  // },
});

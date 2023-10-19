import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet, Text, ActivityIndicator, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config/firebase";



export default function SignUp(props) {

  // const [inputName, setInputName] = useState("");
  // const [loader, setLoader] = useState(false);


  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");


  const navigation = useNavigation();

  //functions inside this main function, above the render.


  // constructor(){ 
  //   super();
  //   state = {

  //     isLoading: false
  //   } 
  // }

  const NavigateRoute = () => {

    navigation.navigate('LogIn', { name: 'user' });


  }
  const SignUp = async () => {
    // const xyz = 
    try {
      await createUserWithEmailAndPassword(auth, inputEmail, inputPassword)
    
      if (auth?.currentUser?.email) {
        Alert.alert('Congratulations!', 'You have successfully created an account...',
          [
            { text: 'OK' },
          ]);
      }
      navigation.navigate('LogIn', { name: 'user' })
    } catch (error) {
      console.log("error is ", error);
    }
    // console.log(xyz); 
    //console.log(xyz._tokenResponse.email);
    // console.log(auth.currentUser.email);

  };

  // const registerUser = () => {
  //   if (inputEmail === '' && inputPassword === '' && inputName === '') {
  //     Alert.alert('Enter details to signup!')
  //   } else {
  //     setLoader({
  //       isLoading: true,
  //     })
  //     auth
  //       // .auth()
  //       .createUserWithEmailAndPassword(inputEmail, inputPassword)
  //       .then(userCredentials => {
  //         const user = userCredentials.user;
  //         console.log(user.inputEmail);
  //         console.log('User registered successfully!');
  // setState({
  //   isLoading: false,
  //   displayName: '',
  //   email: '', 
  //   password: ''
  // })
  //   setLoader (false);
  //   setInputName ('');
  //   setInputEmail('');
  //   setInputPassword('');
  //   NavigateRoute();
  // })
  // .catch(error => alert(error.message))
  // .finally(() => setLoader(false));
  //   }
  // }



  // if (loader) {
  //   return (
  //     <View style={styles.preloader}>
  //       <ActivityIndicator size="large" color="#9E9E9E" />
  //     </View>
  //   );
  // }




  // const [userData, setUserData] = useState({
  //   inputName: "",
  //   inputEmail: "",
  //   inputPassword: "",
  // });


  // const  = (addData) => {
  //   const newUser = {
  //     inputName: inputName,
  //     inputEmail: inputEmail,
  //     inputPassword: inputPassword,
  //   };
  //   setUserData((prevUserData) => [...prevUserData, newUser]);
  //   setInputName(" "); // Clear the input field
  //   setInputEmail(" "); // Clear the input field
  //   setInputPassword(" "); // Clear the input field
  // };



  // registerUser = () => {
  //   if(this.state.email === '' && this.state.password === '') {
  //     Alert.alert('Enter details to signup!')
  //   } else {
  //     this.setState({
  //       isLoading: true,
  //     })
  //     firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(this.state.email, this.state.password)
  //     .then((res) => {
  //       res.user.updateProfile({
  //         displayName: this.state.displayName
  //       })
  //       console.log('User registered successfully!')
  //       this.setState({
  //         isLoading: false,
  //         displayName: '',
  //         email: '', 
  //         password: ''
  //       })
  //       this.props.navigation.navigate('Login')
  //     })
  //     .catch(error => this.setState({ errorMessage: error.message }))      
  //   }
  // }
  // render() {
  //   if(this.state.isLoading){
  //     return(
  //       <View style={styles.preloader}>
  //         <ActivityIndicator size="large" color="#9E9E9E"/>
  //       </View>
  //     )
  //   } 
  // }




  // const registerUser = async () => {
  //   if (inputName === '' || inputEmail === '' || inputPassword === '') {
  //     Alert.alert('Please fill in all fields');
  //     return;
  //   }

  //   try {
  //     const userCredentials = await createUserWithEmailAndPassword(auth, inputEmail, inputPassword);
  //     const user = userCredentials.user;
  //     console.log('User registered successfully!', user.email);

  //     // Add code here to save user data to Firestore (Step 3)
  //     await addDoc(collection(firestore, 'users'), {
  //       name: inputName,
  //       email: inputEmail,
  //     });


  //     navigation.navigate('LogIn'); // Move to LogIn screen after successful signup
  //   } catch (error) {
  //     console.error('Error registering user:', error.message);
  //     Alert.alert('Error registering user:', error.message);
  //   }
  // }






  // UI
  return (
    <View style={styles.extremeOuterView}>
      <Text style={styles.title}>User SignUp</Text>

      {/* <TextInput 
       value={inputName}
       onChangeText={(text) => setInputName(text)}
       style={styles.input}
       placeholder="Enter your name" /> */}



      <TextInput
        value={inputEmail}
        onChangeText={(text) => setInputEmail(text)}
        style={styles.input}
        placeholder="Enter unique address"
      />
      <TextInput
        value={inputPassword}
        onChangeText={(text) => setInputPassword(text)}
        style={styles.input}
        placeholder="Create unique password"
        secureTextEntry={true}
      />
      <View style={styles.button}>
        <Button title="SignUp" onPress={SignUp} />
      </View>
      <Text
        style={styles.loginText}
        onPress={() => NavigateRoute()}>
        Already Registered? Click here to login
      </Text>
    </View>
  );
};





//Styling
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 50,
    marginVertical: 10
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
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  }
});
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NestedJSON from "./NestedJSON";

const Ap = () => {


  const jsonData = {
    student1: {
      firstName: "hello",
      lastName: "world",
      contact_info: {
        email: "alice.j@example.com",
        phone: "+1 (555) 987-6543",
        address: {
          street: "456 Elm Street",
          city: "Smallville",
          state: "NY",
          zip_code: "54321"
        }
      }
    },
    student2: {
      firstName: "hello",
      lastName: "world",
      contact_info: {
        email: "bob@example.com",
        phone: "+1 (555) 123-4567",
        address: 'abcxyz'
      }
    },
    student3: {
      name: 'hello',
      lastName: "world",
      email: "bob@example.com",
      phone: "+1 (555) 123-4567"
    },

    student4: {
      firstName: "hello"
    }
  };


  return (
    <View style={styles.outerContainer}>
    <Text style={styles.title}>Student Record</Text>
      <View style={styles.buttonView}>

        {

          Object.entries(jsonData).map(([key, value]) => (
            <NestedJSON key={key} name={key} data={value} />
          ))

        }

      </View>
    </View>
  )
}

export default Ap;




const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  outerContainer: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  title: {
      fontSize: 24,
      fontWeight: "bold",
      color: 'black',
      marginVertical: 24,
      textAlign: 'center',
      borderWidth:2,
      marginHorizontal:90,
      borderRadius:10
  },
});
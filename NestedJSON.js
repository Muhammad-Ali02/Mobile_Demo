import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const NestedJSON = ({ customKey,name, data }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDown = () => {
        setIsOpen(!isOpen);
    }

    const RenderChildren = () => {
        return Object.entries(data).map(([key, value]) => Child(key, value));
    };

    const Child = (key, value) => {

        if (typeof value === 'object') {
            return(
            <NestedJSON customKey={key} name={key} data={value} />
            );
        }
        return(
        <Text>{`${key} ${value}`}</Text>
        );
    }

    return (
        <View style={styles.buttonView}>
            {
                (typeof data === 'object') ?
                    (<Button onPress={toggleDown} title={`${name}  ${isOpen ? '↑' : '↓'}`} />)
                    : <Text>{`${name} : ${data}`}</Text>
            }
            {
                isOpen ? RenderChildren() : null
            }
        </View>
    )
}


export default NestedJSON;



const styles =  StyleSheet.create({
    buttonView:{
        borderWidth:3,
        marginVertical:5,
        marginHorizontal:2,
        backgroundColor: 'white'
    }
});
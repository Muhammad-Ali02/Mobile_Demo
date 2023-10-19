import { View, Text, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Catagory() {

    // const [user, setUser] = useState(false);
    const navigation = useNavigation();

    const NavigateRoute = (name) => {
        if (name === 'admin') {
            // setUser(false);
            navigation.navigate('LogIn', { name: 'admin' });

        } else if (name === 'user') {
            // setUser(true);
            navigation.navigate('LogIn', { name: 'user' });
        } else {
            navigation.navigate('APiData');
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Select Catagory </Text>
            <View style={styles.button}>
                <Button
                    title="I am Admin"
                    onPress={() => NavigateRoute('admin')}
                />
            </View>
            <View style={styles.buttonOne}>
                <Button title="I am User"
                    onPress={() => NavigateRoute('user')}
                />
            </View>
            <View style={styles.apiButton}>
                <Button title="API Data"
                    name='api'
                    onPress={() => NavigateRoute('api')}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    button: {
        borderColor: "blue",
        borderWidth: 2,
        marginHorizontal: 80,
        marginVertical: 10,

    },
    buttonOne: {
        borderColor: "blue",
        borderWidth: 2,
        marginHorizontal: 80,
        marginVertical: 10,
        paddingHorizontal: 7

    },
    apiButton: {
        borderColor: "blue",
        borderWidth: 2,
        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 10

    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: 'black',
        marginVertical: 24,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0E68C'
    },
});
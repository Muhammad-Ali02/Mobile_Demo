import { Button, View,Text,StyleSheet } from "react-native";

export default function AdminDashboard(){
    return(
        <View style={styles.outerView}>
            <Text style={styles.text}>Want to see and manipulate with the users logged in yet?</Text>
            <Button title="CLICK ME" />
        </View>
    );
}


const styles=StyleSheet.create({
    outerView:{
        flex: 1,
        // flexDirection: 'row',
        backgroundColor: 'yellow'
    },
    text:{
        fontSize:16,
        marginVertical:15,
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: '300'
    }
});
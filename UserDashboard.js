import { View,Text,StyleSheet } from "react-native";

export default function UserDashboard(){
    return(
        <View style={styles.outerView}>
            <Text style={styles.text}>Wellcome to the HOME SCREEN!</Text>
           
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
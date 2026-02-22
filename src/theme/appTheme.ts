import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "../commons/constants";

export const styleGlobal = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PRIMARY_COLOR,
        gap: 50,
    },
    title: {
      fontSize: 40,
      textAlign: 'center',
      width: "100%"
    },
    button:{
      borderRadius: 8,
      backgroundColor: SECONDARY_COLOR,
      paddingHorizontal: 16,
      paddingVertical: 6
    }, 
    image:{
      width: 250,
      height: 300
    },
    buttonText:{
      fontSize: 20
    },
    input:{
        backgroundColor: TERTIARY_COLOR,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical: 7  
    }
})
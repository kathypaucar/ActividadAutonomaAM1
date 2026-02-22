import { StyleSheet } from "react-native";

export const styleGlobal = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#59949C',
        gap: 50,
    },
    title: {
      fontSize: 40,
      textAlign: 'center',
      width: "100%"
    },
    button:{
      borderRadius: 8,
      backgroundColor: 'white',
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
        backgroundColor: '#f1f4f5',
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical: 7  
    },
    containerBody: {
        backgroundColor: '',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 40
    }
})
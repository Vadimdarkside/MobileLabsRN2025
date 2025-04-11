import { StyleSheet } from "react-native";
import { Button } from "react-native-web";
const styles = StyleSheet.create(
    {
        containerLogo: {
            flexDirection:'row',
            padding:10,  
          },
        containerLogoText:{
            flex:1,
            justifyContent:"center",
            alignItems: 'center'
        },
        logoText: {
            fontFamily: 'monospace',
            fontSize: 28,
            fontWeight: "bold",
            color: "#222", 
            letterSpacing: 1.5,
            textShadowColor: 'rgba(0, 0, 0, 0.2)',
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 2,
          },
        bigText:{
            fontSize: 30,
            fontWeight: "bold",
        },
        grid: {
            padding:10,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around', 
          },
        gridItem: {
        width: '48%',
        aspectRatio: 1, 
        marginBottom: 10,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        },
        input:{
            marginHorizontal:10,
            borderColor:"gray",
            borderWidth:1,
            paddingHorizontal:10,
        },
        button:{
            alignItems:"center",
            backgroundColor:"#3498db",
            paddingVertical:12,
            paddingHorizontal:20,
            borderRadius:8,
        },
        buttonPressed:{
            backgroundColor:"blue",
        },
        buttonText:{
            color:"#fff",
            fontSize:18,
            fontWeight:"bold",
        }      
    }
);
export default styles;
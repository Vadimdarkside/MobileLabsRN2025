import { StyleSheet } from "react-native";
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
        }
    }
);
export default styles;
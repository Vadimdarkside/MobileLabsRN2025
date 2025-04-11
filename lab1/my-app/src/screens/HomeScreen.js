import { View, Text } from "react-native"
import styles from "../../styles"
import News from "../components/News"
const HomeScreen = ()=>{
    return(
       <>
         <View style={[{alignItems:"center",paddingBlock:20}]}>
            <Text style={styles.bigText}>Home</Text>
         </View>
        <News/>
       </>
    )
}
export default HomeScreen;
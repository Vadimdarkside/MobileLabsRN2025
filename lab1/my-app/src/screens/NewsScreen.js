import { View, Text } from "react-native"
import NewsList from "../components/NewsList";
import styles from "../../styles";
const NewsScreen = ()=>{
    return(
        <View style={[{alignItems:"center",paddingBlock:20}]}>
            <Text style={styles.bigText}>News</Text>
            <NewsList/>
        </View>
    )
}

export default NewsScreen;
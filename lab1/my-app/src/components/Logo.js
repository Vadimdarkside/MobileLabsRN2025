import {Text, View, Image} from "react-native";
import styles from "../../styles"
const Logo = () => {
  return (
    <View style={styles.containerLogo}>
      <View>
        <Image source={require('../../assets/7.jpg')} style={{width:120, height:120}}></Image>
      </View>
      <View style={styles.containerLogoText}>
        <Text style={styles.logoText}>BondarApp</Text>
      </View>
    </View>
  )
}

export default Logo

import {Text, View, Image} from "react-native";
import styles from "../../styles"
import { FlatList } from "react-native";
const items = [1,2,3,4,5,6,7,8,9,10]
const NewsList = () => {
  return (
    <View style={styles.grid}>
      {items.map((item, index) => (
          <Image style={styles.gridItem} source={require('../../assets/7.jpg')}></Image>
      ))}
    </View>
  //   <FlatList
  //   style={{width:"100%"}}
  //   data={items}
  //   renderItem={(item) => (
  //     <View style={{backgroundColor:"red",}}>
  //       <Image style={{width:120, height:120}} source={require('../../assets/7.jpg')}></Image>
  //     </View>
  //   )}
  //   numColumns={2}
  // />
  )
}

export default NewsList
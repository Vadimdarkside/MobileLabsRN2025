import { View, Text, Image } from "react-native"


const SingleNewsBlock=()=>{
    return(
        <>
            <View style={{padding:20,backgroundColor:"white", flexDirection:"row"}}>
                <View >
                    <Image source={require('../../assets/7.jpg')} style={{width:120, height:120}}></Image>
                </View>
                <View style={{flex:1, paddingHorizontal:20}}>
                    <Text style={{fontSize:20, fontWeight:"bold"}}>Заголовок</Text>
                    <Text style={{fontSize:13}}>Дата</Text>
                    <Text style={{fontSize:16}}>Короткий текст новини</Text>
                </View>
            </View>
        </>
    )
}
export default SingleNewsBlock;
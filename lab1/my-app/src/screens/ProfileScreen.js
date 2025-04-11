import { View, Text, TextInput } from "react-native"
import styles from "../../styles";
import { Pressable } from "react-native";
const ProfileScreen = ()=>{
    return(
        <>
            <View style={[{alignItems:"center",paddingBlock:15}]}>
                <Text style={styles.bigText}>Sign up</Text>
            </View>
            <View style={{padding:15}}>
                <Text style={{fontSize:15,padding:5}}>Em@il:</Text>
                <TextInput style={styles.input} keyboardType="email-address"></TextInput>
                <Text style={{fontSize:15,padding:5}}>Password:</Text>
                <TextInput style={styles.input} secureTextEntry={true}></TextInput>
                <Text style={{fontSize:15,padding:5}}>Password(again):</Text>
                <TextInput style={styles.input} secureTextEntry={true}></TextInput>
                <Text style={{fontSize:15,padding:5}}>Name:</Text>
                <TextInput style={styles.input} ></TextInput>
                <Text style={{fontSize:15,padding:5}}>Last Name:</Text>
                <TextInput style={styles.input} ></TextInput>
                <Pressable style={({pressed})=>
                    [styles.button,
                    {margin:10},
                    pressed && styles.buttonPressed
                    ]}> 
                    <Text style={styles.buttonText}>Sign up</Text>
                </Pressable>
            </View>
        </>
    )
}
export default ProfileScreen;

import { StyleSheet, Text} from "react-native"
import styled from "styled-components";
import { LinearGradient } from 'expo-linear-gradient';

const MiniText = styled.Text`
font-size:15px;
opacity: 0.6;
color: #7B8D9D;
`;

const CodeText = styled.Text`
font-size:50px;
color: white;
font-weight: bold;
font-family: Gilroy;
font-weight: 700;
font-size: 54px;
letter-spacing: 5.52px;

`;

const ProgressBarBox = styled.View`
margin-top: 10px;
width: 50%;
border-radius: 10px;
height: 8px;
background-color:#1C202C;

`;

const ProgressBarLine = styled.View`
width: 60%;
border-radius: 10px;
padding: 3px;
background-color:#31BCFC;
border: #31BCFC;
`;

const GradientBoxSafety = ({ children, style, ...props }) => {
    return (
        <LinearGradient 
        colors={[
            '#303649', 
            '#282D3D', 
            '#232734', 
            '#1F232F', 
            '#1C202C'
          ]}
          locations={[0, 0.25, 0.5, 0.75, 1]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: -0.1 }}
        style={styles.gradient}
        >
            <MiniText>
                Logged in as Player
            </MiniText>
            <CodeText>N5KCV</CodeText>
            <ProgressBarBox>
                <ProgressBarLine></ProgressBarLine>
            </ProgressBarBox>
        </LinearGradient>
    );
  };
  
  const styles = StyleSheet.create({
    gradient: {
      paddingTop:50,
      paddingBottom:40,
      width: '100%',
      padding: 25,
      paddingBlockStart:40,
      justifyContent:"center",
      alignItems:"center"
    },
  });

export default GradientBoxSafety

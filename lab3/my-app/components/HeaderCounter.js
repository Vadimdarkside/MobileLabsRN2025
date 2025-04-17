import { View, Text,Button } from "react-native"
import styled from "styled-components"

const HeaderCounter = () => {
  return (
    <Box>
        <MainImage source={require("../assets/pes.jpg")}></MainImage>
        <View style={{width: "55%"}}>
            <ViewRowLeft>
                <LabelText>Рахунок:</LabelText>
            </ViewRowLeft>
            <ViewRowRight>
                <ScoreText>937440</ScoreText>
            </ViewRowRight>
            <ViewRowRight>
                <LabelTextMini>Мертвої русні</LabelTextMini>
            </ViewRowRight>
        </View>
    </Box>
  )
}

export default HeaderCounter

const Box = styled.View`
height: auto;
flex-direction: row;
`;
const MainImage = styled.Image`
width: 45%;
height: 200px;
`;
const LabelText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color:rgb(147, 129, 129);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 5px;
`;

const LabelTextMini = styled(LabelText)`
  font-size: 15px
`;

const ScoreText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
  background-color: #1e1e1e;
  padding: 10px 20px;
  border-radius: 12px;
  text-align: right;
  letter-spacing: 2px;
`;


const ViewRowLeft = styled.View`
padding: 15px;
padding-bottom: 5px;
flex-direction: row;
`;
const ViewRowRight = styled.View`
padding: 10px;
flex-direction: row;
justify-content: flex-end;
`;
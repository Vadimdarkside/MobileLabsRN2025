
import { View, Text, Image, FlatList, Pressable } from "react-native"
import styled from "styled-components";

const StyledButtons = styled.Pressable`
margin-top: 20px;
flex-direction: row;
padding: 2px;
background-color: #303649;
border-radius: 10px;
`;

const Button = styled(Pressable)`
padding: 5px;
flex-direction: row;
justify-content: center;
background-color: ${(props)=>(props.selected?"#1C202C":"#303649")};
flex: 0.5;
border-radius: 10px;
`;

const StyledText = styled.Text`
color: white;
font-size: 16px;
opacity: ${(props)=>(props.selected?1:0.5)};
`;

const DoubleButton = ({title1,title2,selectFirst,selectSecond}) => {

  return (
    <StyledButtons>
        <Button selected={selectFirst}>
          <StyledText selected={selectFirst}>{title1}</StyledText>
        </Button>
        <Button selected={selectSecond}>
          <StyledText selected={selectSecond}>{title2}</StyledText>
        </Button>
   </StyledButtons>
  )
}

export default DoubleButton

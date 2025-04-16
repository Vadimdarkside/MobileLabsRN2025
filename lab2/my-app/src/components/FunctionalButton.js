
import { View, Text, Image, FlatList } from "react-native"
import styled from "styled-components";

const Button = styled.Pressable`
padding: 15px 15px;
background-color: #303649;
border-radius: 5px;
flex-direction: row;
justify-content: space-between;
margin-top: 5px;
`;

const StyledText = styled.Text`
color: white;
font-family: ABeeZee;
font-weight: 400;
font-size: 16px;
line-height: 22px;
letter-spacing: -0.32px;

`;

const Arrow = styled.Image`
width: 25px;
height: 25px;
`;

const FunctionalButton = ({title,...props}) => {
  return (
    <Button {...props}>
        <StyledText>{title}</StyledText>
        <Arrow source={require("../../assets/next.png")}></Arrow>
   </Button>
  )
}

export default FunctionalButton


import { View, Text, Image, FlatList } from "react-native"
import styled from "styled-components";

const StyledButton = styled.Pressable`
padding: 8px 15px;
background-color: ${(props)=>(props.selected?"#31BCFC":"#303649")};
border-radius: 10px;
`;

const StyledText = styled.Text`
color: white;
font-size: 16px;
`;

const Button = ({data,...props}) => {
  return (
   <StyledButton selected={data.id==1?true:false}>
        <StyledText>{data.title}</StyledText>
   </StyledButton>
  )
}

export default Button

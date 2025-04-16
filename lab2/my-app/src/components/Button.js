
import { View, Text, Image, FlatList } from "react-native"
import styled,{useTheme} from "styled-components";

const StyledButton = styled.Pressable`
padding: 8px 15px;
background-color: ${(props)=>(props.selected?"#31BCFC":props.theme.colorButton)};
border-radius: 10px;
`;

const StyledText = styled.Text`
color: white;
font-size: 16px;
`;

const StyledImage = styled.Image`
width: 25px;
height: 25px;
`;

const Button = ({data,imgButton, imgPath,...props}) => {
  const theme = useTheme();
  return (
    <StyledButton {...props} selected={!imgButton && data.id === 1}>
        {imgButton?<StyledImage source={imgPath}></StyledImage>:null}
        {!imgButton&&<StyledText>{data.title}</StyledText>}
   </StyledButton>
  )
}

export default Button

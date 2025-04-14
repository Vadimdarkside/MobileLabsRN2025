import { View, Text, Image } from "react-native"
import styled from "styled-components";



const GameCardContainer = styled.View`
border-radius: 20px;
 position: relative;
 width: 350px;
 height: 300px;
 overflow: hidden;
`;

const GameCardImage = styled(Image)`
position: absolute;
width: 120%;
height: 100%;
z-index: 20;
`;

const GameCardTextContainer = styled.View`
position: absolute;
padding: 15px;
z-index: 21;
bottom: 0;
left: 0;
right: 0;


`;

const GameCardTextH1 = styled.Text`
margin-bottom: 7px;
color: white;
font-size: 20px;
font-family: 'Gill Sans';
font-weight: bold;
`;
const GameCardTextP = styled.Text`
margin-bottom: 7px;
color: white;
font-size: 13px;
`;
const CardDiscountContainer = styled.View`
flex-direction: row;
`;
const DiscountText = styled.Text`
color:white;
background-color: #000000A4;
padding: 4px;

padding-left: 5px;
`;
const DiscountTextGreen = styled(DiscountText)`
background-color: #00D44B80;
`;
const DiscountTextCrossed = styled(DiscountText)`
text-decoration-line: line-through;
`;
const WindowsLogo = styled(Image)`
position: absolute;
z-index: 22;
width: 20px;
height: 20px;
bottom: 5%;
right: 4%;
`;


const GameCard = ({title,...props}) => {
  return (
    <GameCardContainer>
        <GameCardImage source={require('../../assets/game1.png')}/>
        <GameCardTextContainer>
          <GameCardTextH1>{title}</GameCardTextH1>  
          <GameCardTextP>Recommended by your friend Player</GameCardTextP>  
          <CardDiscountContainer>
              <DiscountTextGreen>-70%</DiscountTextGreen>
              <DiscountTextCrossed>$18%</DiscountTextCrossed>
              <DiscountText>$5</DiscountText>
          </CardDiscountContainer>
        </GameCardTextContainer>
        <WindowsLogo source={require('../../assets/windowso.png')}/>
      </GameCardContainer>
  )
}

export default GameCard

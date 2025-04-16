import { View, Text, Image } from "react-native"
import styled from "styled-components";



const GameCardContainer = styled.View`
margin-top: 15px;
flex-direction: row;
width: 100%;
background-color: ${(props)=>(props.theme.name == "light"?props.theme.colorButton:null)}
`;

const GameCardImage = styled(Image)`
width: 100px;
aspect-ratio: 1.4;
border-radius: 10px;
object-fit: cover;
`;

const TextContainer = styled.View`
flex: 1;
flex-direction: row;
justify-content: space-between;
padding: 5px;
padding-left: 15px;
`;

const ViewRow = styled.View`
flex-direction: row;
align-items: center;
`;

const UpperText = styled.Text`
margin-bottom: 7px;
color: white;
font-size: 18px;
`;

const DownText = styled.Text`
color: white;
padding: 5px;
font-size: 13px;
`;

const PriceText = styled.Text`
color:white;
padding: 4px;
padding-left: 5px;
font-size: 20px;

`;
const DiscountTextGreen = styled(PriceText)`
background-color: #00D44B80;
font-size: 15px;
padding-left: 7px;
padding-right: 7px;
border-radius: 10px;
`;
const DiscountTextCrossed = styled(PriceText)`
text-decoration-line: line-through;
font-size: 14px;
`;
const WindowsLogo = styled(Image)`
width: 17px;
height: 17px;
`;


const GameMiniCard = ({data,...props}) => {
  return (
    <GameCardContainer>
        <GameCardImage source={data.img}/>
        <TextContainer>
            <View>
                <UpperText>{data.title}</UpperText>
                <ViewRow style={{opacity: 0.5}}>
                    <WindowsLogo source={require(`../../assets/windowso.png`)}/>
                    <DownText>Windows</DownText>
                </ViewRow>        
            </View>
            <View style={{alignItems:"flex-end", justifyContent:"center"}}>
                <ViewRow style={{alignItems:"flex-end"}}>
                    {data.discount && <DiscountTextCrossed>$20</DiscountTextCrossed>}
                    <PriceText>${data.price}</PriceText>
                </ViewRow>
                {data.discount && <DiscountTextGreen>-$50</DiscountTextGreen>}
            </View>
        </TextContainer>
    </GameCardContainer>
  )
}

export default GameMiniCard

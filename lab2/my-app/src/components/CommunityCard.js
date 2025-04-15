import { View, Text, Image } from "react-native"
import styled from "styled-components";
import ScreenWrapper from "./ScreenWrapper";

const CommunityCardContainer = styled.View`

`;

const ProfileImage = styled(Image)`
width: 46px;
aspect-ratio: 1;
object-fit: cover;
border-radius: 250px;
`;

const ViewRow = styled.View`
flex-direction: row;
`;

const ViewHeaderRow = styled(ViewRow)`
justify-content: space-between;
flex:1;
`;

const TextProfileName= styled.Text`
font-size: 18px;
color: white;
`;

const TextTime = styled.Text`
font-size: 13px;
opacity: 0.6;
color: white;
`;
const Dots = styled.Text`
font-size: 26px;
color: white;
opacity: 0.7;
flex: 1;
text-align: center;

`;

const NewsBlock = styled.View`
margin-left: 15px;
justify-content: center;
`;

const NewsPinkText = styled.Text`
font-size: 10px;
padding: 2px;
border-radius: 5px;
background-color:#B63DB6;
color: white;
`;

const HeaderContainer = styled.View`
flex-direction: row;
`;

const NewsImage = styled(Image)`
margin-top: 15px;
width: 100%;
height: 240px;
border-radius: 10px;
`;


const TextNewsTitle = styled(TextProfileName)`
margin-top: 10px;
font-size: 18px;
color: white;
`;

const TextNews = styled(TextProfileName)`
margin-top: 10px;
font-size: 16px;
color: white;
opacity: 0.8;
margin-bottom: 10px;
`;

const TextLikes = styled.Text`
font-size: 16px;
color: #00D44B;
`;

const TextComments = styled.Text`
font-size: 16px;
color:#4B5664;
`;

const BottomViewRow = styled(ViewRow)`
text-align: center;
justify-content: space-between;
padding: 25px 15px;
padding-bottom:5px;
`;


const BottomImage = styled(Image)`
width: 25px;
height: 25px;
`;

const CommunityCard = () => {
  return (
    <CommunityCardContainer>
      <HeaderContainer>
        <ProfileImage source={require('../../assets/community.png')}></ProfileImage>
        <ViewHeaderRow style={{ paddingLeft: 10 }}>
            <View>
                <ViewHeaderRow>
                    <TextProfileName>Eurogamer</TextProfileName>
                    <NewsBlock><NewsPinkText>NEWS</NewsPinkText></NewsBlock>
                </ViewHeaderRow>
                <TextTime>yesterday 2:20 pm</TextTime>
            </View>
            <View style={{justifyContent:"flex-start",}}>
                <Dots>...</Dots>
            </View>
        </ViewHeaderRow>
      </HeaderContainer>
        <NewsImage source={require('../../assets/game8.jpg')}></NewsImage>
        <TextNewsTitle>Florida tourist attraction sues Fortnite, seeks removal of in-game castle</TextNewsTitle> 
        <TextNews>
            Coral Castle Museum, a tourist attraction near Miami, is suing Fortnite maker Epic Games for trademark infringement and unfair competition.
        </TextNews>
        <ScreenWrapper padding="1px" color="#303649"></ScreenWrapper>
        <BottomViewRow>
            <ViewRow>
                <ViewRow style={{marginRight:10}}>
                    <BottomImage source={require('../../assets/like.png')}></BottomImage>
                    <TextLikes>324</TextLikes>
                </ViewRow>
                <ViewRow>
                    <BottomImage source={require('../../assets/chat-box.png')}></BottomImage>
                    <TextComments>12</TextComments>
                </ViewRow>
            </ViewRow>
            <BottomImage source={require('../../assets/share.png')}></BottomImage> 
        </BottomViewRow>
    </CommunityCardContainer>
  )
}

export default CommunityCard


{/* <GameCardImage source={require('../../assets/game1.png')}/>
<GameCardTextContainer>
  <GameCardTextH1>{title}</GameCardTextH1>  
  <GameCardTextP>Recommended by your friend Player</GameCardTextP>  
  <CardDiscountContainer>
      <DiscountTextGreen>-70%</DiscountTextGreen>
      <DiscountTextCrossed>$18%</DiscountTextCrossed>
      <DiscountText>$5</DiscountText>
  </CardDiscountContainer>
</GameCardTextContainer>
<WindowsLogo source={require('../../assets/windowso.png')}/> */}
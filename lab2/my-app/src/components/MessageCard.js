import { View, Text, Image } from "react-native"
import styled from "styled-components";
import ScreenWrapper from "./ScreenWrapper";

const CommunityCardContainer = styled.View`
padding: 5px;
`;

const ProfileImage = styled(Image)`
width: 55px;
height: 55px;
object-fit: cover;
border-radius: 250px;
`;

const ViewRow = styled.View`
flex-direction: row;
`;

const ViewHeaderRow = styled(ViewRow)`
justify-content: space-between;
align-items: center;
flex:1;
`;

const ViewLeft = styled.View`
justify-content: start;
padding-top: 2px;
`;


const TextProfileName= styled.Text`
font-size: 18px;
color: white;
`;

const TextMessage = styled.Text`
font-size: 13px;
opacity: 0.6;
color: white;
`;

const MessagesQuantity = styled.Text`
padding: 0px 5px;
background-color: #31BCFC;
border-radius: 20px;
font-size: 14px;
color: white;
`;


const AvatarWrapper = styled.View`
position: relative;
z-index: 20;

`;

const Online = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 14px;
  height: 14px;
  background-color: #0f0;
  border-radius: 7px;
  border: 2px solid white;
    z-index: 22;

`;



const MessageCard = ({name,message,unreadCount, online}) => {
  return (
    <CommunityCardContainer>
      <ViewRow>
        <AvatarWrapper>
            <ProfileImage source={require('../../assets/smile.png')}></ProfileImage>
            {online && <Online></Online>}
        </AvatarWrapper>
        <ViewHeaderRow style={{ paddingLeft: 10 }}>
            <ViewLeft>
                <View>
                    <TextProfileName>{name}</TextProfileName>
                </View>
                <TextMessage>{message}</TextMessage>
            </ViewLeft>
            {unreadCount && <MessagesQuantity>{unreadCount}</MessagesQuantity>}
        </ViewHeaderRow>
      </ViewRow>
    </CommunityCardContainer>
  )
}

export default MessageCard


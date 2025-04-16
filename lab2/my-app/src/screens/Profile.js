import ScreenWrapper from "../components/ScreenWrapper"
import HeaderContainer from "../components/HeaderContainer"
import styled from "styled-components"
import { View, Image, Text } from "react-native";
import FunctionalButton from "../components/FunctionalButton"

const Profile = () => {
  return (
    <ScreenWrapper style={{flex:1}} color="#1C202C">
        <Container>
          <ProfileImage source={require("../../assets/profileImage.png")}></ProfileImage>
          <NameText>Vadym Bondar</NameText>
          <NameText>IPZ-21-2</NameText>
        </Container>
        <FunctionalButton title="Settings"></FunctionalButton>
        <FunctionalButton title="Logout"></FunctionalButton>
        <></>
    </ScreenWrapper>
  )
}

export default Profile

const Container = styled.View`
margin-top: 20px;
justify-content: center;
align-items: center;
margin-bottom:20px;
`;
const ProfileImage = styled.Image`
border-radius: 200px;
margin-bottom: 25px;
`;

const NameText = styled.Text`
font-weight: 400;
font-size: 26px;
letter-spacing: -0.18px;
color: white;
`;
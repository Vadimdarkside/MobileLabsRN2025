import ScreenWrapper from "../components/ScreenWrapper"
import HeaderContainer from "../components/HeaderContainer"
import styled,{useTheme} from "styled-components"
import { View, Image, Text } from "react-native";
import FunctionalButton from "../components/FunctionalButton"
import { useState } from "react";
import Settings from "../components/Settings";

const Profile = ({toggleTheme}) => {
  const [page, setPage] = useState();
  const theme = useTheme();
  
  const goToSettings = ()=>
  {
    setPage("settings")
  }

  if(!page)
  {
    return(
      <ScreenWrapper style={{flex:1}} color={theme.colorBg}>
        <Container>
          <ProfileImage source={require("../../assets/profileImage.png")}></ProfileImage>
          <NameText>Vadym Bondar</NameText>
          <NameText>IPZ-21-2</NameText>
        </Container>
        <FunctionalButton onPress={goToSettings} title="Settings"></FunctionalButton>
        <FunctionalButton title="Logout"></FunctionalButton>
    </ScreenWrapper>
    )
  }
  else if(page==="settings")
  {
    return(
      <Settings toggleTheme={toggleTheme}></Settings>
    )
  }
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
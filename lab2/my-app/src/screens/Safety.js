import { View, Text } from "react-native"
import ScreenWrapper from "../components/ScreenWrapper"
import HeaderContainer from "../components/HeaderContainer"
import DoubleButton from "../components/DoubleButton"
import GradientBoxSafety from "../components/GradientBoxSafety"
import styled from "styled-components"
import FunctionalButton from "../components/FunctionalButton"

const Text1 = styled.Text`
color: white;
font-family: ABeeZee;
font-weight: 400;
font-size: 14px;
line-height: 22px;
letter-spacing: -0.28px;

`;

const Text2 = styled(Text1)`
color: #2FB4F1;
margin-top: 10px;
letter-spacing: -0.15px;

`;

const ButtonsContainer = styled.View`
margin-top: 25px;
`;

const Safety = () => {
  return (
    <>
      <ScreenWrapper color="#1C202C">
        <HeaderContainer title="Safety"></HeaderContainer>
        <DoubleButton selectFirst={true} title1="Guard" title2="Confirmations"></DoubleButton>
      </ScreenWrapper>
      <GradientBoxSafety></GradientBoxSafety>
      <ScreenWrapper style={{flex:1}} color="#1C202C">
        <Text1>
        You’ll enter your code each time you enter your
        password to sign in to your Steam account.
        </Text1>
        <Text2>
        Tip: If you don't share your PC, you can select "Remember my password" when you sign in to the PC client to enter your password and authenticator code less often.
        </Text2>
        <ButtonsContainer>
          <FunctionalButton title="Remove Authenticator"></FunctionalButton>
          <FunctionalButton title="My Recovery Code"></FunctionalButton>
          <FunctionalButton title="Help"></FunctionalButton>
        </ButtonsContainer>
      </ScreenWrapper>
    </>
  )
}

export default Safety

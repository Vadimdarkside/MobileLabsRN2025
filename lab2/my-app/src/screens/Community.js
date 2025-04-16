import { View, Text } from "react-native"
import ScreenWrapper from "../components/ScreenWrapper"
import HeaderContainer from "../components/HeaderContainer"
import styled,{useTheme} from "styled-components"
import ButtonsContainer from "../components/ButtonsContainer";
import CommunityCard from "../components/CommunityCard";

const buttonsObj = [
  {id:1,title:"All"},
  {id:2,title:"Screenshots"},
  {id:3,title:"Artwork"},
  {id:4,title:"Workspace"},
]

const HeaderText = styled.Text`
font-size: 15px;
color:#7B8D9D;
`;

const Community = () => {
  const theme = useTheme();
  return (
    <>
      <ScreenWrapper color={theme.colorBg}>
        <HeaderContainer title="Community"></HeaderContainer>
        <HeaderText>Community and official content for all games and software</HeaderText>
        <ButtonsContainer isSearchButton={true} data={buttonsObj}></ButtonsContainer>
      </ScreenWrapper>
      <ScreenWrapper padding="4px" color={theme.colorButton}></ScreenWrapper>
      <ScreenWrapper color={theme.colorBg}>
        <CommunityCard></CommunityCard>
      </ScreenWrapper>
      <ScreenWrapper padding="4px" color={theme.colorButton}></ScreenWrapper>
      <ScreenWrapper color={theme.colorBg}>
        <CommunityCard></CommunityCard>
      </ScreenWrapper>
    </>
  )
}

export default Community

import { View, Text, Image } from "react-native"
import ScreenWrapper from "../components/ScreenWrapper";
import styled from "styled-components";
import GameCardContainer from "../components/GameCardContainer";
import HeaderContainer from "../components/HeaderContainer";

const Store = () => {
  return (
    <ScreenWrapper color="#1C202C">
      <HeaderContainer searchIcon title="Store"></HeaderContainer>
      <GameCardContainer name="Dead by Daylight"></GameCardContainer>
    </ScreenWrapper>
  )
}

export default Store;

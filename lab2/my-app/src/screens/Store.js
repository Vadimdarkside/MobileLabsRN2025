import { View, Text, Image } from "react-native"
import ScreenWrapper from "../components/ScreenWrapper";
import styled from "styled-components";
import GameLargeCardCarousel from "../components/GameLargeCardCarousel";
import HeaderContainer from "../components/HeaderContainer";
import ButtonsContainer from "../components/ButtonsContainer";

const Store = () => {
  return (
    <ScreenWrapper color="#1C202C">
      <HeaderContainer searchIcon title="Store"></HeaderContainer>
      <GameLargeCardCarousel/>
      <ButtonsContainer></ButtonsContainer>
    </ScreenWrapper>
  )
}

export default Store;

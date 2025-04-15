import { View, Text, Image } from "react-native"
import ScreenWrapper from "../components/ScreenWrapper";
import styled from "styled-components";
import GameLargeCardCarousel from "../components/GameLargeCardCarousel";
import HeaderContainer from "../components/HeaderContainer";
import ButtonsContainer from "../components/ButtonsContainer";
import GameMiniCardList from "../components/GameMiniCardList";

const buttonsObj = [
    {id:1,title:"Top Sellers"},
    {id:2,title:"Free to play"},
    {id:3,title:"Early Access"},
    {id:4,title:"Discounts"},
]

const Store = () => {
  return (
    <ScreenWrapper color="#1C202C">
      <HeaderContainer searchIcon title="Store"></HeaderContainer>
      <GameLargeCardCarousel/>
      <ButtonsContainer data={buttonsObj}></ButtonsContainer>
      <GameMiniCardList></GameMiniCardList>
    </ScreenWrapper>
  )
}

export default Store;

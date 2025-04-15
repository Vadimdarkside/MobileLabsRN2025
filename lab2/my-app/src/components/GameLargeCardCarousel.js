import { View, Text, Image, FlatList } from "react-native"
import styled from "styled-components";
import GameLargeCard from "./GameLargeCard"
import FlatListContainer from "./FlatListContainer";

const ListData = [
  {id:1, title:"Dead by Daylight"},
  {id:2, title:"Bondar IPZ Shooter"},
  {id:3, title:"GTA 6"},
]

const GameLargeCardCarousel = () => {
  return (
    <FlatListContainer data={ListData} isHorizontal scrollEnd={true}
    renderItem={({ item }) => <GameLargeCard title={item.title}></GameLargeCard>}
    >
    </FlatListContainer>
  )
}

export default GameLargeCardCarousel;

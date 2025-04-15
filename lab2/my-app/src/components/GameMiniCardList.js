import { View, Text, Image, FlatList } from "react-native"
import styled from "styled-components";
import GameMiniCard from "./GameMiniCard"
import FlatListContainer from "./FlatListContainer";
import img2 from "../../assets/game2.png";
import img3 from "../../assets/game3.png";
import img4 from "../../assets/game4.png";
import img5 from "../../assets/game5.png";

const ListData = [
  {id:1, title:"Grand Theft Auto V", img:img2,price:10, discount:true},
  {id:2, title:"Battlefield 4", img:img3,price:35},
  {id:3, title:"Factorio", img:img4, price:7},
  {id:4, title:"Horizon Zero Down",price:38, img:img5},
  {id:5, title:"GTA 6",price:10, img:img2},
  {id:6, title:"GTA 6",price:10, img:img2},
  {id:7, title:"GTA 6",price:10, img:img2},
]

const GameMiniCardList = () => {
  return (
    <FlatListContainer data={ListData} height="365" scrollEnd={true}
    renderItem={({ item }) => <GameMiniCard data={item}></GameMiniCard>}
    >
    </FlatListContainer>
  )
}

export default GameMiniCardList;

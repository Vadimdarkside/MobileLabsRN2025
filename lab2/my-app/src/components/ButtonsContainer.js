
import { View, Text, Image, FlatList } from "react-native"
import styled from "styled-components";
import Button from "./Button";
import FlatListContainer from "./FlatListContainer";

const buttonsObj = [
    {id:1,title:"Top Sellers"},
    {id:2,title:"Free to play"},
    {id:3,title:"Early Access"},
    {id:4,title:"Discounts"},
]

const ButtonsContainer = () => {
  return (<>
        <FlatListContainer isHorizontal margintop="20" data={buttonsObj}
        renderItem={({ item }) => <Button data={item} />}
        >
        </FlatListContainer>
    </>
  )
}

export default ButtonsContainer

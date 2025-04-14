
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

const List = styled(FlatList)`
margin-top:5px;
/* background-color:red; */
padding: 5px;
max-height: 50px;
`;

const ButtonsContainer = () => {
  return (<>
        <FlatListContainer isHorizontal margintop="25px" data={buttonsObj}
        renderItem={({ item }) => <Button data={item} />}
        >
        </FlatListContainer>
    </>
  )
}

export default ButtonsContainer

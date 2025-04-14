import { View, Text, Image, FlatList } from "react-native"
import styled from "styled-components";
import GameLargeCard from "./GameLargeCard"

const ListData = [
  {id:1, title:"Dead by Daylight"},
  {id:2, title:"Bondar IPZ Shooter"},
  {id:3, title:"GTA 6"},
]

const List = styled(FlatList)`
max-height:300px; 
`;


const GameLargeCardCarousel = ({...props}) => {
  return (
    <List
        data={ListData}
        horizontal={true}
        keyExtractor={(item)=>item.id}
        contentContainerStyle={{alignItems:'center', justifyContent:"center"}}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
            <GameLargeCard title={item.title}></GameLargeCard>
        )}>

        </List>
  )
}

export default GameLargeCardCarousel;


import { useState, useEffect } from "react";
import { View, Text, Image, FlatList, ActivityIndicator } from "react-native"
import styled from "styled-components";

const Container = styled.View`
  margin-top: ${(props) => props.margintop || "0"};
  padding: ${(props) => props.padding || "0"};
  max-height: ${(props) => props.height || "350px"};
`;

const FlatListContainer = ({data,isHorizontal,scrollEnd=false,...props}) => {
  const [itemsData, setItemsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setItemsData(data);
      setLoading(false)
    },1000)
  },[])

  const InfiniteScroll = async () => {
    setLoading(true);
    setTimeout(() => {
      const newItems = Array.from({ length: 10 }, (_, i) => ({
        id: data.length + i + 1,
        title: `Game ${data.length + i + 1}`,
        price: Math.floor(Math.random() * 50),
        img: require("../../assets/game2.png"),
      }));

      setItemsData(prev => [...prev, ...newItems]);
      setLoading(false);
    }, 2000);
  }

  return (
    <Container {...props}>
      <FlatList 
        {...props}
        data={itemsData}
        horizontal={isHorizontal?true:false}
        keyExtractor={(item)=>item.id}
        // contentContainerStyle={{alignItems:'center', justifyContent:"center"}}
        ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onEndReached={scrollEnd ? InfiniteScroll : null}
        ListFooterComponent={
          loading ? <ActivityIndicator size="small" color="#aaa" /> : null
        }
        >
        </FlatList>
    </Container>
  )
}

export default FlatListContainer;

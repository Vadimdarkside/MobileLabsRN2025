
import { View, Text, Image, FlatList } from "react-native"
import styled from "styled-components";

const Container = styled.View`
  margin-top: ${(props) => props.margintop || "0px"};
  padding: ${(props) => props.padding || "0px"};
  max-height: ${(props) => props.height || "auto"};
`;

const FlatListContainer = ({data,isHorizontal,...props}) => {
  return (
    <Container {...props}>
      <FlatList 
        {...props}GameCard and FlatList universal container
        data={data}
        horizontal={isHorizontal?true:false}
        keyExtractor={(item)=>item.id}
        contentContainerStyle={{alignItems:'center', justifyContent:"center"}}
        ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >
        </FlatList>
    </Container>
  )
}

export default FlatListContainer;

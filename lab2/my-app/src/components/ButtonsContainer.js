
import { View, Text, Image, FlatList } from "react-native"
import styled from "styled-components";
import Button from "./Button";
import FlatListContainer from "./FlatListContainer";
import searchImg from "../../assets/search.png"


const ButtonsContainer = ({data, isSearchButton}) => {
  return (<>
        <FlatListContainer isHorizontal margintop="20" data={data}
        renderItem={({ item }) => <Button data={item} />}
        ListHeaderComponent={
          isSearchButton ? <Button style={{marginRight:"8"}} imgButton imgPath={searchImg} /> : null
        }
        >
        </FlatListContainer>
    </>
  )
}

export default ButtonsContainer

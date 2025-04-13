import { View, Text } from "react-native"
import styled from "styled-components"

const ScreenWrapper = styled.View`
flex:1;
background-color:${(props)=>props.color?props.color:"black"};
padding:20px;
`;

export default ScreenWrapper

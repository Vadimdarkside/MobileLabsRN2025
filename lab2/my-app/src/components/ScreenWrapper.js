import { View, Text } from "react-native"
import styled from "styled-components"

const ScreenWrapper = styled.View`
background-color:${(props)=>props.color?props.color:"black"};
padding:${(props)=>props.padding?props.padding:"20px"};
`;

export default ScreenWrapper

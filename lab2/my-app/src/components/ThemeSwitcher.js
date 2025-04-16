import { Switch, View } from "react-native";
import styled from "styled-components";

const StyledView = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const StyledText = styled.Text`
color: ${(props)=>(props.theme.colorMainText)};
font-size: 20px;
`;

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <StyledView>
        <StyledText>Change Theme(перші 2 сторінки)</StyledText>
        <Switch
        value={theme.name === "light"}
        onValueChange={toggleTheme}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={theme.name === "dark" ? "#f5dd4b" : "#f4f3f4"}
        />
    </StyledView>
  );
}
export default ThemeSwitcher
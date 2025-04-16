import { View } from "react-native"
import styled, { useTheme } from "styled-components"
import HeaderContainer from "./HeaderContainer"
import ScreenWrapper from "./ScreenWrapper"
import ThemeSwitcher from "./ThemeSwitcher"

const Settings = ({toggleTheme}) => {
    const theme = useTheme();

  return (
    <ScreenWrapper style={{flex:1}} color={theme.colorBg}>
      <HeaderContainer title="Settings"></HeaderContainer>
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme}></ThemeSwitcher>
    </ScreenWrapper>
  )
}

export default Settings

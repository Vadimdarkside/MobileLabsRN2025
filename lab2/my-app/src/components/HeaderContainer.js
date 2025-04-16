
import { View, Text, Image } from "react-native"
import styled, {useTheme} from "styled-components";

const Header = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 10px;
`;

const HeaderText = styled.Text`
color: ${(props)=>(props.theme.colorMainText)};
font-size: 28px;
`;

const LogoIcon = styled(Image)`
width: 40px;
height: 40px;
margin-right: 7px;
`;

const LogoView = styled.View`
flex-direction: row;
`;

const SearchIcon = styled(Image)`
width: 38px;
height: 38px;
`;

const HeaderContainer = ({searchIcon, title}) => {
  const theme = useTheme();
  return (
    <Header>
          <LogoView >
            {theme.name=="dark"?
            <LogoIcon source={require('../../assets/steam.png')} />:
            <LogoIcon source={require('../../assets/social.png')} />}
            <HeaderText>{title}</HeaderText>
          </LogoView>
          {searchIcon && <SearchIcon source={require('../../assets/search.png')}/>}
    </Header>
  )
}

export default HeaderContainer

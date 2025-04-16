import { View, Text } from "react-native"
import ScreenWrapper from "../components/ScreenWrapper"
import HeaderContainer from "../components/HeaderContainer"
import DoubleButton from "../components/DoubleButton"
import ChatList from "../components/ChatList"
import MessageCard from "../components/MessageCard"

const Chat = () => {
  return (
    <ScreenWrapper color="#1C202C">
        <HeaderContainer title="Chat" searchIcon></HeaderContainer>
        <DoubleButton selectFirst={true} title1="Open chats" title2="My friends"></DoubleButton>
        <ChatList></ChatList>
    </ScreenWrapper>
  )
}

export default Chat

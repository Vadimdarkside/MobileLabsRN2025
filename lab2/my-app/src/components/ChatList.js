
import { View, Text, Image, FlatList } from "react-native"
import styled from "styled-components";
import FlatListContainer from "./FlatListContainer";
import MessageCard from "./MessageCard";
const chats = [
    {id:1,name:"Mark Dyson" ,message:"I'm already starting to play • 14 Jun",unreadCount:1, online:true},
    {id:2,name:"Mark Dyson" ,message:"Ok • 14 Jun",unreadCount:2,online:true},
    {id:3,name:"Mark Dyson" ,message:"Ok • 14 Jun",unreadCount:undefined},
    {id:4,name:"Mark Dyson" ,message:"Hello! • 14 Jun",unreadCount:undefined,online:true},
    {id:5,name:"Mark Dyson" ,message:"Ok • 14 Jun",unreadCount:undefined},
    {id:6,name:"Mark Dyson" ,message:"Hello • 14 Jun",unreadCount:undefined},
    {id:7,name:"Mark Dyson" ,message:"Ok • 14 Jun",unreadCount:null},
    {id:8,name:"Mark Dyson" ,message:"Hello! • 14 Jun",unreadCount:null},
    {id:9,name:"Mark Dyson" ,message:"Ok • 14 Jun",unreadCount:null},
    {id:10,name:"Mark Dyson" ,message:"Hello • 14 Jun",unreadCount:null},
    {id:11,name:"Mark Dyson" ,message:"Ok • 14 Jun",unreadCount:null},
    {id:12,name:"Mark Dyson" ,message:"Hello! • 14 Jun",unreadCount:null},
    {id:13,name:"Mark Dyson" ,message:"Ok • 14 Jun",unreadCount:null},
    {id:14,name:"Mark Dyson" ,message:"Hello • 14 Jun",unreadCount:null},
    {id:15,name:"Mark Dyson" ,message:"Ok • 14 Jun",unreadCount:null},
]


const ChatList = () => {
  return (<>
        <FlatListContainer margintop="20" height="700" data={chats}
        renderItem={({ item }) => 
            <MessageCard name={item.name} message={item.message} unreadCount={item.unreadCount} online={item.online}></MessageCard>}
        >
        </FlatListContainer>
    </>
  )
}

export default ChatList

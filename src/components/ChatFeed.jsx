import MessageForm from "./MessageForm";
import TheirMessage from "./TheirMessage";
import MyMessage from "./MyMessage";


const ChatFeed = (props) =>{
    // console.log(props);

    const {chats, activeChats, userName, messages} = props;

    const chat = chats && chats[activeChats];

    const renderMessages =()=>{
        const keys = Object.keys(messages);

        return keys.map((key, index) =>{
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index-1]; //to find the last message if there are messages
            const isMyMessage = userName === message.sender.userName; //to check if the message is from us
        })
    }
    return(
        <div>
            ChatFeed 
        </div>
    )

}

export default ChatFeed;
import MessageForm from "./MessageForm";
import TheirMessage from "./TheirMessage";
import MyMessage from "./MyMessage";

const ChatFeed = (props) => {
  // console.log(props);

  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat]; //to find an active chat if chats are available in the feed

  //function for generating messages
  const renderMessages = () => {
    const keys = Object.keys(messages); //to take the keys from our messages, keys are id's of specific messages

    return keys.map((key, index) => {
      const message = messages[key]; //one specific message with a specifc key
      const lastMessageKey = index === 0 ? null : keys[index - 1]; //to cjeck the last message, to find it
      const isMyMessage = userName === message.sender.username; //to check if the message is from us

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage
            ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>

          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            read receipts
          </div>
        </div>
      );
    });
  };

  if (!chat) return "Loading..."; //if there is no chat, return a string for loading

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>

        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>

      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;

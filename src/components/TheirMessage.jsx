//for Messages other people send
const TheirMessage = ({lastMessage, message}) => {
  //to check if the last message sent was by another user
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className="message-row">
      {/* if we have the first message sennt by the another user which is not us*/}
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}

      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            marginLeft: isFirstMessageByUser ? '4px' : '48px',
            backgroundColor: "#CABCDC",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;

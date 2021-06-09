import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed"
import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="83329391-ab94-4482-bfd5-1e5e4d0f3008"
      userName="ladybee"
      userSecret="ladybee"
      renderChatFeed={(chatAppProps) => <ChatFeed  {...chatAppProps}/>}
    />
  );
};

export default App;

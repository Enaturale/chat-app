import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed"
import LoginForm from "./components/LoginForm"

import "./App.css";

const App = () => {
  //if there is no username
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    
    <ChatEngine
      height="100vh"
      projectID="83329391-ab94-4482-bfd5-1e5e4d0f3008"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed  {...chatAppProps}/>}
    />
  );
};

export default App;

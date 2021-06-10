import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError ] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    //we will check if the chat engine has the username and password
    const authObject = {
      'Project-ID': "83329391-ab94-4482-bfd5-1e5e4d0f3008",
      'User-Name': username,
      'User-Secret': password,
    };

    try {
      //actual request to check for the username and passsword in the  api
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      //if successful, store the username and the password in the local storage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      //then reload the window
      window.location.reload();
    } catch (error) {
      //to get a new username and password if the above was not successful
       setError("Username and Password not found. Check details and try again.")
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button" onSubmit={handleSubmit}>
              <span>Submit</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

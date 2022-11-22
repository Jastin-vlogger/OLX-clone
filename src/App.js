import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import View from "./Pages/ViewPost";
import { AuthContext, FirebaseContext } from "./store/FireBaseContext";
import Post from "./store/PostContext";

function App() {
  const { user, setUser } = useContext(AuthContext);
  const { Firebase } = useContext(FirebaseContext);
  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      console.log(setUser);
      setUser(user);
    });
  });
  return (
    <div>
      <Post>
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/view">
            <View />
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;

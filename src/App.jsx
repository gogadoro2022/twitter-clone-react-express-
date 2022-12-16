import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Header from "./components/Header";
import AllTweets from "./pages/AllTweets";
import MyTweets from "./pages/MyTweets";

function App({ tweetService }) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const onAllTweets = () => {
    navigate("/");
  };

  const onMyTweets = () => {
    navigate(`/${user.username}`);
  };

  const onLogout = () => {
    if (window.confirm("Do you want to log out?")) {
      logout();
      navigate("/");
    }
  };

  return (
    <div className="app">
      <Header
        username={user.username}
        onLogout={onLogout}
        onAllTweets={onAllTweets}
        onMyTweets={onMyTweets}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={<AllTweets tweetService={tweetService} />}
        />
        <Route
          exact
          path="/:username"
          element={<MyTweets tweetService={tweetService} />}
        />
      </Routes>
    </div>
  );
}

export default App;

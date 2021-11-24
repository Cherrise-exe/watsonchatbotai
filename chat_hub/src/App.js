import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// import { AuthProvider } from "../contexts/AuthContext"

import Login from "./components/Login"
import DirectChatPage from "./components/Chats"
import HomePage from "./components/Forum"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        {/* <AuthProvider> */}
          <Switch>
            <Route path="/chats" component={DirectChatPage} />
            <Route path="/forum" component={HomePage} />
            <Route path="/" component={Login} />
          </Switch>
        {/* </AuthProvider> */}
      </Router>
    </div>
  )
}

export default App

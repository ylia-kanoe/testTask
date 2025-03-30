import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from "./pages/Home"
import { UserList } from "./pages/UserList"
import { UserPage } from "./pages/UserPage"

export default function RoutePage() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/userlist" element={<UserList />} />
                    <Route exact path="/userlist/:userId" element={<UserPage />} />
                </Routes>
            </Router>
        </>
    )
}

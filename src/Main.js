import React, {Component} from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Udyr from "./Contents/Udyr";
import Quinn from "./Contents/Quinn";
import Caitlyn from "./Contents/Caitlyn";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Chris' Favorite League of Legend Champions</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Udyr</NavLink></li>
                        <li><NavLink to="/Quinn">Quinn</NavLink></li>
                        <li><NavLink to="/Caitlyn">Caitlyn</NavLink></li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route exact path="/" element={<Udyr />}/>>
                            <Route path="/Quinn" element={<Quinn />}/>
                            <Route path="/Caitlyn" element={<Caitlyn />}/>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
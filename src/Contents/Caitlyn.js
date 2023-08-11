import React, {Component} from "react";
import caitlynImage from '../Images/caitlyn.jpg';

class Caitlyn extends React.Component {
    render() {
        return (
            <div>
                <h2>Caitlyn</h2>
                <img src={caitlynImage} atl="Caitlyn" width="250" height="300" />
                <h3>Caitlyn's Abilities</h3>
                    <ul>
                        <li>Headshot</li>
                        <li>Piltover Peacemaker</li>
                        <li>Yordle Snap Trap</li>
                        <li>90 Caliber Net</li>
                        <li>Ace in the Hole</li>
                    </ul>
            </div>
        );
    }
}

export default Caitlyn;
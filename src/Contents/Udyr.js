import React, {Component} from "react";
import udyrImage from '../Images/udyr.jpg';

class Udyr extends React.Component {
    render() {
        return (
            <div>
                <h2>Udyr</h2>
                <img src={udyrImage} atl="Udyr" width="250" height="300" />
                <h3>Udyr's Abilities</h3>
                    <ul>
                        <li>Bridge Between</li>
                        <li>Wilding Claw</li>
                        <li>Iron Mantle</li>
                        <li>Blazing Stampede</li>
                        <li>Wingborne Storm</li>
                    </ul>
            </div>
        );
    }
}

export default Udyr;
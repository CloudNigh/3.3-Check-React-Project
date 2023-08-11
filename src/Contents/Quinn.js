import React, {Component} from "react";
import quinnImage from '../Images/quinn.jpg';

class Quinn extends Component {
    render() {
        return (
            <div>
                <h2>Quinn</h2>
                <img src={quinnImage} atl="Quinn" width="250" height="300" />
                <h3>Quinn's Abilities</h3>
                    <ul>
                        <li>Harrier</li>
                        <li>Blinding Assault</li>
                        <li>Heightened Senses</li>
                        <li>Vault</li>
                        <li>Behind Enemy Lines</li>
                    </ul>
            </div>
        );
    }
}

export default Quinn;
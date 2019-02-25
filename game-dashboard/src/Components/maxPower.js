import React from 'react';

import '../css/style.css'; 

class MaxPowerSection extends React.Component {
    render(){
        return(
            // make 3 sections and lay it out like a flexbox
            <div className="maxPowerWrapper">
                <button className="leftButton"></button>
                <div className="displayDiv">MAX POWER</div>
                <button className="rightButton"></button>
            </div>

        )
    }
}

export default MaxPowerSection
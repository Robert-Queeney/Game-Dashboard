import React from 'react'; 
// import Button from './upButton';


class ResetPower extends React.Component{
    render(){
        return(
            <div className="reset-div">
                <button className="resetPower" handleClick={this.props.resetPower}>RESET POWER</button>
            </div>
        )
    }
}

export default ResetPower; 
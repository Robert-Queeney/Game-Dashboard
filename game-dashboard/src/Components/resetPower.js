import React from 'react'; 
import Button from './upButton';


class ResetPower extends React.Component{
    render(){
        return(
            <div className="reset-div">
                <Button handleClick={this.props.resetPower}/>
            </div>
        )
    }
}

export default ResetPower; 
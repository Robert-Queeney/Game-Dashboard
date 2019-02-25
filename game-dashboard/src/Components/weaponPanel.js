import React from 'react'; 
import '../css/style.css'
// import Button from './upButton'; 
// import MaxButton from './maxButton';
// import styled from 'styled-components'

// const WeaponPanelWrapper = styled.div`
//     height: 90%;     
//     // border: 2px solid black; 
//     margin: 10px;
//     // padding: 5px; 
//     display: flex; 
//     flex-direction: column; 
//     justify-content: space-between; 
//     align-items: center; 
//     width: 200px; 
// `


class WeaponPanel extends React.Component{

    // onClick(e){
    //     this.props.upWeaponPower(); 
    //     this.props.reduceTotalPower(); 
    // }

    render(){
        return(
            <div className="PanelWrappers">
                <button className="MaxButton" onClick={this.props.maxWeaponPower}>MAX</button>
                {/* <button onClick={this.props.addPower} /> */}
                <button className="upButton" onClick={() => {this.props.upWeaponPower(); this.props.reduceTotalPower() }}>^</button>
                <div className="weapon-div">Weapon</div>
                <button className="downButton" onClick={()=>{this.props.downWeaponPower(); this.props.increaseTotalPower()}}>{[<span className="downArrow">&#8964;</span>]}</button>
            </div>
        )
    }
}

export default WeaponPanel; 
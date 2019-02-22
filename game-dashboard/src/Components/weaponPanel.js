import React from 'react'; 
import Button from './upButton'; 
import MaxButton from './maxButton';
import styled from 'styled-components'

const WeaponPanelWrapper = styled.div`
    height: 90%;     
    // border: 2px solid black; 
    margin: 10px;
    // padding: 5px; 
    display: flex; 
    flex-direction: column; 
    justify-content: space-between; 
    align-items: center; 
    width: 200px; 
`


class WeaponPanel extends React.Component{

    // onClick(e){
    //     this.props.upWeaponPower(); 
    //     this.props.reduceTotalPower(); 
    // }

    render(){
        return(
            <WeaponPanelWrapper>
                <MaxButton handleClick={this.props.maxWeaponPower}/>
                {/* <button onClick={this.props.addPower} /> */}
                <Button handleClick={() => {this.props.upWeaponPower(); this.props.reduceTotalPower() }}>Work</Button>
                <div className="weapon-div">Weapon</div>
                <Button handleClick={()=>{this.props.downWeaponPower(); this.props.increaseTotalPower()}}/>
            </WeaponPanelWrapper>
        )
    }
}

export default WeaponPanel; 
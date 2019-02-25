import React from 'react'; 
import Panels from './panels';
import Header from './header'; 
import ResetPower from './resetPower';
import MaxPowerSection from './maxPower';
// import styled from 'styled-components'; 



// const MainSection = styled.section`
//     width: 250px;  
//     background-color: green; 
//     padding: 5px; 
//     display: flex; 
//     flex-direction: column; 
//     justify-content: center; 
//     // align-items: center; 
// `

class SheildInterface extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            totalPower: 100, 
            shieldPower: 0, 
            weaponPower: 0, 
            enginePower: 0, 
        }
        this.increaseTotalPower= this.increaseTotalPower.bind(this);
        this.reduceTotalPower = this.reduceTotalPower.bind(this); 
        this.maxWeaponPower = this.maxWeaponPower.bind(this);
        this.maxShieldPower = this.maxShieldPower.bind(this);
        this.maxEnginePower = this.maxEnginePower.bind(this);
        this.upWeaponPower = this.upWeaponPower.bind(this); 
        this.upEnginePower = this.upEnginePower.bind(this);
        this.upShieldPower = this.upShieldPower.bind(this);
        this.downWeaponPower = this.downWeaponPower.bind(this);
        this.downShieldPower = this.downShieldPower.bind(this);
        this.downEnginePower = this.downEnginePower.bind(this);
        this.resetPower = this.resetPower.bind(this);
    }

    increaseTotalPower(){
        this.state.totalPower < 100 ? this.setState({totalPower: this.state.totalPower +1}) : this.setState({totalPower: this.state.totalPower })
    }
    
    reduceTotalPower(){
        this.state.totalPower > 0 ? this.setState({totalPower: this.state.totalPower -1}) : this.setState({totalPower: this.state.totalPower -1})
    } 

    maxWeaponPower(){
        this.setState({weaponPower: this.state.weaponPower + this.state.totalPower})
        this.setState({totalPower: this.state.totalPower - this.state.totalPower})
    }
    maxShieldPower(){
        this.setState({shieldPower: this.state.shieldPower + this.state.totalPower})
        this.setState({totalPower: this.state.totalPower - this.state.totalPower})
    }
    maxEnginePower(){
        this.setState({enginePower: this.state.enginePower + this.state.totalPower})
        this.setState({totalPower: this.state.totalPower - this.state.totalPower})
    }
    
    upWeaponPower(){
        this.state.totalPower > 0 ? this.setState({weaponPower: this.state.weaponPower + 1}) : this.setState({weaponPower: this.state.weaponPower})
    }

    upShieldPower(){
        this.state.totalPower > 0 ? this.setState({shieldPower: this.state.shieldPower + 1}) : this.setState({shieldPower: this.state.shieldPower})
    }

    upEnginePower(){
        this.state.totalPower > 0 ? this.setState({enginePower: this.state.enginePower + 1}) : this.setState({enginePower: this.state.enginePower})
    }

    downWeaponPower(){
        this.state.weaponPower > 0 ? this.setState({weaponPower: this.state.weaponPower -1}) : this.setState({weaponPower: this.state.weaponPower});
    }

    downShieldPower(){
        this.state.shieldPower > 0 ? this.setState({shieldPower: this.state.shieldPower -1}) : this.setState({shieldPower: this.state.shieldPower});
    }
    
    downEnginePower(){
        this.state.enginePower > 0 ? this.setState({enginePower: this.state.enginePower -1}) : this.setState({enginePower: this.state.enginePower});
    }

    resetPower(){
        this.setState({totalPower: this.state.totalPower - this.state.totalPower +100})
        this.setState({weaponPower: this.state.weaponPower - this.state.weaponPower})
        this.setState({shieldPower: this.state.shieldPower - this.state.shieldPower})
        this.setState({enginePower: this.state.enginePower - this.state.enginePower})
    }



    // Would like to increase component power dynamically, but may not be possible with this build config
    // addPower(stateValue){
    //     this.setState({ 
    //         totalPower: this.state.totalPower -1,
    //         [stateValue]: this.state[stateValue] + 1
    //     })
    // }


    render(){
        return(
            <div className="MainSection">
                {/* <button onClick={this.addPower} /> */}
                <Header />
                <Panels 
                    maxWeaponPower={this.maxWeaponPower}
                    maxShieldPower={this.maxShieldPower}
                    maxEnginePower={this.maxEnginePower}
                    increaseTotalPower={this.increaseTotalPower}
                    reduceTotalPower={this.reduceTotalPower}
                    upWeaponPower={this.upWeaponPower}
                    upEnginePower={this.upEnginePower}
                    upShieldPower={this.upShieldPower}
                    downWeaponPower={this.downWeaponPower}
                    downShieldPower={this.downShieldPower}
                    downEnginePower={this.downEnginePower}
                    />
                <MaxPowerSection />
                <ResetPower resetPower={this.resetPower}/>
            </div>
        )
    }
}

export default SheildInterface; 
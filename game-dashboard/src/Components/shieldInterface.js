import React from 'react'; 
import Panels from './panels';
import Header from './header'; 
import styled from 'styled-components'; 

const MainSection = styled.section`
    width: 380px;  
    background-color: green; 
    padding: 5px 5px 10px 10px; 
`

class SheildInterface extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            totalPower: 100, 
            shieldPower: 0, 
            weaponPower: 0, 
            enginePower: 0, 
        }
        this.addPower = this.addPower.bind(this); 
    }

    // Need to subtract '1' from total power and add it to whatever panel we are in
    addPower(){
        this.setState({ totalPower: this.state.totalPower -1})
        console.log("Work you fucker")
    }


    render(){
        return(
            <MainSection>
                <Header />
                <Panels addPower={this.addPower}/>
            </MainSection>
        )
    }
}

export default SheildInterface; 
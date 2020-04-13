import React from "react";
import Header from "../components/homeHeader";
import { Link, Redirect} from 'react-router-dom'
import { Container, Col, Row} from "reactstrap";
import Select from 'react-select';
import styled, { keyframes } from "styled-components";
import HeadShake from "@bit/formidablelabs.react-animations.head-shake";
import Pulse from "@bit/formidablelabs.react-animations.pulse";
const PulseAnimation = keyframes`${Pulse}`;
const PulseDiv = styled.div`
  animation: infinite 5s ${PulseAnimation};
`;
const HeadShakeAnimation = keyframes`${HeadShake}`;
const HeadShakeDiv = styled.div`
  animation: infinite 4s ${HeadShakeAnimation};
`;



class Home extends React.Component {
    state = {
        selectedOption: null,
        redirect: false
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = selectedCountry => {
        if(this.state.redirect){
            return <Redirect to= {{pathname:"/CountryProfile",
                                    state: selectedCountry
                                }}>
                                </Redirect>
        }
    }
    
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        this.setRedirect();
        //console.log(`Option selected:`, selectedOption);
    };
    
    
    render(){
        const countriesJson = require('../assets/data/trial.json');
        const countries = countriesJson.map(country => ({ label: country.name, value: country.code }));
        const { selectedOption } = this.state;

        return(
            <>
            <Header></Header>
                <main className="home">
                    <div className="homeOverLay">
                   
                    </div>
                        <Container className="homeText">
                        <h2 className="display-2 text-white">
                        Africa SDG Watch is a public platform to visualize and explore data, benchmark progress towards the 
                        SDGs and track performance of development indicators.
                        </h2>
                        </Container> 
                        <Row>
                            <Col md="4"></Col>
                            <Col md="4">
                            
                                <PulseDiv>
                                <Link to="/Sdgs" className="btn btn-warning text-white">Explore Development Data</Link>
                                
                                </PulseDiv>
                               
                            </Col>
                            <Col md="3">
                            
                                <Select options={countries} 
                                        placeholder="Search by country" 
                                        value={selectedOption}
                                        onChange={this.handleChange}/>
                               {this.renderRedirect(selectedOption)}
                            </Col>
                        </Row>
                    
                   
                </main>
              
            </>
        )
    }
}

export default Home;
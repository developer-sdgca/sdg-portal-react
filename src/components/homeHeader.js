import React from "react";
import { BrowserRouter, Link} from 'react-router-dom';

// reactstrap components
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    Button
  } from "reactstrap";

class HomeHeader extends React.Component{
    componentDidMount(){

    }
    render(){
        return (
            <> 
            <header className="header-global home-header">
                <Navbar className="navbar-main navbar-transparent navbar-light headroom" expand="lg" id="navbar-main">
                    <div className="container-fluid">
                        <NavbarBrand>
                            <img alt="..." src={require("../assets/img/brand/logo_white.png")}></img>
                        </NavbarBrand>
                        <button className="navbar-toggler" id="navbar_global">
                            <span className="navbar-toggler-icon" />
                        </button>

                        <UncontrolledCollapse navbar toggler="#navbar_global">
                            <div className="navbar-collapse-header">
                                <Row>
                                    <Col className="collapse-brand" xs="6">
                                    <BrowserRouter>
                                    <Link to="/">
                                        <img
                                        alt="..."
                                        src={require("../assets/img/brand/logo.png")}
                                        />
                                    </Link>
                                    </BrowserRouter>
                                    </Col>
                                    <Col className="collapse-close" xs="6">
                                    <button className="navbar-toggler" id="navbar_global">
                                        <span />
                                        <span />
                                    </button>
                                    </Col>
                                </Row>
                            </div>
                            <Nav className="ml-lg-auto" navbar>
                                <NavItem>
                                    <Link to="/" className="btn btn-warning btn-icon text-white">
                                        <span className="btn-inner--icon">
                                            <img className="icon" alt=".." src={require('../assets/img/home_icons/Home.png')}></img>
                                        </span>
                                        <br></br>
                                        <span className="nav-link-inner--text ml-1">Home</span>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/Sdgs" className="btn btn-warning btn-icon text-white">
                                        <img className="icon" alt=".." src={require('../assets/img/home_icons/Sdg.png')}></img>
                                        <br></br>
                                        <span className="nav-link-inner--text ml-1">SDGS</span>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/Dashboard" className="btn btn-warning btn-icon text-white">
                                        <img className="icon" alt=".." src={require('../assets/img/home_icons/Dashboard.png')}></img>
                                        <br></br>
                                        <span className="nav-link-inner--text ml-1">Dashboard</span>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/CountryProfile" className="btn btn-warning btn-icon text-white">
                                        <img className="icon" alt=".." src={require('../assets/img/home_icons/CountryProfile.png')}></img>
                                            <br></br>
                                            <span className="nav-link-inner--text ml-1">Country <br></br> Profiles</span>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/Agenda2063" className="btn btn-warning btn-icon text-white">
                                        <img className="icon" alt=".." src={require('../assets/img/home_icons/A2063.png')}></img>
                                        <br></br>
                                        <span className="nav-link-inner--text ml-1">Agenda <br></br> 2063</span>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/About" className="btn btn-warning btn-icon text-white">
                                        <img className="icon" alt=".." src={require('../assets/img/home_icons/AboutUs.png')}></img>
                                        <br></br>
                                        <span className="nav-link-inner--text ml-1">About us</span>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/Faqs" className="btn btn-warning btn-icon text-white">
                                        <img className="icon" alt=".." src={require('../assets/img/home_icons/FAQs.png')}></img>
                                        <br></br>
                                        <span className="nav-link-inner--text ml-1">FAQS</span>
                                    </Link>
                                </NavItem>
                            </Nav>
                        </UncontrolledCollapse>
                    </div>
                </Navbar>
            </header> 
            </>
        );
    }
}

export default HomeHeader;
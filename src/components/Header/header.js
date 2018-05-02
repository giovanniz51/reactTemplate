import React from "react";
import {Navbar,NavItem,Nav, Collapse } from 'react-bootstrap';
import {Link} from "react-router-dom";

import "./header.css";

const Header = () => {
    return (
        <Navbar style={{marginBottom: "0"}} collapseOnSelect bsStyle="custom">
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/"><img width="70" src="/images/react-icon.svg" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1}>
                        <Link to="/">Home</Link>
                    </NavItem>
                    <NavItem eventKey={2}>
                        <Link to="/contact">Contact</Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
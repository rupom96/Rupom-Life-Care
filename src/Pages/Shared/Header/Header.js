
import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();

    const navStyle = { fontWeight: "900", fontFamily: "Ubuntu" };
    const logoStyle = { color: "white", fontWeight: "900", fontFamily: "Kalam" };
    const signStyle = { color: "yellow", textDecoration: "underline", paddingLeft: "50px" };

    return (
        <div>
            <Navbar style={{ paddingTop: "10px", paddingBottom: "10px" }} collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand style={logoStyle}
                        href="/home">RUPOM LIFE-CARE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link
                                style={navStyle}
                                as={Link} to="/home">Home</Nav.Link>

                            <Nav.Link
                                style={navStyle}
                                as={Link} to="/about">About Us</Nav.Link>

                            <Nav.Link
                                style={navStyle}
                                as={Link} to="/career">Career</Nav.Link>

                            <Nav.Link
                                style={navStyle}
                                as={Link} to="/involve">Get Involved</Nav.Link>

                            {user?.displayName ?

                                < button onClick={logOut} className="btn btn-primary">Logout</button>
                                :
                                <Nav.Link style={navStyle}
                                    as={Link} to="/login">Login</Nav.Link>}

                            {user?.displayName &&
                                <Navbar.Text style={signStyle}>
                                    Signed as: {user?.displayName}
                                </Navbar.Text>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div >
    );
};

export default Header;
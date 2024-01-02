import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from "@emotion/styled";
import {useNavigate} from "react-router-dom";

const StyledTopNavigationBar = styled.div`
  .custom-link: {
    color: white;
  }
`


function TopNavigationBar() {
    const navigate = useNavigate();

    function handleHome() {
        navigate("/");
    }

    function handleInventory() {
        navigate("/inventory/");
    }

    function handleBookings() {
        navigate("/bookings/");
    }

    return (
        <StyledTopNavigationBar>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand >Braaiton</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={handleHome}>Home</Nav.Link>
                    <Nav.Link onClick={handleInventory}>Inventory</Nav.Link>
                    <Nav.Link onClick={handleBookings}>Bookings</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </StyledTopNavigationBar>
    )
}

export default TopNavigationBar;
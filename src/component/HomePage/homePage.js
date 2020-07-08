// All the view component are integrated Headers.

import React, { Component } from 'react';
import { Row, Col, Container } from "react-bootstrap";

// Custom component Import
import { HeaderComponent, NavBarComponent, FooterComponent, NewsFeedPageComponent } from '../component';

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //
        }
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <HeaderComponent />
                    <NavBarComponent />
                    <NewsFeedPageComponent />
                    <FooterComponent />
                </Row>
            </Container>
        )
    }
}

export default HomePage;
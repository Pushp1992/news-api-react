import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { SearchBarComponent } from '../component';

const styles = {
    containerStyle: {
        backgroundColor: "white",
        marginTop: '20px'
    },
    colStyle: {
        height: '50px'
    },
    newsApiText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'inline-block',
        marginTop: '20px'
    },
    newsText: {
        letterSpacing: '4px',
        padding: '5px 0 5px 6px',
        backgroundColor: "#1a73e8",
        boxSizing: 'border-box',
        fontFamily: 'NA Sans',
        fontSize: '2.25rem',
        color: 'white'
    },
    apiText: {
        letterSpacing: '4px',
        margin: '0, 3px 0 8px',
        padding: '5px 0 5px 6px',
        backgroundColor: "#fff",
        fontFamily: 'NA Sans',
        letterSpacing: '-1px',
        fontSize: '2.25rem',
        fontWeight: '500',
        color: '#1a73e8'
    },
    searchComponent: {
        paddingLeft: '40rem'
    }
}

function NavBar() {
    return (
        <Container fluid style={styles.containerStyle}>
            <Row>
                <Col style={styles.colStyle}>
                    <Nav variant="tabs" defaultActiveKey="/">
                        <Nav.Item>
                            <Nav.Link href="/">News</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Entertainment</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Sports</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">Technology</Nav.Link>
                        </Nav.Item>
                        <div style={styles.searchComponent}>
                            <SearchBarComponent />
                        </div>
                    </Nav>
                </Col>
            </Row>
        </Container>
    )
}

export default NavBar;
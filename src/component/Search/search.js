/** 
* Normal Search and Advance search Input,
* Search will be populated into SearchResultPage
*/

import React, { Component } from 'react';
import { Row, Col, Container, Button } from "react-bootstrap";
import CustomToastr from '../../utils/toastr';
import { withRouter } from "react-router-dom";
class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        event.preventDefault();
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value })
    }

    passSearchValue(event) {
        event.preventDefault();
        if (this.state.searchValue === "") {
            CustomToastr.warning("Please provide search input");
            return;
        }
        this.props.history.push('/search-result', { searchInput: this.state });
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <input type="text" name='searchValue' value={this.state.searchValue} onChange={this.handleInputChange} />
                    </Col>
                    <Col>
                        <Button variant="info" size="sm" onClick={(e) => this.passSearchValue(e)}>Info</Button>{' '}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(SearchBar);
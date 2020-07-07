// Getting all the news feed and display in this component

import React, { Component } from 'react';
import { Row, Col, Container, CardGroup, Card, CardColumns } from "react-bootstrap";

// custom import
import NewsService from '../../utils/service';
import CustomToastr from '../../utils/toastr';
import '../NewsPage/newsPage.css';

class NewsFeedPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loader: false,
            newsFeedLists: [],
            country: 'us'
        }
    }
    componentDidMount() {
        this.getNewsByCountryName(this.state.country);
    }
    async getNewsByCountryName(country) {
        try {
            let response = await NewsService.getNewsByCountry(country);
            this.setState({ loader: true })

            if (response && response.articles.length !== 0) {
                this.setState({ newsFeedLists: response.articles, loader: false });
                CustomToastr.success(`Yay ! Fetched ${response.totalResults} News Feed for you.`)
            } else {
                this.setState({ loader: false });
                CustomToastr.warning(`unable to fetch news feed for country : ${country}`)
            }
        } catch (err) {
            this.setState({ loader: false })
            CustomToastr.error(err || 'Something unexpected happen');
        }

    }
    render() {
        let newsList = this.state.newsFeedLists;
        let loaderStatus = this.state.loader;
        return (
            <Container id="parent-view">
                {
                    loaderStatus ? <div>Hold tight, while we are getting latest byte for you</div> : null
                }
                {
                    newsList.length !== 0 ?
                        <Row>
                            {/* <CardGroup> */}
                            {
                                newsList.map(data => {
                                    return (
                                        <Col key={data.source.id} md="4">
                                            <Card id="card-style">
                                                <Card.Img variant="top" src={data.urlToImage} />
                                                <Card.Body>
                                                    <Card.Title className="cardTitle">
                                                        <Card.Link href={data.url} target="_">{data.title}</Card.Link>
                                                    </Card.Title>
                                                    <Card.Text className="cardText">{data.content}</Card.Text>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <small className="text-muted">{data.source.name}</small><br />
                                                    <small className="text-muted">{data.publishedAt}</small>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                            {/* </CardGroup> */}
                        </Row>
                        :
                        <div>
                            <h2> There is no news feed to display right now.</h2>
                        </div>
                }
            </Container>
        )
    }
}

export default NewsFeedPage;
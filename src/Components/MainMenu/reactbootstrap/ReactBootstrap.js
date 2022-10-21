import React, { Component } from "react"
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import axios from 'axios';
//Global variable
const url=`https://jsonplaceholder.typicode.com/photos?_start=0&_end=21`


export default class ReactBootstrap extends Component
{
    constructor(props)
    {
        super(props)
        this.state ={
               photos:[]
        }
    }
    render()
    {
       
        return (<>
            <div className="container text-center">
                <h2>React Bootstrap Package</h2>
                <Container>
                    <Row>
                        {
                            this.state.photos.map((res,i)=>
                            {
                                return(
                                <Col lg={4} mb={4} sm={4} xs={4} key={i}>
                                    <Card className="my-2">
                                        <Card.Img variant="top" className="w-50 mx-auto p-2" src={res.thumbnailUrl} />
                                        <Card.Body>
                                            <Card.Title className="h6">{res.title}</Card.Title>
                                            
                                            <a className="btn btn-primary" href={res.url} target="_blank">Visit</a>
                                        </Card.Body>
                                    </Card>
                                </Col>)
                            })
                        }

                        

                        
                    </Row>
                </Container>
            </div>
            
            </>)
    }
    componentDidMount()
    {
        axios.get(url).then( (result)=> this.setState({   photos:result.data}));
    }
}


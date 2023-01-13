// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import "./ItemDetails.css";
import {
    Row,
    Col,
    Form, 
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from './img1.jpeg'
import back from './back.png';
export default class ItemDetails extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            link: this.props.link,
            resource: this.props.resource,
            description: this.props.description,
        }
        console.log(props);
    }

    render() {
        return (
            <div style={{ overflow: "hidden", background: "#f5f7f7" }}>
                {/* <Container> */}
                
                <Row>
                    <Col style={{display: "flex", justifyContent: "center", fontSize: "small", color: "grey"}}>
                    {/* <FontAwesomeIcon icon="fa-solid fa-chevron-left" /> */}
                    <button style={{height: "30px", margin: "10px", border: "none", outline: "none", padding: "3px", background: "none", color: "grey"}}>
                        <img style={{width: "10px", margin : "6px"}} src={back} alt="" />
                         Back
                    </button>
                        <div className='form' style={{
                           
                            margin:"auto", 
                            width:"50%", 
                            padding:"10px",
                            // textAlign: 'center'
                            }}>

                            <h5 style={{textAlign:"center", color: "black"}}>Item Details</h5>
                            <Form>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="exampleEmail">
                                                ITEM NAME
                                            </Label>
                                            <Input
                                                id="exampleEmail"
                                                name="email"
                                                placeholder="with a placeholder"
                                                type="email"
                                                value={this.state.name}
                                            />
                                        </FormGroup>
                                    </Col>
                                    
                                </Row>
                                <FormGroup>
                                    <Label for="exampleAddress">
                                        LINK
                                    </Label>
                                    <Input
                                        type='url'
                                        id="exampleAddress"
                                        name="address"
                                        placeholder="www.example.com"   
                                        style={{color: "blue"}}
                                        value={this.state.link}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAddress2">
                                        RESOURCE NAME
                                    </Label>
                                    <Input
                                        id="exampleAddress2"
                                        name="address2"
                                        placeholder="Apartment, studio, or floor"
                                        value={this.state.resource}
                                    />
                                </FormGroup>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="exampleCity">
                                                DESCRIPTION
                                            </Label>
                                            <Input
                                                id="exampleCity"
                                                name="city"
                                                style={{height: "80px"}}
                                                value={this.state.description}
                                            />
                                        </FormGroup>
                                    </Col>
                                    
                                </Row>
                                
                                <Button color='primary' style={{margin: "auto", display: "flex", fontSize:"small" }}>
                                    CREATE
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col className='wrapper'>
                        {/* Hello World */}
                        <img style={{ height: "100vh", width: "50vw" }} src={icon} alt="" />
                    </Col>
                </Row>
                {/* </Container> */}
            </div>
        )
    }
}

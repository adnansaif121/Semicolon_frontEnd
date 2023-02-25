import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'


export default class Transactions extends Component {


    handleUpload = () => {
        console.log(this.state);
        let obj = {
            Transaction_Id: this.state.Transaction_Id ,
            Transaction_Date: (this.state.Transaction_Date || new Date()).toISOString().slice(0, 10),
            Feature_Date: (this.state.Feature_Date || new Date()).toISOString().slice(0, 10),
            Feature_Date2: (this.state.Feature_Date2 || new Date()).toISOString().slice(0, 10),
            Feature_Date3: (this.state.Feature_Date3 || new Date()).toISOString().slice(0, 10),
            Feature_Value: this.state.Feature_Value,
            Feature_Value2: this.state.Feature_Value2,
            Feature_Value3: this.state.Feature_Value3,
            Feature_Value4: this.state.Feature_Value4,
            Feature_State: this.state.Feature_State,
            Create_date: this.state.Create_date,
            Modified_date: this.state.Modified_date,
            isDeleted: this.state.isDeleted,
            HashDifferentiator: this.state.HashDifferentiator,
        }
        console.log(obj);
    }

    render() {
        return (
            <>

                {/* <h3 style={{ margin: "10px 0px 0px 50px" }}>Service Transaction</h3> */}
                <div style={{ border: "2px solid black", margin: "10px 50px 0px 50px", padding: "50px" }}>

                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="Transaction_Id">
                                    Transaction_Id
                                </Label>
                                <br />
                                <Input
                                    id="Transaction_Id"
                                    name="Transaction_Id"
                                    placeholder="enter id"
                                    type="text"
                                    onChange={(e) => {this.setState({Transaction_Id: e.target.value})}}
                                />
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <Label for="Transaction_Date">
                                    Transaction_Date
                                </Label>
                                <br />
                                <Input
                                    id="Transaction_Date"
                                    name="Transaction_Date"
                                    // placeholder="enter id"
                                    type="date"
                                    onChange={(e) => {this.setState({Transaction_Date: e.target.value})}}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="Feature_Date">
                                    Feature_Date
                                </Label>
                                <br />
                                <Input
                                    id="Feature_Date"
                                    name="Feature_Date"
                                    placeholder="Feature_Date"
                                    type="date"
                                    onChange={(e) => {this.setState({Feature_Date: e.target.value})}}
                                />
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <Label for="Feature_Date2">
                                    Feature_Date2
                                </Label>
                                <br />
                                <Input
                                    id="Feature_Date2"
                                    name="Feature_Date2"
                                    placeholder="Feature_Date2"
                                    type="date"
                                    onChange={(e) => {this.setState({Feature_Date2: e.target.value})}}
                                />
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <Label for="Feature_Date3">
                                    Feature_Date3
                                </Label>
                                <br />
                                <Input
                                    id="Feature_Date3"
                                    name="Feature_Date3"
                                    placeholder="Feature_Date3"
                                    type="date"
                                    onChange={(e) => {this.setState({Feature_Date3: e.target.value})}}
                                />
                            </FormGroup>
                        </Col>

                    </Row>

                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="Feature_Value">
                                    Feature_Value
                                </Label>
                                <br />
                                <Input
                                    id="Feature_Value"
                                    name="Feature_Value"
                                    placeholder="Feature_Value"
                                    type="text"
                                    onChange={(e) => {this.setState({Feature_Value: e.target.value})}}
                                />
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <Label for="Feature_Value2">
                                    Feature_Value2
                                </Label>
                                <br />
                                <Input
                                    id="Feature_Value2"
                                    name="Feature_Value2"
                                    placeholder="Feature_Value2"
                                    type="text"
                                    onChange={(e) => {this.setState({Feature_Value2: e.target.value})}}
                                />
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <Label for="Feature_Value3">
                                    Feature_Value3
                                </Label>
                                <br />
                                <Input
                                    id="Feature_Value3"
                                    name="Feature_Value3"
                                    placeholder="Feature_Value3"
                                    type="text"
                                    onChange={(e) => {this.setState({Feature_Value3: e.target.value})}}
                                />
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <Label for="Feature_Value4">
                                    Feature_Value4
                                </Label>
                                <br />
                                <Input
                                    id="Feature_Value4"
                                    name="Feature_Value4"
                                    placeholder="Feature_Value4"
                                    type="text"
                                    onChange={(e) => {this.setState({Feature_Value4: e.target.value})}}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="Feature_State">
                                    Feature_State
                                </Label>
                                <br />
                                <Input
                                    id="Feature_State"
                                    name="Feature_State"
                                    placeholder="Feature_State"
                                    type="text"
                                    onChange={(e) => {this.setState({Feature_State: e.target.value})}}
                                />
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <Label for="Create_date">
                                    Create_date
                                </Label>
                                <br />
                                <Input
                                    id="Create_date"
                                    name="Create_date"
                                    placeholder="Create_date"
                                    type="date"
                                    onChange={(e) => {this.setState({Create_date: e.target.value})}}
                                />
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <Label for="Modified_date">
                                    Modified_date
                                </Label>
                                <br />
                                <Input
                                    id="Modified_date"
                                    name="Modified_date"
                                    placeholder="Modified_date"
                                    type="date"
                                    onChange={(e) => {this.setState({Modified_date: e.target.value})}}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="isDeleted">
                                    isDeleted
                                </Label>
                                <br />
                                <Input
                                    id="isDeleted"
                                    name="isDeleted"
                                    placeholder="isDeleted"
                                    type="checkbox"
                                    onChange={(e) => {this.setState({isDeleted: e.target.value})}}
                                />
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <Label for="HashDifferentiator">
                                    HashDifferentiator
                                </Label>
                                <br />
                                <Input
                                    id="HashDifferentiator"
                                    name="HashDifferentiator"
                                    placeholder="HashDifferentiator"
                                    type="text"
                                    onChange={(e) => {this.setState({HashDifferentiator: e.target.value})}}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Button onClick={this.handleUpload}>Upload</Button>
                </div>
            </>
        )
    }

}
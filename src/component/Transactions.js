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
import axios from 'axios';

export default class Transactions extends Component {

    componentDidMount() {
        axios.get(`http://hoho.eastasia.cloudapp.azure.com:3000/transaction`)
            .then(response => {
                const users = response.data;
                // this.setState({ users });
                console.log(users);
            })
    }

    handleUpload = () => {
        console.log(this.state);
        let obj = {
            transId: this.state.Transaction_Id,
            transDate: (this.state.Transaction_Date || null),
            f_date: (this.state.Feature_Date || null),
            f_date1: (this.state.Feature_Date1 || null),
            f_date2: (this.state.Feature_Date2 || null),
            f_date3: (this.state.Feature_Date3 || null),
            f_value: this.state.Feature_Value,
            f_value2: this.state.Feature_Value2,
            f_value3: this.state.Feature_Value3,
            f_value4: this.state.Feature_Value4,
            f_state: this.state.Feature_State,
            c_date: this.state.Create_date,
            m_date: this.state.Modified_date,
            isdel: this.state.isDeleted,
            hashd: this.state.HashDifferentiator,
        }
        console.log(obj);

        //     const params = new URLSearchParams();
// params.append('param1', 'value1');
// params.append('param2', 'value2');
// axios.post('/foo', params);

        const params = new URLSearchParams();
        params.append('transId', this.state.Transaction_Id);
        params.append('transDate', this.state.Transaction_Date);
        params.append('f_date', this.state.Feature_Date);
        params.append('f_date1', this.state.Feature_Date1);
        params.append('f_date2', this.state.Feature_Date2);
        params.append('f_date3', this.state.Feature_Date3);
        params.append('f_value', this.state.Feature_Value);
        params.append('f_value2', this.state.Feature_Value2);
        params.append('f_value3', this.state.Feature_Value3);
        params.append('f_value4', this.state.Feature_Value4);
        params.append('f_state', this.state.Feature_State);
        params.append('c_date', this.state.Create_date);
        params.append('m_date', this.state.Modified_date);
        params.append('isdel', this.state.isDeleted);
        params.append('hashd', this.state.HashDifferentiator);

        axios.post(`http://hoho.eastasia.cloudapp.azure.com:3000/transaction`, params)
            .then(res => {
            console.log(res);
            console.log(res.data);
            alert("Data Uploaded Successfully");
        })
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
                                    onChange={(e) => { this.setState({ Transaction_Id: e.target.value }) }}
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
                                    onChange={(e) => { this.setState({ Transaction_Date: e.target.value }) }}
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
                                    onChange={(e) => { this.setState({ Feature_Date: e.target.value }) }}
                                />
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <Label for="Feature_Date1">
                                    Feature_Date1
                                </Label>
                                <br />
                                <Input
                                    id="Feature_Date1"
                                    name="Feature_Date1"
                                    placeholder="Feature_Date1"
                                    type="date"
                                    onChange={(e) => { this.setState({ Feature_Date1: e.target.value }) }}
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
                                    onChange={(e) => { this.setState({ Feature_Date2: e.target.value }) }}
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
                                    onChange={(e) => { this.setState({ Feature_Date3: e.target.value }) }}
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
                                    onChange={(e) => { this.setState({ Feature_Value: e.target.value }) }}
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
                                    onChange={(e) => { this.setState({ Feature_Value2: e.target.value }) }}
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
                                    onChange={(e) => { this.setState({ Feature_Value3: e.target.value }) }}
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
                                    onChange={(e) => { this.setState({ Feature_Value4: e.target.value }) }}
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
                                    onChange={(e) => { this.setState({ Feature_State: e.target.value }) }}
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
                                    onChange={(e) => { this.setState({ Create_date: e.target.value }) }}
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
                                    onChange={(e) => { this.setState({ Modified_date: e.target.value }) }}
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
                                    onChange={(e) => { this.setState({ isDeleted: e.target.value }) }}
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
                                    onChange={(e) => { this.setState({ HashDifferentiator: e.target.value }) }}
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
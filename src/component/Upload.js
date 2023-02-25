import React, { Component } from 'react'
import {
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

export default class Upload extends Component {
    render() {
        return (
            <>
                <div style={{ border: "2px solid black", margin: "10px 50px 0px 50px", padding: "50px" }}>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="Transaction_Csv_file">
                                    Upload Transaction Csv File
                                </Label>
                                <br />
                                <Input
                                    id="Transaction_Csv_file"
                                    name="Transaction_Csv_file"
                                    placeholder="Transaction_Csv_file"
                                    type="file"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button>Upload</Button>
                </div>

                <div style={{ border: "2px solid black", margin: "10px 50px 0px 50px", padding: "50px" }}>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="Payment_Csv_file">
                                    Upload Payment Csv File
                                </Label>
                                <br />
                                <Input
                                    id="Payment_Csv_file"
                                    name="Payment_Csv_file"
                                    placeholder="Payment_Csv_file"
                                    type="file"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button>Upload</Button>
                </div>
            </>
        )
    }
}

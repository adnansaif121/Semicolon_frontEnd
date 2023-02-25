import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import axios from 'axios';

export default class Payment extends Component {

  componentDidMount() {
    axios.get(`http://hoho.eastasia.cloudapp.azure.com:3000/payment`)
        .then(response => {
            const users = response.data;
            // this.setState({ users });
            console.log(users);
        })
}

  handleUpload = () => {
    console.log(this.state);
    let obj = {
      transId: this.state.Transaction_Id ,
      transDate: (this.state.Transaction_Date||null),
      unit: (this.state.UnitOfTransaction || "USD"),
      quantity: this.state.Quantity,
      price: this.state.Price,
      currency: this.state.CurrencyOfTransaction,
      amount: this.state.Amount,
      mode: this.state.ModeOfTransaction,
      c_date: this.state.Create_date,
      m_date: this.state.Modified_date,
      isdel: this.state.isDeleted,
      hashd: this.state.HashDifferentiator,     
    }

//     const params = new URLSearchParams();
// params.append('param1', 'value1');
// params.append('param2', 'value2');
// axios.post('/foo', params);

    const params = new URLSearchParams();
    params.append('transId', this.state.Transaction_Id);
    params.append('transDate', this.state.Transaction_Date);
    params.append('unit', this.state.UnitOfTransaction);
    params.append('quantity', this.state.Quantity);
    params.append('price', this.state.Price);
    params.append('currency', this.state.CurrencyOfTransaction);
    params.append('amount', this.state.Amount);
    params.append('mode', this.state.ModeOfTransaction);
    params.append('c_date', this.state.Create_date);
    params.append('m_date', this.state.Modified_date);
    params.append('isdel', this.state.isDeleted);
    params.append('hashd', this.state.HashDifferentiator);

    console.log(obj);
    console.log(params);
    axios.post(`http://hoho.eastasia.cloudapp.azure.com:3000/payment`, params)
            .then(res => {
            console.log(res);
            console.log(res.data);
            alert("Data Inserted Successfully");
        })
  }
  render() {
    return (
      <>
        {/* <h3 style={{ margin: "10px 0px 0px 50px" }}>Service Payment</h3> */}
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
                <Label for="UnitOfTransaction">
                  UnitOfTransaction
                </Label>
                <br />
                <Input
                  id="UnitOfTransaction"
                  name="UnitOfTransaction"
                  placeholder="UnitOfTransaction"
                  type="text"
                  onChange={(e) => {this.setState({UnitOfTransaction: e.target.value})}}
                />
              </FormGroup>
            </Col>

            <Col>
              <FormGroup>
                <Label for="Quantity">
                  Quantity
                </Label>
                <br />
                <Input
                  id="Quantity"
                  name="Quantity"
                  placeholder="Quantity"
                  type="number"
                  onChange={(e) => {this.setState({Quantity: e.target.value})}}
                />
              </FormGroup>
            </Col>

            <Col>
              <FormGroup>
                <Label for="Price">
                  Price
                </Label>
                <br />
                <Input
                  id="Price"
                  name="Price"
                  placeholder="Price"
                  type="number"
                  onChange={(e) => {this.setState({Price: e.target.value})}}
                />
              </FormGroup>
            </Col>

          </Row>

          <Row>
            <Col>
              <FormGroup>
                <Label for="CurrencyOfTransaction">
                  CurrencyOfTransaction
                </Label>
                <br />
                <Input
                  id="CurrencyOfTransaction"
                  name="CurrencyOfTransaction"
                  placeholder="CurrencyOfTransaction"
                  type="text"
                  onChange={(e) => {this.setState({CurrencyOfTransaction: e.target.value})}}
                />
              </FormGroup>
            </Col>

            <Col>
              <FormGroup>
                <Label for="Amount">
                  Amount
                </Label>
                <br />
                <Input
                  id="Amount"
                  name="Amount"
                  placeholder="Amount"
                  type="number"
                  onChange={(e) => {this.setState({Amount: e.target.value})}}
                />
              </FormGroup>
            </Col>

            <Col>
              <FormGroup>
                <Label for="ModeOfTransaction">
                  ModeOfTransaction
                </Label>
                <br />
                <Input
                  id="ModeOfTransaction"
                  name="ModeOfTransaction"
                  placeholder="ModeOfTransaction"
                  type="text"
                  onChange={(e) => {this.setState({ModeOfTransaction: e.target.value})}}
                />
              </FormGroup>
            </Col>

            
          </Row>

          <Row>
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

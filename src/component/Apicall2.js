import React from 'react';
import axios from 'axios';
export default class AddPost extends React.Component {
    
    handleSubmit = event => {
        event.preventDefault();
        let name = "Adnan Saif";
        let email = "malekasaif135@gmail.com";
        let reg_no = "0101CS191011";
        const baseURL = "https://bfhldevapigw.healthrx.co.in/bfl-api-challenge/challenge-entry";
        var data = JSON.stringify({
            "b_name": btoa(name),
            "name": name,
            "b_reg_no": btoa(reg_no),
            "reg_no": reg_no,
            "b_email": btoa(email),
            "email": email,
          });
        const post = {
            b_name: btoa(name),
            name: name,
            b_reg_no: btoa(reg_no),
            reg_no: reg_no,
            b_email: btoa(email),
            email: email,
        };
        axios.post(
            baseURL, { data }, {"Accept": "application/json, text/plain, */*"
                ,"Content-Type": "application/x-www-form-urlencoded"})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
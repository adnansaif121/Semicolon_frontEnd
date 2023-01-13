import React from 'react'
import axios from 'axios'

export default function Apicall() {
    
    React.useEffect(() => {
        const baseURL = "https://bfhldevapigw.healthrx.co.in/bfl-api-challenge/challenge-entry";
        let name = "Adnan Saif";
        let email = "malekasaif135@gmail.com";
        let reg_no = "0101CS191011";
        const headers = { 
            'Content-Type': 'application/json;charset=UTF-8',
        };
        axios.post(baseURL, 
            {
                b_name: btoa(name),
                name: name,
                b_reg_no: btoa(reg_no),
                reg_no: reg_no,
                b_email: btoa(email),
                email: email,
            }, {headers}).then((response) => {
          console.log(response);
        });
      }, []);

  return (
    <div>Apicall</div>
  )
}


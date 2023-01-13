import React, {useState} from 'react'

function Todo(props) {
    let [input, useinput] = useState("");
    let [data, usedata] = useState([]);
    let [isEdit, useisEdit] = useState(false);
    let [index, useindex] = useState(null);

    const handleInput = (e)=> {
        useinput(e.target.value);
    }

    const AddInput = () => {
        usedata([...data, input]);
        useinput("");
    }

    const handleDelete = () => {
        console.log("delete");
    }

    const handleEdit = (index) => {
        useinput(data[index])
        useindex(index);
        useisEdit(true);
    }

    const EditInput = () => {
        let newData = input;
        let x = data;
        x[index] = newData;
        usedata(x);
        useisEdit(false);
        useinput("");
    }

  return (
    <div>
        <h2>{props.heading}</h2>
        
        <input type="text" value={input} onChange={handleInput}/>
        {
            isEdit ? 
            <button onClick={EditInput}>Update</button> 
            : 
            <button onClick={AddInput}>Submit</button>
        }

        {
            data.map((item, index) => {
                return (
                    
                        <div key={index}>
                            <h3>{item}</h3>
                            <button onClick={() => handleDelete(index)}>delete</button>
                            <button onClick={() => handleEdit(index)}>Edit</button>
                        </div>
                        
                    )
                }
            )
        }


    </div>
  )
}

export default Todo;


// Create, Read, Edit, Delete


// TODO
// Firebase

import React, {useState} from 'react'

function Todo(props) {
    let [input, useinput] = useState("");
    let [data, usedata] = useState([]);

    const handleInput = (e)=> {
        useinput(e.target.value);
    }

    const AddInput = () => {
        usedata([...data, input]);
    }

  return (
    <div>
        <h2>{props.heading}</h2>
        
        <input type="text" onChange={handleInput}/>
        <button onClick={AddInput}>Submit</button>

        {
            data.map((item, index) => {
                return (
                    <>
                        <div key={index}>
                            <h3>{item}</h3>
                            <button >delete</button>
                        </div>
                        <div>
                        </div>
                    </>
                    )
                }
            )
        }
    </div>
  )
}

export default Todo;


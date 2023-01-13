import Todo from './component/Todo'
import {useState} from 'react'
function App() {

  const [isAdnan, setIsAdnan] = useState(false);

  const childToParent = (data) => {
    console.log(data);
  }

  return (

    <div className="App">
      <Todo heading="Adnan" childToParent={childToParent}></Todo> 
      
      
    </div>

  );

}

export default App;

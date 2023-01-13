import Todo from './component/Todo'

function App() {

  const childToParent = (data) => {
    console.log(data);
  }

  return (

    <div className="App">
      <Todo heading="Pratham" childToParent={childToParent}></Todo>
      
    </div>

  );

}

export default App;

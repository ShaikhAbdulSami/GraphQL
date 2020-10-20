import React,{createRef} from 'react';
import './App.css';
import { useMutation, useQuery } from "@apollo/client"
import { createMessageMutation , getAllMessages } from './gqlSchema'

function App() {
  const messageValue = createRef()
  const [ addMessage ] = useMutation(createMessageMutation)
  let { data, error, loading} = useQuery(getAllMessages)
  const submit = () => {
    let message = messageValue.current.value;
    addMessage({ variables: { data: { message } } })
    .then(data =>{
      console.log("Response" , data)
    }).catch(error =>{
      console.log("error" , error)
    })
  }
  return (
    <div className="App">
      <input ref={messageValue} placeholder="message" />
      <button onClick={submit}>add</button>
    </div>
  );
}

export default App;

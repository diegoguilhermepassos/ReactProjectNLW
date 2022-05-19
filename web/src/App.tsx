interface ButtonProps { //interface por causa do typescript
  text: string;
}

function Button (props: ButtonProps) {
  return <div>
    <button>{props.text ?? 'Default'}</button>
    <br/>
  </div>
  
}

function App() {

  return (
    <>
      <Button text="Diego"/>
      <Button text="Teste1"/>
      <Button text="Teste2"/>
      <Button text="Teste3"/>
      <Button text="Teste4"/>
    </>
  )
}

export default App

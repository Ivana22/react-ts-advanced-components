import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";
import Container from "./components/Container.tsx";
import Form, { type FormHandle } from "./components/Form.tsx";
import { useRef } from "react";

function App() {
  const customForm = useRef<FormHandle>(null);

  const input = useRef<HTMLInputElement>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Input id="name" label="Your name" type="text" ref={input} />
      <p>
        <Button href="www.google.con">A link</Button>
      </p>
      <Container as={Button} onClick={() => alert("clicked")}>
        CLick me
      </Container>
      <br />
      <br />
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="name" id="name" />
        <Input type="age" label="age" id="age" />
        <Button>Save</Button>
      </Form>
    </main>
  );
}

export default App;

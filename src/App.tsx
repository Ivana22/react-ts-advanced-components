import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";
import Container from "./components/Container.tsx";
import Form from "./components/Form.tsx";
import { useRef } from "react";

function App() {
  const input = useRef<HTMLInputElement>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
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
      <Form>
        <Input type="text" label="name" id="name" />
        <Input type="age" label="age" id="age" />
        <Button>Save</Button>
      </Form>
    </main>
  );
}

export default App;

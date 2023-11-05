import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";
import Container from "./components/Container.tsx";

function App() {
  return (
    <main>
      <Input id="name" label="Your name" type="text" />
      <p>
        <Button href="www.google.con">A link</Button>
      </p>
      <Container as={Button} onClick={() => alert("clicked")}>
        CLick me
      </Container>
    </main>
  );
}

export default App;

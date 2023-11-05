import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";

function App() {
  return (
    <main>
      <Input id="name" label="Your name" type="text" />
      <p>
        <Button href="www.google.con">A link</Button>
      </p>
    </main>
  );
}

export default App;

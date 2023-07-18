import Button from './components/Button'

export default function App() {
  const handleClick = () => {
    console.log("ciao")
  }
  return (
    <>
      <Button variation={"primary"}>Button text</Button>
      <Button onClick={handleClick} variation={"secondary"}>Button text</Button>
      <Button variation={"success"}>Button text</Button>
      <Button variation={"warning"} outline>Button text</Button>
      <Button variation={"danger"} rounded outline>Button text</Button>
      <Button>Button text 2</Button>
    </>
  )
}
import Button from '../components/Button'

export default function ButtonPage() {
  const handleClick = () => {
    console.log("ciao")
  }
  return (
    <>
      <Button variation={"primary"} className="mb-9" >Button text</Button>
      <Button onClick={handleClick} variation={"secondary"}>Button text</Button>
      <Button variation={"success"}>Button text</Button>
      <Button onMouseEnter={handleClick} variation={"warning"} outline>Button text</Button>
      <Button variation={"danger"} rounded outline>Button text</Button>
      <Button>Button text 2</Button>
    </>
  )
}
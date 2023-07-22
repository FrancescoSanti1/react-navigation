import { useState } from "react";
import Dropdown from "./components/Dropdown";

export default function App() {

  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
  }

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ]
  return <Dropdown value={selected} onChange={handleSelect} options={options} />
}
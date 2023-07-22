import Dropdown from '../components/Dropdown'

export default function DropdownPage() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
  }

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ]
  return <div className="flex">
    <Dropdown value={selected} onChange={handleSelect} options={options} />
    <Dropdown value={selected} onChange={handleSelect} options={options} />
  </div>
}
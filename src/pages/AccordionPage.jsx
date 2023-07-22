import Accordion from '../components/Accordion'

export default function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "Question 1",
      content: "Answer 1"
    },
    {
      id: 2,
      label: "Question 2",
      content: "Answer 2"
    },
    {
      id: 3,
      label: "Question 3",
      content: "Answer 3"
    },
  ]
  return <Accordion items={items} />
}
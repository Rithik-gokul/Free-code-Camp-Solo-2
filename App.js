import Navbar from "./Navbar.js"
import Card from "./card.js"
import dataset from "./data.js";

export default function App() {
  const  items = dataset.map(item => {
    return(<Card key = {item.title} {...item} />)
  })
  return (
    <div>
      <Navbar />
      <section className="cardDisplay">
      {items}
      </section>
    </div>
  )
}

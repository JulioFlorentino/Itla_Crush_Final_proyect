import ConfessionForm from "../components/ConfessionForm";
import ConfessionList from "../components/ConfessionList";

import "./Home.css";

export default function Home() {
  return (
    <section className="home-container">
      <h1></h1>
      <ConfessionForm />
      <ConfessionList />
    </section>
  );
}

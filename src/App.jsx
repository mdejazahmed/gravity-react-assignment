import { TodoApp } from "./components/TodoApp";
import { TwoSumVisualizer } from "./components/TwoSumVisualizer";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <section id="q1">
      <TwoSumVisualizer />
      </section>
      <section id="q2">
      <TodoApp />
      </section>
    </>
  );
}

export default App;

import Card from "./components/Card";
import Header from "./components/Header";
import { contacts } from "./data";

function App() {
  return (
    <div className="App">
      <Card contacts={contacts} />
      <Header />
    </div>
  );
}

export default App;

import Card from "./components/Card";
// import Header from "./components/Header";
import { contacts } from "./data";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="row justify-content-center gap-1">
      <h1 className="text-danger text-center m-4 border-bottom display-1">
        FullVitamin Team
      </h1>
      {contacts.map((contact) => {
        const { id, name, imgURL, email, phone } = contact;
        return (
          <>
            <Card
              id={id}
              name={name}
              imgURL={imgURL}
              email={email}
              phone={phone}
            />
          </>
        );
      })}
    </div>
  );
}

export default App;

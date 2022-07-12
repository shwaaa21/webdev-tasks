import React from "react";
import Card from "./Card";
import contacts from "./contact";

function App() {
  return (
    <div>
      <h1>My Contacts</h1>

      {contacts.map((contacts) => (
        <Card
          name={contacts.name}
          image={contacts.imgURL}
          phone={contacts.phone}
          email={contacts.email}
        />
      ))}
    </div>
  );
}
export default App;
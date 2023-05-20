import React from "react";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Card from "./components/Card";
import About from "./About";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  // list sample
  let items = ["A", "B", "C", "D", "E"];

  //function that prints out the item being clicked
  const handleClick = (item: string) => {
    console.log(item);
  };

  //toggles the visibility of the list
  const handleListButtonClick = () => {
    setListVisible(!isListVisible);
  };

  //constants with first variable as boolean and second as setting function
  const [isListVisible, setListVisible] = useState(false);
  const [isAlertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/about">
                  <Button color="primary">Go to About</Button>
                </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/about" Component={About} />
          </Routes>
        </div>
      </Router>
      {isAlertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
      <ListGroup
        items={items}
        heading="Letters"
        onSelectItem={handleClick}
        //onClose={() => setListVisible(false)}
      />
      <Button color="secondary" onClick={handleListButtonClick}>
        List Button
      </Button>
      {isListVisible && (
        <ListGroup
          items={items}
          heading="Letters"
          onSelectItem={handleClick}
          //onClose={() => setListVisible(false)}
        >
          alert
        </ListGroup>
      )}

      <Message children="Hello World"></Message>
      <Card
        body="Tarin"
        title="Hi"
        subtitle="You suck"
        cardText="hello"
        quote="A well-known quote, contained in a blockquote element."
      ></Card>
    </div>
  );
}

export default App;

/* let items = ["A", "B", "C", "D", "E"];
  const handleClick = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup items={items} heading="Letters" onSelectItem={handleClick} />
      <ListGroup items={items} heading="More" onSelectItem={handleClick} />
    </div>
  );*/

import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];
const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];
const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items} />
  }
}
const showList = () => {
  if (window.location.pathname === '/list') {
    return <Search />
  }
}
const showDropdown = () => {
  if (window.location.pathname === '/dropdown') {
    return <Dropdown />
  }
}

const showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return <Translate />
  }
}
// const showComponent = (route, component) => {
//   return window.location.pathname === route ? component : null
// }
const App = () => {
  const [selected, setSelected] = useState(options[0])
  // const [showDropdown,setShowDropdown] = useState(false)
  return (
    <div>
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>toggle</button>
      {showDropdown &&
      
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      } */}
      {/* <Translate /> */}
      {/* {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()} */}
      <Header/>
      <Route path={"/"}>
          <Accordion items={items} />
      </Route>
       <Route path={"/list"}>
          <Search  />
      </Route>
       <Route path={"/dropdown"}>
        <Dropdown
          label="select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
       <Route path={"/translate"}>
          <Translate  />
      </Route>
    </div>
  );
};
export default App;

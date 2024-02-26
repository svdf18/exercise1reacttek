import { useState } from "react";
import "./App.css";
import PropsDemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import ListDemo2 from "./exercises/ListDemo2";
import ImageButton from "./components/ImageButton";



export default function App() {
  const [selectedView, setSelectedView] = useState("info");


  function handleSelected(selected: string) {
    setSelectedView(selected);
  }


  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
            {selectedView == "props1" ? <PropsDemo title="Props Demo"></PropsDemo> : null}
            {selectedView == "list1" ? <ListDemo title="List Demo"></ListDemo> : null}
            {selectedView == "list2" ? <ListDemo2 title="List Demo 2"></ListDemo2> : null}
            {selectedView == "image1" ? <ImageButton title="Event Demo"></ImageButton> : null}
            {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
          </div>
        </div>
      </div>
    </>
  );
}

type ButtonProps = {
  onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected, btnStyle: btnStyle } = props;
  return (
    <>
      <button className="btn-w100" style={btnStyle} onClick={() => handleSelected("info")}>
        Info
      </button>
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("list1")}>
        List Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("list2")}>
        List Demo 2
      </button>
      <button className="btn-w100" onClick={() => handleSelected("image1")}>
        Event Demo
      </button>
      {/* Add a new button for each of the exercises you complete */}
    </>
  );
};

/* eslint-disable no-undef */
const Boxes = (props) => {
  return (
    <div className={`box ${props.className}`}>
      <p className="box-title">{props.text}</p>
    </div>
  );
}

const element = (
  <div className="boxes-bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Boxes className="box-small" text="Small" />
      <Boxes className="box-medium" text="Medium" />
      <Boxes className="box-large" text="Large" />
    </div>
  </div>
);
ReactDOM.render(element, document.getElementById("root")); 

const Box = (props) => {
  const { box, name } = props;
  return (
    <div className={box}>
      <p className="box"> {name} </p>
    </div>
  );
};

const element = (
  <div className="bg_container">
    <h1 className="heading"> Boxes </h1>
    <div className="boxes_container">
      <Box box="small" name="Small" />
      <Box box="medium" name="Medium" />
      <Box box="large" name="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

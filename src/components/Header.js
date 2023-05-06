const Header = (props) => {
  return (
    <div>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          "background-color": "#a31919",
          padding: "5px",
        }}
      >
       {props.header} 
      </h1>
    </div>
  );
};
export default Header;

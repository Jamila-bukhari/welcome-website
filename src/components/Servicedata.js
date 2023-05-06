const Servicedata = (props) => {
  const user1 = props.user1;
  return (
    <div
      style={{
        display: "inline-block",
        "background-color": "#eee",
        margin: "10px",
        width:"200px"
      }}
    >
      <div style={{ padding: "10px" }}>
        <h4>Name {user1.name}</h4>
        <p> {user1.Description}</p>
      </div>

      <div style={{ "background-color": "black", color: "white" }}>
        {user1.Footer}
      </div>
    </div>
  );
};
export default Servicedata;

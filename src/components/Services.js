import Servicedata from "./Servicedata";
const Services = (props) => {
  const user1 = props.user1;
  const user2 = props.user2;
  const user3 = props.user3;
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Services</h1>

      <Servicedata user1={user1} />
      <Servicedata user1={user2}  />
      <Servicedata user1={user3}  />
    </div>
  );
};
export default Services;

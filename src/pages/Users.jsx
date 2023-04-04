import { Col, Row, Button } from "antd";
import { useParams, useSearchParams } from "react-router-dom";

const Users = () => {
  const { userId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const isThienDeptrai = searchParams.get("thien") === "deptrai";

  const showActiveUser = () => {
    setSearchParams({ thien: "deptrai" });
  };

  return (
    <>
      <Row justify={"center"}>
        <Col span={22}>user id is {userId}</Col>
        <Button onClick={showActiveUser}>Check Thien co dep trai ko?</Button>

        {isThienDeptrai ? (
          <h2>Thien dep trai la co that</h2>
        ) : (
          <h1>Deo phai</h1>
        )}
      </Row>
    </>
  );
};

export default Users;

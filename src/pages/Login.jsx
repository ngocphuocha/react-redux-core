import { useState, useCallback } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = (initialValues = {}) => {
  const [text, setTexts] = useState(initialValues);

  const onChangeHandler = useCallback(({ target: { name, value } }) => {
    setTexts((state) => ({ ...state, [name]: value }));
  }, []);

  const onChangeFullName = useCallback((event) => {
    setFullName(event.target.value);
    console.log("Fullname in function: ", fullName);
  }, []);

  const [fullName, setFullName] = useState("phuoc");

  const navigate = useNavigate();

  const submitLogin = () => {
    navigate("/");
  };
  return (
    <>
      <Link to="/">
        <Button>Go to Home page</Button>
      </Link>

      <Button onClick={submitLogin}>Submit form to login</Button>
      <br></br>
      <input
        key="name"
        name="name"
        onChange={onChangeHandler}
        value={text.name}
      />
      <input
        key="pass"
        name="pass"
        onChange={onChangeHandler}
        value={text.pass}
      />

      {fullName}
      <label>
        <input name="fullname" value={fullName} onChange={onChangeFullName} />
      </label>
    </>
  );
};

export default Login;

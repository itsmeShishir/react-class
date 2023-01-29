import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import userService from "./services/userService";
function App() {
  const style = {
    "color": "red",

    "max-width": "60%",
    // 'backgroundColor': "blue",
    'display': 'flex',

    'flexDirection': 'column',
    "justify-content": "center",
    "align-item": "center",
    "margin": "0 auto",
    "height": "50%"
    // "margin-left": "20%",
    // "margin-right": "20%"
  }

  const [username, setUsername] = useState();
  const [password, setpassword] = useState();
  const handleRegister = (event) => {
    event.preventDefault();
    console.log(username)
    console.log(password)
    userService.registerUser(username, password)
      .then(res => {
        console.log(res.data);
      }).catch(err => console.log(err))
  }
  return (
    <>
      <div className="container" style={style} >
        <h1> Book Review App</h1>
        <Form onSubmit={handleRegister}>
          <FormGroup>
            <Label for="exampleEmail">
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="name"
              placeholder="Username"
              type="name"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">
              Password
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password"
              type="password"
              value={password}
              onChange={(event) => setpassword(event.target.value)}
            />
          </FormGroup>
          <Button color="primary" outline>
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}

export default App;

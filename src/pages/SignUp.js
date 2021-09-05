import { useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../utils/Auth";

import styled from "styled-components";

export function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  const { signUp } = useAuth();

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    // Get email and password input values
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;

    // Calls `signUp` function from the context
    const { error } = await signUp({ email, password, name });

    if (error) {
      alert("error signing in");
    } else {
      // Redirect user to Dashboard
      history.push("/");
    }
  }

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="input-name">Name</label>
        <input id="input-name" type="name" ref={nameRef} />

        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <br />

        <button type="submit">Sign up</button>
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </Form>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Form = styled.form`
  height: 50vh;
  background-color: rgba(255,255,255, 0.5);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  margin: 10px 0
  text-align: center;
  gap: 5px;
`;

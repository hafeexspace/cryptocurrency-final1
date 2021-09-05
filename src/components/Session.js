import { useEffect, useState } from "react";
import { supabase } from "../utils/Supabase";
import { SignUp } from "../pages/SignUp";

import styled from "styled-components";

export default function Session() {
  const [session, setSession] = useState(null);

  useEffect(function () {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange(function (event, supaSession) {
      setSession(supaSession);
    });
  }, []);

  let markup = <SignUp />;
  if (session) {
    let email = session.user.email;
    markup = (
      <div>
        <Text>Welcome, {email}</Text>
      </div>
    );
  }

  return <div>{markup}</div>;
}

const Text = styled.h1`
  color: #fff;
  font-size: 20px;
`;

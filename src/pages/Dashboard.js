import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../utils/Auth";

import axios from "axios";
import { Coin } from "../components/Coin";

import styled from "styled-components";
import Session from "../components/Session";

export function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=myr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = function (event) {
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const { signOut } = useAuth();

  const history = useHistory();

  async function onSignOut() {
    // Ends user session
    await signOut();

    // Redirects the user to Login page
    history.push("/login");
  }

  return (
    <MainCointaner>
      <Nav>
        <Li>
          <Session />
        </Li>
        <Li>
          <Button onClick={onSignOut}>Sign out</Button>
        </Li>
      </Nav>

      <CoinApp>
        <CoinText>Search a currency</CoinText>
        <CoinSearch>
          <CoinInput
            type="text"
            placeholder="Search"
            onChange={handleChange}
          ></CoinInput>
        </CoinSearch>
      </CoinApp>

      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </MainCointaner>
  );
}

const MainCointaner = styled.div``;

const CoinApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  color: #fff;
`;

const CoinSearch = styled.div`
  margin-bottom: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CoinText = styled.h1`
  margin-bottom: 32px;
  text-align: center;
`;

const CoinInput = styled.input`
  padding-left: 16px;
  width: 300px;
  height: 50px;
  border-radius: 4px;
  border: none;
`;

const Nav = styled.ul`
  display: flex;
  height: 100px;
  justify-content: space-between;
  list-style-type: none;
  margin: 0 50px;
`;

const Li = styled.li`
  margin-top: 50px;
`;

const Button = styled.button`
  color: #000 !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #fff;
  padding: 10px 20px;
  border-radius: 50px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
  cursor: pointer;
`;

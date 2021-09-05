import React from "react";

import styled from "styled-components";

export function Coin({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) {
  return (
    <CoinContainer>
      <Row>
        <Penny>
          <CoinImg src={image} />
          <CoinH1>{name}</CoinH1>
          <CoinSymbol>{symbol}</CoinSymbol>
        </Penny>
        <CoinData>
          <CoinPrice>${price}</CoinPrice>
          <CoinVolume>${volume.toLocaleString()}</CoinVolume>
          {priceChange < 0 ? (
            <Red>{priceChange.toFixed(2)}</Red>
          ) : (
            <Green>{priceChange.toFixed(2)}</Green>
          )}
          <MarketCap>Mkt Cap: ${marketcap.toLocaleString()}</MarketCap>
        </CoinData>
      </Row>
    </CoinContainer>
  );
}

const CoinContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Row = styled.div`
display: flex;
flex-direction: row:
justify-items: start:
align-items: center:
height: 100px;
margin-top: 30px;
border-bottom: 1px solid #d7d7d7;
width: 900px;
`;

const Penny = styled.div`
  display: flex;

  padding-right: 24px;
  min-width: 300px;
`;
const CoinH1 = styled.h1`
  font-size: 16px;
  width: 150px;
`;

const CoinImg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;
const CoinSymbol = styled.p`
  text-transform: uppercase;
`;
const CoinData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between
  width: 100%;
  bottom: 0px;
`;

const CoinPrice = styled.p`
  width: 110px;
`;

const CoinVolume = styled.p`
  width: 230px;
`;
const MarketCap = styled.p`
  width: 203px;
`;

const Red = styled.p`
  color: red;
  width: 80px;
  margin-left: -50px;
`;

const Green = styled.p`
  color: #00ff00;
  width: 80px;
  margin-left: -50px;
`;

import React from 'react';
import "./Card.css"

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card : React.FC<Props>= ({companyName, ticker, price}: Props) : JSX.Element => {
  return (
    <div className='card'>
        <img src='https://t4.ftcdn.net/jpg/05/14/51/79/360_F_514517927_dXLi1DauUmrCaE3AkElsVgJ1jaYZMcSA.jpg' alt='coffee logo'></img>
        <div className='details'>
            <h2>{companyName} ({ticker})</h2>
            <p>110$</p>
        </div>
        <p className='info'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, veritatis odio! Minima nesciunt corrupti vel illum? Ab quam non dolorem inventore at sequi officiis libero repellat, ipsum quasi harum alias.
        </p>
    </div>
  )
}

export default Card
import React from "react";
import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Category() {
  return <div>
    <Link>
      <SLink to={'/cuisine/italian'}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
      </SLink>  
      <SLink to={'/cuisine/american'}>
        <FaHamburger/>
        <h4>American</h4>
      </SLink>
      <SLink to={'/cuisine/thai'}>
        <GiNoodles/>
        <h4>Thai</h4>
      </SLink>
      <SLink to={'/cuisine/japanese'}>
        <GiChopsticks/>
        <h4>Japanese</h4>
      </SLink>
    </Link>
  </div>;
}

const Link = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`

const SLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 50%;
  margin-right: 1rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  transform: scale(0.8);
  cursor: pointer;

  h4 {
    color: #fff;
    font-size: 0.8rem;
  }

  svg {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057)
  }
`


export default Category;

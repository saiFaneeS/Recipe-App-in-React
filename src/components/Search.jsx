import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

function Search() {

  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input)
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch/>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  position: relative;
  margin: 0rem 20rem;
  input {
    width: 100%;
    padding: 1rem 3rem;
    background: linear-gradient(35deg, #494949, #313131);
    border: none;
    outline: none;
    border-radius: 1rem;
    font-size: 1.5rem;
    color: #fff;
  }
  div {
    width: 100%;

  }
  svg {
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: #fff;
    position: absolute;
    z-index: 10;
  }
`;

export default Search;

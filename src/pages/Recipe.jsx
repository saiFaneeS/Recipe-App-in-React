import { useEffect, useState } from "react";
import styled from "styled-components";
import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const params = useParams();

  const getDetails = async () => {
    const fetchData = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await fetchData.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    getDetails();
  }, [params.name]);

  return (
    <DetaiWrapper
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >  
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="..." />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
      
      {activeTab === "instructions" && (
        <div>
          <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
          <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
        </div>
      )}
      {activeTab === "ingredients" && (
        <div>
          {details.extendedIngredients.map((ingredient) => {
            return <li key={ingredient.id}>- {ingredient.original}</li>;
          })}
        </div>
      )}
      </Info>
    </DetaiWrapper>
  );
}

const DetaiWrapper = styled(motion.div)`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  list-style: none;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li, p {
    font-size: 1.2rem;
    line-height: 2.5rem;
    font-weight: 500;
  }
  p {
    margin-bottom: 2rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid #444;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 2rem;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;

import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import Search from "./components/Search";
import styled from "styled-components";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to="/">Recipe App</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </motion.div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
`;

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem 0rem;
  svg {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }
`;

export default App;

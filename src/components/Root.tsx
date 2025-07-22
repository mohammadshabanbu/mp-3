import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import {Routes, Route} from "react-router-dom";
import Home from "./mains/Home.tsx";
import Edu from "./mains/Edu.tsx";
import Prj from "./mains/Prj.tsx";
import Athl from "./mains/Athl.tsx";
import Ec from "./mains/Ec.tsx";
import Tech from "./mains/Tech.tsx";
import Exp from "./mains/Exp.tsx";

import styled from "styled-components";


const Wrapper = styled.div`
    width: 100vw;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: slategray;
    display: flex;
    flex-direction: column;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

const StyledHeader = styled.header`
  padding: 10px;
  background-color: slategray;
  border-bottom: black 3px solid;
  height: 100px;  
`;

const StyledFooter = styled.footer`
  padding: 10px;
  background-color: slategray;
  border-bottom: black 3px solid;
  height: 100px;  
`;

const StyledNav = styled.nav`
  background-color: silver;
  width: 30%;

  ul {
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  li {
    border: black 3px solid;
    text-align: center;
    margin: 5% auto;
    width: 80%;
  }

  a {
    padding: 1% 2%;
    font-size: calc(2px + 1.5vw);
  }

  @media screen and (max-width: 1000px) {
    width: 100%;

    ul {
      flex-direction: row;
    }
  }
`;




export default function Root() {
    return (
        <Wrapper>
            <StyledHeader>
                <Header />
            </StyledHeader>

            <Container>
                <StyledNav>
                    <Nav />
                </StyledNav>

                <Routes>
                    <Route path={`/`} element={<Home/>} />
                    <Route path={`/education.html`} element={<Edu/>} />
                    <Route path={`/projects.html`} element={<Prj/>} />
                    <Route path={`/athletics.html`} element={<Athl/>} />
                    <Route path={`/extracurriculars.html`} element={<Ec/>} />
                    <Route path={`/skills.html`} element={<Tech/>} />
                    <Route path={`/experiences.html`} element={<Exp/>} />
                </Routes>
            </Container>

            <StyledFooter>
                <Footer />
            </StyledFooter>
        </Wrapper>
    );
}
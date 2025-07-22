import styled from "styled-components";

const Main = styled.main`
  background-color: slategray;
  padding: 3%;
  border: solid black 2px;
  width: 80%;
  margin: auto;
`;
const InfoBox = styled.div`
  background-color: white;
  border: 1px solid black;
  margin: 20px auto;
  padding: 20px;
  width: 80%;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

export default function Tech() {
    return (
        <Main>
            <h1 id="page">Skills</h1>
            <Section>
                <InfoBox>
                    <h3>Languages:</h3>
                    <ul>
                        <li>Java</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>C</li>
                        <li>Swift</li>
                        <li>OCaml</li>
                        <li>Assembly</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </InfoBox>

                <InfoBox>
                    <h3>Tools:</h3>
                    <ul>
                        <li>GitHub</li>
                        <li>LaTeX</li>
                        <li>macOS/iOS</li>
                    </ul>
                </InfoBox>
            </Section>
        </Main>
    );
}
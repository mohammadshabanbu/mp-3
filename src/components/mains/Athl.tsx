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
export default function Athl() {
    return (
        <Main>
            <h2 id="page">Athletics</h2>
            <Section>
                <InfoBox>
                    <h3>King’s Academy, Amman, Jordan</h3>
                    <p>Varsity Soccer Team</p>
                </InfoBox>

                <InfoBox>
                    <h3>Boston University, Boston, MA</h3>
                    <p>Intramural Soccer Club</p>
                </InfoBox>

                <InfoBox>
                    <p>
                        Throughout high school and university, I’ve remained actively involved in soccer. At King’s Academy,
                        I was part of the varsity soccer team, and at Boston University,<br />I currently play in the intramural
                        soccer club. These experiences have helped me build teamwork, discipline, and leadership skills.
                    </p>
                </InfoBox>
            </Section>
        </Main>
    );
}
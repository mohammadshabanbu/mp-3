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
export default function Edu() {
    return (
        <Main>
            <h1 id="page">Education</h1>


            <div id="internal-info">
                <Section>
                <InfoBox>
                    <h3>King’s Academy, Amman, Jordan</h3>
                    <p>
                        GPA: 3.85 / 4.0 (Unweighted) <br />
                        High Honors Roll <br />
                        AP Scholar with Honors
                    </p>
                </InfoBox>
                </Section>

                <Section>
                    <InfoBox>
                    <h3>Boston University, Boston, MA</h3>
                    <p>
                        Bachelor of Science in Computer Science <br />
                        Expected Graduation: May 2026 <br />
                        Cumulative GPA: 3.45 / 4.0 <br />
                        2x Dean’s List
                    </p>

                    <h5>Relevant Coursework:</h5>
                    <ul>
                        <li>Probabilities in Computing</li>
                        <li>Combinatorics Structures</li>
                        <li>Geometric Algorithms</li>
                        <li>Computer Systems</li>
                        <li>Analysis of Algorithms</li>
                        <li>Programming Languages</li>
                        <li>Web Application Development</li>
                    </ul>
                    </InfoBox>
                </Section>
            </div>
        </Main>
    );
}
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


export default function Exp() {
    return (
        <Main>
            <h1 id="page">Education</h1>

            <Section>
                <InfoBox>
                    <h3>IT Intern | National Trading, Jordan</h3>
                    <p><em>May 2023 – Aug 2023</em></p>
                    <ul>
                        <li>Improved and implemented online services</li>
                        <li>Enhanced user experience and streamlined operations</li>
                    </ul>
                </InfoBox>

                <InfoBox>
                    <h3>Event Planner | BU Arabs Club</h3>
                    <p><em>Jan 2025 – Present</em></p>
                    <ul>
                        <li>Plan and coordinate campus-wide cultural and social events for 100+ students</li>
                        <li>Collaborate with student leaders and vendors to ensure smooth execution and community engagement</li>
                    </ul>
                </InfoBox>
            </Section>
        </Main>
    );
}
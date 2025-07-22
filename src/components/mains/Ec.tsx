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

export default function Ec() {
    return (
        <Main>
            <h2 id="page">Extracurricular Activities</h2>
            <Section>
                <InfoBox>
                    <h3>Head of Sports | King’s Fest, King’s Academy</h3>
                    <p>
                        Organized sports games and events to raise funds for charity, developing teamwork and community
                        engagement.
                    </p>
                </InfoBox>

                <InfoBox>
                    <h3>Member | Environment and Sustainability Club, King’s Academy</h3>
                    <p>
                        Contributed to awareness initiatives and sustainability-focused school projects.
                    </p>
                </InfoBox>

                <InfoBox>
                    <h3>Volunteer | Carla’s Initiative, Al-Aqsa Charity</h3>
                    <p>
                        Distributed food, renovated homes and schools, and supported families in need.
                    </p>
                </InfoBox>
            </Section>
        </Main>
    );
}
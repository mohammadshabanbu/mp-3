import styled from "styled-components";

const StyledHome = styled.main`
    background-color: slategray;
    padding: 20px;
    width: 80%;
    margin: 0 auto;
    border: 3px solid black;
    box-sizing: border-box;

    #info {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 30px;
        margin-top: 30px;
    }

    #profile-image {
        width: 200px;
        border: 2px solid black;
    }
    

    h2 {
        text-align: center;
        font-size: 24px;
        color: black;
    }

    h5 {
        font-weight: bold;
        line-height: 1.6;
        color: black;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
        #info {
            flex-direction: column;
            text-align: center;
        }
    }
`;


export default function Home() {
    return (
        <>
            <title>Home | Resume</title>
            <StyledHome id="main-content">
                <h3 id="main-title">Home</h3>

                <div id="info">
                    <img id="profile-image" src="/public/profile.jpg" alt="Mohammad Shaban" />
                    <h5>
                        I am currently an undergraduate student majoring in computer science at Boston University.<br />
                        I have a strong interest in web development, artificial intelligence, and data science.<br />
                        In addition to my academic interests, I also enjoy sports and like to be actively involved
                        with clubs at the University.
                    </h5>
                </div>
            </StyledHome>
        </>
    );
}
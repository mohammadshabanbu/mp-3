import { useState } from "react";
import styled from "styled-components";

const Main = styled.main`
    padding: 3%;
`;

const Calculator = styled.div`
    background-color: darkgoldenrod;
    padding: 30px;
    margin: 30px auto;
    border: 5px solid antiquewhite;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

const Input = styled.input`
    padding: 8px;
    font-size: calc(14px + 0.5vw);
    width: 80%;
    border: 5px solid antiquewhite;
`;

const Output = styled.h4<{ $color: string }>`
    padding: 8px;
    font-size: calc(14px + 0.5vw);
    width: 80%;
    border: 1px solid antiquewhite;
    color: ${(props) => props.$color};
`;

const Button = styled.button`
    padding: 10px 15px;
    margin: 5px;
    border: 5px solid antiquewhite;
    background-color: darkgoldenrod;
    color: white;
    font-size: 1rem;
`;

export default function Prj() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [output, setOutput] = useState(0);
    const [color, setColor] = useState("black");

    function updateColor(value: number) {
        setColor(value >= 0 ? "black" : "red");
    }

    function doAdd() {
        const res = Number(num1) + Number(num2);
        setOutput(res);
        updateColor(res);
    }

    function doSub() {
        const res = Number(num1) - Number(num2);
        setOutput(res);
        updateColor(res);
    }

    function doMul() {
        const res = Number(num1) * Number(num2);
        setOutput(res);
        updateColor(res);
    }

    function doDiv() {
        const res = Number(num1) / Number(num2);
        setOutput(res);
        updateColor(res);
    }

    function doExp() {
        const base = Number(num1);
        const power = Number(num2);
        let result = 1;
        for (let i = 0; i < power; i++) {
            result *= base;
        }
        setOutput(result);
        updateColor(result);
    }

    function doClear() {
        setNum1("");
        setNum2("");
        setOutput(0);
        setColor("black");
    }

    return (
        <Main>
            <Calculator>
                <h4>Calculator</h4>

                <label>Enter:</label>
                <Input
                    id="one"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />

                <label>Enter:</label>
                <Input
                    id="two"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />

                <div>
                    <Button onClick={doAdd}>+</Button>
                    <Button onClick={doSub}>-</Button>
                    <Button onClick={doMul}>*</Button>
                    <Button onClick={doDiv}>/</Button>
                    <Button onClick={doExp}>^</Button>
                    <Button onClick={doClear}>Clear</Button>
                </div>

                <Output id="output" $color={color}>{output}</Output>
            </Calculator>
        </Main>
    );
}

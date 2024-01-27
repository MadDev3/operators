'use client'
import React from 'react';
import styled from "styled-components";



interface IOperator {
    title: string,
    key: string,
    color: string,
}


const Panel = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-family: "Roboto Mono", sans-serif;
`



function Operator(props: IOperator) {

    const Circle = styled.div`
    background-color: ${props.color};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
`

    return (
        <Panel>
            <Circle color={props.color}></Circle>
            <div>{props.title}</div>
        </Panel>
    );
}

export default Operator;
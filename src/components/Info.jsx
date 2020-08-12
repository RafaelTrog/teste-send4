import React from 'react'
import styled from 'styled-components'
import logoSend4 from '../assets/send4.jpg'

const InfosStyle = styled.div`
    width: 600px;
    height: 120px;
    border-radius: 30px;
    border: 20px solid #371f59;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    overflow: hidden;
    padding: 0 30px;
    margin: 50px 0 0 50px;
    background-color: #532f86;
    img {
        width: 100px !important;
    }
    span {
        color: #fff;
        font-size: 30px;
    }
`

function Infos() {
    return (
        <InfosStyle>
            <img src={logoSend4} alt="Send4"></img>
            <span>Teste Front-End - Rafael Trog</span>
        </InfosStyle>
    )
}

export default Infos
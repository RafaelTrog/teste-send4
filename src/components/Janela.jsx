import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import glass from '../assets/glass.png'

const JanelaStyle = styled.button`
    outline: none;
    border: 2px solid #6d3737;
    width: 40px;
    height: 40px;
    color: #fff;
    margin: 10px;
    background: url(${glass});
    background-color: ${(props) => (props.luz ? '#ffffa3' : '#3d3d3d')};
    background-position: top left;
    background-repeat: no-repeat;
    cursor: pointer;
`

function Janela({numeroJanela, controle}) {
    const [luz, setLuz] = useState(false)

    useEffect(() => {
        setLuz(controle)
    }, [controle])

    return (
        <JanelaStyle
            luz={luz}
            onClick={
                () => {
                    setLuz(!luz)
                }
            }
        >
            {/* {numeroJanela} */}
        </JanelaStyle>
    )

}

export default Janela
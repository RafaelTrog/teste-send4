import React, { useState} from 'react'
import styled from 'styled-components'
import Janela from './Janela'
import { FaRegLightbulb } from 'react-icons/fa'
import { FaLightbulb } from 'react-icons/fa'
import building from '../assets/building.png'

const PredioStyle = styled.div`
    width: 200px;
    height: 300px;
    padding: 30px 20px 50px 20px;
    // border: 1px solid #cc8229;
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: url(${building}) no-repeat;
    // background-color: #ffa333;
`

const ControleStyle = styled.div`
    width: 80px;
    height: 100px;
    border: 3px solid #383838;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    background-color: #595959;
    position: absolute;
    right: -120px;
    bottom: -20px;
`
const BotaoStyle = styled.button`
    width: 40px;
    height: 40px;
    margin: 10px 0;
    background-color: #c41414;
    color: #fff;
    border-radius: 10px;
    outline: none;
    border: 2px;
    border-style: solid;
    border-color: #8a0e0e;
    font-size: 20px;
    padding-top: 5px;
    cursor: pointer;
    &:active {
        background-color: #ab1313;
    }
`

function Predio({numeroJanelas = 12}) {
    const [controle, setControle] = useState(false)

    const renderPredio = () => {
        let janelas = []
        for (let index = 0; index < numeroJanelas; index++) {
            janelas.push(<Janela key={index + 1} controle={controle} numeroJanela={index + 1} />)
        }

        return janelas
    }

    return (
        <>
            <ControleStyle>
                <BotaoStyle
                    onClick={
                        () => {
                            setControle(!controle)
                            console.log(controle)
                        }
                    }
                >
                    {controle ? <FaLightbulb /> : <FaRegLightbulb />}
                </BotaoStyle>
            </ControleStyle>

            <PredioStyle>
                {renderPredio()}
            </PredioStyle>
        </>
    )

}

export default Predio
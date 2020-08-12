import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Predio from './Predio'
import background from '../assets/background.png'

const CenarioStyle = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 30px;
    border: 20px solid #371f59;
    // background-color: #308cff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${(props) => (props.noite ? '#103563' : '#308cff')};
`

const FilmStyle = styled.div`
    width: 500px;
    height: 500px;
    background: url(${background}) no-repeat;
`

function Cenario() {
    const [location, setLocation] = useState(false)
    const [status, setStatus] = useState(false)

    let getInfos = async (lat, long) => {
        let res = await axios.get("https://api.sunrise-sunset.org/json?&formatted=0", {
            params: {
                lat: lat,
                lng: long
            }
        })
        
        const sunrise = res.data['results']['sunrise']
        const sunset = res.data['results']['sunset']
        
        compare(sunset, sunrise)        
    }

    let compare = (sunset, sunrise) => {
        let Osunrise = new Date(sunrise);
        let Osunset = new Date(sunset);
        let nowData = new Date();

        let hSunrise = Osunrise.getTime();

        let hSunset = Osunset.getTime();

        let hNow = nowData.getTime();


        let dataHoje = new Date();
        let diaHoje = dataHoje.getDate();
        let mesHoje = parseInt(dataHoje.getMonth()) + 1;
        let anoHoje = dataHoje.getFullYear();

        let novoMesHoje = '';
        if (mesHoje < 10) {
            novoMesHoje = '0' + mesHoje;
        }else {
            novoMesHoje = mesHoje.toString();
        }

        let dataAtual = (anoHoje + '-' + novoMesHoje + '-' + diaHoje);

        let dataInicio = new Date(dataAtual + "T00:00:00+00:00");

        let milisInicio = dataInicio.getTime();

        let dataFim = new Date(dataAtual + "T23:59:59+00:00");

        let milisFim = dataFim.getTime();

        if ((hSunrise > hNow) && (hNow > milisInicio)) {
            setStatus(true);
        }else if ((hSunrise < hNow) && (hNow < hSunset)) {
            setStatus(false);
        }else if ((hSunset < hNow) &&  (hNow < milisFim)) {
            setStatus(true);
        }
    }

    useEffect(() => {
        console.log(status)
    }, [status])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getInfos(position.coords.latitude, position.coords.longitude)
            setLocation(true)
        })
    }, [])

    if (!location) {
        return (
            <>
                Geolocalização desabilitada!
            </>
        )
    } else if (location) {
        return (
            <CenarioStyle noite={status}>
                <FilmStyle />
                <Predio numeroJanelas={12} />
            </CenarioStyle>
        )
    }

}

export default Cenario
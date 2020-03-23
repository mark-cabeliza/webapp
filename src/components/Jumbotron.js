import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import court from '../assets/court.jpg';

const Styles = styled.div`
.jumbo {
    background: url(${court}) no-repeat fixed bottom;
    babckground-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
}

.overlay{
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    botton: 0;
    right: 0;
    z-index: -1;
}

`;


export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                
                
            </Container>
        </Jumbo>
    </Styles>
)
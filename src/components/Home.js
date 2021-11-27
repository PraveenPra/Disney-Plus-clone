import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Movies from './Movies'
import Viewers from './Viewers'

function Home() {
    return (
        <Container>
            
            <ImageSlider/>
            <Viewers/>
            <Movies/>
        </Container>
    )
}

export default Home

const Container = styled.main`
min-height:calc(100vh - 70px);
padding: 0 25px;
position:relative;
overflow-X:hidden;
&:before{
    background:url('/images/home-background.png') center center / cover no-repeat fixed;
    content:'';
z-index:-1;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
}
`
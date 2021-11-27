import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
            <NavMenu>
<a >
    <img src='/images/home-icon.svg'/>
    <span>Home</span>
</a>

<a >
    <img src='/images/search-icon.svg'/>
    <span>search</span>
</a>

<a >
    <img src='/images/watchlist-icon.svg'/>
    <span>watchlist</span>
</a>

<a >
    <img src='/images/original-icon.svg'/>
    <span>originals</span>
</a>

<a >
    <img src='/images/movie-icon.svg'/>
    <span>movies</span>
</a>

<a >
    <img src='/images/series-icon.svg'/>
    <span>series</span>
</a>
      
      
            </NavMenu>
            <UserImage src='logo192.png' />
        </Nav>
    )
}

export default Header

const Nav = styled.div`
overflow-X:hidden;
height:70px;
background:#090b13;
display:flex;
align-items:center;
padding:0 30px;
`
const Logo = styled.img`
width:80px;

`

const NavMenu = styled.div`
display:flex;
flex:1;
margin-left:1em;
a{
    cursor:pointer;
    display:flex;
align-items:center;
padding:0 12px;

img{
    height:1.3em;
}

span{
    font-size:1em;
    position:relative;
    &:after{
        content:'';
        background:white;
        height:2px;
        position:absolute;
        // opacity:0;
        transform:scaleX(0);
        transition: all 250ms linear;
        left:0;
        right:0;
        bottom:-5px;
    }
}

&:hover{
    span:after{
        transform:scaleX(1);

    }
}
}

@media(max-width:768px){
    display:none;
}`

const UserImage = styled.img`
height:3em;
width:3em;
border-radius:50%;
@media(max-width:768px){
    transform:translateX(600%);
}
`
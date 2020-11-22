// Write your Character component here
import React from 'react'
import styled from 'styled-components'
// import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap")

//styled container for character cards
const Container = styled.div ` 
p {
    font-color: #292222;
    
}

width: 20%;
background-color: #d1edf2;

margin: 5% auto;

transition: .5s ease-in-out;
:hover {
transition: .2s ease-in-out;
transform: scale(1.1);
color: #ff0000;
font-weight: bold;
opacity: 0.5; 
}

`

const StarChars = (props) => {
    return  (
        <Container>
        <p>{`Name : ${props.data.name}`}</p> 
        <p>{`Height: ${props.data.height}cm`}</p>
        <p>{`Mass: ${props.data.mass}kg`}</p>
        <p>{`Hair Color: ${props.data.hair_color}`}</p>
        <p>{`Skin Color: ${props.data.skin_color}`}</p>
        </Container>
    )

}

export default StarChars
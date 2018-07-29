import React from 'react'
import puppy from '../Uber-Puppies.jpg'
import cat from '../cat-image.png'

const PlayerImage = ({player}) =>
    player === 'O'  ?  <img src={cat}/> : player !== '' ? <img src={puppy}/> : '';

    export default PlayerImage
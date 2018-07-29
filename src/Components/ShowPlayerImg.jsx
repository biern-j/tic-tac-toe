import React from 'react'
import puppy from '../Uber-Puppies.jpg'
import cat from '../cat-image.png'

const PlayerImage = ({style, player}) =>
    player === 'O'  ?  <img style={style} src={cat}/> : player !== '' ? <img style={style} src={puppy}/> : '';

    export default PlayerImage
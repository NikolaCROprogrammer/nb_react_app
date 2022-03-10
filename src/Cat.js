import React from 'react';
import {Link} from 'react-router-dom';

function Cat(props) {
  const { type = '',
          text = '%20',
          fontSize = '50',
          color = 'white',
          filter = '',
          width = '',
          height = ''
        } = props;

  const uniqueNum = Math.random();
  const url = `https://cataas.com/cat/${type}/says/${text}?s=${fontSize}&c=${color}&filter=${filter}&width=${width}&height=${height}&uniqueNum=${uniqueNum}`;

  return (
    <button class='img_button' ><Link to="/CatData" ><img class="cat_img"  src={url}  /></Link></button>
  )

}
export default Cat;
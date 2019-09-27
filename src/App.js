import React, { useState } from 'react';

import { Container, Image } from './style';
import { TiHeart } from 'react-icons/ti';

export default function App() {
  const [like, setLike] = useState(0);

  function handleClick() {
    setLike(like + 1);
  }

  return (
    <>
      <Container>
        <Image>
          <img
            src="https://img.elo7.com.br/product/zoom/2074773/pacote-com-41-matrizes-de-bordados-pokemon-pikachu-pokebola-barudam.jpg"
            alt="Pokemon"
            height="500"
            width="500"
          />
        </Image>
        <TiHeart size="100" onClick={handleClick}></TiHeart>
        {like}
      </Container>
    </>
  );
}

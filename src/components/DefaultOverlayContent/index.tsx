import React from 'react';

import { Container, Heading, Buttons } from './styles';


// A tipagem interface Props define as propriedades do componente, 
// sendo nesse caso apenas a propriedade label do tipo string.
interface Props {
  label: string
  description: string
}

const DefaultOverlayContent: React.FC<Props> = ({
  label, description
}) => {
  // A função React.FC é uma tipagem que indica que o 
  // componente é uma função de componente do React que 
  // aceita qualquer propriedade. 
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>
      
      <Buttons>
        <button>Order Now</button>
        <button className="white">Demo Drive</button>
      </Buttons>

    </Container>
  )
}

// Ao exportar a função com export default DefaultOverlayContent, 
// ela pode ser importada e usada em outros arquivos 
// como um componente React.
export default DefaultOverlayContent
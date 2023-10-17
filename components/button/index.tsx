import React from 'react';
import { Element, Text, ArrowForward } from './style';

interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return (
    <Element>
      <Text>{text}</Text>
      <ArrowForward />
    </Element>
  );
}

export default Button;

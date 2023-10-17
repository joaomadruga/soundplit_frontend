import React from 'react';
import { Container, InputText, Label } from './style';

interface InputProps {
  label?: string;
  placeholder: string;
  type: 'email' | 'password' | 'text';
}

function Input({ label, placeholder, type }: InputProps) {
  return (
    <Container>
      {label ? <Label htmlFor={type}>{label}</Label> : null}
      <InputText
        id={`input-${type}`}
        required
        type={type}
        placeholder={placeholder}
      />
    </Container>
  );
}

export default Input;

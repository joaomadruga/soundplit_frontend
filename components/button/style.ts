import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';

export const Element = styled.div`
  border-radius: 30px;
  padding: 18px 24px;
  display: flex;
  flex-direction: row;
  background-color: #f85b36;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 123px;
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #fefefe;
`;

export const ArrowForward = styled(FiArrowRight)`
  font-size: 18px;
  color: #fefefe;
`;

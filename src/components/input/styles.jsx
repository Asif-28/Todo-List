import styled from "styled-components";
import { BsPlusCircle } from 'react-icons/bs';

export const Con = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  @media (max-width: 500px) {
    padding-left:.4rem;
    padding-right:.4rem;
    
  }
`;

export const InputCon = styled.input`
  padding: 0.6rem 1rem;
  font-size: 1.2rem;
  outline: none;
  border-radius: 6px;
  border: 1.2px solid black;
  flex: 1;
  @media (max-width: 500px) {
    padding: 0.4rem .7rem;
    font-size: 1.2rem;
  }
`;

export const StyledPlusIcon = styled(BsPlusCircle)`
  font-size: 1.8rem;
  color: black;
  font-weight: 600;
  cursor: pointer;
`;

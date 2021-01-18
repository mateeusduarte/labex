import styled from 'styled-components';
import { device } from '../../../../constants/breakpoints';
import { slideRightAnimation } from '../../../Animations/slideRightAnimation';

export const ViagemInfoBoxContainer = styled.div`
  color: white;
  background-color: rgb(113, 113, 113, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  margin-left: 5vw;
  margin-bottom: 15vh;
  padding-bottom: 2vh;
  animation: ${slideRightAnimation} 4s;
  @media ${device.cel} {
    width: 70vw;
    margin-bottom: 30vh;
    margin-right: 10vw;
  }
`;

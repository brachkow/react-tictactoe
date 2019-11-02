import styled, { css, keyframes } from 'styled-components';
import color from '../../color';

const Bump = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const Cell = styled.button`
  display: block;
  ${props => {
    let cssFragment;
    if (props.value === '') {
      cssFragment = css`
        cursor: pointer;
      `;
    } else {
      cssFragment = css`
        cursor: not-allowed;
      `;
    }
    return cssFragment;
  }};
  border: none;
  padding: 0;
  margin: 8px;
  width: calc((100% - 48px) / 3);
  border-radius: 4px;
  font-size: 0;
  ${props => {
    let cssFragment;
    if (props.value === 'x') {
      cssFragment = css`
        background-image: url("data:image/svg+xml,%3Csvg fill='none' height='157' viewBox='0 0 159 157' width='159' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23eb4747'%3E%3Cpath d='m7.48528 1.82843c1.5621-1.5621 4.09472-1.5621 5.65682 0l141.9249 141.92457c1.562 1.563 1.562 4.095 0 5.657l-5.657 5.657c-1.562 1.562-4.094 1.562-5.657 0l-141.92457-141.9249c-1.562097-1.5621-1.5621-4.09472 0-5.65682z'/%3E%3Cpath d='m151.326 1.82843c-1.562-1.5621-4.095-1.5621-5.657 0l-141.92497 141.92457c-1.5621 1.563-1.5621 4.095 0 5.657l5.65685 5.657c1.56212 1.562 4.09472 1.562 5.65682 0l141.9253-141.9249c1.562-1.5621 1.562-4.09472 0-5.65682z'/%3E%3C/g%3E%3C/svg%3E");
      `;
    } else if (props.value === 'o') {
      cssFragment = css`
        background-image: url("data:image/svg+xml,%3Csvg width='157' height='157' viewBox='0 0 157 157' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M78.5 157C121.854 157 157 121.854 157 78.5C157 35.1456 121.854 0 78.5 0C35.1456 0 0 35.1456 0 78.5C0 121.854 35.1456 157 78.5 157ZM78.5 141C113.018 141 141 113.018 141 78.5C141 43.9822 113.018 16 78.5 16C43.9822 16 16 43.9822 16 78.5C16 113.018 43.9822 141 78.5 141Z' fill='%2347B4EB'/%3E%3C/svg%3E");
      `;
    } else {
      cssFragment = css`
        background-image: none;
      `;
    }
    return cssFragment;
  }};
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  ${props => {
    let cssFragment;
    if (props.isOnWonRoute) {
      cssFragment = css`
        background-color: ${color.green};
        animation-name: ${Bump};
        animation-duration: 300ms;
        transition-duration: 300ms;
      `;
    } else {
      cssFragment = css`
        background-color: ${color.gray.initial};
      `;
    }
    return cssFragment;
  }};
  ${props => {
    let cssFragment;
    if (props.wonRoute !== undefined) {
      if (props.id === props.wonRoute[0]) {
        cssFragment = css`
          animation-delay: 0ms;
        `;
      }

      if (props.id === props.wonRoute[1]) {
        cssFragment = css`
          transition-delay: 300ms;
          animation-delay: 300ms;
        `;
      }

      if (props.id === props.wonRoute[2]) {
        cssFragment = css`
          transition-delay: 600ms;
          animation-delay: 600ms;
        `;
      }
    }
    return cssFragment;
  }};
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  &:hover,
  &:focus {
    ${props => {
      let cssFragment;
      if (!props.isGameOver && props.value === '') {
        cssFragment = css`
          background-color: ${color.gray.hover};
        `;
      }
      return cssFragment;
    }};
  }
  &:active {
    ${props => {
      let cssFragment;
      if (!props.isGameOver && props.value === '') {
        cssFragment = css`
          background-color: ${color.gray.active};
        `;
      }
      return cssFragment;
    }};
  }
  &:focus {
    ${props => {
      let cssFragment;
      if (props.turn === 'x') {
        cssFragment = css`
          outline-color: ${color.red};
        `;
      } else if (props.turn === 'o') {
        cssFragment = css`
          outline-color: ${color.blue};
        `;
      }
      return cssFragment;
    }};
  }
  transition-property: background-color, border-color;
  transition-duration: 300ms;
`;

export default Cell;

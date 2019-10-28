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
  cursor: pointer;
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
        background-image: url("data:image/svg+xml,%3Csvg width='159' height='157' viewBox='0 0 159 157' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.48528 1.82843C9.04738 0.26633 11.58 0.26633 13.1421 1.82843L155.067 143.753C156.629 145.316 156.629 147.848 155.067 149.41L149.41 155.067C147.848 156.629 145.316 156.629 143.753 155.067L1.82843 13.1421C0.266333 11.58 0.26633 9.04738 1.82843 7.48528L7.48528 1.82843Z' fill='%23EB4747'/%3E%3Cpath d='M151.326 1.82843C149.764 0.26633 147.231 0.26633 145.669 1.82843L3.74403 143.753C2.18193 145.316 2.18193 147.848 3.74403 149.41L9.40088 155.067C10.963 156.629 13.4956 156.629 15.0577 155.067L156.983 13.1421C158.545 11.58 158.545 9.04738 156.983 7.48528L151.326 1.82843Z' fill='%23EB4747'/%3E%3C/svg%3E%0A");
      `;
    } else if (props.value === 'o') {
      cssFragment = css`
        background-image: url("data:image/svg+xml,%3Csvg width='157' height='157' viewBox='0 0 157 157' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M78.5 157C121.854 157 157 121.854 157 78.5C157 35.1456 121.854 0 78.5 0C35.1456 0 0 35.1456 0 78.5C0 121.854 35.1456 157 78.5 157ZM78.5 141C113.018 141 141 113.018 141 78.5C141 43.9822 113.018 16 78.5 16C43.9822 16 16 43.9822 16 78.5C16 113.018 43.9822 141 78.5 141Z' fill='%2347B4EB'/%3E%3C/svg%3E%0A");
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
          animation-delay: 300ms;
        `;
      }

      if (props.id === props.wonRoute[2]) {
        cssFragment = css`
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
  &:hover {
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
  transition-property: background-color;
  transition-duration: 300ms;
`;

export default Cell;

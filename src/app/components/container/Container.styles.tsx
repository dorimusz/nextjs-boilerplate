'use client';
import styled from 'styled-components';

type ContainerProps = {
  $fullWidth?: boolean;
  $background?: string;
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1450px; // Optional: Set a max-width to control the container width
  height: fit-content; // TODO set to 100vh or add height as porps to the component
  min-height: 100vh;

  box-sizing: border-box; // Ensure padding is included in the element's total width and height
  margin: 0 auto; // Center the container horizontally */
  margin-top: 90px;

  background-color: aquamarine;
`;

const Container = styled.div<ContainerProps>`
  height: ${(props) =>
    props.$fullWidth ? '100vh' : 'max-content'}; // TODO: fit content
  background-color: ${(props) => (props.$fullWidth ? 'chartreuse' : 'red')};
  width: ${(props) => (props.$fullWidth ? '100vw' : '95%')};
  padding: 0 5px;
`;

export { Container, MainContainer };

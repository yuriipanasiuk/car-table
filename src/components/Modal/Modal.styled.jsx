import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(17, 17, 17, 0.1);

  backdrop-filter: blur(1px);
`;

export const StyledModal = styled.div`
  max-width: calc(100vw - 20px);
  max-height: calc(100vh - 20px);
  overflow: auto;
`;

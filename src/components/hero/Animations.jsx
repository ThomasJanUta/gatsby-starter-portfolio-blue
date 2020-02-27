import styled, {keyframes,css} from "styled-components";

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`;

const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`;

const upDownAnimation = css`
  ${upDown} 4s ease-in-out infinite alternate;
`;

const upDownWideAnimation = css`
  ${upDownWide} 18s ease-in-out infinite alternate;
`;

export const UpDown = styled.div`
  animation: ${upDownAnimation};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 70vh;
`;

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 70vh;
`;

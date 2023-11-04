import styled from "styled-components";

export interface IBaseContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  dir?: string;
  height?: string;
  width?: string;
  gap?: string;
  flexWrap?: string;
  p?: string;
  margin?: string;
  bg?: string;
  justifyContent?: string;
  alignItems?: string;
  color?: string;
}

// export const BaseContainer = styled.div<IBaseContainerProps>`

// `;

const BaseContainer = styled.div<IBaseContainerProps>`
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  text-align: center;
  flex-direction: ${({ dir }) => dir || "row"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "wrap"};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  gap: ${({ gap }) => gap};
  padding: ${({ p }) => p};
  margin: ${({ margin }) => margin};
  background-color: ${({ bg }) => bg || "#2d2d2d"};
  color: ${({ color }) => color || "#fcfcfc"};
  box-sizing: border-box;
`;

export const BodyContainer = styled(BaseContainer)<IBaseContainerProps>`
  display: flex;
  background-color: #121212;
`;

export const Container = styled(BaseContainer)`
  display: flex;
  justify-content: start;
  flex-direction: column;
  height: calc(100vh - 80px);
  width: 100%;
  padding: 20px;
  overflow-y: auto;
`;

import styled from "styled-components";

export interface IBaseContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  flexDir?: string;
  height?: string;
  width?: string;
  gap?: string;
  flexWrap?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
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
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  gap: ${({ gap }) => gap};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  background-color: ${({ backgroundColor }) => backgroundColor || "#2d2d2d"};
  color: ${({ color }) => color || "#fcfcfc"};
  box-sizing: border-box;
`;

export const BodyContainer = styled(BaseContainer)<IBaseContainerProps>`
  display: flex;
`;

export const Container = styled(BaseContainer)`
  display: flex;
  justify-content: start;
  flex-direction: column;
  height: calc(100vh - 80px);
  width: 100%;
  padding: 20px;
`;

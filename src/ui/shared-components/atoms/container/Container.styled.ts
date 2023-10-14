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
}

// export const BaseContainer = styled.div<IBaseContainerProps>`

// `;

export const BodyContainer = styled.div<IBaseContainerProps>`
  display: flex;
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
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

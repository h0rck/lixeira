import styled from "styled-components";

export type columnType = {
  mobile?: number,
  desktop?: number,
  padding?: string
};

export const Column = styled.div<columnType>`
  float: left;
  ${({padding}) => padding && `padding: ${padding};`}
  
  /* box-sizing: border-box; */

  @media only screen and (max-width:900px){
    ${({mobile}) => `width: ${(mobile ? mobile : 12) / 12* 100}%;`}
  }
  
  @media only screen and (min-width:900px){
    ${({desktop}) => `width: ${(desktop ? desktop : 12) / 12* 100}%;`}
  }
`;
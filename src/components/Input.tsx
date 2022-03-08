import styled from "styled-components";
import {Column, columnType} from "./Column";

// import {InputHTMLAttributes} from 'react'

type inputType = columnType & {
  text?: string,
  type: string,
  name: string,
  onChange?: any

}

const InputStyled = styled(Column)`
  input{
    height:35px;
    border-radius: 8px;
    padding: 0 16px;
    background:#fff;
    border: 1px solid #a8a8b3;
    width: 100%;
    margin-top: 16px
  }
  
`;

//htmlFor=""
export function Input (props: inputType) {
  return(
    <InputStyled desktop={props.desktop} mobile={props.mobile} padding={props.padding}>
      {/* <label>{props.text}</label> */}
      <input type={props.type} placeholder={props.text} name={props.name} onChange={props.onChange}/>
    </InputStyled>
  )
  
}
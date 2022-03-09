import styled from "styled-components";
type modalType = {
  children: JSX.Element| JSX.Element[],
}

export function Modal(props:modalType){
  return (
    <ModaGround>
        <ModaMain>
            {props.children}
        </ModaMain>
    </ModaGround>
  )
}

const ModaGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const ModaMain = styled.div`
  position:fixed;
  background: white;
  /* width: 80%; */
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);


  border-radius: 20px; 
  border: 1px solid #e4e4e9; 
  padding: 20px;
 
`;


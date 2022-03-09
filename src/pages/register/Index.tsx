import {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import {Button} from '../../components/Button';

import { Column } from '../../components/Column';

import {Input} from '../../components/Input'
import {Modal} from '../../components/Modal';







export function Register(){

  const [formValues, setFormValues] = useState({})

    const handleInputChange = (e:any) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const handleSubmit = (e:any) => {
      e.preventDefault()
      const formData = new FormData(e.target);
      const value = JSON.stringify(Object.fromEntries(formData))
      console.log(value)

      axios.post(
        'http://localhost:3333/register',value,{headers: {'Content-Type': 'application/json'}})
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }

      // useFetch('/register', 'GET')
   

  return (
        <Modal>
          <Form onSubmit={handleSubmit}>
            <Column>
              <Input type="text" text="Nome completo" name="nome" padding={'1rem'} onChange={handleInputChange}/>
              <Input type="text" text="E-mail" name="email" padding={'1rem'} onChange={handleInputChange} />
              <Input type="password" text="Senha" name="senha" padding={'1rem'} onChange={handleInputChange}/>
              {/* <Input type="password" text="Senha" name="senha2" desktop={5} padding={'1rem'} onChange={handleInputChange}/> */}
              <Column>
                <Button>Registrar</Button> 
              </Column>
            </Column>
              
          </Form>
        </Modal>
  )

}

const Form = styled.form`
  width: 500px;
  display: flex;
  align-items: center;
  padding: 0 10%;

  @media only screen and (max-width: 900px) { 
      height: 100vh;
      width: 100vh;
    }
`;

// const Main = styled.main`
//     position: fixed;
//     z-index: 1;
//     margin: 100px calc(50% - 400px);
//     background: #fff;  
//     height: 500px;
//     border-radius: 20px; 
//     border: 1px solid #e4e4e9; 
    
//   }
    
// `;
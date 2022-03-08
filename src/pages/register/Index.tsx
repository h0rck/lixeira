import {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import {Button} from '../../components/Button';

import { Column } from '../../components/Column';

import {Input} from '../../components/Input'


const Main = styled.main`
    position: fixed;
    z-index: 1;
    margin: 100px calc(50% - 400px);
    background: #fff;  
    height: 500px;
    border-radius: 20px; 
    border: 1px solid #e4e4e9; 
    @media only screen and (max-width: 900px) { 
      margin: 0;

        height: 100vh;

     }
  }
    
`;
const Form = styled.form`
  margin: 40px 0;
  padding: 50px;

  @media only screen and (max-width: 900px) { 
      margin: 10%;

     }

`;



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
        <Main>
          <Form onSubmit={handleSubmit}>
              <Input type="text" text="Nome completo" name="nome" desktop={5} padding={'1rem'} onChange={handleInputChange}/>
              <Input type="text" text="E-mail" name="email" desktop={6} padding={'1rem'} onChange={handleInputChange} />
              <Input type="password" text="Senha" name="senha" desktop={5} padding={'1rem'} onChange={handleInputChange}/>
              {/* <Input type="password" text="Senha" name="senha2" desktop={5} padding={'1rem'} onChange={handleInputChange}/> */}
              <Column>
                <Button>Registrar</Button> 
              </Column>
          </Form>
        </Main>
  )

}
import {useState} from 'react';

import {PageAuth,MainContent,CreateRoom,Separator} from './Styled';

import {Button} from '../../components/Button';

import { Register } from '../register/Index';
import { Input } from '../../components/Input';
import axios from 'axios';

export function Login(){
  const [modalVisible, setModalVisible] = useState<Boolean>(false)
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
        'http://localhost:3333/authenticate',value,{headers: {'Content-Type': 'application/json'}})
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }
    
  return (
    <>
      <Register/>
      <PageAuth >
        <aside>
          <img src="" alt="Ilustração" />
          <strong></strong>
          <p></p>
        </aside>
        <main>
          <MainContent>
            
            <form onSubmit={handleSubmit}>
              <Input type="text" text="E-mail" name="email" onChange={handleInputChange}/>
              <Input type="password" text="password" name="senha" onChange={handleInputChange}/>
              <Button> Entrar </Button>
            </form>
            <Separator onClick={() =>setModalVisible(true)}>Registrar-se</Separator>
          </MainContent>
        </main>
      </PageAuth>
    </>
  )
}
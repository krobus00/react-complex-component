import { Paper, Typography, Button } from '@material-ui/core'
import React, { useState } from 'react'
import Input from './Input'

function Form() {
  const validasi = {
    email: (value) => {
      const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
      if (value === '') {
        return 'tidak boleh kosong'
      } else if (!validEmail.test(value)) {
        return 'tidak valid'
      } else {
        return ''
      }
    },
    password: (value) => {
      if (value === '') {
        return 'tidak boleh kosong'
      } else if (value.length < 8) {
        return 'minimal 8 karakter'
      } else {
        return ''
      }
    },
  }
  const [state, setState] = useState({
    email: '',
    password: '',
  })
  const [error, seterror] = useState({
    email: '',
    password: '',
  })
  const onChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value })
    seterror({ ...error, [e.target.id]: validasi[e.target.id](e.target.value) })
  }
  return (
    <div
      style={{
        minHeight: '80vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper style={{ padding: '2em', maxWidth: '300px' }}>
        <Typography variant='h5' align='center'>
          LOGIN
        </Typography>
        <Typography variant='body1' align='center'>
          Masukan email dan password
        </Typography>
        <Input
          id='email'
          label='Email'
          onChange={onChange}
          value={state.email}
          error={error.email}
        ></Input>
        <Input
          id='password'
          label='Password'
          onChange={onChange}
          value={state.password}
          error={error.password}
        ></Input>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant='outlined' color='primary'>
            Regis
          </Button>

          <Button variant='contained' color='primary'>
            Login
          </Button>
        </div>
      </Paper>
    </div>
  )
}

export default Form

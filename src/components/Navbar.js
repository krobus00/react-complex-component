import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

function Navbar() {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h6'>Login page</Typography>
          <Button style={{ color: 'white' }} variant='outlined'>
            Registrasi
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar

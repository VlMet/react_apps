import { AppBar, Toolbar, Typography } from '@mui/material'

export default function AppHeader() {
  return (
    <AppBar position="static" component="header">
      <Toolbar>
        <Typography variant="h6">App</Typography>
      </Toolbar>
    </AppBar>
  )
}
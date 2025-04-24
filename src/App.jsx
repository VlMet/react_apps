import { AppBar, Toolbar, Typography, Box, Card, Grid, Container } from '@mui/material';
import AppHeader from './components/AppHeader';

export default function App() {
  return (
    <Box sx={{ height: "100vh" }}>
      <AppHeader />
      
      <Grid container sx={{ height: "calc(100vh - 64px)", p: 2 }} spacing={2}>
        <Grid item size={{xs:12, sm: 5, lg:3}} sx={{ height: "100%" }}>
          <Card sx={{ height: "100%", p: 2 }}>123</Card>
        </Grid>
        <Grid item size={{xs:12, sm: 7, lg:9}} sx={{ height: "100%" }}>
          <Card sx={{ height: "100%", p: 2 }}>456</Card>
        </Grid>
      </Grid>
    </Box>
  );
}

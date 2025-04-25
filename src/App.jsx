import { AppBar, Toolbar, Typography, Box, Card, Grid, Container } from '@mui/material';
import AppHeader from './components/AppHeader';
import AppSider from './components/AppSider';
import AppContent from './components/AppContent';

export default function App() {
  return (
    <Box sx={{ height: "100vh" }}>
      <AppHeader />
      
      <main>
        <Grid container sx={{ height: "calc(100vh - 64px)", p: 2 }} spacing={2}>
          <Grid item size={{xs:12, sm: 5, lg:3}} sx={{ height: "100%" }}>
            <AppSider />
          </Grid>
          <Grid item size={{xs:12, sm: 7, lg:9}} sx={{ height: "100%" }}>
            <AppContent />
          </Grid>
        </Grid>
      </main>
    </Box>
  );
}

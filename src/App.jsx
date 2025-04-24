import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Container } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';

export default function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Шапка */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6">My App</Typography>
        </Toolbar>
      </AppBar>

      {/* Боковое меню */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        }}
      >
        <Toolbar /> {/* Отступ под AppBar */}
        <List>
          {['Item 1', 'Item 2'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Основной контент */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: '240px', marginTop: '64px' }}>
        <Container>
          <Typography paragraph>Основной контент приложения...</Typography>
        </Container>
      </Box>

      {/* Подвал */}
      <Box component="footer" sx={{ py: 3, textAlign: 'center' }}>
        <Typography>Footer © 2024</Typography>
      </Box>
    </Box>
  );
}

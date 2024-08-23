import {Routes, Route, Link} from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './components/About';
import {Cabanas} from './components/Cabanas';
import {Medicine} from './components/Medicine';
import {AppBar, Toolbar, Box, Container, Typography} from '@mui/material';


function App() {
  return (
  <Container maxWidth={"false"} disableGutters>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Typography variant="h6" component={Link} to="/" color="inherit" sx={{ textDecoration: 'none' }}>
              Home
            </Typography>
            <Typography variant="h6" component={Link} to="/about" color="inherit" sx={{ textDecoration: 'none' }}>
              About Us
            </Typography>
            <Typography variant="h6" component={Link} to="/cabanas" color="inherit" sx={{ textDecoration: 'none' }}>
              Cabanas
            </Typography>
            <Typography variant="h6" component={Link} to="/medicine" color="inherit" sx={{ textDecoration: 'none' }}>
              Medicine
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/cabanas" element={<Cabanas/>}/>
    <Route path="/medicine" element={<Medicine/>}/>
  </Routes>
  </Container>
  );
}

export default App;

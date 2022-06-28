import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />

    </Routes>
  )
}

export default App

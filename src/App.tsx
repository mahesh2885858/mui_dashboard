import Header from './components/Header/Header';
import Sidebar from './components/Navigation/Sidebar/Sidebar';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import { HomeMaxRounded } from "@mui/icons-material"
function App() {

  return (
    <>
      <Header />
      <Sidebar />
      <HomeMaxRounded />
      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>
    </>
  )
}

export default App

import {BrowserRouter, Route, Routes} from 'react-router-dom'

// layouts
import {MainLayout} from "./layouts/MainLayout";

// pages
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {Portfolio} from "./pages/Portfolio";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

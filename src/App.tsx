import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Events } from './pages/Events'
import { Hotels } from './pages/Hotels'
import { Contact } from './pages/Contact'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'
import { About } from './pages/About'



function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={< Login />} />
          <Route path="/about" element={< About />} />


        </Routes>
      </Layout>
    </Router>
  )
}

export default App


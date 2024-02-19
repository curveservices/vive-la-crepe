import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './App.scss'
import NotFound from './components/404'
import Contact from './components/Contact'
import Home from './components/Home/Home'
import Layout from './components/Layouts/Layout'
import Menu from './components/Menu/Menu'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="menu" element={<Menu />} />
      <Route path="contact" element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Route>

  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App

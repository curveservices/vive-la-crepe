import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './App.scss'
import Home from './components/Home/Home'
import Layout from './components/Layouts/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App

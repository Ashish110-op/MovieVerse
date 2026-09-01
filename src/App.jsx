
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Applayout } from './layout/Applayout'
import { Home, homeLoader } from './pages/Home'
import { About } from './pages/About';
import Movies, { movieLoder } from './pages/Movies';
import { Contact } from './pages/Contact';
const router = createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    children :[
      {
        index:true,
        element:<Home/>,
        loader:homeLoader,
      },
      {
        path:"about",
        element:<About/>,
      },
      {
        path:"movie",
        element:<Movies/>,
        loader:movieLoder,
      },
      {
        path:"contact",
        element:<Contact/>,
      }
    ],
  },
]);


function App() {

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App

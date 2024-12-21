import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './pages/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './pages/Blog';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: (
          <>
            <Banner></Banner>
            <Services></Services>
            <Projects></Projects>
            <Skills></Skills>
          </>
        )

      },

    ]
  },
  {
    path: '/about',
    element: <About></About>,
  },
  {
    path:'/blog',
    element: <Blog></Blog>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

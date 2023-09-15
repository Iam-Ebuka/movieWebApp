import React from 'react'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Outlet } from "react-router-dom"
import Movie from './pages/Movie'
import Home from './Home/Homepage'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} >
        <Route path="/movies/:id" element={<Movie />} />
        <Route index element={<Home />}/>
      </Route>
    )
  );
  return <RouterProvider router={router} />
}

const Root = () => {
  return(
    <>
    <Outlet />
    </>
  )
}

export default App
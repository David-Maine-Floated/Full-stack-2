import LoginForm from "../components/session/LoginForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as sessionActions from "./store/session";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <LoginForm/>
  }


]);



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   dispatch(sessionActions.restoreSession()).then(() => setIsLoaded(true))
    
  // }, [dispatch])
//this is breaking things. also what does it even do?

  return (
    <RouterProvider router={router} />
  )
}

export default App;

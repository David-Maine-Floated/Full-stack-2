import LoginForm from "../components/session/LoginForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";


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
  return (
    <RouterProvider router={router} />
  )
}

export default App;

import LoginForm from "../components/session/LoginForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as sessionActions from "./store/session";
import SignUpForm from "../components/session/SignUpForm";
import Navigation from "../components/navigation/Navigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "signup",
        element: <SignUpForm />,
      },
    ],
  },
  // {
  //   path: '/login',
  //   element: <LoginForm/>
  // },
  // {
  //   path: '/signup',
  //   element: <SignUpForm />
  // }
]);

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreSession()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;

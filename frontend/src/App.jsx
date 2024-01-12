import LoginForm from "../components/sessionModal/LoginForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as sessionActions from "./store/session";
import SignUpForm from "../components/sessionModal/SignUpForm";
import Navigation from "../components/navigation/Navigation";
import UnLoggedInSplash from "../components/splash/UnLoggedInSplash";
import Modal from "../components/modals/modal";
import SessionModal from "../components/sessionModal/SessionModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        index: true,
        element: (
          <>
            <UnLoggedInSplash />
            <SessionModal />
          </>
        ),
      },
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

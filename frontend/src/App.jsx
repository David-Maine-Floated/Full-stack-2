import LoginForm from "../components/sessionModal/LoginForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as sessionActions from "./store/session";
import SignUpForm from "../components/sessionModal/SignUpForm";
import Navigation from "../components/navigation/Navigation";
import UnLoggedInSplash from "../components/splash/UnLoggedInSplash";
import SessionModal from "../components/sessionModal/SessionModal";
import UserProfileModal from "../components/userProfileModal/userProfileModal";
import WriteArticleForm from "../components/articles/WriteArticleForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navigation />
        <UnLoggedInSplash />
        <SessionModal />
        <UserProfileModal />
      </>
    ),
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
  {
    path: "/write",
    element: (
      <>
        <WriteArticleForm />
        <UserProfileModal />
      </>
    ),
  },
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

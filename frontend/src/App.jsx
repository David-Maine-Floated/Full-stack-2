
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as sessionActions from "./store/session";
import Navigation from "../components/navigation/Navigation";
import UnLoggedInSplash from "../components/splash/UnLoggedInSplash";
import SessionModal from "../components/sessionModal/SessionModal";
import UserProfileModal from "../components/userProfileModal/userProfileModal";
import WriteArticleForm from "../components/articles/WriteArticleForm";
import ArticleDisplay from "../components/articles/ArticleDisplay";
import ArticleIndex from "../components/articleIndex/articleIndex";
import MainBody from "../components/mainBody/MainBody";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navigation />
        <SessionModal />
        <UserProfileModal />
      </>
    ),
    children: [
      {
        index: true,
        element: (
          <>
            <UnLoggedInSplash />  
            <MainBody />
          </>
        ),
      },
      {
        path: `article/:articleId`,
        element: <ArticleDisplay />,
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

  
  return <>{isLoaded && <RouterProvider router={router} />}</>;
}

export default App;

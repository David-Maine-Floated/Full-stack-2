
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
import MainBody from "../components/mainBody/MainBody";
import EditArticle from "../components/articles/EditArticle";
import DeleteModal from "../components/deleteModal/DeleteModal";
import CommentsModal from "../components/commentsModal/CommentsModal";


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
        element: (
          <>
            <ArticleDisplay />
            <CommentsModal />
            <DeleteModal />
          </>
        ),
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
  {
    path: "/edit/:articleId",
    element: (
      <>
        <EditArticle />
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

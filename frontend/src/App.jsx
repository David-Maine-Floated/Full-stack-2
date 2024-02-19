
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
import CommentsModalContent from "../components/commentsModal/CommentsModalContent";
import Footer from "../components/footer/Footer";

import ReactGA from "react-ga";

const TRACKING_ID = "G-1ERV9CE87R"; 
ReactGA.initialize(TRACKING_ID);


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
            <Footer />
          </>
        ),
      },
      {
        path: `article/:articleId`,
        element: (
          <>
            <ArticleDisplay />
            <CommentsModalContent />
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

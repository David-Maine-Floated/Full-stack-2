import ClapButton from "../articleButtons/ClapButton";
import ActiveClapButton from "../articleButtons/ActiveClapButton";
import './ButtonsBar.css'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {showModal } from "../../src/store/modals";
import { createClap, updateClap } from "../../src/store/claps";
import { getArticle } from "../../src/store/articles";

const ButtonsBar = ({article}) => {
  const [clapActive, setClapActive] = useState(false);
  const currentUser = useSelector((state) => state.session.currentUser);
  const claps = article.claps;
  const dispatch = useDispatch();
  // const [clapCount, setClapCount] = useState(0);

  // useEffect(() => {
  //   let count = 0;
  //   for (let clap in claps) {
  //     count += claps[clap].clapCount;
  //   }
  //   setClapCount(count);
  // }, [article, claps]);

  let count = 0;
  if(article) {
    for (let clap in claps) {
      console.log(claps[clap])
      count += claps[clap].clapCount;
    }
  }
  // console.log('CLAPS', claps)
  // const addClap = async () => {
  //   setClapActive(true);
  //   setTimeout(() => {
  //     setClapActive(false);
  //   }, 250);
  //   debugger
  //   if (claps && !claps[currentUser.user.id]) {
  //     debugger
  //     await dispatch(
  //       createClap({ article_id: article.id, liker_id: currentUser.user.id })
  //     );
  //   } else {
  //     let clap = article.claps[currentUser.user.id];
  //     clap.clapCount += 1;
  //     await dispatch(
  //       updateClap({
  //         clap: {
  //           id: clap.id,
  //           article_id: clap.articleId,
  //           liker_id: clap.likerId,
  //           clap_count: clap.clapCount,
  //         },
  //       })
  //     );
  //   }
  // };

    const addClap = async () => {
      setClapActive(true);
      setTimeout(() => {
        setClapActive(false);
      }, 250);
      if (claps && claps[currentUser.user.id]) {
        let clap = article.claps[currentUser.user.id];
        clap.clapCount += 1;
        await dispatch(
          updateClap({
            clap: {
              id: clap.id,
              article_id: clap.articleId,
              liker_id: clap.likerId,
              clap_count: clap.clapCount,
            },
          })
        );     
      } else {
        await dispatch(
          createClap({ article_id: article.id, liker_id: currentUser.user.id })
        );
      }
      //there's gotta be a better way? seems expensive.
      dispatch(getArticle(article.id))
    };

  if (!currentUser.user) return null;

  return (
    <div className="articleButtons">
      <div className="aritcleButtonsLeft">
        <div className="button" onClick={addClap}>
          {clapActive ? <ActiveClapButton /> : <ClapButton />}
        </div>
        <span>{count}</span>
        {/* <div className="button">
            <p onClick={() => dispatch(showModal("commentsModal"))}>Comments</p>
          </div> */}
      </div>
      <div className="articleButtonsRight">
        {currentUser.user.id === article.authorId && (
          <>
            <div className="button">
              <NavLink
                className="NavLink"
                to={`/edit/${article && article.id}`}
              >
                Edit
              </NavLink>
            </div>
            <div className="button">
              <span onClick={() => dispatch(showModal("deleteModal"))}>
                Delete Story
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ButtonsBar
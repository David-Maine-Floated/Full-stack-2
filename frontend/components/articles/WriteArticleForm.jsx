import { useEffect, useState } from 'react';
import './writeArticleForm.css'
import ProfileButton from '../navigation/ProfileButton';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createArticle } from '../../src/store/article';


const WriteArticleForm = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [submittable, setSubmittable] = useState(false)
    // const [image, setImage] = useState(null)
    const [showToolTip, setShowToolTip] = useState(false)
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.currentUser)
    const errors = useSelector(state => state.errors.articles)

    useEffect(() => {
      if(title !== '' && body !== '') {
        setSubmittable(true)
      } else {
        setSubmittable(false)
      }
    }, [title, body])
    
    const handleSubmitMouseEnter = () => {
      if (!submittable) {
        setShowToolTip(true)
      }
    }
    
    const handleSubmitMouseLeave = () => {
      setShowToolTip(false)
    }
    
    const handleSubmit = async () => {
        let result = await dispatch(createArticle({ article: { title, body, author_id: currentUser.id }}))

        if (result) {
          debugger
          // setTitle('')
          // setBody('')
          reset()
        }
    }

    const reset = () => {
      debugger
      setTitle("");
      setBody("");
    }


    return (
      <div className="writeArticleContainer">
        <div className="articleHeader">
          <div className="articleHeaderLeft"></div>
          <div className="articleHeaderRight">
            <Link className="writeArticleHomeLink" to="/">
              Home
            </Link>
            <div className="publishButtonContainer">
              <div 
                className={`publishButton ${submittable && "active"}`}
                onMouseEnter={handleSubmitMouseEnter}
                onMouseLeave={handleSubmitMouseLeave}
                onClick={submittable ? handleSubmit : null}
              >
                Publish
              </div>
            </div>
            <ProfileButton></ProfileButton>
          </div>
        </div>
        <div className="articleFormContainer">
          <div className={`tooltip ${showToolTip && 'active'}`}>
            Please fill out article before submitting.
          </div>
          <div className='errors'>{errors}</div>
          <textarea
            className="formTitleText"
            placeholder="Title"
            cols="39"
            rows="2"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="formBodyText"
            placeholder="Tell your story..."
            cols="77"
            rows="15"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
      </div>
    );

}

export default WriteArticleForm
import { useEffect, useState } from 'react';
import './writeArticleForm.css'

const WriteArticleForm = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState(null)



    return (
      <div className="writeArticleContainer">
        <div className="articleFormContainer">
          <form action="">
            <input
              className="articleTitle"
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="textarea"
              value={body}
              className="articleBody"
              placeholder="Tell your story..."
              onChange={(e) => setBody(e.target.value)}
            />
            <p className="imageLabel">Add Image:</p>
            {/* <div className="articleImage">
              <input
                type="file"
                value={image}
                placeholder="Add Image"
                onChange={(e) => setImage(e.target.value)}
              />
            </div> */}
          </form>
        </div>
      </div>
    );

}

export default WriteArticleForm
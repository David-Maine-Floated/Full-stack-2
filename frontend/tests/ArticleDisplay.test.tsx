import { it, expect, describe } from 'vitest'
import {render, screen, } from '@testing-library/react'
import ArticleDisplay from '../components/articles/ArticleDisplay'
import configureStore from '../src/store/store.js'
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';



const testData = {articles: {
    1: {
        authorId: 10, 
        body: 'I am a test article.',
        claps: {},
        comments: [],
        id: 5,
        photoUrl: 'testPhotoUrl',
        updatedAt: "2024-02-19T01:00:05.826Z",
        userPhotoUrs: "../default-user.jpg",
        username: "Test User"
    }
}}

const testStore = configureStore(testData)

// const renderPage = (propStuff: string[]) => {
//     render(
//       <MemoryRouter initialEntries={["article/1"]}>
//         <Routes>
//           <Route path="/test/:id" element={
            // <Provider store={testStore}>
            //      <ArticleDisplay/>
            //  </Provider>
//         </Routes>
//       </MemoryRouter>
//     );
// }


// const render = component => rtlRender(
//     <Provider store={testStore}>
//         <ArticleDisplay/>
//     </Provider>
// )


 const fullEle = (<Provider store={testStore}>
                 <ArticleDisplay/>
             </Provider>)

describe('ArticleDislpay', () => {


    // render(<ArticleDisplay/>)

    render(
      <MemoryRouter initialEntries={["/article/1"]}>
        <Routes>
          <Route path="/article/:id" element={fullEle} />
        </Routes>
      </MemoryRouter>
    );


    
    
    
    it('should', () => {
        screen.debug()
        expect(1).toBeTruthy()
    })
})

       

import { it, expect, describe } from 'vitest'
import {render, screen, } from '@testing-library/react'
import ArticleDisplay from '../components/articles/ArticleDisplay'
import configureStore from '../src/store/store.js'
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';


const testStore = configureStore()


const fullEle = (<Provider store={testStore}>
                 <ArticleDisplay/>
             </Provider>)

describe('ArticleDislpay', () => {

    render(
      <MemoryRouter initialEntries={["/article/1"]}>
        <Routes>
          <Route path="/article/:id" element={fullEle} />
        </Routes>
      </MemoryRouter>
    );


    
    
    
    it('should', async () => {
        screen.debug()
        expect(1).toBeTruthy()

    })
})

       

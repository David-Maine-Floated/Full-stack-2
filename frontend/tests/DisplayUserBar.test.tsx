import * as React from 'react';
import { it, expect, describe } from 'vitest'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'


import DisplayUserBar from '../components/displayUserBar/DisplayUserBar.jsx'

describe('ArticleDislpay', () => {

    const article = {
        authorId: 100,
        body: "I am test article!",
        comments: [],
        id: 200, 
        photoUrl: '',
        title: 'Test Article',
        createdAt: '2024-02-19T01:00:05.365Z',
        updatedAt: '2024-02-19T01:00:05.826Z',
        userPhotoUrl: '../default-user.jpg',
        username: 'Test User'
    }


    render(<DisplayUserBar article={article}/>)
    
    it('should display the username', () => {
        expect(screen.getByText(article.username)).toBeInTheDocument()
    })
    
    it('should display the created at date', () => {
        screen.debug()
        expect(screen.getByText(/Feb 18, 2024/i)).toBeVisible()
    })

    it('should display the reading time', () => {
        expect(screen.getByText(/min read/i)).toBeInTheDocument()
    })

    it('should', () => {
        const imageElement = screen.getByAltText('');
        expect(imageElement).toHaveAttribute('src', '../default-user.jpg')
    })
})
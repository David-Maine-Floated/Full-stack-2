import { it, expect, describe } from 'vitest'
import {render, screen} from '@testing-library/react'
import ArticleDisplay from '../components/articles/ArticleDisplay'

describe('ArticleDislpay', () => {
    it('should', () => {
        render(<ArticleDisplay/>)

        screen.debug()
    })
})
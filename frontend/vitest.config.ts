import {defineConfig} from 'vitest/config'
import { setupServer } from 'msw/node'
import { handlers } from "./src/mochs/handlers"
import { afterAll, afterEach, beforeAll } from 'vitest'

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setupFile.ts'],
  },
})


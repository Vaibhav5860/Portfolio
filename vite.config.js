import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import chatHandler from './api/chat.js'

const devChatApiPlugin = () => ({
  name: 'dev-chat-api',
  configureServer(server) {
    server.middlewares.use('/api/chat', async (req, res) => {
      if (req.method !== 'POST') {
        return chatHandler(req, res)
      }

      req.url = '/api/chat'
      return chatHandler(req, res)
    })
  }
})

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const rootDir = globalThis.process?.cwd?.() || ''
  const loadedEnv = loadEnv(mode, rootDir, '')
  if (globalThis.process?.env) {
    Object.assign(globalThis.process.env, loadedEnv)
  }

  return {
    plugins: [react(), devChatApiPlugin()],
  }
})

import { Blog } from '@/api/modules/blog'
import { Auth } from '@/api/modules/auth'

export const api = () => ({
  blog: new Blog(),
  auth: new Auth()
})

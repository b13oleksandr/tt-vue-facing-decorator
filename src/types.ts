export interface Post {
  id: number | null
  title: string
  text: string
  createdBy: number | null
  author: string
  date: string
}

export interface User {
  id: number | null
  name: string
  login: string
  password: string
}
// @ts-ignore
import json from '@/mock/users.json'
import type { User } from '@/types'

export class Auth {
  users = json

  private setUsersToLocalStorage() {
    if (!localStorage.getItem('users')?.length) {
      localStorage.setItem('users', JSON.stringify(this.users))
    }
  }

  async login(login: string, password: string): Promise<User> {
    this.setUsersToLocalStorage()

    const users = JSON.parse(localStorage.getItem('users') || '[]')

    const user = users.find((u: any) => (u.login === login && u.password === password))

    if (!user) {
      throw new Error('User not found')
    }

    return user
  }

  async register(name: string, login: string, password: string): Promise<void> {
    this.setUsersToLocalStorage()

    const user = {
      id: new Date().valueOf(),
      name,
      login,
      password
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]')

    const userExists = users.some((user: User) => user.login === login)

    if (userExists) {
      throw new Error('User already exists')
    }

    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))
  }
}

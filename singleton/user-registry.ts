import { randomUUID } from 'crypto'

interface IUser {
  id: string
  username: string
  password: string
}

interface IAddUser {
  username: string
  password: string
}

const usersDB: IUser[] = []

class Singleton2 {
  private static _instance: Singleton2 | null = null

  private constructor() {}

  public static get instance(): Singleton2 {
    if (this._instance === null) {
      this._instance = new Singleton2()
    }
    return this._instance
  }

  public anyMethod(): void {}
}

class UserRegistry {
  private static instance: UserRegistry

  private constructor() {}

  public static getInstance(): UserRegistry {
    if (!UserRegistry.instance) {
      UserRegistry.instance = new UserRegistry()
    }

    return UserRegistry.instance
  }

  public addUser({ username, password }: IAddUser): IUser {
    const user = {
      id: randomUUID(),
      username,
      password,
    }
    usersDB.push(user)

    return user
  }

  public listUsers(): IUser[] {
    return usersDB
  }
  public authenticateUser({ username, password }: IAddUser): boolean {
    const user = usersDB.find((userDB) => userDB.username === username)
    if (!user) {
      console.log('User not found.')
      return false
    }

    if (user.password === password) {
      return true
    }

    console.log('Invalid credentials.')
    return false
  }
}

const userRegistry = UserRegistry.getInstance()

userRegistry.addUser({ username: 'will', password: '1234' })
userRegistry.authenticateUser({ username: 'will', password: '1234' })
console.log(userRegistry.listUsers())

import { randomInt } from 'node:crypto'

interface User {
	id: number
	email: string
	password: string
}

interface Channel {
	id: number
	name: string
}

interface IAuthService {
	users: User[]
	// publicMessage(channelId: number, message: Message): void
	// addChannel(channel: Channel): void
	// smsChannel: Channel | K
}

function socialMediaService() {
	return new Promise((resolve) => {
		setTimeout(resolve, 2000)
	})
}

class AuthService implements IAuthService {
	public users: User[] = [
		{
			id: 1,
			email: 'will',
			password: '123',
		},
	]

	public emailAndPasswordLogin(email: string, password: string): boolean {
		const user = this.users.find(
			(user) => user.email === email && user.password === password,
		)
		if (!user) {
			return false
		}
		return true
	}
	public socialMediaLogin(): boolean {
		console.log('1')
		new Promise(() => {
			setTimeout(() => {
				console.log('2')
			}, 3000)
		})
		console.log('3')
		return true
	}
	public async socialMediaLoginAsync(): Promise<boolean> {
		await new Promise(() => {
			setTimeout(() => {}, 3000)
		})
		return true
	}
	public async twoFactoPart1Login(
		email: string,
		password: string,
	): Promise<boolean> {
		const user = this.users.find(
			(user) => user.email === email && user.password === password,
		)
		if (!user) {
			return false
		}

		await new Promise(() => {
			setTimeout(() => {}, 3000)
		})
		const code = randomInt(10)
		console.log({ code })
		return this.twoFactoPart2Login(1234)
		// return
	}
	public async twoFactoPart2Login(code: number): Promise<boolean> {
		await new Promise(() => {
			setTimeout(() => {}, 3000)
		})
		return true
	}
}

const myService = new AuthService()

// console.log('email e senha:', myService.emailAndPasswordLogin('will', '123'))
// console.log('rede social:', myService.socialMediaLogin())
// console.log('rede social:', myService.socialMediaLoginAsync())
console.log('dois fatores:', myService.twoFactoPart1Login('will', '123'))

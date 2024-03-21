interface Message {
	user: string
	message: string
}

interface Channel {
	id: number
	name: string
	messages: Message[]
}

interface IMessangerService {
	channels: Channel[]
	publicMessage(channelId: number, message: Message): void
	addChannel(channel: Channel): void
	// smsChannel: Channel | null
	// emailChannel: Channel | null
	// pushNotChannel: Channel | null
	// pubOnSms(): string
	// pubOnEmail(): string
	// pubOnNotPush(): string
}

function publicMessanger(channelId: number, messanger: string): void {}

class MessengerService implements IMessangerService {
	public channels: Channel[] = []
	// public emailChannel: Channel | null = null
	// public pushNotChannel: Channel | null = null

	public publicMessage(channelId: number, message: Message): void {
		const channelIndex = this.channels.findIndex(
			(channel) => channel.id === channelId,
		)
		if (channelIndex < 0) {
			return
		}
		this.channels[channelIndex].messages.push(message)
	}
	public addChannel(channel: Channel): void {
		this.channels.push(channel)
	}
	public listChannels() {
		return this.channels.map((channel) => ({
			name: channel.name,
			id: channel.id,
		}))
	}
	public showChannel(channelId: number) {
		const channel = this.channels.find((channel) => channel.id === channelId)
		if (!channel) {
			return
		}
		return channel
	}

	// public pubOnEmail() {
	// 	return this
	// }
	// public pubOnSms() {
	// 	return this
	// }
	// public pubOnNotPush() {
	// 	return this
	// }
}

const myService = new MessengerService()
myService.addChannel({ id: 1, name: 'sms', messages: [] })
myService.addChannel({ id: 2, name: 'email', messages: [] })

myService.publicMessage(1, { user: 'will', message: 'bom dia' })
myService.publicMessage(1, { user: 'will', message: 'oi gente' })
myService.publicMessage(1, { user: 'will', message: 'td bem?' })

myService.publicMessage(2, { user: 'will', message: 'bom dia' })
myService.publicMessage(2, { user: 'will', message: 'oi gente' })
myService.publicMessage(2, { user: 'will', message: 'td bem?' })

console.log('lista de canais', myService.listChannels())
console.log('mostra um canal', myService.showChannel(1))
console.log('mostra um canal', myService.showChannel(2))
// console.log(myService)

class LogsRegistry {
	public logs: string
	private static instance: LogsRegistry

	private constructor() {
		this.logs = ''
	}

	public static getInstance(): LogsRegistry {
		if (!LogsRegistry.instance) {
			LogsRegistry.instance = new LogsRegistry()
		}

		return LogsRegistry.instance
	}

	public register(data: string): void {
		const currentTime = new Date().toISOString()
		this.logs = `${this.logs}\n${currentTime} - ${data}`
	}
}

const logsRegistry = LogsRegistry.getInstance()

console.log(logsRegistry.logs)
logsRegistry.register('mundo')
logsRegistry.register('erro 1')
logsRegistry.register('erro 1')
logsRegistry.register('erro 3')
logsRegistry.register('erro 4')
console.log(logsRegistry.logs)

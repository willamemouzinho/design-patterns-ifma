class SettingControl {
    public themes: string[] = ['dark', 'light', 'sistema']
    public languages: string[] = ['português-BR', 'português-PT', 'english-US']
    public theme: string = 'dark'
    public language: string = 'português-BR'
    private static instance: SettingControl
  
    private constructor() {}
  
    public static getInstance(): SettingControl {
      if (!SettingControl.instance) {
        SettingControl.instance = new SettingControl()
      }
  
      return SettingControl.instance
    }
  
    public setLanguage(languageIndex: number): void {
      this.language = this.languages[languageIndex]
    }
  
    public setTheme(themeIndex: number): void {
      this.theme = this.themes[themeIndex]
    }
  }
  
  const settingControl = SettingControl.getInstance()
  console.log(settingControl.language)
  console.log(settingControl.theme)
  
  settingControl.setLanguage(2)
  settingControl.setTheme(1)
  
  console.log(settingControl.language)
  console.log(settingControl.theme)
  
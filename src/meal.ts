import Menus from './interfaces/menus'
import Parser from './parser'
import Requestor from './requestor'

export default class ArmyMeal {
  private apiKey: string
  private host: string | undefined

  constructor(apiKey: string, host?: string) {
    this.apiKey = apiKey
    this.host = host
  }

  public async getMenusOfDay(
    numOfLSG: number,
    year: number,
    month: number,
    day: number
  ): Promise<Menus> {
    const requestor = new Requestor(this.apiKey, this.host)
    const rawData = await requestor.getRawDataOfAllMenu(numOfLSG)
    const parser = new Parser(rawData)
    return parser.getMenusOfDay(year, month, day)
  }
}

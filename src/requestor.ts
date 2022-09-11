import axios, { AxiosInstance } from 'axios'

export default class Requestor {
  private httpRequestor: AxiosInstance

  constructor(apiKey: string, host?: string) {
    const baseURL = `${
      host !== undefined ? host : 'https://openapi.mnd.go.kr'
    }/${apiKey}/json`
    axios.defaults.headers.common['origin'] = '*/*'
    this.httpRequestor = axios.create({
      baseURL,
    })
  }

  public async getRawDataOfAllMenu(
    armyNum: number
  ): Promise<Record<any, string>[]> {
    try {
      const numberOfRows = await this.getNumberOfRows(armyNum)
      const result = await this.httpRequestor.get(
        this.apiRoute(armyNum, 0, numberOfRows)
      )
      return result.data['DS_TB_MNDT_DATEBYMLSVC_' + armyNum].row
    } catch (error) {
      console.error(error)
      throw new Error('Failed to load menus')
    }
    return []
  }

  private async getNumberOfRows(armyNum: number): Promise<number> {
    try {
      const result = await this.httpRequestor.get(this.apiRoute(armyNum, 0, 1))
      return parseInt(
        result.data['DS_TB_MNDT_DATEBYMLSVC_' + armyNum].list_total_count
      )
    } catch (error) {
      console.error(error)
      throw new Error('Failed to load menus')
    }
    return 0
  }

  private apiRoute(armyNum: number, from: number, to: number): string {
    return 'DS_TB_MNDT_DATEBYMLSVC_' + armyNum + '/' + from + '/' + to
  }
}

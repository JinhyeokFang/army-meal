import Menus from './interfaces/menus'
import Row from './interfaces/row'

export default class Parser {
  private rawData: Row[]

  constructor(rawData: Row[]) {
    this.rawData = rawData
  }

  public getMenusOfMonth(year: number, month: number): Menus[] {
    const result: Menus[] = []
    for (let i = 1; i <= 31; i++) {
      const menus = this.getMenusOfDay(year, month, i)
      if (menus.breakfast == [] && menus.lunch == [] && menus.dinner == [])
        continue
      result.push(menus)
    }
    return result
  }

  public getMenusOfDay(year: number, month: number, day: number): Menus {
    const rawDataOfMenu = this.getRowsOfDay(year, month, day)
    const menus: Menus = {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
    for (const menu of rawDataOfMenu) {
      if (menu.brst !== '') {
        menus.breakfast.push(menu.brst)
      }
      if (menu.lunc !== '') {
        menus.lunch.push(menu.lunc)
      }
      if (menu.dinr !== '') {
        menus.dinner.push(menu.dinr)
      }
    }
    return menus
  }

  private getRowsOfDay(year: number, month: number, day: number) {
    const dates = `${year}-${this.zeroFill(month)}-${this.zeroFill(day)}`
    return this.rawData.filter((row) => row.dates == dates)
  }

  private zeroFill(n: number): string {
    if (n < 10) {
      return `0${n}`
    } else {
      return `${n}`
    }
  }
}

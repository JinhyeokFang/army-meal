import Menus from './interfaces/menus'

export default class Parser {
  private rawData: Record<any, string>[]

  constructor(rawData: Record<any, string>[]) {
    this.rawData = rawData
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

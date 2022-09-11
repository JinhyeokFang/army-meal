## 사용법

```typescript
import { ArmyMeal } from 'army-meal';

async function request() {
  const meal = new ArmyMeal(
    [API KEY]
  )

  console.dir(await meal.getMenusOfDay(9030, 2022, 9, 12))
}

request()
```

###getMenusOfDay(numberOfLSG, year, month, day)

numberOfLSG번 부대의 year년 month월 day일 메뉴를 반환합니다.

numberOfLSG - 군수지원단(급양대)의 부대 번호
year - 연도
month - 월
day - 일 

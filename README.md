# Army-meal 국방부 급식 API 모듈

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

### getMenusOfDay(numberOfLSG, year, month, day)

numberOfLSG번 부대의 year년 month월 day일 메뉴를 반환합니다.

numberOfLSG - 급양대의 부대 번호 ex) 육군훈련소: 9547 <br>
year - 연도 <br>
month - 월 <br>
day - 일 <br>

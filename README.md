# Army-meal 국방부 군대 급식 API 모듈
이 모듈은 https://openapi.mnd.go.kr 의 급식 api를 더욱 편하게 사용할 수 있도록 하는 모듈입니다.
api key와 부대 번호, 메뉴를 알고 싶은 날짜만 입력하면 급식 메뉴를 간편하게 구할 수 있습니다.

부대 번호는 https://opendata.mnd.go.kr/openinf/dataset/datasetlist2.jsp 에서 찾을 수 있습니다.
## 사용법

``` typescript
import { ArmyMeal } from 'army-meal';

// commonjs
const { ArmyMeal } = require('army-meal')

async function request() {
  const meal = new ArmyMeal(
    [API KEY]
  )

  console.dir(await meal.getMenusOfDay(9030, 2022, 9, 12))
  console.dir(await meal.getMenusOfMonth(9030, 2022, 9))
}

request()
```

### getMenusOfDay(numberOfLSG, year, month, day)

numberOfLSG번 부대의 year년 month월 day일 메뉴를 반환합니다.

numberOfLSG - 급양대의 부대 번호 ex) 육군훈련소: 9547 <br>
year - 연도 <br>
month - 월 <br>
day - 일 <br>

### getMenusOfMonth(numberOfLSG, year, month)

## Dependency
axios: API 서버로 급식 메뉴를 요청하기 위해 사용하는 http client입니다.

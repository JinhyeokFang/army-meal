export default function apiAddress(num: number, from: number, to: number) {
  return 'https://openapi.mnd.go.kr/sample/xml/DS_TB_MNDT_DATEBYMLSVC_' + num + '/' + from + '/' + to;
}

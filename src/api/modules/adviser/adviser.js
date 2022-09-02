import request from '../../request'
import requestUrl from '../../requestUrl'
import requestParam from '../../requestParam'


// 查询顾问
export function findAdviser (params) {
  return request({
    url: requestUrl('/adviser/findAdviser'),
    method: 'post',
    data: requestParam(params)
  })
}

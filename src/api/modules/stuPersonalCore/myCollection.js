//资源列表
import requestParam from "../../requestParam";
import request from "../../request";
import requestUrl from "../../requestUrl";

export function getListResourcesCollection (params) {
  return request({
    url: requestUrl('/hyskillresources/listHyskillresourcesCollectionRelation'),
    method: 'post',
    data: requestParam(params)
  })
}

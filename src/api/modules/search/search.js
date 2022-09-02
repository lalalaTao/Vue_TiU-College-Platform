import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";
import request_form from '../../request_form';

/**获取学生简历所有信息*/
export function getStuResume(params) {
  return request({
    url: requestUrl('/xqstudent/getInternshipInfo'),
    method: 'post',
    data: requestParam(params)
  })
}

import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";
import request_form from '../../request_form';


/**获取所有的分数*/
export function getScoreList(params) {
  return request({
    url: requestUrl('/xqScoreList/getScoreList'),
    method: 'post',
    data: requestParam(params)
  })
}
/**获取所有的分数的count*/
export function countScoreList(params) {
  return request({
    url: requestUrl('/xqScoreList/countScoreList'),
    method: 'post',
    data: requestParam(params)
  })
}


/**上下移动目录*/
export function moveUpAndDown (params) {
  return request({
    url: requestUrl('/xqknowledge/upOrDown'),
    method: 'post',
    data: JSON.stringify(params)
  })
}

/**获取所有的大纲目录*/
export function getDir (params) {
  return request({
    url: requestUrl('/xqknowledge/list'),
    method: 'post',
    data: requestParam(params)
  })
}


/**新增大纲目录*/
export function save(params) {
  return request({
    url: requestUrl('/xqknowledge/save'),
    method: 'post',
    data: requestParam(params)
  })
}

/**修改大纲目录*/
export function update(params) {
  return request({
    url: requestUrl('/xqknowledge/update'),
    method: 'post',
    data: requestParam(params)
  })
}

/**删除大纲*/
export function deleteDir(params) {
  return request({
    url:requestUrl('/xqknowledge/delete/'+params),
    method:'post'
    //data:requestParam(params)
  })
}



/**获取课程内容*/
export function saveQuestion(params) {
  return request({
    url:requestUrl('/xqquestion/save'),
    method:'post',
    data:requestParam(params)
  })
}


/**首次展开的节点id和问题列表*/
export function doGetHasQuestionsKnowledge(params) {
  return request({
    url:requestUrl('/xqquestion/doGetHasQuestionsKnowledge'),
    method:'post',
    data:requestParam(params)
  })
}

export function getScoreList1(params) {
  return request({
    url:requestUrl('/xqscore/list'),
    method:'post',
    data:requestParam(params)
  })
}

export function getExamList2(params) {
  return request({
    url:requestUrl('/xqscore/listExam'),
    method:'post',
    data:requestParam(params)
  })
}

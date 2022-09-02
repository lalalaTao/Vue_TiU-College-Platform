import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";
import request_form from '../../request_form';


/**获取所有的大纲目录*/
export function getquestionlist(params) {
  return request({
    url: requestUrl('/xqquestion/list'),
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

/**删除试题*/
export function deletetim(params) {
  return request({
    url:requestUrl('/xqquestion/delete'),
    method:'post',
    data:requestParam(params)
  })
}

//获取试题信息
export function testdetail(params) {
  return request({
    url: requestUrl('/xqquestion/info/'+params),
    method: 'post'
    // data: requestParam(params)
  })
}
//更新试题
export function updataquestion(params) {
  return request({
    url: requestUrl('/xqquestion/update'),
    method: 'post',
    data: requestParam(params)
  })
}
//文本上传
export function textupdata(params) {
  return request({
    url: requestUrl('/xqquestion/uploadQuestionsByText'),
    method: 'post',
    data: requestParam(params)
  })
}
//导入试题
export function importQuestions(params) {
  return request({
    url: requestUrl('/xqquestion/importQuestions'),
    method: 'post',
    data: requestParam(params)
  })
}

//获取所有知识点（标签）
export function doGetAllTags(params) {
  return request({
    url: requestUrl('/xqtag/list'),
    method: 'post',
    data: requestParam(params)
  })
}
//保存试题知识点（标签）
export function doSaveQuestionTags(params) {
  return request({
    url: requestUrl('/xqtagquestion/save'),
    method: 'post',
    data: requestParam(params)
  })
}
//保存试题知识点（标签）
export function doDeleteQuestionTags(params) {
  return request({
    url: requestUrl('/xqtagquestion/delete'),
    method: 'post',
    data: requestParam(params)
  })
}

import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";


//获取试题目录树状
export function listSkillQuestionKnowledgeTree (params) {
  return request({
    url: requestUrl('/hyskillquestionknowledge/listSkillQuestionKnowledgeTree'),
    method: 'post',
    data: requestParam(params)
  })
}

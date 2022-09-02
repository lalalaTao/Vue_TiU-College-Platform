import * as common from './modules/common/common'
import * as user from './modules/user/user'
import * as skill from './modules/skill/skill.js'
import * as spesource from './modules/spesource/spesource.js'
import * as homeindex from './modules/homeindex/homeindex.js'
import * as practice from './modules/practice/practice.js'
import * as check from './modules/skill/check/check'
import * as exam from './modules/skill/exam/exam'
import * as spesourcestudy from './modules/spesourcestudy/spesourcestudy.js'
import * as spestandard from './modules/spestandard/spestandard.js'
import * as pcCourseSource from './modules/pcCourseSource/pcCourseSource'
import * as pcCourseDirFileExameEdit from './modules/pcCourseSource/pcCourseDirFileExameEdit'
import * as accountManage from './modules/stuPersonalCore/accountManage'
import * as pcCourseFileMark from './modules/pcCourseSource/pcCourseFileMark'
import * as myCollection from './modules/stuPersonalCore/myCollection'
export default {
  common,     // 公共（登入，登出，菜单等）
  user,
  homeindex,
  check,
  skill,
  practice,
  exam,
  spestandard,
  exam,
  spesource,
  spesourcestudy,//专业资源课程学习
  pcCourseSource,//教师个人中心，专业资源管理
  pcCourseDirFileExameEdit,//教师个人中心，课程-目录附件试卷关系管理
  accountManage, // 学生个人中心-账号管理
  pcCourseFileMark,
  myCollection, // 学生个人中心-我的收藏
}

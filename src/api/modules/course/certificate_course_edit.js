import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";
import request_form from '../../request_form';


/**获取课程*/
export function getOneCourseInfo(params) {
  return request({
    url: requestUrl('/xqcourse/getOneCourseInfo'),
    method: 'post',
    data: requestParam(params)
  })
}

/**获取所有的大纲目录*/
export function getDir (params) {
  return request({
    url: requestUrl('/xqcoursedir/list'),
    method: 'post',
    data: requestParam(params)
  })
}

/**上下移动目录*/
export function upOrDownAndSubDir (params) {
  return request({
    url: requestUrl('/xqcoursedir/upOrDownAndSubDir'),
    method: 'post',
    data: JSON.stringify(params)
  })
}
/**新增大纲目录*/
export function save(params) {
  return request({
    url: requestUrl('/xqcoursedir/save'),
    method: 'post',
    data: requestParam(params)
  })
}

/**修改大纲目录*/
export function update(params) {
  return request({
    url: requestUrl('/xqcoursedir/update'),
    method: 'post',
    data: requestParam(params)
  })
}

/**删除大纲*/
export function deleteDir(params) {
  return request({
    url:requestUrl('/xqcoursedir/deleteAll'),
    method:'post',
    data:requestParam(params)
  })
}



/**获取课程内容*/
export function getOneInfo(params) {
  return request({
    url:requestUrl('/xqlessoncontent/info'),
    method:'post',
    data:requestParam(params)
  })
}
/**获取课程内容2*/
export function getOneInfo2(params) {
  return request({
    url:requestUrl('/xqlessoncontent/info2'),
    method:'post',
    data:requestParam(params)
  })
}


/**判断文件名是否存在*/
export function fileNameExist(params) {
  return request({
    url:requestUrl('/xqlessoncontent/fileNameExist'),
    method:'post',
    data:requestParam(params)
  })
}


/**保存课程内容*/
export function saveLesson(params) {
  return request_form({
    url:requestUrl('/xqlessoncontent/save2'),
    method:'post',
    data:params
  })
}


/**更新课程内容*/
export function saveFile(params) {
  return request_form({
    url:requestUrl('/xqlessoncontent/saveFile'),
    method:'post',
    data:params,
    onUploadProgress(progressEve){
      let val = (progressEve.loaded / progressEve.total * 100).toFixed(0);
      if(val==100){
        this.showProgress = false;
      }
      console.log(val,progressEve,"progressEve")
      /*that.formData.showProgress = true;
      that.formData.startValue = parseInt(val)*/
    }
  })
}

/**删除课程内容的附件*/
export function delLessonAccess(params) {
  return request({
    url:requestUrl('/xqlessonaccessory/deleteOne'),
    method:'post',
    data:requestParam(params)
  })
}

/**目录上下移动*/
export function moveDir(params) {
  return request({
    url:requestUrl('/xqcoursedir/upOrDown'),
    method:'post',
    data:requestParam(params)
  })
}

//上传附件
export function uploadfj(params) {
  return request({
    url:requestUrl('/xqcourse/uploadFile'),
    method:'post',
    data:requestParam(params)
  })
}

export function savelesson2(params) {
  return request({
    url:requestUrl('/xqlessoncontent/save2'),
    method:'post',
    data:requestParam(params)
  })
}

//获取证书，绑定的课程。
export function getZsCourseInfo(params) {
  return request({
    url:requestUrl('/xqcertificate/doGetCourseByCertificateId'),
    method:'post',
    data:requestParam(params)
  })
}
export function doGetCertificates2 (params) {
  return request({
    url: requestUrl('/xqcertificate/selectStudentCertificates2'),
    method: 'post',
    data: requestParam(params)
  })
}


//产教融合项目编辑

export function getxiangmuInfo(params) {
  return request({
    url: requestUrl('/xqcjproject/info'),
    method: 'post',
    data: requestParam(params)
  })
}

export function getDirxiangmu (params) {
  return request({
    url: requestUrl('/cjprojectdir/list'),
    method: 'post',
    data: requestParam(params)
  })
}

export function savedir (params) {
  return request({
    url: requestUrl('/cjprojectdir/save'),
    method: 'post',
    data: requestParam(params)
  })
}

export function updatedir (params) {
  return request({
    url: requestUrl('/cjprojectdir/update'),
    method: 'post',
    data: requestParam(params)
  })
}

/**上下移动目录*/
export function upOrDownAndSubDirxiangmu (params) {
  return request({
    url: requestUrl('/cjprojectdir/upOrDownAndSubDir'),
    method: 'post',
    data: JSON.stringify(params)
  })
}

export function deleteDirxiangmu(params) {
  return request({
    url:requestUrl('/cjprojectdir/deleteAll'),
    method:'post',
    data:requestParam(params)
  })
}


export function getOneInfo3(params) {
  return request({
    url:requestUrl('/xqcjlessoncontent/info'),
    method:'post',
    data:requestParam(params)
  })
}

export function save3(params) {
  return request({
    url:requestUrl('/xqlessoncontent/save3'),
    method:'post',
    data:requestParam(params)
  })
}






export function getDirxiangmucx (params) {
  return request({
    url: requestUrl('/cxcyprojectdir/list'),
    method: 'post',
    data: requestParam(params)
  })
}

export function getxiangmuInfocx(params) {
  return request({
    url: requestUrl('/xqcxproject/info'),
    method: 'post',
    data: requestParam(params)
  })
}

export function savedircx (params) {
  return request({
    url: requestUrl('/cxcyprojectdir/save'),
    method: 'post',
    data: requestParam(params)
  })
}

export function updatedircx (params) {
  return request({
    url: requestUrl('/cxcyprojectdir/update'),
    method: 'post',
    data: requestParam(params)
  })
}

/**上下移动目录*/
export function upOrDownAndSubDirxiangmucx (params) {
  return request({
    url: requestUrl('/cxcyprojectdir/upOrDownAndSubDir'),
    method: 'post',
    data: JSON.stringify(params)
  })
}

export function deleteDirxiangmucx(params) {
  return request({
    url:requestUrl('/cxcyprojectdir/deleteAll'),
    method:'post',
    data:requestParam(params)
  })
}

export function getOneInfo3cx(params) {
  return request({
    url:requestUrl('/xqcxlessoncontent/info'),
    method:'post',
    data:requestParam(params)
  })
}

export function save4(params) {
  return request({
    url:requestUrl('/xqlessoncontent/save4'),
    method:'post',
    data:requestParam(params)
  })
}

export function listContainCheckedForCourseNode(params) {
  return request({
    url:requestUrl('/xqtag/listContainCheckedForCourseNode'),
    method:'post',
    data:requestParam(params)
  })
}
export function tagSaveOrUpdate(params) {
  return request({
    url:requestUrl('/xqtagcoursenode/addBatchCourseDirTag'),
    method:'post',
    data:requestParam(params)
  })
}
export function tagDelete(params) {
  return request({
    url:requestUrl('/xqtagcoursenode/deleteBatchCourseDirTag'),
    method:'post',
    data:requestParam(params)
  })
}


//打标签
export function addtag(params) {
  return request({
    url:requestUrl('/xqtag2resource/save'),
    method:'post',
    data:requestParam(params)
  })
}

//打标签
export function gettag(params) {
  return request({
    url:requestUrl('/xqtag2dir/getDirAndTag'),
    method:'post',
    data:requestParam(params)
  })
}

//打标签
export function deltag(params) {
  return request({
    url:requestUrl('/xqtag2resource/delete'),
    method:'post',
    data:requestParam(params)
  })
}
//试题保存
export function stsave(params) {
  return request({
    url:requestUrl('/xqlessonquestion/save'),
    method:'post',
    data:requestParam(params)
  })
}
//获取试题列表
export function stlist(params) {
  return request({
    url:requestUrl('/xqlessonquestion/list'),
    method:'post',
    data:requestParam(params)
  })
}
//试题删除
export function stdel(params) {
  return request({
    url:requestUrl('/xqlessonquestion/delete'),
    method:'post',
    data:requestParam(params)
  })
}
//试题修改
export function stupdata(params) {
  return request({
    url:requestUrl('/xqlessonquestion/update'),
    method:'post',
    data:requestParam(params)
  })
}
//单个试题
export function stonce(params) {
  return request({
    url:requestUrl('/xqlessonquestion/info/'+params),
    method:'post',
    // data:requestParam(params)
  })
}
//试卷保存
export function papersave(params) {
  return request({
    url:requestUrl('/xqlessonpaper/save'),
    method:'post',
    data:requestParam(params)
  })
}
//试卷列表
export function paperlist(params) {
  return request({
    url:requestUrl('/xqlessonpaper/list'),
    method:'post',
    data:requestParam(params)
  })
}
//试卷删除
export function paperdel(params) {
  return request({
    url:requestUrl('/xqlessonpaper/delete'),
    method:'post',
    data:requestParam(params)
  })
}
//试卷修改
export function paperupdata(params) {
  return request({
    url:requestUrl('/xqlessonpaper/update'),
    method:'post',
    data:requestParam(params)
  })
}
//试卷详情
export function paperinfo(params) {
  return request({
    url:requestUrl('/xqlessonpaper/info'),
    method:'post',
    data:requestParam(params)
  })
}
//试卷试题
export function paperqlist(params) {
  return request({

    url:requestUrl('/xqlessonquestion/doGetExamQuestions'),
    // url:requestUrl('/xqlessonquestion/doGetPaperQuestions'),
    method:'post',
    data:requestParam(params)
  })
}
//试卷随机组卷
export function paperran(params) {
  return request({
    url:requestUrl('/xqlessonquestion/doGetPaperQuestionsByType'),
    method:'post',
    data:requestParam(params)
  })
}
//试卷交卷
export function papersub(params) {
  return request({
    url:requestUrl('/xqlessonquestion/submitPaper'),
    method:'post',
    data:requestParam(params)
  })
}
//导入试题
export function importQuestions(params) {
  return request({
    url:requestUrl('/xqlessonquestion/importQuestions'),
    method:'post',
    data:requestParam(params)
  })
}
//文本上传
export function uplqbytext(params) {
  return request({
    url:requestUrl('/xqlessonquestion/uploadQuestionsByText'),
    method:'post',
    data:requestParam(params)
  })
}
//excel上传
export function uplqbyexcel(params) {
  return request({
    url:requestUrl('/xqlessonquestion/uploadQuestions'),
    method:'post',
    data:requestParam(params)
  })
}
//试卷明细
export function scoreinfo(params) {
  return request({
    url:requestUrl('/xqlessonscore/info'),
    method:'post',
    data:requestParam(params)
  })
}

export function getclasslist(params) {
  return request({
    url:requestUrl('/xqXzclassController/doGetClassBySpecialtyId'),
    method:'post',
    data:requestParam(params)
  })
}

export function scoreList(params) {
  return request({
    url:requestUrl('/xqlessonscore/list'),
    method:'post',
    data:requestParam(params)
  })
}

export function setsj(params) {
  return request({
    url:requestUrl('/xqlessonpaper/updateRelease?paperId='+params),
    method:'post',
    // data:requestParam(params)
  })
}

export function addtagslist(params) {
  return request({
    url:requestUrl('/xqtag2/save'),
    method: 'post',
    data:requestParam(params)
  })
}

export function coursePaperRelease(params) {
  return request({
    url:requestUrl('/xqlessonpaper/coursePaperRelease'),
    method: 'post',
    data:requestParam(params)
  })
}

//重置试题
export function resetPaper(params) {
  return request({
    url:requestUrl('/xqlessonpaper/clearLesssonPaperScore'),
    method:'post',
    data:requestParam(params)
  })
}

export  function mululink(params) {
  return request({
    url:requestUrl('/xqlessoncontent/save2'),
    method:'post',
    data:requestParam(params)
  })
}


//显示课程文件
export  function getnewCourseFileData(params) {
  return request({
    url:requestUrl('/xqcoursedir/listTreeWithFiles'),
    method:'post',
    data:requestParam(params)
  })
}

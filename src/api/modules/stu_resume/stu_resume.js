import requestUrl from "../../requestUrl";
import request from "../../request";
import requestParam from "../../requestParam";
import request_form from '../../request_form';


/**获取学生简历所有信息*/
export function getStuResume(userId) {
  return request({
    url: requestUrl('/xqstudent/getInternshipInfo?userId='+userId),
    method: 'post',
    // data: requestParam(params)
  })
}

/**新增或修改实习记录*/
export function saveOrUpdateRecord (params) {
  return request({
    url: requestUrl('/xqstudent/saveOrUpdateRecord'),
    method: 'post',
    data: requestParam(params)
  })
}
/**新增或修改实习公司*/
export function saveOrUpdateInternship(params) {
  return request({
    url: requestUrl('/xqstudent/saveOrUpdateInternship'),
    method: 'post',
    data: requestParam(params)
  })
}
/**删除实习记录*/
export function delRecord(params) {
  return request({
    url: requestUrl('/xqstudent/deleteRecord'),
    method: 'post',
    data: requestParam(params)
  })
}

/**保存或更新学生基本信息*/
export function saveOrUpdateBaseInfo(params) {
  return request({
    url:requestUrl('/xqstudent/saveOrUpdate'),
    method:'post',
    data:requestParam(params)
  })
}
/**保存学生简历图片*/
export function uploadImg(params) {
  return request_form({
    url:requestUrl('/xqstudent/saveInternshipImage'),
    method:'post',
    data:params
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

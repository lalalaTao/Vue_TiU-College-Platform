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



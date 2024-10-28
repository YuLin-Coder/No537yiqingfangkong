export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["新增","查看","修改","删除"],"menu":"防疫人员","menuJump":"列表","tableName":"fangyirenyuan"}],"menu":"防疫人员管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除","爬取数据"],"menu":"全国实时数据","menuJump":"列表","tableName":"qgsssj"}],"menu":"全国实时数据管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除","爬取数据"],"menu":"国内实时动态","menuJump":"列表","tableName":"gnssdt"}],"menu":"国内实时动态管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除"],"menu":"核酸检测点","menuJump":"列表","tableName":"hesuanjiancedian"}],"menu":"核酸检测点管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","修改","删除","审核"],"menu":"核酸检测预约","menuJump":"列表","tableName":"hesuanjianceyuyue"}],"menu":"核酸检测预约管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","修改","删除"],"menu":"核酸结果","menuJump":"列表","tableName":"hesuanjieguo"}],"menu":"核酸结果管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"系统留言","tableName":"messages"}],"menu":"系统留言"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"疫情资讯","tableName":"news"},{"appFrontIcon":"cuIcon-brand","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-rank","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-copy","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","预约检测"],"menu":"核酸检测点列表","menuJump":"列表","tableName":"hesuanjiancedian"}],"menu":"核酸检测点模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看"],"menu":"全国实时数据","menuJump":"列表","tableName":"qgsssj"}],"menu":"全国实时数据管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看"],"menu":"国内实时动态","menuJump":"列表","tableName":"gnssdt"}],"menu":"国内实时动态管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","删除","支付"],"menu":"核酸检测预约","menuJump":"列表","tableName":"hesuanjianceyuyue"}],"menu":"核酸检测预约管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看"],"menu":"核酸结果","menuJump":"列表","tableName":"hesuanjieguo"}],"menu":"核酸结果管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","预约检测"],"menu":"核酸检测点列表","menuJump":"列表","tableName":"hesuanjiancedian"}],"menu":"核酸检测点模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看"],"menu":"全国实时数据","menuJump":"列表","tableName":"qgsssj"}],"menu":"全国实时数据管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看"],"menu":"国内实时动态","menuJump":"列表","tableName":"gnssdt"}],"menu":"国内实时动态管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","核酸结果"],"menu":"核酸检测预约","menuJump":"列表","tableName":"hesuanjianceyuyue"}],"menu":"核酸检测预约管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","删除"],"menu":"核酸结果","menuJump":"列表","tableName":"hesuanjieguo"}],"menu":"核酸结果管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","预约检测"],"menu":"核酸检测点列表","menuJump":"列表","tableName":"hesuanjiancedian"}],"menu":"核酸检测点模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"防疫人员","tableName":"fangyirenyuan"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}

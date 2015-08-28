
/**
 * 获取tab内容的iFrame
 * @param {Object} height 内容的高度
 * @param {Object} url 文件路径
 */
function getiframe(height,url){
	return '<iframe id="testing_negative" src="'
					+ url
					+ '" name="frame_negative" style="width: 100%;" height="'
					+ height
					+ 'px"></iframe>'
}

/**
 * 获取日期字符串yyyy年mm月dd日
 */
function getDate(){
	var today = new Date();
	var date = today.getDate();
	var month = today.getMonth() + 1;
	var year = today.getFullYear();
	return year + "年" + month + "月" + date + "日";
}

/**
 * 获取星期字符串
 */
function getWeek(){
	var day = new Date().getDay();
  	var week = "星期日";
	if(day==0){
		week = "星期日";
	} else if(day==0){
		week = "星期日";
	}
	switch(day){
	case 0:
		week = "星期日";
	break;
  	case 1:
  		week = "星期一";
  	break;
  	case 2:
  		week = "星期二";
  	break;
  	case 3:
  		week = "星期三";
  	break;
  	case 4:
  		week = "星期四";
  	break;
  	case 5:
  		week = "星期五";
  	break;
  	case 6:
  		week = "星期六";
  	break;
	}
	return week;
}

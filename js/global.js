
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

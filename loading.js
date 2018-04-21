/*
	author:		吴颖琳
	contact:	ng.winglam@qq.com
	date:		2018.04.21
	p.s.:		依赖jQuery，配套loading.css使用
*/


// 设置加载动画
function setLoading() {
	if($("body").find(".loading").length == 0) {
		var html = "<div class='loading'>";
		for(var i = 0; i < 10; i++) {
			html += "<span></span>";
		}
		html += "</div>";
		$("body").append(html);
		$(".loading").hide().fadeIn();
	} else {
		$(".loading").fadeIn();
	}
}

// 移除加载动画
function removeLoading() {
	$(".loading").fadeOut();
}
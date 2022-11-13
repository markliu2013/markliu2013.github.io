/**
 * 全局变量
 */
define(function() {
	var canvas = document.getElementById('chess-canvas');
	var ctx = null;
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
	}
	var playerArr = [];//包含坐标的数组，存储玩家的落子坐标
	var npcArr = [];//包含坐标的数组，存储电脑的落子坐标
	return {
		canvas: canvas,
		ctx: ctx,
		playerArr: playerArr,
		npcArr: npcArr
	};
})
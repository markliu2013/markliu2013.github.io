require.config({
	baseUrl:'js',
	shim: {
		'jQuery': {
			exports: 'jQuery'
		}
	},
	urlArgs: "bust=" + (new Date()).getTime()
});
require(['jQuery', 'global', 'config', 'util', 'grid', 'piece'], function($, global, cfg, util, grid, piece) {

	grid.draw();
	var preX = -1;
	var preY = -1;

	function hoverHandler(e) {
		e = e || window.event;
		var target = e.target || e.srcElement,
			style = target.currentStyle || window.getComputedStyle(target, null),
			borderLeftWidth = parseInt(style['borderLeftWidth'], 10),
			borderTopWidth = parseInt(style['borderTopWidth'], 10),
			rect = target.getBoundingClientRect(),
			offsetX = e.clientX - borderLeftWidth - rect.left,
			offsetY = e.clientY - borderTopWidth - rect.top;
		var x = Math.round(offsetX/cfg.gridSize);
		var y = Math.round(offsetY/cfg.gridSize);
		if (preX == x && preY == y) {
			return;
		}
		if (preX > 0 && preY > 0 && preX < cfg.gridColumnCount+2 && preY < cfg.gridRowCount+2) {
			piece.drawPoint(preX, preY, cfg.chessBoardColor);
		}
		if (x > 0 && y > 0 && x < cfg.gridColumnCount+2 && y < cfg.gridRowCount+2) {
			piece.drawPoint(x, y, cfg.pointColor);
		}
		preX = x;
		preY = y;
	}
	function clickHandler(e) {
		if (preX > 0 && preY > 0 && preX < cfg.gridColumnCount+2 && preY < cfg.gridRowCount+2) {
			if (!util.contains(global.playerArr, [preX, preY]) && !util.contains(global.npcArr, [preX, preY])) {
				piece.drawPiece(preX, preY, cfg.playerPieceColor);
				$(global.canvas).off('mousemove', hoverHandler);
				$(global.canvas).off('click', clickHandler);
				if (util.checkWinner(global.playerArr)) {
					alert('你赢了');
					return;
				}
				window.setTimeout(function() {
					piece.drawNpcPiece(preX, preY);
					if (util.checkWinner(global.npcArr)) {
						alert('电脑赢了');
						return;
					}
					$(global.canvas).on('mousemove', hoverHandler);
					$(global.canvas).on('click', clickHandler);
				},200);
			}
		}
	}

	$(global.canvas).on('mousemove', hoverHandler);
	$(global.canvas).on('click', clickHandler);

});



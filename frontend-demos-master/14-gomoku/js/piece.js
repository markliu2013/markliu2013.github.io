/**
 * 负责棋子的落子
 */
define(['global', 'config', 'util'], function(global, cfg, util) {
	var ctx = global.ctx;
	return {
		drawPiece: function(x, y, color) {
			ctx.save();
			ctx.beginPath();
			ctx.arc(cfg.gridSize*x, cfg.gridSize*y, cfg.pieceSize, 0, Math.PI*2, true);
			ctx.fillStyle = color;
			ctx.fill();
			ctx.restore();
			global.playerArr.push([x, y]);
		},
		drawNpcPiece: function(preX, preY) {
			ctx.save();
			ctx.beginPath();
			var emptyAroundArr = util.getAvailableAround([preX, preY]);
			if (emptyAroundArr.length > 0) {
				ctx.arc(cfg.gridSize*emptyAroundArr[0][0], cfg.gridSize*emptyAroundArr[0][1], cfg.pieceSize, 0, Math.PI*2, true);
				global.npcArr.push([emptyAroundArr[0][0], emptyAroundArr[0][1]]);
			} else {
				var coord = [util.getRandomNum(1,cfg.gridColumnCount-2), util.getRandomNum(1,cfg.gridRowCount-2)];
				this.drawNpcPiece(coord[0], coord[1]);
			}
			ctx.fillStyle = cfg.npcPieceColor;
			ctx.fill();
			ctx.restore();

		},
		drawPoint: function(x, y, color) {
			var s = cfg.gridSize;
			var x1 = s*x;
			var y1 = s*y;

			ctx.save();
			ctx.beginPath();

			ctx.moveTo(x1-s*0.5+0.5, y1-s*0.25+0.5);
			ctx.lineTo(x1-s*0.5+0.5, y1-s*0.5+0.5);
			ctx.lineTo(x1-s*0.25+0.5, y1-s*0.5+0.5);

			ctx.moveTo(x1+s*0.25+0.5, y1-s*0.5+0.5);
			ctx.lineTo(x1+s*0.5+0.5, y1-s*0.5+0.5);
			ctx.lineTo(x1+s*0.5+0.5, y1-s*0.25+0.5);

			ctx.moveTo(x1+s*0.5+0.5, y1+s*0.25+0.5);
			ctx.lineTo(x1+s*0.5+0.5, y1+s*0.5+0.5);
			ctx.lineTo(x1+s*0.25+0.5, y1+s*0.5+0.5);

			ctx.moveTo(x1-s*0.25+0.5, y1+s*0.5+0.5);
			ctx.lineTo(x1-s*0.5+0.5, y1+s*0.5+0.5);
			ctx.lineTo(x1-s*0.5+0.5, y1+s*0.25+0.5);

			ctx.lineWidth = 1;
			ctx.strokeStyle = color;
			ctx.stroke();
			ctx.restore();
		}
	};
});
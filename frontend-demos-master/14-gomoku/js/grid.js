/**
 * 棋盘
 */
define(['global', 'config'], function(global, cfg) {
	var ctx = global.ctx
	return {
		draw: function() {
			ctx.save();
			ctx.beginPath();
			ctx.fillStyle = cfg.chessBoardColor;
			ctx.fillRect(0, 0, cfg.canvasWidth, cfg.canvasHeight);
			for (var i=1; i<cfg.gridRowCount+2; i++) {
				ctx.moveTo(cfg.gridSize, cfg.gridSize*i);
				ctx.lineTo(cfg.gridSize*(cfg.gridColumnCount+1), cfg.gridSize*i);
			}
			for (var i=1; i<cfg.gridColumnCount+2; i++) {
				ctx.moveTo(cfg.gridSize*i, cfg.gridSize);
				ctx.lineTo(cfg.gridSize*i, (cfg.gridRowCount+1)*cfg.gridSize);
			}
			ctx.lineWidth = 2;
			ctx.strokeStyle = cfg.gridColor;
			ctx.stroke();
			ctx.restore();
		}
	};
});
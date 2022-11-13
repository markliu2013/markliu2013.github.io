define(['global', 'config'], function(global, cfg) {
	return {
		checkEqual: function(coordinates1, coordinates2) {

			if ( coordinates1[0]===coordinates2[0] && coordinates1[1]===coordinates2[1] ) {
				return true;
			} else {
				return false;
			}
		},
		contains: function(arr, coordinates) {
			var result = false;
			for (var i=0; i<arr.length; i++) {
				var coords = arr[i];
				if (this.checkEqual(coords, coordinates)) {
					result = true;
				}
			}
			return result;
		},
		getRandomNum: function(min, max) {
			var range = max - min;
			var rand = Math.random();
			return (min + Math.round(rand * range));
		},
		/**
		 * 获取周围的八个点
		 */
		getAround: function(coords) {
			var result = [];
			var x = coords[0];
			var y = coords[1];
			var x1 = x;
			var y1 = y-1;
			var x2 = x+1;
			var y2 = y;
			var x3 = x;
			var y3 = y+1;
			var x4 = x-1;
			var y4 = y;
			var x5 = x-1;
			var y5 = y-1;
			var x6 = x+1;
			var y6 = y-1;
			var x7 = x+1;
			var y7 = y+1;
			var x8 = x-1;
			var y8 = y+1;
			result.push([x1,y1]);//上
			result.push([x2,y2]);//右
			result.push([x3,y3]);//下
			result.push([x4,y4]);//左
			result.push([x5,y5]);//左上
			result.push([x6,y6]);//右上
			result.push([x7,y7]);//右下
			result.push([x8,y8]);//左下
			return result;
		},
		/**
		 * 计算周围空置的点
		 */
		getAvailableAround: function(coords) {
			var aroundArr1 = this.getAround(coords);
			var aroundArr2 = [];
			var result = [];
			for (var i=0; i<aroundArr1.length; i++) {
				var coord = aroundArr1[i];
				if (coord[0] > 0 && coord[1] > 0 && coord[0] < cfg.gridColumnCount+2 && coord[1] < cfg.gridRowCount+2) {
					aroundArr2.push(coord);
				}
			}
			for (var i=0; i<aroundArr2.length; i++) {
				var coord = aroundArr2[i];
				if (!this.contains(global.playerArr, coord) && !this.contains(global.npcArr, coord)) {
					result.push(coord);
				}
			}
			return result;
		},
		/**
		 * 胜负判定
		 */
		checkWinner: function(arr) {
			var lastCoord = arr[arr.length-1];
			var aroundArr = this.getAround(lastCoord);
			var aroundIndexArr = [];//有落子的索引
			for (var i=0; i<aroundArr.length; i++) {
				if (this.contains(arr, aroundArr[i])) {
					aroundIndexArr.push(i)
				}
			}
			for (var i=0; i<aroundIndexArr.length; i++) {
				switch (aroundIndexArr[i]) {
					case 0:
						if (this.contains(arr, [lastCoord[0], lastCoord[1]-2]) &&
							this.contains(arr, [lastCoord[0], lastCoord[1]-3]) &&
							this.contains(arr, [lastCoord[0], lastCoord[1]-4])
							) {
							return true;
						}
						break;
					case 1:
						if (this.contains(arr, [lastCoord[0]+2, lastCoord[1]]) &&
							this.contains(arr, [lastCoord[0]+3, lastCoord[1]]) &&
							this.contains(arr, [lastCoord[0]+4, lastCoord[1]])
							) {
							return true;
						}
						break;
					case 2:
						if (this.contains(arr, [lastCoord[0], lastCoord[1]+2]) &&
							this.contains(arr, [lastCoord[0], lastCoord[1]+3]) &&
							this.contains(arr, [lastCoord[0], lastCoord[1]+4])
							) {
							return true;
						}
						break;
					case 3:
						if (this.contains(arr, [lastCoord[0]-2, lastCoord[1]]) &&
							this.contains(arr, [lastCoord[0]-3, lastCoord[1]]) &&
							this.contains(arr, [lastCoord[0]-4, lastCoord[1]])
							) {
							return true;
						}
						break;
					case 4:
						if (this.contains(arr, [lastCoord[0]-2, lastCoord[1]-2]) &&
							this.contains(arr, [lastCoord[0]-3, lastCoord[1]-3]) &&
							this.contains(arr, [lastCoord[0]-4, lastCoord[1]-4])
							) {
							return true;
						}
						break;
					case 5:
						if (this.contains(arr, [lastCoord[0]+2, lastCoord[1]-2]) &&
							this.contains(arr, [lastCoord[0]+3, lastCoord[1]-3]) &&
							this.contains(arr, [lastCoord[0]+4, lastCoord[1]-4])
							) {
							return true;
						}
						break;
					case 6:
						if (this.contains(arr, [lastCoord[0]+2, lastCoord[1]+2]) &&
							this.contains(arr, [lastCoord[0]+3, lastCoord[1]+3]) &&
							this.contains(arr, [lastCoord[0]+4, lastCoord[1]+4])
							) {
							return true;
						}
						break;
					case 7:
						if (this.contains(arr, [lastCoord[0]-2, lastCoord[1]+2]) &&
							this.contains(arr, [lastCoord[0]-3, lastCoord[1]+3]) &&
							this.contains(arr, [lastCoord[0]-4, lastCoord[1]+4])
							) {
							return true;
						}
						break;
				}
			}
		}
	};
});
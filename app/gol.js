// Collection of cells

var Grid = function GridConstructor (height, width) {
  this.width = width;
  this.height = height;
  this.cells = {};
};

Grid.prototype.addCell = function (cell, x, y) {
  if (!this.cells[x]) {
    this.cells[x] = {};
  }
  this.cells[x][y] = cell;
};

Grid.prototype.getCell = function(x, y) {
  if (!this.cells[x]) {
    return null;
  }
  return this.cells[x][y] || null;
};

Grid.prototype.getLiveNeighbors = function(x,y) {
  var liveNeighbors = 0;
  for(var i = x - 1; i <= x + 1; i++) {
    if (!this.cells[i]) {
      continue;
    }
    for (var j = y - 1; j <= y + 1; j++) {
      if (j === y && i === x) {
        continue;
      }
      if (!this.cells[i][j]) {
        continue;
      }
      liveNeighbors++
    }
  }
  return liveNeighbors;
};

Grid.prototype.calculateNextState = function(x, y) {
  var neighbors = this.getLiveNeighbors(x, y);
  if (neighbors < 2) {
    delete this.cells[x][y];
  }

  if (neighbors > 3) {
    delete this.cells[x][y];
  }
};

Grid.prototype.step = function() {
  for (var i = 0; i < this.width; i++){
    if (!this.cells[i]) {
      continue;
    }
    for (var j = 0; j < this.height; j++){
      this.calculateNextState(i,j);
    }
  }
}

Grid.prototype.renderState = function() {
  var state = '';
  for (var i = 0; i < this.height; i++){
    for (var j = 0; j < this.width; j++){
      if (this.cells[j]) {
        console.log(j + ', ' + i + ', ' + this.cells[j][i]);
        if (!this.cells[j][i]) {
          state += '_';
          continue;
        }
        state += this.cells[j][i] ? 'O' : '_';
      } else {
        state += '_';
      }
    }
    if (i < this.height - 1) {
      state += '\n';
    }
  }
  return state;
}

var Cell = function CellConstructor () {};

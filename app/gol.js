// Collection of cells

var Grid = function GridConstructor (height, width) {
  this.cells = {};
};

Grid.prototype.addCell = function (cell, x, y) {

  if ( ! this.cells[x]) {
    this.cells[x] = {};
  }

  this.cells[x][y] = cell;
};
Grid.prototype.getCell = function(x, y){
  if(!this.cells[x]){
    return null;
  }
  return this.cells[x][y] || null;
};

Grid.prototype.getLiveNeighbors = function(x,y) {
  var liveNeighbors = 0;
  for(var i=x-1; i <= x+1; i++){
    if (!this.cells[i]){
      continue;
    }
    for(var j=y-1; j <= y+1; j++){
      if(j === y && i === x) {
        continue;
      }
      if (!this.cells[i][j]){
        continue;
      }
      liveNeighbors++
    }
  }
  return liveNeighbors;
}

Grid.prototype.calculateNextState = function(x, y) {
  var neighbors = this.getLiveNeighbors(x, y);
  if (neighbors < 2) {
    delete this.cells[x][y];
  }
}

var Cell = function CellConstructor () {

};

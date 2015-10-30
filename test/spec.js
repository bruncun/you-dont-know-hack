
describe('Conways Game of Life', function() {
  var grid, cellObj;

  it('tests sanity', function(){
    expect(true).toBe(true);
  });

  beforeEach(function(){
    grid = new Grid();
    cellObj = new Cell();
  });

  describe('addCell', function() {
    it('adds cells to a grid', function() {
      // Semantics
      grid.addCell(cellObj, 1, 1);

      expect(grid.cells[1][1]).toEqual(cellObj);
    });
  });

  describe('getCell', function() {
    it('returns the cell at provided coordinates', function() {
      grid.addCell(cellObj, 1, 1);
      expect(grid.getCell(1, 1)).toEqual(cellObj);
    });
  });

  describe('getLiveNeighbors', function() {
    it('returns one if there is one live neighbor', function() {
      var x = 1;
      var y = 1;
      grid.addCell(cellObj, x, y);
      grid.addCell(cellObj, x + 1, y);
      expect(grid.getLiveNeighbors(x,y)).toEqual(1);
    });
    it('returns four if there are eight neighbors available', function() {
      var x = 1;
      var y = 1;
      grid.addCell(cellObj, x, y);
      grid.addCell(cellObj, x + 1, y);
      grid.addCell(cellObj, x , y + 1);
      grid.addCell(cellObj, x + 1, y + 1);
      grid.addCell(cellObj, x - 1, y + 1);
      expect(grid.getLiveNeighbors(x,y)).toEqual(4);


    });
    it('returns one if there are seven dead cells', function() {
      var x = 1;
      var y = 1;
      grid.addCell(cellObj, x, y);
      grid.addCell(cellObj, x + 1, y);
      expect(grid.getLiveNeighbors(x,y)).toEqual(1);
    });
  });

  describe('calculateNextState', function() {
    it('dies if there are less than two live neighbors', function() {
      var x = 1,
        y = 1;
      grid.addCell(cellObj, x, y);
      grid.calculateNextState(x, y);

      expect(grid.getCell(x, y)).toEqual(null);
    });
    // it('dies if there are more than three live neighbors', function() {});
    // it('lives if there are or two or three live neighbors', function() {});
    // it('does not come back to life if there are two live neighbors', function() {});
  });

  describe('step', function() {
    // it('calculates the new state for all dying cells', function() {});
    // it('calculates the new state for all living cells', function() {});
    // it('calculates the new state correctly for many cells', function() {});
  });
});

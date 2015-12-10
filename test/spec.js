describe('Conways Game of Life', function() {
  var grid, cellObj;

  it('tests sanity', function() {
    expect(true).toBe(true);
  });

  beforeEach(function() {
    grid = new Grid(50, 50);
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

    it('dies if there are more than three live neighbors', function() {
      var x = 1,
        y = 1;
      grid.addCell(cellObj, x, y);
      grid.addCell(cellObj, x + 1, y);
      grid.addCell(cellObj, x - 1, y);
      grid.addCell(cellObj, x, y + 1);
      grid.addCell(cellObj, x, y - 1);
      grid.calculateNextState(x, y);
      expect(grid.getCell(x, y)).toEqual(null);
    });

    it('lives if there are two live neighbors', function() {
      var x = 1,
        y = 1;
      grid.addCell(cellObj, x, y);
      grid.addCell(cellObj, x + 1, y);
      grid.addCell(cellObj, x - 1, y);
      grid.calculateNextState(x, y);
      expect(grid.getCell(x, y)).toEqual(cellObj);
    });

    it('lives if there are three live neighbors', function() {
      var x = 1,
        y = 1;
      grid.addCell(cellObj, x, y);
      grid.addCell(cellObj, x + 1, y);
      grid.addCell(cellObj, x - 1, y);
      grid.addCell(cellObj, x, y + 1);
      grid.calculateNextState(x, y);
      expect(grid.getCell(x, y)).toEqual(cellObj);
    });

    it('does not come back to life if there are two live neighbors', function() {
      var x = 1,
        y = 1;
      grid.addCell(cellObj, x + 1, y);
      grid.addCell(cellObj, x - 1, y);
      grid.calculateNextState(x, y);
      expect(grid.getCell(x, y)).toEqual(null);
    });
  });

  describe('step', function() {
    it('calculates the new state for all dying cells', function() {
      var x = 1,
        y = 1;
      grid.addCell(cellObj, x, y);
      grid.addCell(cellObj, x + 1, y);
      grid.step();
      expect(grid.getCell(x,y)).toEqual(null);
    });
    it('calculates the new state for all living cells', function() {
      var x = 1,
        y = 1;
      grid.addCell(cellObj, x, y);
      grid.addCell(cellObj, x + 1, y);
      grid.addCell(cellObj, x + 1, y + 1);
      grid.step();
      expect(grid.getCell(x,y)).toEqual(cellObj);
    });
    it('calculates the new state correctly for many cells', function() {
      var x = 1, y = 1, a=5, b=5, i=42, j=42;
      grid.addCell(cellObj, x, y);
      grid.addCell(cellObj, x + 1, y);
      grid.addCell(cellObj, x + 1, y + 1);
      grid.addCell(cellObj, a, b);
      grid.addCell(cellObj, a + 1, b);
      grid.addCell(cellObj, a + 1, b + 1);
      grid.addCell(cellObj, i, j);
      grid.addCell(cellObj, i + 1, j);
      grid.step();
      expect(grid.getCell(x,y)).toEqual(cellObj);
      expect(grid.getCell(a,b)).toEqual(cellObj);
      expect(grid.getCell(i,j)).toEqual(null);
    });
  });

  describe('renderState', function () {
    it('returns "O" if there is one live cell', function() {
      grid.height = 1;
      grid.width = 1;
      grid.addCell(cellObj, 0, 0);
      expect(grid.renderState()).toEqual('O');
    });

    it('returns "_" if there is one dead cell', function() {
      grid.height = 1;
      grid.width = 1;
      expect(grid.renderState()).toEqual('_');
    });
    it('renders an "O_O\n_O_" for live cells at (0, 0), (2, 0), and (1, 1)', function() {
      grid.height = 2;
      grid.width = 3;
      var x = 0, y = 0, a=2, b=0, i=1, j=1;
      grid.addCell(cellObj, x, y);
      grid.addCell(cellObj, a, b);
      grid.addCell(cellObj, i, j);
      expect(grid.renderState()).toEqual('O_O\n_O_');
    });
  });
});

describe('Conways Game of Life', function() {

  it('is a sanity test', function() {
  expect(true).toBe(true);
  });
  var board, cell;

  beforeEach(function() {
  board = new Board();
  cell = new Cell(1, 1, true);
  board.addCell(cell);
  });

  describe('addCell', function() {
   it('adds a cell to a board', function() {
    expect(board.cells.x1y1).toEqual(cell);
   });
  });

  describe('getCellAt', function() {
   it('returns the cell at the provided coordinates', function() {
     expect(board.getCellAt(1, 1)).toEqual(cell);
   });
  });

  describe('getAliveNeighbors', function() {

    it('returns 0 if there are no other cells', function() {
    expect(board.getAliveNeighbors(cell)).toEqual(0);
    });

    it('returns 1 if there is one alive cell next to the cell', function() {
    var neighborCell = new Cell(0, 1, true);
    board.addCell(neighborCell);

    expect(board.getAliveNeighbors(cell)).toEqual(1);
    });

    it('returns 8 if there are 8 neighbors available', function() {
    board.addCell(new Cell(0, 1, true));
    board.addCell(new Cell(0, 2, true));
    board.addCell(new Cell(0, 0, true));
    board.addCell(new Cell(2, 1, true));
    board.addCell(new Cell(1, 0, true));
    board.addCell(new Cell(2, 2, true));
    board.addCell(new Cell(1, 2, true));
    board.addCell(new Cell(2, 0, true));

    expect(board.getAliveNeighbors(cell)).toEqual(8);
    });

    it('returns 1 if there are 7 dead cells next available', function() {
    board.addCell(new Cell(0, 1, true));
    board.addCell(new Cell(0, 2, false));
    board.addCell(new Cell(0, 0, false));
    board.addCell(new Cell(2, 1, false));
    board.addCell(new Cell(1, 0, false));
    board.addCell(new Cell(2, 2, false));
    board.addCell(new Cell(1, 2, false));
    board.addCell(new Cell(2, 0, false));

    expect(board.getAliveNeighbors(cell)).toEqual(1);
    });
  });

  describe('calculateNextState', function() {
    it('dies if there are less than 2 living neighbors', function() {
    board.addCell(new Cell(0, 0, true));

    expect(board.calculateNextState(cell).isAlive()).toBe(false);
    });

    it('dies if there are more than 3 living neighbors', function() {
    board.addCell(new Cell(0, 1, true));
    board.addCell(new Cell(0, 2, true));
    board.addCell(new Cell(0, 0, true));
    board.addCell(new Cell(1, 2, true));

    expect(board.calculateNextState(cell).isAlive()).toBe(false);
    });


    it('lives if there are 2 or 3 living neighbors', function() {
    board.addCell(new Cell(0, 0, true));
    board.addCell(new Cell(0, 1, true));

    expect(board.calculateNextState(cell).isAlive()).toBe(true);
    });

    it('comes back to live if there are exactly 3 living neighbors ', function() {
    board.addCell(new Cell(0, 0, true));
    board.addCell(new Cell(0, 1, true));
    board.addCell(new Cell(0, 2, true));
    cell.alive = false;

    expect(board.calculateNextState(cell).isAlive()).toBe(true);
    });

    it('does not come back to live if there are exactly 2 living neighbors ', function() {
    board.addCell(new Cell(0, 0, true));
    board.addCell(new Cell(0, 1, true));
    cell.alive = false;

    expect(board.calculateNextState(cell).isAlive()).toBe(false);
    });

  });

  describe('step', function() {
    it('calculates the new state for all dying cells', function() {
    board.addCell(new Cell(0, 0, true));

    board.step();

    expect(board.getCellAt(0, 0).isAlive()).toBe(false);
    expect(board.getCellAt(1, 1).isAlive()).toBe(false);
    });
    it('calculates the new state for all living cells', function() {
    board.addCell(new Cell(0, 0, true));
    board.addCell(new Cell(1, 2, true));

    board.step();

    expect(board.getCellAt(0, 0).isAlive()).toBe(false);
    expect(board.getCellAt(1, 1).isAlive()).toBe(true);
    });

    it('calculates the new state correctly for many cells', function() {
    board.addCell(new Cell(0, 1, true));
    board.addCell(new Cell(0, 2, true));
    board.addCell(new Cell(0, 0, false));
    board.addCell(new Cell(2, 1, true));
    board.addCell(new Cell(1, 0, true));
    board.addCell(new Cell(2, 2, true));
    board.addCell(new Cell(1, 2, false));
    board.addCell(new Cell(2, 0, false));
    board.step();

    expect(board.getCellAt(1, 1).isAlive()).toBe(false);
    expect(board.getCellAt(0, 1).isAlive()).toBe(true);
    expect(board.getCellAt(2, 2).isAlive()).toBe(true);
    });

  });
});

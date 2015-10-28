var CONWAY = (function() {
    var my = {};

    var stick = function(board, startX, startY) {
        board.addCell(new Cell(startX, startY, true));
        board.addCell(new Cell(startX, startY + 1, true));
        board.addCell(new Cell(startX, startY + 2, true));
        board.addCell(new Cell(startX - 1, startY + 1, false));
        board.addCell(new Cell(startX + 1, startY + 1, false));
    };

    var sticksmiley = function(board) {
        stick(board, 20, 5);
        stick(board, 60, 5);
        stick(board, 40, 8);

        stick(board, 15, 13);
        stick(board, 20, 14);
        stick(board, 25, 15);
        stick(board, 30, 16);
        stick(board, 35, 17);
        stick(board, 40, 17);
        stick(board, 45, 17);
        stick(board, 50, 16);
        stick(board, 55, 15);
        stick(board, 60, 14);
        stick(board, 65, 13);
    };

    var glider = function(board, startX, startY) {
        board.addCell(new Cell(startX, startY, true));
        board.addCell(new Cell(startX, startY + 2, true));
        board.addCell(new Cell(startX + 1, startY + 1, true));
        board.addCell(new Cell(startX + 1, startY + 2, true));
        board.addCell(new Cell(startX - 1, startY + 2, true));
    };

    var spaceship = function(board, startX, startY) {
        board.addCell(new Cell(startX, startY, true));
        board.addCell(new Cell(startX, startY + 1, true));
        board.addCell(new Cell(startX, startY + 2, true));
        board.addCell(new Cell(startX + 1, startY - 1, true));
        board.addCell(new Cell(startX + 1, startY + 2, true));
        board.addCell(new Cell(startX + 2, startY + 2, true));
        board.addCell(new Cell(startX + 3, startY + 2, true));
        board.addCell(new Cell(startX + 4, startY + 1, true));
        board.addCell(new Cell(startX + 4, startY - 1, true));
    };

    var pulsar = function(board, startX, startY) {
        allDead(board);

        board.addCell(new Cell(startX, startY, true));
        board.addCell(new Cell(startX, startY + 1, true));
        board.addCell(new Cell(startX, startY + 2, true));

        board.addCell(new Cell(startX + 2, startY - 2, true));
        board.addCell(new Cell(startX + 3, startY - 2, true));
        board.addCell(new Cell(startX + 4, startY - 2, true));

        board.addCell(new Cell(startX + 2, startY + 3, true));
        board.addCell(new Cell(startX + 3, startY + 3, true));
        board.addCell(new Cell(startX + 4, startY + 3, true));

        board.addCell(new Cell(startX + 5, startY, true));
        board.addCell(new Cell(startX + 5, startY + 1, true));
        board.addCell(new Cell(startX + 5, startY + 2, true));


        board.addCell(new Cell(startX + 7, startY, true));
        board.addCell(new Cell(startX + 7, startY + 1, true));
        board.addCell(new Cell(startX + 7, startY + 2, true));

        board.addCell(new Cell(startX + 8, startY - 2, true));
        board.addCell(new Cell(startX + 9, startY - 2, true));
        board.addCell(new Cell(startX + 10, startY - 2, true));

        board.addCell(new Cell(startX + 8, startY + 3, true));
        board.addCell(new Cell(startX + 9, startY + 3, true));
        board.addCell(new Cell(startX + 10, startY + 3, true));

        board.addCell(new Cell(startX + 12, startY, true));
        board.addCell(new Cell(startX + 12, startY + 1, true));
        board.addCell(new Cell(startX + 12, startY + 2, true));


        board.addCell(new Cell(startX, startY + 6, true));
        board.addCell(new Cell(startX, startY + 7, true));
        board.addCell(new Cell(startX, startY + 8, true));

        board.addCell(new Cell(startX + 2, startY + 5, true));
        board.addCell(new Cell(startX + 3, startY + 5, true));
        board.addCell(new Cell(startX + 4, startY + 5, true));

        board.addCell(new Cell(startX + 2, startY + 10, true));
        board.addCell(new Cell(startX + 3, startY + 10, true));
        board.addCell(new Cell(startX + 4, startY + 10, true));

        board.addCell(new Cell(startX + 5, startY + 6, true));
        board.addCell(new Cell(startX + 5, startY + 7, true));
        board.addCell(new Cell(startX + 5, startY + 8, true));


        board.addCell(new Cell(startX + 7, startY + 6, true));
        board.addCell(new Cell(startX + 7, startY + 7, true));
        board.addCell(new Cell(startX + 7, startY + 8, true));

        board.addCell(new Cell(startX + 8, startY + 5, true));
        board.addCell(new Cell(startX + 9, startY + 5, true));
        board.addCell(new Cell(startX + 10, startY + 5, true));

        board.addCell(new Cell(startX + 8, startY + 10, true));
        board.addCell(new Cell(startX + 9, startY + 10, true));
        board.addCell(new Cell(startX + 10, startY + 10, true));

        board.addCell(new Cell(startX + 12, startY + 6, true));
        board.addCell(new Cell(startX + 12, startY + 7, true));
        board.addCell(new Cell(startX + 12, startY + 8, true));
    };

    var glidergun = function(board) {
        allDead(board);
        board.addCell(new Cell(1, 8, true));
        board.addCell(new Cell(1, 9, true));
        board.addCell(new Cell(2, 8, true));
        board.addCell(new Cell(2, 9, true));

        board.addCell(new Cell(35, 7, true));
        board.addCell(new Cell(35, 8, true));
        board.addCell(new Cell(36, 7, true));
        board.addCell(new Cell(36, 8, true));

        board.addCell(new Cell(11, 8, true));
        board.addCell(new Cell(11, 9, true));
        board.addCell(new Cell(11, 10, true));
        board.addCell(new Cell(12, 7, true));
        board.addCell(new Cell(12, 11, true));
        board.addCell(new Cell(13, 6, true));
        board.addCell(new Cell(13, 12, true));
        board.addCell(new Cell(14, 6, true));
        board.addCell(new Cell(14, 12, true));
        board.addCell(new Cell(15, 9, true));
        board.addCell(new Cell(16, 7, true));
        board.addCell(new Cell(16, 11, true));
        board.addCell(new Cell(17, 8, true));
        board.addCell(new Cell(17, 9, true));
        board.addCell(new Cell(17, 10, true));
        board.addCell(new Cell(18, 9, true));

        board.addCell(new Cell(21, 6, true));
        board.addCell(new Cell(21, 7, true));
        board.addCell(new Cell(21, 8, true));
        board.addCell(new Cell(22, 6, true));
        board.addCell(new Cell(22, 7, true));
        board.addCell(new Cell(22, 8, true));
        board.addCell(new Cell(23, 5, true));
        board.addCell(new Cell(23, 9, true));
        board.addCell(new Cell(25, 4, true));
        board.addCell(new Cell(25, 5, true));
        board.addCell(new Cell(25, 9, true));
        board.addCell(new Cell(25, 10, true));
    };

    var CONWAY_GLOB_MAX_X = 99;
    var CONWAY_GLOB_MAX_Y = 23;

    var CONWAY_COLORS = [
        {c: '#ff0000'},
        {c: '#00ff00'},
        {c: '#eeeeff'},
        {c: '#ff00ff'},
        {c: '#ffff00'},
        {c: '#ffa500'},
        {c: '#00ffff'}
    ];

    var CONWAY_SYMBOL = ['o', 'x', 'v', 'y', 'w', 'u'];
    var CONWAY_EMPTY_SYMBOL = '&nbsp;';

    var allDead = function(board) {
        for(var y = 0; y <= CONWAY_GLOB_MAX_Y; y++) {
            for(var x = 0; x <= CONWAY_GLOB_MAX_X; x++) {
                board.addCell(new Cell(x, y, false));
            }
        }
    };

    var gliders = function(board) {
        allDead(board);

        glider(board, 10, 7);
        glider(board, 65, 2);
        spaceship(board, 60, 9);
        spaceship(board, 40, 17);
    };

    var randomInit = function(board) {
        for (var y = 0; y <= CONWAY_GLOB_MAX_Y; y++) {
            for (var x = 0; x <= CONWAY_GLOB_MAX_X; x++) {
                board.addCell(new Cell(x, y, (Math.random() > 0.8)));
            }
        }
    };

    var CONWAY_INITFUNCTIONS = [
        function(board) {sticksmiley(board);},
        function(board) {gliders(board);},
        function(board) {glidergun(board);},
        function(board) {pulsar(board, 35, 7);},
        function(board) {randomInit(board);}
    ];


    var Board = function() {
        this.cells = {};
    };

    Board.prototype = {
        addCell: function(cell){
            this.cells[getCellRepresentation(cell.x, cell.y)] = cell;
        },
        getCellAt: function(x, y) {
            return this.cells[getCellRepresentation(x, y)];
        },
        getCells: function() {
            return this.cells;
        },
        getAliveNeighbors: function(cell) {
            var x = cell.x;
            var y = cell.y;
            var aliveCells = 0;

            for (var i = -1; i < 2; i++) {
                for(var j = -1; j < 2; j++) {
                    if(i === 0 && i == j) {
                        continue;
                    }
                    var currentCell = this.getCellAt(x + i, y + j);

                    if(currentCell && currentCell.isAlive()) {
                        aliveCells++;
                    }
                }
            }

            return aliveCells;
        },
        calculateNextState: function(cell) {
            var tempCell = new Cell(cell.x, cell.y, cell.alive);
            var livingNeighbors = this.getAliveNeighbors(cell);

            if(cell.isAlive()) {
                if(livingNeighbors == 2 || livingNeighbors == 3) {
                    tempCell.alive = true;
                } else {
                    tempCell.alive = false;
                }
            } else {
                if(livingNeighbors == 3) {
                    tempCell.alive = true;
                }
            }

            return tempCell;
        },
        step: function() {
            var cells = this.cells;
            var tempBoard = {};

            for(var c in this.cells) {
                var cell = this.cells[c];
                var newCell = this.calculateNextState(cell);
                tempBoard[c] = newCell;
            }

            this.cells = tempBoard;
        }
    };

    var Cell = function(x, y, alive) {
        this.x = x;
        this.y = y;
        this.alive = alive;
    };

    Cell.prototype = {
        isAlive : function() {
            return this.alive;
        }

    };

    var getCellRepresentation = function(x, y) {
        return "x" + x + "y" + y;
    };

    var getRandomElement = function(array) {
        return array[Math.floor(Math.random() * array.length)];
    };

    var draw = function(board, canvas, config) {
        var output = ' ';

        for(var y = 0; y <= config.maxy; y++) {
            for(var x = 0; x <= config.maxx; x++) {
                var cell = board.getCellAt(x, y);
                output += cell && cell.isAlive() ? config.symbol : CONWAY_EMPTY_SYMBOL;
            }
            output += '<br/>';
        }

        canvas.html(output);
    };

    my.initConway = function(id, body) {
        clearInterval(id);
        return doConway(body);
    };

    my.resetConway = function(id, body) {
        body.empty();
        clearInterval(id);
    };

    var doConway = function(body) {
        var board = new Board();
        var config = {
            initFunction: getRandomElement(CONWAY_INITFUNCTIONS),
            symbol: getRandomElement(CONWAY_SYMBOL),
            colors: getRandomElement(CONWAY_COLORS),
            maxx: CONWAY_GLOB_MAX_X,
            maxy: CONWAY_GLOB_MAX_Y
        };

        body.css('color', config.colors.c);

        config.initFunction(board);

        draw(board, body, config);

        return setInterval(function() {
            board.step();
            draw(board, body, config);
        }, 130);
    };

    return my;
}());

var conwayRandIntervalId = null;

$(function () {
    var conwayBody = $('#conway');

    $('#resetCW').click(function () {
        CONWAY.resetConway(conwayRandIntervalId, conwayBody);
    });

    $('#startCW').click(function () {
        conwayRandIntervalId = CONWAY.initConway(conwayRandIntervalId, conwayBody);
    });
});
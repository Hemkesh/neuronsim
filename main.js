$(document).ready(function() {
    $('select').formSelect();
    $('#w1v').text($('#w1').val())
    $('#w2v').text($('#w2').val())
});

$('.i').on('input', function(e) {
    $('#w1v').text($('#w1').val())
    $('#w2v').text($('#w2').val())
    var in1 = parseFloat($('#in1').val());
    var in2 = parseFloat($('#in2').val());
    var w1 = parseFloat($('#w1').val());
    var w2 = parseFloat($('#w2').val());
    var b = parseFloat($('#bias').val());
    var act = parseInt($('#act').val());
    var out = in1 * w1 + in2 * w2 + b;
    if (!isNaN(out) && act) {
        var o = 0;
        $("#inev").text(out)
        $("#ine").text(in1 + " * " + w1 + " + " + in2 + " * " + w2 + " + " + b)
        if (act == 1) {
            o = step(out)
            $('#out').text(o);
        }
        if (act == 2) {
            o = sig(out)
            $('#out').text(o);
        }
        if (act == 3) {
            o = relu(out)
            $('#out').text(o);
        }
        if (o > 0) {
            op = o + 0.2;
            $(".neuron").css("background-color", "lightGreen");
            $(".neuron").css("opacity", op.toString());
        } else {
            $(".neuron").css("background-color", "grey");
            $(".neuron").css("opacity", "1");
        }
    }
});

function relu(x) {
    if (x < 0) {
        return 0
    } else {
        return x
    }
}

function step(x) {
    if (x < 0) {
        return 0
    } else {
        return 1
    }
}

function sig(t) {
    return 1 / (1 + Math.pow(Math.E, -t));
}
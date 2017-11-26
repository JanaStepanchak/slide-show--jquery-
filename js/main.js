var check = 1;
var click = 0;

function right() {
    if (check == 3 && click == 0) {
        $('#box1').css({
            left: "115%"
        });

        $('#box1').animate({
            left: "25%"
        }, {
            duration: 1000,
            easing: "linear"
        });

        $('#box2').animate({
            left: "115%"
        }, {
            duration: 0,
            easing: "linear"
        })

        $('#box3').animate({
            left: "-75%"
        }, {
            duration: 1000,
            easing: "linear"
        })

        $('#radio1').css({
            background: "#fff"
        });
        $('#radio2').css({
            background: "none"
        });
        $('#radio3').css({
            background: "none"
        })

        check = 1;
        click = 1;
    }

    if (check == 1 && click == 0) {
        $('#box2').animate({
            left: "25%"
        }, {
            duration: 1000,
            easing: "linear"
        })

        $('#box1').animate({
            left: "-75%"
        }, {
            duration: 1000,
            easing: "linear"
        });;
        $('#box3').animate({
            left: "115%"
        }, {
            duration: 0,
            easing: "linear"
        })

        $('#radio1').css({
            background: "none"
        });
        $('#radio2').css({
            background: "#fff"
        });
        $('#radio3').css({
            background: "none"
        })

        check = 2;
        click = 1;

    }

    if (check == 2 && click == 0) {

        $('#box3').animate({
            left: "25%"
        }, {
            duration: 1000,
            easing: "linear"
        });

        $('#box1').animate({
            left: "-75%"
        }, {
            duration: 1000,
            easing: "linear"
        });
        $('#box2').animate({
            left: "-75%"
        }, {
            duration: 1000,
            easing: "linear"
        });

        $('#radio1').css({
            background: "none"
        });
        $('#radio2').css({
            background: "none"
        });
        $('#radio3').css({
            background: "#fff"
        })

        check = 3;
        click = 1;
    }
    click = 0;
}

function left() {

    if (check == 1 && click == 0) {
        $('#box3').css({
            left: "-75%"
        });

        $('#box3').animate({
            left: "25%"
        }, {
            duration: 1000,
            easing: "linear"
        })

        $('#box1').animate({
            left: "115%"
        }, {
            duration: 1000,
            easing: "linear"
        });;
        $('#box2').animate({
            left: "115%"
        }, {
            duration: 0,
            easing: "linear"
        })


        check = 3;
        click = 1;
        $('#radio1').css({
            background: "none"
        });
        $('#radio2').css({
            background: "none"
        });
        $('#radio3').css({
            background: "#fff"
        })
        console.log(check, click);
    }

    if (check == 2 && click == 0) {
        $('#box1').animate({
            left: "25%"
        }, {
            duration: 1000,
            easing: "linear"
        });

        $('#box2').animate({
            left: "115%"
        }, {
            duration: 1000,
            easing: "linear"
        });
        $('#box3').animate({
            left: "115%"
        }, {
            duration: 0,
            easing: "linear"
        });

        check = 1;
        click = 1;
        $('#radio1').css({
            background: "#fff"
        });
        $('#radio2').css({
            background: "none"
        });
        $('#radio3').css({
            background: "none"
        })
        console.log(check, click);
    }

    if (check == 3 && click == 0) {
        $('#box2').css({
            left: "-75%"
        });


        $('#box2').animate({
            left: "25%"
        }, {
            duration: 1000,
            easing: "linear"
        });

        $('#box1').animate({
            left: "-75%"
        }, {
            duration: 0,
            easing: "linear"
        })

        $('#box3').animate({
            left: "115%"
        }, {
            duration: 1000,
            easing: "linear"
        })
        check = 2;
        click = 1;
        $('#radio1').css({
            background: "none"
        });
        $('#radio2').css({
            background: "#fff"
        });
        $('#radio3').css({
            background: "none"
        })

        console.log(check, click);
    }
    click = 0;
}

$('#radio1').click(function () {
    $(this).css({
        background: "#fff"
    });
    $('#radio2').css({
        background: "none"
    });
    $('#radio3').css({
        background: "none"
    })
    $('#box1').css({
        left: "-75%"
    });

    $('#box1').animate({
        left: "25%"
    }, {
        duration: 1000,
        easing: "linear"
    })

    if (check == 2) {
        $('#box2').animate({
            left: "115%"
        }, 1000)
    }



    if (check == 3) {

        $('#box3').animate({
            left: "115%"
        }, {
            duration: 1000,
            easing: "linear"
        });;
        $('#box2').css({
            left: "115%"
        })
    }

    check = 1;
    console.log(check);
})

$('#radio2').click(function () {
    $(this).css({
        background: "#fff"
    });
    $('#radio1').css({
        background: "none"
    });
    $('#radio3').css({
        background: "none"
    })


    if (check == 1) {

        $('#box2').css({
            left: "115%"
        })

        $('#box2').animate({
            left: "25%"
        }, {
            duration: 1000,
            easing: "linear"
        })

        $('#box1').animate({
            left: "-70%"
        }, {
            duration: 1000,
            easing: "linear"
        })
    }

    if (check == 3) {

        $('#box2').css({
            left: "-75%"
        })

        $('#box2').animate({
            left: "25%"
        }, {
            duration: 1000,
            easing: "linear"
        })

        $('#box3').animate({
            left: "115%"
        }, {
            duration: 1000,
            easing: "linear"
        })
    }
    check = 2;
    console.log(check);
});

$('#radio3').click(function () {

    $(this).css({
        background: "#fff"
    });
    $('#radio2').css({
        background: "none"
    });
    $('#radio1').css({
        background: "none"
    })


    if (check == 2) {
        $('#box2').animate({
            left: "-70%"
        }, {
            duration: 1000,
            easing: "linear"
        })
    }

    if (check == 1) {
        $('#box1').animate({
            left: "-70%"
        }, {
            duration: 1000,
            easing: "linear"
        });
        $('#box2').animate({
            left: "-70%"
        }, {
            duration: 0,
            easing: "linear"
        })
    }

    $('#box3').animate({
        left: "25%"
    }, {
        duration: 1000,
        easing: "linear"
    })

    check = 3;
    console.log(check);
})
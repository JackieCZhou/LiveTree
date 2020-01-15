// build and auto populate random interger list

var numList = [];

function myFunction() {
    var rnd = Math.floor(Math.random() * 10);
    document.getElementById('mathVal').value = rnd;
    numList.push(rnd);

    console.log(numList);

    buildList();
}

// // <!-- script for math & placement of math val --></script>

function buildList() {

    var newNum = document.getElementsByName("numList"[0]),

        listNode = document.getElementById("newList"),
        liNode = document.createElement("LI"),
        txtNode = document.createTextNode(newNum);

    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);

    console.log(newNum);
}


// hide/reveal form onClick

$(document).ready(function () {
    $("#formButton").click(function () {
        $("#form1").toggle();
    });
});

$(document).ready(function () {
    $("#hide").click(function () {
        $("#form1").toggle();
    });
});



// onHover function

$(document).ready(function () {
    $('[data-toggle="popover"]').popover({
        placement: 'top',
        trigger: 'hover'
    });
});


// // hover popver
// $(document).ready(function () {
//     $('[data-toggle="popover"]').popover({
//         placement: 'top',
//         trigger: 'hover'
//     });
// });


// // onClick button reveal form
// $(document).ready(function () {
//     $("#formButton").click(function () {
//         $("#form1").toggle();
//     });
// });
// // onClick Submit hide form
// $(document).ready(function () {
//     $("#hide").click(function () {
//         $("#form1").toggle();
//     });
// });


// //<!-- script for list generation under tabs -->
// function addLi() {
//     e.preventDefault();
//     var txtVal = document.getElementById("txtVal").value,

//         listNode = document.getElementById("list"),
//         liNode = document.createElement("LI"),
//         txtNode = document.createTextNode(txtVal);

//     liNode.appendChild(txtNode);
//     listNode.appendChild(liNode);

//     console.log("txtVal");  // was working before I began adding random math function, will get back to once that it working.  Won't stop reloading pg
// }


// // <!-- script for math & placement of math val --></script>

// var numList = [];

// function myFunction() {
//     var rnd = Math.floor(Math.random() * 10);
//     document.getElementById('mathVal').value = rnd;
//     numList.push(rnd);

//     console.log(numList);

//     buildList();
// }


// console.log(numList);

// //auto populating list
// function buildList() {
//     arr.forEach(function (num, [0], numList)) {

//         var newNum = document.getElementsByName("numList"[0]),

//             listNode = document.getElementById("newList"),
//             liNode = document.createElement("LI"),
//             txtNode = document.createTextNode(newNum);

//         liNode.appendChild(txtNode);
//         listNode.appendChild(liNode);
//     }

//     console.log(newNum);
// }
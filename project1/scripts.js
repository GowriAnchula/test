var search_input = document.querySelector("#search");

search_input.addEventListener("keyup", function(e){
var span_items = document.querySelectorAll(".table_body .client span");
var table_body = document.querySelector(".table_body ul");
var search_item = e.target.value.toLowerCase();
span_items.forEach(function(item){
if(item.textContent.toLowerCase().indexOf(search_item) != -1){
item.closest("li").style.display = "block";
}
else{
        item.closest("li").style.display = "none";
    }
})
        
});



//client
$('document').ready(function () {
    $('.input1').click(function(){
       $('.table_body').toggle();
    });
})

function newFunction() {
    // document.getElementById("newForm").reset();
    var v = document.getElementById("newForm");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
 }

//billable
// $('document').ready(function () {
//     $('.adding1').click(function(){
//        $('#div5').toggle();
//     });
// })
$(document).ready(function() {
    $("#div5").hide();
      $("#billable").click(function() {
        $("#div3").hide();
        $("#div5").show();
      });
    });
//approval
// $('document').ready(function () {
//     $('.adding').click(function(){
//        $('.app').toggle();
//     });
// })

$(document).ready(function() {
    $("#div4").hide();
      $("#approval").click(function() {
        $("#div3").hide();
        $("#div4").show();
      });
    });

//create new
function displayName() {
    var searchData = document.getElementById("search").value;
    console.log(searchData);
    var list = document.getElementById("nameOutput");

    var item = document.createElement("li");

    item.innerText = searchData;
    list.append(item);
    
}


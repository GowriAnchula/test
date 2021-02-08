var array=[];
//checkboxes
function checkAll(){
    var totalElements = document.forms[0].elements.length;
    for(var i =0;i<totalElements;i++){
        var elementName = document.forms[0].elements[i].name;
        if(elementName!=undefined & elementName.indexOf('check')!=-1){
            document.forms[0].elements[i].checked = document.form.checkall.checked;
        }
    }
}


$('document').ready(function () {
    $('#hoverspan').hover(function(){
       $('#chk1').toggle();
    });
})
$('document').ready(function () {
    $('#hoverspan2').hover(function(){
       $('#chk2').toggle();
    });
})
$('document').ready(function () {
    $('#hoverspan3').hover(function(){
       $('#chk3').toggle();
    });
})  
  
  //export to excel
function fnExportHTMLtoExcel(tableID,filename=""){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById('tableID');
    var tableHTML = tableSelect.outerHTML.replace(/ /g,'%20');
    filename =  filename ?filename+'.xls':'excel_data.xls';
    downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff',tableHTML],{
            type:dataType
        });
        navigator.msSaveOrOpenBlob(blob,filename);
    }else{
        downloadLink.href = 'data:' + dataType + ',' +tableHTML;
        downloadLink.download = filename;
        downloadLink.click();
    }
}
//client search filter

//  function myFunction() {
//     var input, filter, table, tr, td, i;
//     input = document.getElementById("search-input1");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("tableID");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//       td = tr[i].getElementsByTagName("td")[0];
//       if (td) {
//         if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
//           tr[i].style.display = "";
//         } else {
//           tr[i].style.display = "Sorry,No Matching Rows";
//         }
//       }
//     }
//   }

//search filter
var myArray = [
    {'name':'<span id="hoverspan"><input type="checkbox" id="chk1"name="check1">&nbsp;&nbsp;&nbsp;&nbsp;p3</span>','client':'&nbsp;&nbsp;c1','totalhours':'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0H',
    'ba':'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-inr" ></i>0.00',
    'created':'&nbsp;20-01-2021','status':'&nbsp;&nbsp;Active','action':'<i class="fa fa-pencil" title="Edit"></i>&nbsp;&nbsp;<i class="fa fa-clipboard" title="Copy"></i>&nbsp;&nbsp;<i class="fa fa-archive" title="Archive"></i>'},
    {'name':'<span id="hoverspan2"><input type="checkbox"id="chk2" name="check2">&nbsp;&nbsp;&nbsp;&nbsp;p2</span>','client':'&nbsp;&nbsp;c2','totalhours':'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0H',
    'ba':'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-inr"></i>0.00',
    'created':'&nbsp;19-01-2021','status':'&nbsp;&nbsp;Active','action':'<i class="fa fa-pencil" title="Edit"></i>&nbsp;&nbsp;<i class="fa fa-clipboard"title="Copy"></i>&nbsp;&nbsp;<i class="fa fa-archive"title="Archive"></i>'},
    {'name':'<span id="hoverspan3"><input type="checkbox"id="chk3" name="check3">&nbsp;&nbsp;&nbsp;&nbsp;p1</span>','client':'&nbsp;&nbsp;c1','totalhours':'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0H',
    'ba':'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-inr"></i>0.00',
    'created':'&nbsp;19-01-2021','status':'&nbsp;&nbsp;Active','action':'<i class="fa fa-pencil" title="Edit"></i>&nbsp;&nbsp;<i class="fa fa-clipboard"title="Copy"></i>&nbsp;&nbsp;<i class="fa fa-archive"title="Archive"></i>'}
]

$('#search-input').on('keyup',function(){
    var value = $(this).val()
    // console.log('Value:',value)
    var data = searchTable(value,myArray)
    buildTable(data)
})


buildTable(myArray)

function searchTable(value,data){
    var filteredData =[]
    for(var i=0;i<data.length;i++){
        value = value.toLowerCase();
        var name = data[i].name.toLowerCase()
        let aa=[];
        if(name.includes(value)){
            filteredData.push(data[i])
            // debugger;
            aa.push(data[i])
              array.push(data[i])
              array.filter(function(aa){
                  if(data[i]==aa){
                      return aa
                  }
              })
        }
    }
    array=filteredData
    return filteredData
    
}


function buildTable(data){
    var table = document.getElementById('tbody');
    table.innerHTML =''
    for(var i=0;i<data.length;i++){
        var row=`<tr>
                <td>${data[i].name}</td>
                <td>${data[i].client}</td>
                <td>${data[i].totalhours}</td>
                <td>${data[i].ba}</td>
                <td>${data[i].created}</td>
                <td>${data[i].status}</td>
                <td>${data[i].action}</td>
        </tr>`
        table.innerHTML+= row;
    }
}

//client page
$('document').ready(function () {
    $('.mydiv1').click(function(){
       $('.tr1').toggle();
    });
})
$('document').ready(function () {
    $('.mydiv1').click(function(){
       $('.tr2').toggle();
    });
})
$('document').ready(function () {
    $('.mydiv2').click(function(){
       $('.tr3').toggle();
    });
})

//client next page
$(document).ready(function() {
    $("#div2").hide();
      $("#active").click(function() {
        $("#div1").hide();
        $("#div2").show();
      });
    });

    function activeBtn(){
        var a=document.getElementById("optn").value
       if(a == "Active options"){
        //    var aa=[{'name':'<span id="hoverspan"><input type="checkbox">&nbsp;&nbsp;&nbsp;&nbsp;p7</span>','client':'&nbsp;&nbsp;c7','totalhours':'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0H',
        //    'ba':'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-inr" ></i>0.00',
        //    'created':'&nbsp;20-01-2021','status':'&nbsp;&nbsp;Active','action':'<i class="fa fa-pencil" title="Edit"></i>&nbsp;&nbsp;<i class="fa fa-clipboard" title="Copy"></i>&nbsp;&nbsp;<i class="fa fa-archive" title="Archive"></i>'},]
       }
       buildTable(array)
       
    }
  
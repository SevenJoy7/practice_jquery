// var buttonTag = document.getElementById("id4");
// buttonTag.onclick = function() {
//     var inputSoA = document.getElementById('id1');
//     var inputSoB = document.getElementById('id2');
//     var soA = inputSoA.value;
//     var soB = inputSoB.value;
//     var spanTag = document.getElementById('id3');
//     spanTag.innerHTML = Number(soA) + Number(soB);
// }

// var buttonTag = document.getElementById("id4");
// buttonTag.onclick = function() {
//     var inputSoA = document.getElementById('id1');
//     var inputSoB = document.getElementById('id2');
//     var soA = inputSoA.value;
//     var soB = inputSoB.value;
//     var isError = false; //biến giả
//     if (soA == "") {
//         var spanErrorA = inputSoA.nextElementSibling;
//         spanErrorA.innerHTML = "vui lòng nhập số A";
//         isError = true;
//     }

//     if (soB == "") {
//         var spanErrorB = inputSoB.nextElementSibling;
//         spanErrorB.innerHTML = "vui lòng nhập số B";
//         isError = true;
//     }
//     //có lỗi thì dừng
//     if (isError) {
//         return;
//     }
//     var spanTag = document.getElementById('id3');
//     spanTag.innerHTML = Number(soA) + Number(soB);
// }

// $("#id4").click(function(event) {
//     //act on the event
    

   
//     var spanErrorA = $(".error1");
//     var spanErrorB= $(".error2");
//     spanErrorA.empty();//xóa nội dung của thẻ.
//     spanErrorB.empty();//xóa nội dung của thẻ.
//     $("#id3").empty();//xóa nội dung của thẻ.

//     var soA = $("#id1").val();
//     var soB = $("#id2").val();

//     var isError = false;
//     if (soA =="") {
//         spanErrorA.html("vui lòng nhập số A");
//         isError = true;
//     }
//     if (soB =="") {
//         spanErrorB.html("vui lòng nhập số B");
//         isError = true;
//     }
    
//     if (isError) {
//         return
//     }
//     var tong = Number(soA) + Number(soB);
//     $("#id3").html(tong); //cập nhật giá trị phần tử
// });

//khi không cho can thiệt sapn error vào html. jquery cho phép thêm 

$("#id4").click(function(event) {
    //act on the event
    $("#id3").empty();//xóa nội dung của thẻ.
    $(".error").remove();
    var soA = $("#id1").val();
    var soB = $("#id2").val();

    var isError = false;
    if (soA == "") {
        var spanError = '<span class="error">vui lòng nhập số A</span>';
        var inputSoA = $("#id1");
        $(spanError).insertAfter(inputSoA);
        isError = true;
    }
    if (soB == "") {
        var spanError = '<span class="error">vui lòng nhập số B</span>';
        var inputSoB = $("#id2");
        $(spanError).insertAfter(inputSoB);
        isError = true;
    }
    
    if (isError) {
        return;
    }
    var tong = Number(soA) + Number(soB);
    $("#id3").html(tong); //cập nhật giá trị phần tử
});
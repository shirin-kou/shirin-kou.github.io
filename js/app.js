$(function () {
  alert('hoge');
});

$(function () {
  $('#comment').on('click', function () {
    alert('hoge');
    $('#comment1').text("代謝を上げるような生活アドバイスをします。がんばりましょう！");
  });
});

//express.static ミドルウェア関数に渡して、ファイル（imagesなど）を直接提供
app.use(express.static("public"));

//ボタンクリックでメッセージ表示
// $(function () {
//   $('#goal_0').on('click', function () {
//     $('#comment').text("代謝を上げるような生活アドバイスをします。がんばりましょう！");
//   });

//   $("#goal_1").on("click", function () {
//     $('#text').val("代謝を上げるような生活アドバイスをします。がんばりましょう！");
//     $("#goal_1").val("");
//   });

//   $("#goal_2").on("click", function () {
//     $('#text').val("疲れを溜めずに、集中力が続く生活アドバイスをします。がんばりましょう！");
//     $("#goal_2").val("");
//   });

//   $("#goal_3").on("click", function () {
//     $('#text').val("夜ぐっすり眠れるような生活アドバイスをします。がんばりましょう！");
//     $("#goal_3").val("");
//   });

//   $("#goal_4").on("click", function () {
//     $('#text').val("体調に合わせた食事のアドバイスをします。がんばりましょう！");
//     $("#goal_4").val("");
//   });
//   $("#goal_5").on("click", function () {
//     $('#text').val("疲れを溜めずに、集中力が続く生活アドバイスをします。がんばりましょう！");
//     $("#goal_5").val("");
//   });
// });

// //メッセージが追加されたら自動的に表示
// newPostRef.on('child_added', function (data) {
//   var k = data.key;
//   var v = data.val();
//   console.log(k);
//   console.log(v);
//   console.log(v.name);
//   console.log(v.time);
//   console.log(v.text01);
//   console.log(v.text02);
//   var str01 = "";
//   str01 += '<div class = message_box>';
//   // str += '<img  id="kosuge_image" class="kosuge_img" alt="" src="">';
//   str01 += '<div class="message_text" id="' + k + '">';
//   str01 += '<p class="name">' + v.name + '</p>';
//   str01 += '<p class="time">' + v.time + '</p>';
//   str01 += '<p class="text">' + v.text01 + '</p>';
//   str01 += '</div>'
//   str01 += '<img  id="my_image" class="my_img" alt="" src="img/person.png">';
//   str01 += '</div>'

//   var str02 = "";
//   str02 += '<div class = message_box>';
//   str02 += '<img  id="kosuge_image" class="kosuge_img" alt="" src="img/kosuge6.png">';
//   str02 += '<div class="message_text" id="kos_mess">';
//   str02 += '<p id="name_kos" class="name">こすげりあん</p>';
//   str02 += '<p class="time">' + v.time + '</p>';
//   str02 += '<p class="text">' + v.text02 + '</p>';
//   str02 += '</div>'
//   // str += '<img  id="my_image" class="my_img" alt="" src="img/person.png">';
//   str02 += '</div>'
//   $("#output").prepend(str01);
//   $("#output").prepend(str02);
// });

//prepend : 前に追加する
//append  : 後に追加する →ラインとかfacebookとか！
// console.log(latest_name);

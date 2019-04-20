$(function () {
  alert('here!');
});

// var newPostRef = firebase.database().ref();

// // 日時を取得する関数
// function ymd() {
//   var date = new Date();
//   return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
// }

// //名前をLocalStrageで保存する
// //1.Save クリックイベント
// $("#save").on("click", function () {
//   var user_name = $("#name").val();
//   var object = {
//     user_name: user_name,
//   };
//   var json_obj = JSON.stringify(object);
//   localStorage.setItem("username", json_obj);
// });
// //UserNameをクリアにする
// $("#clear").on("click", function () {
//   localStorage.removeItem("username");
//   $("#name").val("");
// });
// //3.ページ読み込み：保存データ取得表示
// if (localStorage.getItem("username")) {
//   var obj = localStorage.getItem("username");
//   var p_obj = JSON.parse(obj);
//   $("#name").val(p_obj.user_name);
// }


//送信ボタンクリックでメッセージ送信
// $(function () {
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

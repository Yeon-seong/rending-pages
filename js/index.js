/* =============== // 랜딩페이지 JS 파일 =============== */
// 추후 자바스크립트 코드 추가


// const userEmail = document.getElementById("user-email");

// if (userEmail.value == '') {
//   alert("이메일을 입력해주세요.");
//   return false;
// }


// 모달 열기
function openModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

// 모달 닫기
function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

// 모달 열기 버튼 클릭 이벤트 핸들러
var modalOpenButton = document.getElementById("open_modal");
modalOpenButton.addEventListener("click", function () {
  openModal();
});

// 모달 닫기 버튼 클릭 이벤트 핸들러
var modalCloseButton = document.getElementById("close_modal");
modalCloseButton.addEventListener("click", function () {
  closeModal();
});
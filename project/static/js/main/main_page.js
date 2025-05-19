document.addEventListener("DOMContentLoaded", () => {
  //체크그룹인거 다 포함
  const checkboxes = document.querySelectorAll("input[name='check_group']");
  //선택된박스는 selectedcategories에 넣을 거임
  const selectedBox = document.querySelector(".selectedCategories");
  //sortingBar는 물건개수
  const sortingBar = document.querySelector(".sortingBar1");
  
  //물건 개수 업데이트
  function updateTotalCount() {
    //시작은 0개
    let total = 0;
    //체크박스 하나하나를 cb로 가져옴
    checkboxes.forEach(cb => {
      if (cb.checked) {//cb가 체크되어있으면
     //가장 가까운 category2-1을 찾아서 그걸 부모라고 함 
        const parent = cb.closest(".category2-1");   
        //그 부모에서 categoryNumber을 찾음
        //거기에 들어있는 text, 즉 숫자를 꺼냄, 그리고 정수로 변환해서 count에 넣음
        const count = parseInt(parent.querySelector(".categoryNumber").textContent, 10);
        //그걸 총 개수에 더함
        total += count;
      }
    });
    //모든 체크박스를 돌고 나서 sortingBar에 있는 총 00건을 총 숫자로 바꿈
    sortingBar.textContent = `총 ${total}건`;
  }

  //모든 체크박스를 이번엔 checkbox로 가지고 옴
  checkboxes.forEach(checkbox => {
    //체크박스가 변하면 change 이벤트
    checkbox.addEventListener("change", () => {
      //value에 html에서 카테고리명 저장해뒀음
      const value = checkbox.value;
      //체크박스가 체크되면
      if (checkbox.checked) {
        //카테고리 선택 안 되어 있으면
        if (!document.querySelector(`.selectedCategory[data-value="${value}"]`)) {
          //div 생성
          const div = document.createElement("div");
          //이름은 selectedCategory
          div.className = "selectedCategory";
          //value에 카테고리명이 들어감
          div.setAttribute("data-value", value);

          //div 안에 텍스트랑 X 아이콘 넣음
          div.innerHTML = `
            ${value}
            <img src="/static/assets/icons/close.svg" alt="close icon" class="removeIcon" />`;
            //html에 있는 selectedCategories에 div 추가
            selectedBox.appendChild(div);
        }} 
        //체크가 해제되면
        else {
          //toRemove에 체크 해제된 값이랑 같은 value를 가진 div가 들어감
          const toRemove = document.querySelector(`.selectedCategory[data-value="${value}"]`);
          //그 div가 존재하면 제거함
          if (toRemove) toRemove.remove();
      }

      updateTotalCount();//항목개수 계산 다시
    });
  });

// selectedCategories에서 x 눌렀을 떄
selectedBox.addEventListener("click", (e) => {
  // 클릭한 게 x 버튼이면
  if (e.target.matches(".removeIcon")) {
    const div = e.target.closest(".selectedCategory"); // 선택된 카테고리 div
    const value = div.dataset.value; // data-value 값 가져오기
    const checkbox  = document.querySelector(`input[name='check_group'][value="${value}"]`);
   
    if (checkbox) checkbox.checked = false; // 체크 해제
    div.remove(); // 항목 제거
    updateTotalCount(); // 총 개수 업데이트
  }
});

//리스타트버튼 눌렀을 때
  document.getElementById("resetBtn").addEventListener("click", () => {
    //모든 체크박스 해제
    checkboxes.forEach(cb => cb.checked = false);
    //selectedCategories 비우기
    selectedBox.innerHTML = "";
    //물건 개수도 초기화
    updateTotalCount();
  });
});

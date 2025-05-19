/* product detail page - JS */
document.addEventListener("DOMContentLoaded", () => {
    //+버튼
    const addBtn=document.querySelector(".detailpageProductSelectPlus");
    //-버튼
    const subtractBtn=document.querySelector(".detailpageProductSelectMinus");
    //총 개수 보여지는 거
    const countDisplay=document.querySelector(".detailpageProductSelectNumber");
    //최종 가격 보여지기
    const priceDisplay=document.querySelector(".detailpageProductTotalPrice");
    //물건 한 개 가격은 할인 가격 가져와서 씀
    const onePrice=parseInt(document.querySelector(".detailpageProductPrice").textContent,10);
    //한 개 가격이랑 총 가격에 쉼표 찍어서 표시
    document.querySelector(".detailpageProductPrice").textContent = onePrice.toLocaleString() + " 원";
    document.querySelector(".detailpageProductTotalPrice").textContent = onePrice.toLocaleString() + " 원";

    //현재 수량을 span에 있는 수로 설정
    let count = parseInt(countDisplay.textContent, 10);

    //+버튼 ㅋㄹ릭하면 실행됨
    addBtn.addEventListener("click",()=>{
        count++;//수량+1
        countDisplay.textContent=count;//span이 바뀜
        priceDisplay.textContent=(count*onePrice).toLocaleString()+" 원";
    });

    //-버튼 클릭
    subtractBtn.addEventListener("click",()=>{
    if(count>=1){//count가 1개 이상일 때만
         count--;//수량-1
        countDisplay.textContent=count;//span이 바뀜
        priceDisplay.textContent=(count*onePrice).toLocaleString()+" 원";
    }
    });

});
var cnt = 0;
const limit = 10;
window.onscroll = () => {
    if(cnt == limit){
        return;
    }
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 30) {
        var addcontent = document.createElement("div");
        addcontent.setAttribute("class", "petImg");
        addcontent.innerHTML = `
        <div class="divpage">
          <div class="petImg">
          <img class="pets" src="./img/갱얼쥐${cnt++}.jpg">
            <div class="user">
              <div class="date"><h4>2023년 9월 10일 23:23</h4></div>
              <div class="coment">집에서 한장~~</div>
            </div>
          </div>
        </div>`
        console.log(addcontent)
        document.querySelector('section').appendChild(addcontent);
    }
};
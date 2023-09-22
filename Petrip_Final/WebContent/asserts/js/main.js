const infos = ["갱얼쥐4", "갱얼쥐6", "갱얼쥐8", "갱얼쥐9", "갱얼쥐10", "떼껄룩1", "떼껄룩2"];

// 사진 슬라이드
var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
       
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
    
        setTimeout(showSlides, 5000); // 5초마다 이미지가 체인지됩니다
    }


// 좌측 버튼
const menuBtn = document.getElementById("side-menuBtn");

menuBtn.addEventListener("click", function () {
  const nav = document.getElementById("side-bar");

  menuBtn.classList.toggle("active");
  nav.classList.toggle("active");
  if (menuBtn.classList.contains("active")) {
    menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>`;
  } else {
    menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>`;
  }
});

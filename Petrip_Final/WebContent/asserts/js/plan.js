const mapDiv = document.getElementById("map");
const path = window.path || '.';

let map = new naver.maps.Map(mapDiv, {
    center: new naver.maps.LatLng(36.4398, 127.4274),
    zoom: 12
});


// 반려동물공원
let marker1 = new naver.maps.Marker({
    position: new naver.maps.LatLng(36.458876, 127.382958).destinationPoint(90, 15),
    map: map,
    icon: {
        url: path+'/img/icon/marker.png',
        // size: new naver.maps.Size(600, 600),
        // origin: new naver.maps.Point(0, 0),
        // anchor: new naver.maps.Point(25, 56),
        scaledSize: new naver.maps.Size(40, 40)
    },
    animation: naver.maps.Animation.DROP,
});


// 정육식당
let marker2 = new naver.maps.Marker({
    position: new naver.maps.LatLng(36.40946, 127.396607),
    map: map,
    icon: {
        url: path+'/img/icon/marker.png',
        // size: new naver.maps.Size(600, 600),
        // origin: new naver.maps.Point(0, 0),
        // anchor: new naver.maps.Point(25, 56),
        scaledSize: new naver.maps.Size(40, 40)
        
    },
    animation: naver.maps.Animation.DROP
});

// 금강변
let marker3 = new naver.maps.Marker({
    position: new naver.maps.LatLng(36.5125, 127.3585),
    map: map,
    icon: {
        url: path+'/img/icon/marker.png',
        // size: new naver.maps.Size(600, 600),
        // origin: new naver.maps.Point(0, 0),
        // anchor: new naver.maps.Point(25, 56),
        scaledSize: new naver.maps.Size(40, 40)
    },
    animation: naver.maps.Animation.DROP
});

// // 두두당
let marker4 = new naver.maps.Marker({
    position: new naver.maps.LatLng(36.44825, 127.45072),
    map: map,
    icon: {
        url: path+'/img/icon/marker.png',
        // size: new naver.maps.Size(600, 600),
        // origin: new naver.maps.Point(0, 0),
        // anchor: new naver.maps.Point(25, 56),
        scaledSize: new naver.maps.Size(40, 40)
    },
    animation: naver.maps.Animation.DROP
});

// // 대청호
let marker5 = new naver.maps.Marker({
    position: new naver.maps.LatLng(36.47933, 127.484428),
    map: map,
    icon: {
        url: path+'/img/icon/marker.png',
        // size: new naver.maps.Size(600, 600),
        // origin: new naver.maps.Point(0, 0),
        // anchor: new naver.maps.Point(25, 56),
        scaledSize: new naver.maps.Size(40, 40)
    },
    animation: naver.maps.Animation.DROP
});

// // 명상정원
let marker6 = new naver.maps.Marker({
    position: new naver.maps.LatLng(36.3796, 127.486),
    map: map,
    icon: {
        url: path+'/img/icon/marker.png',
        // size: new naver.maps.Size(600, 600),
        // origin: new naver.maps.Point(0, 0),
        // anchor: new naver.maps.Point(25, 56),
        scaledSize: new naver.maps.Size(40, 40)
    },
    animation: naver.maps.Animation.DROP
});

// // 하기숲
let marker7 = new naver.maps.Marker({
    position: new naver.maps.LatLng(36.393206, 127.332317),
    map: map,
    icon: {
        url: path+'/img/icon/marker.png',
        // size: new naver.maps.Size(600, 600),
        // origin: new naver.maps.Point(0, 0),
        // anchor: new naver.maps.Point(25, 56),
        scaledSize: new naver.maps.Size(40, 40)

    },
    animation: naver.maps.Animation.DROP
});



const con1 = [
    '<div class="iw_inner">',
    '   <h3>대전반려동물공원</h3>',
    '   <p><br>입장료 무료<br>배변봉투 지참, 놀이터 외 목줄착용 필수<br />',
    '   </p>',
    '</div>'
].join('');
const info1 = new naver.maps.InfoWindow({
    content: con1,
    maxWidth: 200,
    minheight: 110,
    backgroundColor: "#FAF8F1",
    borderColor: "#E5BA73",
    borderWidth: 1,
    anchorSize: new naver.maps.Size(0, 0),
    // anchorColor: "#FAF8F1",
    pixelOffset: new naver.maps.Point(0,-35)
});

const con2 = [
    '<div class="iw_inner">',
    '   <h3>한마음정육식당 탑립점</h3>',
    '   <p><br>주차, 반려동물 동반, 유아시설 (놀이방)<br />',
    '   </p>',
    '</div>'
].join('');
const info2 = new naver.maps.InfoWindow({
    content: con2,
    maxWidth: 200,
    minheight: 110,
    backgroundColor: "#FAF8F1",
    borderColor: "#E5BA73",
    borderWidth: 1,
    anchorSize: new naver.maps.Size(0, 0),
    // anchorColor: "#FAF8F1",
    pixelOffset: new naver.maps.Point(0,-35)
});

const con3 = [
    '<div class="iw_inner">',
    '   <h3>금강변</h3>',
    '   <p>반려동물과 강변을 걸어요<br />',
    '   </p>',
    '</div>'
].join('');
const info3 = new naver.maps.InfoWindow({
    content: con3,
    maxWidth: 200,
    minheight: 110,
    backgroundColor: "#FAF8F1",
    borderColor: "#E5BA73",
    borderWidth: 1,
    anchorSize: new naver.maps.Size(0, 0),
    // anchorColor: "#FAF8F1",
    pixelOffset: new naver.maps.Point(0,-35)
});

const con4 = [
    '<div class="iw_inner">',
    '   <h3>두두당</h3>',
    '   <p>반려견 동반시 야외 테라스 및 1층(야외 매장) 이용<br />',
    '   </p>',
    '</div>'
].join('');
const info4 = new naver.maps.InfoWindow({
    content: con4,
    maxWidth: 200,
    minheight: 110,
    backgroundColor: "#FAF8F1",
    borderColor: "#E5BA73",
    borderWidth: 1,
    anchorSize: new naver.maps.Size(0, 0),
    // anchorColor: "#FAF8F1",
    pixelOffset: new naver.maps.Point(0,-35)
});

const con5 = [
    '<div class="iw_inner">',
    '   <h3>명상정원</h3>',
    '   <p>오리도 살아요<br />',
    '   <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjlfMjUx%2FMDAxNjkzMjg1NTczMDcz._PH_Qpplw8DVPjkpMZgVlTDyiSpQL-M9zRNM7v7wae4g.d2X-3cxn-k-JreIZWTIcTZnLG852qfCblv66vzkBWm4g.JPEG.bluehole37%2F20230820_164523.jpg" width=200px height="200px"/></p>',
    '</div>'
].join('');

const info5 = new naver.maps.InfoWindow({
    content: con5,
    maxWidth: 200,
    minheight: 110,
    backgroundColor: "#FAF8F1",
    borderColor: "#E5BA73",
    borderWidth: 1,
    anchorSize: new naver.maps.Size(0, 0),
    // anchorColor: "#FAF8F1",
    pixelOffset: new naver.maps.Point(0,-35)
});

const con6 = [
    '<div class="iw_inner">',
    '   <h3>대청호</h3>',
    '   <p>시원한 호숫가 산책하기<br />',
    '   </p>',
    '</div>'
].join('');
const info6 = new naver.maps.InfoWindow({
    content: con6,
    maxWidth: 200,
    minheight: 110,
    backgroundColor: "#FAF8F1",
    borderColor: "#E5BA73",
    borderWidth: 1,
    anchorSize: new naver.maps.Size(0, 0),
    // anchorColor: "#FAF8F1",
    pixelOffset: new naver.maps.Point(0,-35)
});

const con7 = [
    '<div class="iw_inner">',
    '   <h3>하기숲캠핑장</h3>',
    '   <p>오토캠핑, 바비큐장, 선착순입장<br />',
    '   </p>',
    '</div>'
].join('');
const info7 = new naver.maps.InfoWindow({
    content: con7,
    maxWidth: 200,
    minheight: 110,
    backgroundColor: "#FAF8F1",
    borderColor: "#E5BA73",
    borderWidth: 1,
    anchorSize: new naver.maps.Size(0, 0),
    // anchorColor: "#FAF8F1",
    pixelOffset: new naver.maps.Point(0,-35)
});


const parkInfo = document.getElementById("info");

naver.maps.Event.addListener(marker1, "mouseover", (e) => {
        info1.open(map, marker1);
        parkInfo.style.display = 'block';
        marker1.setAnimation(naver.maps.Animation.BOUNCE);
        
    });
    
    naver.maps.Event.addListener(marker1, "mouseout", (e) => {
        info1.close();
        marker1.setAnimation(null);
        // parkInfo.style.display = 'none';
    });


naver.maps.Event.addListener(marker2, "mouseover", (e) => {
        info2.open(map, marker2);
        marker2.setAnimation(naver.maps.Animation.BOUNCE);
});

naver.maps.Event.addListener(marker2, "mouseout", (e) => {
        info2.close();
        marker2.setAnimation(null);
});


naver.maps.Event.addListener(marker3, "mouseover", (e) => {
        info3.open(map, marker3);
        marker3.setAnimation(naver.maps.Animation.BOUNCE);
});

naver.maps.Event.addListener(marker3, "mouseout", (e) => {
        info3.close();
        marker3.setAnimation(null);
});

naver.maps.Event.addListener(marker4, "mouseover", (e) => {
        info4.open(map, marker4);
        marker4.setAnimation(naver.maps.Animation.BOUNCE);
});

naver.maps.Event.addListener(marker4, "mouseout", (e) => {
        info4.close();
        marker4.setAnimation(null);
});

naver.maps.Event.addListener(marker5, "mouseover", (e) => { 
        info5.open(map, marker5);
        marker5.setAnimation(naver.maps.Animation.BOUNCE);
});

naver.maps.Event.addListener(marker5, "mouseout", (e) => {
        info5.close();
        marker5.setAnimation(null);
});

naver.maps.Event.addListener(marker6, "mouseover", (e) => {
        info6.open(map, marker6);
        marker6.setAnimation(naver.maps.Animation.BOUNCE);
});

naver.maps.Event.addListener(marker6, "mouseout", (e) => {
        info6.close();
        marker6.setAnimation(null);
});

naver.maps.Event.addListener(marker7, "mouseover", (e) => {
        info7.open(map, marker7);
        marker7.setAnimation(naver.maps.Animation.BOUNCE);
});

naver.maps.Event.addListener(marker7, "mouseout", (e) => {
        info7.close();
        marker7.setAnimation(null);
});


// zoom: 17

// 대전
// 36.3334, 127.3974 

// 반려동물공원
// 36.458876, 127.382958

// 정육식당
// 36.40946, 127.396607

// 금강변
// 36.5125, 127.3585

// 두두당
// 36.44825, 127.45072

// 대청호
// 36.47933, 127.484428

// 명상정원
// 36.3796, 127.486

// 하기숲
// 36.393206, 127.332317


let data;

function preload(){
  data = loadJSON('https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=25&serviceKey=7yl8WdZAFrP74iGNsGLwcr%2FnkNSasG8R1s43v2WD32yF90a7qOBjgCoSyW80ypSRCpF7m6hCROyew6pN8BNbiQ%3D%3D');
}

function setup() {
  console.log(data);
  noCanvas();
  for(let i=0; i < 22; i++){
    createP(data.data[i].sido);
    createDiv('구분 : '+data.data[i].centerType);
    createDiv('주소 : '+data.data[i].address+' '+data.data[i].org);
    createDiv('장소 : '+data.data[i].facilityName);
    createDiv('구글맵: '+data.data[i].lng+'N, '+data.data[i].lat+'E');
    createA('https://www.google.co.kr/maps/place/'+data.data[i].lng+'+'+data.data[i].lat,'지도보기','_blank');
  }
}

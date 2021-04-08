let api;

function preload(){
  //api = 'https://api.nasa.gov/planetary/apod?date=2020-07-20&api_key=wc9816mchcQkmgjYfFjTaOJPmbcMaozegrtH9ax5';
  api = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2014-6-3&api_key=DEMO_KEY';
  loadJSON(api, show);  
}

function setup() {
  noCanvas();
}

function show(gotData){
  console.log(gotData.photos[0]);
  for(let i=0 ; i<gotData.photos.length ; i++){
  // let img = createImg(gotData.hdurl,'');
    let img = createImg(gotData.photos[i].img_src,'');
    img.size(200,150);
  }
}

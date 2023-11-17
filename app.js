const url='https://api.openweathermap.org/data/2.5/weather?appid=7ea12571dac848e26b09be93e8d48f5b&units=metric&q=';

const search=document.querySelector('.search input');
const searchBtn=document.querySelector('.search-btn');
const weatherImg=document.querySelector('.weather-img');
const searcharea=document.querySelector('#searcharea');

async function fetchAPI(city){
      const response=await fetch(url+city);
      if(response.status==404){
            weatherImg.src='images/error.png';
            document.querySelector('.city').children[1].innerHTML="INVALID CITY";
            document.querySelector('.temp').innerHTML='';
            document.querySelector('.humidity').innerHTML='';
            document.querySelector('.wind').innerHTML=''; 
      }
      else{
            const data=await response.json();
            console.log(data);
            document.querySelector('.city').children[1].innerHTML=data.name;
            document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+" °C";
            document.querySelector('.humidity').innerHTML=data.main.humidity+" %";
            document.querySelector('.wind').innerHTML=data.wind.speed+" km/hr";
            if(data.weather[0].main=='Clouds'){
                  weatherImg.src='images/clouds.png';
            }
            else if(data.weather[0].main=='Clear'){
                  weatherImg.src='images/clear.png';
            }
            else if(data.weather[0].main=='Rain'){
                  weatherImg.src='images/rain.png';
            }
            else if(data.weather[0].main=='Drizzle'){
                  weatherImg.src='images/drizzle.png';
            }
            else if(data.weather[0].main=='Mist'){
                  weatherImg.src='images/mist.png';
            }
            else if(data.weather[0].main=='Haze'){
                  weatherImg.src='images/haze.png';
            }
      }
      if(search.value==""){
            weatherImg.src='images/world.png';
            document.querySelector('.temp').innerHTML="";
            document.querySelector('.humidity').innerHTML="";
            document.querySelector('.wind').innerHTML="";
            document.getElementById('cityname').style.display="none";
      }else{
            document.getElementById('cityname').style.display="block";
      }
}

searchBtn.addEventListener('click',()=>{
      fetchAPI(search.value);
})
searcharea.addEventListener('keyup',()=>{
      fetchAPI(search.value);
})


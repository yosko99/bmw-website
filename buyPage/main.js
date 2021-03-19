// hover video function
let figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 

}

// car images function
let series = 1;
let int;
let i=1;
document.getElementById('series1Btn').onclick = function(){
    series=1;int = setInterval(removeImg,300);
 }
document.getElementById('series2Btn').onclick = function(){series=2; int = setInterval(removeImg,200);}
document.getElementById('series3Btn').onclick = function(){series=3;int = setInterval(removeImg,200);}
document.getElementById('series4Btn').onclick = function(){series=4;int = setInterval(removeImg,200);}
document.getElementById('series5Btn').onclick = function(){series=5;int = setInterval(removeImg,200);}
document.getElementById('series6Btn').onclick = function(){series=6;int = setInterval(removeImg,200);}

int = setInterval(removeImg,200);

function removeImg(){
    let img = document.getElementById(`img${i}`)
    i--;
    img.setAttribute('src',``)
    if(i==0){
        clearInterval(int);    
        int = setInterval(putImg,500)  
    }
}

function putImg(){

    if(i==0) i=1;
    let img = document.getElementById(`img${i}`)
    img.setAttribute('src',`/site_in_process_js/img/series${series}-${i}.png`)
    $(img).appendTo('.test');
    i++;
    if(i==5) {
        clearInterval(int);
    }
    const navbar = Array.from(document.querySelectorAll('#text-container>ol>li'));
    document.addEventListener('click',function(){
    document.getElementById('textHeader').textContent= `5 Good reasons for the BMW ${series} series`

    for(let i=0;i<navbar.length;i++)
    
        if(series==1) 
        navbar[i].textContent=series1TextArray[i]
        else if(series==2)
        navbar[i].textContent=series2TextArray[i]
        else if(series==3)
        navbar[i].textContent=series3TextArray[i]
        else if(series==4)
        navbar[i].textContent=series4TextArray[i]
        else if(series==5)
        navbar[i].textContent=series5TextArray[i]
        else if(series==6)
        navbar[i].textContent=series6TextArray[i]
    })

}



let series1TextArray = ['Progressive sporty exterior design with elegant details',
'Functional high class cockpit leaves nothing to be desired',
'Distinctive driving dynamics through perfectly set up drive train components',
'The intelligent voice assistant supports you with all your wishes and questions concerning the vehicle',
'Have your vehicle move into its parking space independently with the innovative parking assistant'];

let series2TextArray = ['Designed for rebels with star appeal',
'Sporty rear-wheel drive gets adrenalin pumping',
'Thanks to Launch Control, go from 0 to pulse-racing with one touch',
'With BMW ConnectedDrive, check e-mail at any time',
'Operate the infotainment system by touch'];

let series3TextArray = ['Recognises your voice and listens to your wishes',
'With up to 374 horsepower in the M340i xDrive more dynamic than ever',
'Honed design meets the wish for sheer driving pleasure',
'BMW Laserlight illuminates the road up to 530 m ahead',
'Access to the vehicle via smartphone']

let series4TextArray = ['Sporty and aesthetic exterior',
'Elegant and high-quality interior',
'Razor-sharp handling',
'Impressive performance',
'Ultra-modern driver assistance systems'];

let series5TextArray = ['Sporty, stylish exterior design',
'Precise driving dynamics',
'Plug-in hybrid BMW 530e',
'Modern and elegant interior',
'Revolutionary driver assistance systems']

let series6TextArray = ['Unique and elegant exterior design',
'Noble materials in the interior',
'Outstanding driving dynamics with optimum long-distance comfort',
'Connectivity at the highest level',
'Razor-sharp handling']
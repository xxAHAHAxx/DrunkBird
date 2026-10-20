var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var TIMER = document.getElementById('timer');

var score = 0.002;
var timeplayed= 0;

var gamecondition;
var number;
var jiun,pn;
var yanshi;
//bird
var runbird1 = new Image();
runbird1.src = "./static/runbird1.png";
var runbird2 = new Image();
runbird2.src = './static/runbird2.png';
var flybird = new Image();
flybird.src = "./static/flybird.png";
var birdh,birdspeed,birdcondition,speedmax,lr,constbirdh,gamecondition=0,again=0;

var Sangria = new Image();
Sangria.src = './static/Sangria.png';
var Potato = new Image();
Potato.src = './static/Potato.png';
var Wine = new Image();
Wine.src = './static/Wine.png';
var Cocoa = new Image();
Cocoa.src = './static/Cocoa.png';
var Cava = new Image();
Cava.src = './static/Cava.png';

var zuicava = new Image();
zuicava.src = './static/zuicava.png';
var zuisangria = new Image();
zuisangria.src = './static/zuisangria.png';
var zuiwine = new Image();
zuiwine.src = './static/zuiwine.png';
var zuipotato = new Image();
zuipotato.src = './static/zuipotato.png';
var zuicocoa = new Image();
zuicocoa.src = './static/zuicocoa.png';

var p1 = new Image();
p1.src = './static/p1.png';
var p2 = new Image();
p2.src = './static/p2.png';
var p3 = new Image();
p3.src = './static/p3.png';
var p4 = new Image();
p4.src = './static/p4.png';
var p5 = new Image();
p5.src = './static/p5.png';
var p6 = new Image();
p6.src = './static/p6.png';
var p7 = new Image();
p7.src = './static/p7.png';
var p8 = new Image();
p8.src = './static/p8.png';
var p9 = new Image();
p9.src = './static/p9.png';
var p10 = new Image();
p10.src = './static/p10.png';
var p11 = new Image();
p11.src = './static/p11.png';
var p12 = new Image();
p12.src = './static/p12.png';
var p13 = new Image();
p13.src = './static/p13.png';
var p14 = new Image();
p14.src = './static/p14.png';
var p15 = new Image();
p15.src = './static/p15.png';
var p16 = new Image();
p16.src = './static/p16.png';
var p17 = new Image();
p17.src = './static/p17.png';
var p18 = new Image();
p18.src = './static/p18.png';
var p19 = new Image();
p19.src = './static/p19.png';
var p20 = new Image();
p20.src = './static/p20.png';
var p21 = new Image();
p21.src = './static/p21.png';
var p22 = new Image();
p22.src = './static/p22.png';
var p23 = new Image();
p23.src = './static/p23.png';
var p24 = new Image();
p24.src = './static/p24.png';
var p25 = new Image();
p25.src = './static/p25.png';

var jiu1 = new Image();
jiu1.src = './static/jiu1.png';
var jiu2 = new Image();
jiu2.src = './static/jiu2.png';
var jiu3 = new Image();
jiu3.src = './static/jiu3.png';
var jiu4 = new Image();
jiu4.src = './static/jiu4.png';
var jiu5 = new Image();
jiu5.src = './static/jiu5.png';
var jiu6 = new Image();
jiu6.src = './static/jiu6.png';
var jiu7 = new Image();
jiu7.src = './static/jiu7.png';
var jiu8 = new Image();
jiu8.src = './static/jiu8.png';
var jiu9 = new Image();
jiu9.src = './static/jiu9.png';
var jiu10 = new Image();
jiu10.src = './static/jiu10.png';
var jiu11 = new Image();
jiu11.src = './static/jiu11.png';
var jiu12 = new Image();
jiu12.src = './static/jiu12.png';
var jiu13 = new Image();
jiu13.src = './static/jiu13.png';
var jiu14 = new Image();
jiu14.src = './static/jiu14.png';
var jiu15 = new Image();
jiu15.src = './static/jiu15.png';



var backgroundImage = new Image();
backgroundImage.src = './static/BackGround.jpg';
var backgroundX = 0;
var floorImage = new Image();
floorImage.src = './static/Floor.png';
var floorX = 0;
var groundspeed = 1;

var bl_value = [];//0=no,1=S,2=P,3=W,4=Co,5=Ca
var bl_speed = 3;
var bl_x = [];
var bl_height = 400;
var bl_distance = 400;

function generateBLOCK(){
    for (var i = 0; i < 500; i++) {
        var tmp_type = Math.random();
        if (tmp_type < 0.4) bl_value.push(0);
        else if (tmp_type < 0.6) bl_value.push(1);
        else if (tmp_type<0.65) bl_value.push(2);
        else if (tmp_type<0.78) bl_value.push(3);
        else if (tmp_type<0.9) bl_value.push(4);
        else bl_value.push(5);
        bl_x.push(1000+i * bl_distance);
    }
}


function drawFortune() {

    ctx.clearRect(0, 0, 1000, 550); 
    ctx.drawImage(backgroundImage, backgroundX, 0, 1000, 550);
    ctx.drawImage(backgroundImage, backgroundX + 1000, 0, 1000, 550);
    backgroundX -= groundspeed;
    ctx.drawImage(floorImage, floorX, 40, 1000, 550);
    ctx.drawImage(floorImage, floorX + 1000, 40, 1000, 550);
    floorX -= bl_speed;
    if (backgroundX <= -canvas.width) {
        backgroundX = 0;
    }
    if (floorX <= -canvas.width) {
        floorX = 0;
    }

    for (var i = 0; i < 500; i++){
        bl_x[i] = bl_x[i] - bl_speed; 
        if (bl_x[i] <= 1000 && bl_x[i] > -100) { 
            if (bl_value[i] == 1) { 
                ctx.drawImage(Sangria, bl_x[i], bl_height, 100, 100);
                if(bl_x[i]-100<82 && bl_x[i]-100>-70 && bl_height-birdh<77){bl_speed =0;gamecondition=1;score=0;groundspeed=0;number=i;}
            } else if (bl_value[i] == 2) { 
                ctx.drawImage(Potato, bl_x[i]-20, bl_height-20, 120, 120);
                if(bl_x[i]-100<110 && bl_x[i]-100>-70 && bl_height-birdh<77){bl_speed =0;gamecondition=1;score=0;groundspeed=0;number=i;}
            } else if (bl_value[i] == 3) { 
                ctx.drawImage(Wine, bl_x[i]-20, bl_height-20, 120, 120);                
                if(bl_x[i]-100<87 && bl_x[i]-100>-60 && bl_height-birdh<120){bl_speed =0;gamecondition=1;score=0;groundspeed=0;number=i;}                
            } else if (bl_value[i] == 4) { 
                ctx.drawImage(Cocoa, bl_x[i], bl_height, 100, 100);
                if(bl_x[i]-100<82 && bl_x[i]-100>-70 && bl_height-birdh<75){bl_speed =0;gamecondition=1;score=0;groundspeed=0;number=i;}
            } else if (bl_value[i] == 5) { 
                ctx.drawImage(Cava, bl_x[i]-100, bl_height-100, 200, 200);
                if(bl_x[i]-100<127 && bl_x[i]-100>-3 && bl_height-birdh<190){bl_speed =0;gamecondition=1;score=0;groundspeed=0;number=i;}
            }

        }
        if(score!=0){
            timeplayed += score;
            TIMER.innerHTML = timeplayed.toFixed(0);
        }
        if(timeplayed>=10000 && score!=0) {bl_speed=4; bl_distance=550; score=0.05}
    }

    if(birdcondition==0){
        if(lr<25){
            ctx.drawImage(runbird1,100,birdh,120,120);
            if(gamecondition==0)
            {lr++;}
        }
        else if(lr>=25){
            ctx.drawImage(runbird2,100,birdh,120,120);
            if(lr<50&&gamecondition==0){lr++;}
            else if(lr>=50&&gamecondition==0){lr=0;}
        }
    }
    else if(birdcondition==1){
        if(gamecondition==0)
        {birdh-=birdspeed;}
        ctx.drawImage(flybird,100,birdh,120,120);
        birdspeed-=0.195555555555555;
        if(birdh>constbirdh){
            birdcondition=0;
            birdspeed=0;
        }
    }

    if(gamecondition==1){yanshi++;if(yanshi>60){

    if(number>=0){
        if(bl_value[number]==1){
            ctx.drawImage(zuisangria,0,0,1000,550);
            
        }
        if(bl_value[number]==2){
            ctx.drawImage(zuipotato,0,0,1000,550);
        }
        if(bl_value[number]==3){
            ctx.drawImage(zuiwine,0,0,1000,550);
        }
        if(bl_value[number]==4){
            ctx.drawImage(zuicocoa,0,0,1000,550);
        }
        if(bl_value[number]==5){
            ctx.drawImage(zuicava,0,0,1000,550);
        }
    }

    if((bl_value[number]==2||bl_value[number]==4)){
        if(pn<5){ctx.drawImage(p1,600,180,260,260);pn++;}
        else if(pn<10){ctx.drawImage(p2,600,180,260,260);pn++;}
        else if(pn<15){ctx.drawImage(p3,600,180,260,260);pn++;}
        else if(pn<20){ctx.drawImage(p4,600,180,260,260);pn++;}
        else if(pn<25){ctx.drawImage(p5,600,180,260,260);pn++;}
        else if(pn<30){ctx.drawImage(p6,600,180,260,260);pn++;}
        else if(pn<35){ctx.drawImage(p7,600,180,260,260);pn++;}
        else if(pn<40){ctx.drawImage(p8,600,180,260,260);pn++;}
        else if(pn<45){ctx.drawImage(p9,600,180,260,260);pn++;}
        else if(pn<50){ctx.drawImage(p10,600,180,260,260);pn++;}
        else if(pn<55){ctx.drawImage(p11,600,180,260,260);pn++;}
        else if(pn<60){ctx.drawImage(p12,600,180,260,260);pn++;}
        else if(pn<65){ctx.drawImage(p13,600,180,260,260);pn++;}
        else if(pn<70){ctx.drawImage(p14,600,180,260,260);pn++;}
        else if(pn<75){ctx.drawImage(p15,600,180,260,260);pn++;}
        else if(pn<80){ctx.drawImage(p16,600,180,260,260);pn++;}
        else if(pn<85){ctx.drawImage(p17,600,180,260,260);pn++;}
        else if(pn<90){ctx.drawImage(p18,600,180,260,260);pn++;}
        else if(pn<95){ctx.drawImage(p19,600,180,260,260);pn++;}
        else if(pn<100){ctx.drawImage(p20,600,180,260,260);pn++;}
        else if(pn<105){ctx.drawImage(p21,600,180,260,260);pn++;}
        else if(pn<110){ctx.drawImage(p22,600,180,260,260);pn++;}
        else if(pn<115){ctx.drawImage(p23,600,180,260,260);pn++;}
        else if(pn<120){ctx.drawImage(p24,600,180,260,260);pn++;}
        else if(pn<125){ctx.drawImage(p25,600,180,260,260);pn++;if(pn==124){pn=1;}}
        }
    if((bl_value[number]==1||bl_value[number]==3||bl_value[number]==5)){
        if(jiun<5){ctx.drawImage(jiu1,600,200,280,222);jiun++;}
        else if(jiun<10){ctx.drawImage(jiu2,600,200,280,222);jiun++;}
        else if(jiun<15){ctx.drawImage(jiu3,600,200,280,222);jiun++;}
        else if(jiun<20){ctx.drawImage(jiu4,600,200,280,222);jiun++;}
        else if(jiun<25){ctx.drawImage(jiu5,600,200,280,222);jiun++;}
        else if(jiun<30){ctx.drawImage(jiu6,600,200,280,222);jiun++;}
        else if(jiun<35){ctx.drawImage(jiu7,600,200,280,222);jiun++;}
        else if(jiun<40){ctx.drawImage(jiu8,600,200,280,222);jiun++;}
        else if(jiun<45){ctx.drawImage(jiu9,600,200,280,222);jiun++;}
        else if(jiun<50){ctx.drawImage(jiu10,600,200,280,222);jiun++;}
        else if(jiun<55){ctx.drawImage(jiu11,600,200,280,222);jiun++;}
        else if(jiun<60){ctx.drawImage(jiu12,600,200,280,222);jiun++;}
        else if(jiun<65){ctx.drawImage(jiu13,600,200,280,222);jiun++;}
        else if(jiun<70){ctx.drawImage(jiu14,600,200,280,222);jiun++;}
        else if(jiun<75){ctx.drawImage(jiu15,600,200,280,222);jiun++;if(jiun==74){jiun=1;}}
    }
}}
}

function initialize(){
    
    bl_value = [];
    bl_x = [];

    generateBLOCK();
    jiun=1;
    pn=1;
    yanshi=0;
    number=-1;//-1=not over
    birdh=400;
    constbirdh=400;
    timeplayed= 0;
    score = 0.002;

    birdcondition=0;
    speedmax=10;
    birdspeed=0;
    bl_speed = 3;
    groundspeed = 1;
    bl_height = 400;
    lr=0;
    gamecondition=0;
    ctx.clearRect(0,0,300,150);

    again=0;
    var idd = setInterval(function(){

        drawFortune();
        if(again==1){
        clearInterval(idd);
        
        initialize();
    }
    },10);

}

function playAudio() {
    audio.play().catch(function () {});
}

function jump() {
    if (gamecondition === 0 && birdspeed === 0) {
        birdspeed = speedmax;
        birdcondition = 1;
    }
}

document.addEventListener('keydown', function (event) {
    var jumpKeys = ['Space', 'KeyW', 'ArrowUp', 'KeyK'];
    if (jumpKeys.indexOf(event.code) === -1 && event.code !== 'KeyR') return;
    event.preventDefault();
    playAudio();
    if (event.code === 'KeyR') {
        if (gamecondition === 1) again = 1;
    } else {
        jump();
    }
});

canvas.addEventListener('pointerdown', function (event) {
    if (!event.isPrimary || event.button !== 0) return;
    event.preventDefault();
    playAudio();
    if (gamecondition === 1) {
        again = 1;
    } else {
        jump();
    }
});

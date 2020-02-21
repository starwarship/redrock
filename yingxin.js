

function pull(appearlist)
{
    document.getElementById(appearlist).style.display="block";
    
}
function down(downlist)
{
    document.getElementById(downlist).style.display="none";
    
}
function xianshi(drop)
{
   document.getElementById(drop).style.opacity="1";
}
function xiaoshi(drop)
{
   document.getElementById(drop).style.opacity="0";
}

//倒计时
function ShowTime()
{
let d1=new Date();
let d2=new Date(2020,1,24);
let time1=d1.getTime();
let time2=d2.getTime();
let dis=(time2-time1)/1000;



let leftday=dis/(60*60*24);
leftday=Math.floor(leftday);

let lefthour=dis/(60*60)%24;
lefthour=Math.floor(lefthour);


let leftmin=dis/60%60;
leftmin=Math.floor(leftmin);

let lefts=dis%60;
lefts=Math.floor(lefts);


document.getElementById('day').innerHTML='0'+leftday;

if(Math.floor(lefthour/10)==0)document.getElementById('hour').innerHTML='0'+lefthour;
else document.getElementById('hour').innerHTML=lefthour;


if(Math.floor(leftmin/10)==0)document.getElementById('minute').innerHTML='0'+leftmin;
else document.getElementById('minute').innerHTML=leftmin;

if(Math.floor(lefts/10)==0)document.getElementById('second').innerHTML='0'+lefts;
else document.getElementById('second').innerHTML=lefts;

if(dis==0)
{
    clearInterval(id);
}

}
setInterval(ShowTime,1000);
let id= setInterval(ShowTime,1000);

// 地图
// 放大缩小
  let count=1;
  function plus(map){
    count+=0.6;
    if(count<=4){
        document.getElementById(map).style.transform="scale("+count+")";
         }
    }
  function minus(map){
    count-=0.6;
    if(count>=0){
        document.getElementById(map).style.transform="scale("+count+")";
    }
}

// 地图拖拽

let mouseDownX,mouseDownY,initX,initY,flag = false;  
 function map_1(e){
    let map_obj=document.getElementById("map");
    // 鼠标按下时的X,Y坐标（可能有误）
    mouseDownX=e.clientX;
    mouseDownY=e.clientY;

    //初始位置的X，Y 坐标  
    initX = map_obj.offsetLeft  
    initY = map_obj.offsetTop;  

    // 确保鼠标以按下
    flag=true;
}

 function map_2(e){
    if(flag){
        let map_obj=document.getElementById("map");
        let mouseMoveX = e.clientX,mouseMoveY = e.clientY;  
        map_obj.style.left = parseInt(mouseMoveX) - parseInt(mouseDownX) + parseInt(initX) + "px";  
        map_obj.style.top = parseInt(mouseMoveY) - parseInt(mouseDownY) + parseInt(initY) + "px";  
    }
}
  function map_3(e){
    flag=false;
}

// 按钮点击
function Move_shitang(obj){
   document.getElementById(obj).style.transform="scale("+4+")";
   document.getElementById(obj).style.top=-235+"px";
   document.getElementById(obj).style.left=-78+"px";
   document.getElementById(obj).style.transitionDuration=0.6+"s";
   document.getElementById(obj).style.transitionTimingFunction=ease;
}
function Move_caochang(obj){
    document.getElementById(obj).style.transform="scale("+4+")";
    document.getElementById(obj).style.top=123+"px";
    document.getElementById(obj).style.left=161+"px";
    document.getElementById(obj).style.transitionDuration=0.6+"s";
    document.getElementById(obj).style.transitionTimingFunction=ease;
 }
 function Move_hongyan(obj){
    document.getElementById(obj).style.transform="scale("+4+")";
    document.getElementById(obj).style.top=89+"px";
    document.getElementById(obj).style.left=318+"px";
    document.getElementById(obj).style.transitionDuration=0.6+"s";
    document.getElementById(obj).style.transitionTimingFunction=ease;
 }
 function Move_xinke(obj){
    document.getElementById(obj).style.transform="scale("+4+")";
    document.getElementById(obj).style.top=-440+"px";
    document.getElementById(obj).style.left=-338+"px";
    document.getElementById(obj).style.transitionDuration=0.6+"s";
    document.getElementById(obj).style.transitionTimingFunction=ease;
 }
 function Move_erjiao(obj){
    document.getElementById(obj).style.transform="scale("+4+")";
    document.getElementById(obj).style.top=-339+"px";
    document.getElementById(obj).style.left=235+"px";
    document.getElementById(obj).style.transitionDuration=0.6+"s";
    document.getElementById(obj).style.transitionTimingFunction=ease;
 }
 function Move_xin(obj){
    document.getElementById(obj).style.transform="scale("+4+")";
    document.getElementById(obj).style.top=-519+"px";
    document.getElementById(obj).style.left=632+"px";
    document.getElementById(obj).style.transitionDuration=0.6+"s";
    document.getElementById(obj).style.transitionTimingFunction=ease;
 }
 function Move_lao(obj){
    document.getElementById(obj).style.transform="scale("+4+")";
    document.getElementById(obj).style.top=-592+"px";
    document.getElementById(obj).style.left=86+"px";
    document.getElementById(obj).style.transitionDuration=0.6+"s";
    document.getElementById(obj).style.transitionTimingFunction=ease;

 }
 function Move_xiaoshi(obj){
    document.getElementById(obj).style.transform="scale("+4+")";
    document.getElementById(obj).style.top=-225+"px";
    document.getElementById(obj).style.left=910+"px";
    document.getElementById(obj).style.transitionDuration=0.6+"s";
    document.getElementById(obj).style.transitionTimingFunction=ease;

 }
 function Move_jiaowu(obj){
    document.getElementById(obj).style.transform="scale("+4+")";
    document.getElementById(obj).style.top=-20+"px";
    document.getElementById(obj).style.left=831+"px";
    document.getElementById(obj).style.transitionDuration=0.6+"s";
    document.getElementById(obj).style.transitionTimingFunction=ease;

 }
 function Move_tushu(obj){
    document.getElementById(obj).style.transform="scale("+4+")";
    document.getElementById(obj).style.top=-358+"px";
    document.getElementById(obj).style.left=-68+"px";
    document.getElementById(obj).style.transitionDuration=0.6+"s";
    document.getElementById(obj).style.transitionTimingFunction=ease;
 }
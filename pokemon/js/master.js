
document.onkeydown = checkKey;
var my_player_x = 955;
var my_player_y = 455;
var speed= 5;
var accelerate = 0.5;
var currentArrow="";
var Vstop="";
var Hstop="";
var specialPoints= 5;
var specialPointsCounter=0;
//var randMissileY=0;
var randMissileX=0;
var special_diamond_left=10; 
var master_life=100;
var maxFoodX=1915; // (width of container) - (????) = 1955
var maxFoodY=955; // Max fo the food
var maxEaterX=1946; // Max fo the eater
var maxEaterY=944;
var foodEpsilon = 35;
var points=0;
var run=1;
var url="";
var pokemon_num=1;
var masterX=1000;
var masterY=300;
var master_epsilon=100;
var helper=null;
var randFoodX = Math.floor((Math.random() * maxFoodX) + 1);
var randFoodY = Math.floor((Math.random() * maxFoodY) + 1);
var randSpecialX=-10;
var randSpecialY=-10;
var fireEpsilon=70;
var level_num=null;
var debug_fire=1; //d
var confusion_attack_is_on=0;
var oceaneHeight=0;

function shoot_the_master(){
    document.getElementById('main_div').innerHTML =  (special_diamond_left) ;
    fireball();
}

function is_xy_in_circle(left,top,width,x,y){
    
    var cx=left + width/2;
    var cy=top + width/2;
    var r= width/2 + 40;
    return Math.sqrt((x-cx)*(x-cx) + (y-cy)*(y-cy)) < r;
}

function master_heart(){
    // master mehavhev
    
    // change life bar    
}

function master_is_dead(){
    run=0;
   // document.getElementById('master').className+=" animated shake ";
    testAnim("master","shake");
    document.getElementById('myContainer').className+=" animated shake ";
        
    for(var i=0; i<15; i++){
        var div = document.createElement('div');
        document.getElementById('myContainer').appendChild(div);     
        div.style.visibility = "hidden";
        var x;
        var y;
        do{
        x = Math.floor((Math.random() * 2000) + 1);
        y =Math.floor((Math.random() * 1000) + 1);
        }while(! is_xy_in_circle(1370,120,400,x,y));
      
        div.style.left=add_px(x);
        div.style.top = add_px(y);
        div.className ="big_boom";
        div.style.visibility = "visible";
        //testAnim("master","shake");
        //testAnim("myContainer","shake");        
           
    }

    var delay=1100;
    setTimeout(function() {
  /*  var help= localStorage.getItem("level");  
    help++;
    localStorage.setItem("level",help);  */
    window.location='badges.html';}, delay);       
}



function fireball(){
            var div = document.createElement('div');
        
            document.getElementById('myContainer').appendChild(div);
            div.style.visibility = "hidden";
            div.className ="fireball";
            //var randMissileY = Math.floor((Math.random() * maxFoodY) + 1);
            var x_progress= my_player_x;
            div.style.left = add_px(x_progress);
            
            div.style.top = add_px(my_player_y);
//            div.style.visibility = "hidden";
            div.style.visibility = "visible";
            var f_b_my_player_y=my_player_y;
            var alive=1;
            
            
                                    
            var id = setInterval(frame, 10);
            function frame() {
                
                var left= document.getElementById('master').style.left; 
                var top= document.getElementById('master').style.top;
                var width= document.getElementById('master').style.width;
                
                //alert(left);
                if(is_xy_in_circle(1370,120,560,x_progress,f_b_my_player_y) && run==1 && alive ==1)
                
               { 
                    clearInterval(id);
                     div.className ="boom";
                     setTimeout(function() {
                        div.style.visibility = "hidden";                     
                    }, 1000);
                    //div.style.visibility = "hidden";
                    
                    var width = (document.getElementById('master_life_left').style.width);
                    width = width.substring(0, width.length - 1);
                    width = ((parseInt(width))-2); //d 20
                    document.getElementById('master_life_left').style.width= width + "%";
                    
                    if(width <=0)
                        master_is_dead();
                        
                    if((parseInt(width))<40)
                        document.getElementById('master_life_bar').className="meter red";
                
                    if((parseInt(width))<=70 && (parseInt(width))>=40)
                        document.getElementById('master_life_bar').className="meter orange";
                    
                    if((parseInt(width))>70)
                        document.getElementById('master_life_bar').className="meter green";
                    
                    alive=0;
                    }
                
                if (x_progress>=maxEaterX) {
                  clearInterval(id);
                div.style.visibility = "hidden";                  
                } else {
                
                  x_progress= x_progress + 2; 
                  div.style.left = add_px(x_progress);
                  
                }
              }
}



function wall(){
   
}
function make_wall(wall_x,wall_y){
            
}
function eatSuccess(){

}



function eatSpecialSuccess(){
        document.getElementById("special_diamond").style.visibility = "hidden";
        randSpecialX=-10;
        randSpecialY=-10;
//        specialPointsCounter = specialPointsCounter + specialPoints;
  //      document.getElementById('main_div').innerHTML = "POINTS: " + (points+ specialPointsCounter);
        special_diamond_left+=10;
        document.getElementById('main_div').innerHTML =  (special_diamond_left);
        testAnim("main_div","bounce");
        /*if(points%2 ==1)
            document.getElementById('main_div').className = "animated flash ";
        else
            document.getElementById('main_div').className = "animated bounce ";*/
        
        
        
}



function wepons_generator(){

            
        var t=setInterval(frame,5000);
        function frame(){

        do{
        randSpecialX = Math.floor((Math.random() * maxFoodX)  + 1);
        randSpecialY = Math.floor((Math.random() * (maxFoodY- oceaneHeight))  + 1); //d not very good.. try write "randSpecialY =oceaneHeight;" and see its much higher then what i wanted
        } while(Math.abs(randSpecialX - randFoodX) < 100 || is_xy_in_circle(1370,120,600,randSpecialX,randSpecialY) || (randSpecialY>1000-oceaneHeight) );
//        testAnim("special_diamond","fadeOut"); //d
        document.getElementById("special_diamond").style.left = add_px(randSpecialX);
        document.getElementById("special_diamond").style.top = add_px(randSpecialY);
        testAnim("special_diamond","fadeIn");
        document.getElementById("special_diamond").style.visibility = "visible"; 
//      document.getElementById("special_diamond").className += "animated fadeIn";

}

    // clearInterval(t);
}
function testAnim(id,x){

var recover= document.getElementById(id).className;

 $('#'+id).removeClass().addClass( 'animated ' + x).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
      $(this).addClass(recover);
    });
};
  
function master_fires(){

         var div = document.createElement('div');
        
            document.getElementById('behind_master').appendChild(div);
      
            var x_progress=0;
            var id = setInterval(frame, 500);
            function frame() {
                      var x;
                      var y;
                      do{
                        x = Math.floor((Math.random() * 2000) + 1);
                        y =Math.floor((Math.random() * 1000) + 1);
                     }while(! is_xy_in_circle(1300,160,500,x,y));
      
                     div.style.left=add_px(x-1150);
                     div.style.top = add_px(y);
                     div.className ="master_weapon";
                     
                      div.style.visibility = "visible";
//                      testAnim("master","bounce");     
        
                if((my_player_y < (randMissileY+foodEpsilon) ) && (my_player_y > (randMissileY - foodEpsilon)) && (my_player_x < (x_progress + foodEpsilon + 35)) && (my_player_x > (x_progress - foodEpsilon)) && (run==1)){
                    div.style.visibility = "hidden";                    
                    
                    finish_game();
                    run=0;
                    }
                
                if (x_progress==maxEaterX) {
                  clearInterval(id);
                div.style.visibility = "hidden";                  
                } else {
                
                  x_progress++; 
                  div.style.left = add_px(x_progress);
                  
                }
                div.style.visibility = "hidden";
              }
       
        

}
function master(){
    
    /*if(level_num=="mewtwo"){ //mewtwo
  master_fires();
   master_fires();
    master_fires();
    }*/
    
    if(level_num=="1"){ // charizard
        setTimeout(function() {
            charizard_fires();}, 700); 
    }
    if(level_num=="2"){ // pikachu
        setTimeout(function() {
            pikachu_fires();}, 700);
    }
     if(level_num=="3"){ // onix
        setTimeout(function() {
            onix_fires();  }, 200);
    }
    if(level_num=="4"){ // gengar
        setTimeout(function() {
            gengar_fires();  }, 700);
    }
    
    if(level_num=="5"){

       ocean_tide();
       garidos_attack();
       garidos_tide();
    }
}


function garidos_tide(){
    
    var id = setInterval(frame, 10000);
    function frame() {
        
        oceaneHeight+=20;
        
    }
    
}


function garidos_attack(){
    document.getElementById("master").style.backgroundImage=" url('garidos_shoot.gif')";
    
    var id = setInterval(frame, 1200);
    function frame() {

        garidos_bubble(1350,320,0);
        //garidos_bubble(1350,320,0);
    }
    
}

function garidos_bubble(x,y,y_factor){
    
    var div = document.createElement('div');
        
            document.getElementById('myContainer').appendChild(div);

            div.className ="bubble";
            if( y_factor==0){
                y_factor = Math.floor((Math.random() * 10) + 1);
                y_factor-=5;
            }

            var x_progress=x; 
            var y_progress = y; 

            div.style.top = add_px(y_progress);
            div.style.left=add_px(x_progress);
            div.style.visibility = "visible";
            var heat_the_wall=1;

            
            var id = setInterval(frame, 10);
            function frame() {
                
                if( ((y_progress-40 ) < my_player_y ) && (my_player_y < (y_progress+160)) && (my_player_x < (x_progress + 160)) && (my_player_x > (x_progress-40 )) && (run==1)){
                    div.style.visibility = "hidden";                    
                    
                    finish_game();
                    run=0;
                    }
                
                if (x_progress<=0) {
                  clearInterval(id);
                div.style.visibility = "hidden";                  
                } else {
                    if(y_progress<0 || y_progress>=820)
                         heat_the_wall++;
                     if(heat_the_wall%2==0)    {
                                       y_progress+=y_factor;
                                      div.style.top=add_px(y_progress);
                                      }

                    else{
                   y_progress-=y_factor;
                  div.style.top=add_px(y_progress);
                  }
                  x_progress-=7; 
                  div.style.left = add_px(x_progress);
                  }
                  
                  if(x_progress==1000 /*|| x_progress==496*/){
                    y_factor= Math.abs(y_factor)-5;
                    garidos_bubble(x_progress,y_progress,y_factor*-1);
                    }
                
              }

}


function ocean_tide(){

            var ocean = document.getElementById("ocean");
            ocean.style.visibility = "visible";
            var i=0;
            
            var id4;
            var id3;
  
            oceaneHeight= 100; // max value is 1000
            ocean.style.top=add_px(1000-oceaneHeight);
            document.getElementById("ocean").style.height =add_px(0+oceaneHeight);
            
            id3 = setInterval(frame, 10);
             function frame(){
                
                if(collision_detection("myAnimation","ocean")){
                    
                    finish_game();
                    run=0;
             }
                }
            
       
            var helper= 1;
            var wave_height=40;
            var direction=1;
                
            id4 = setInterval(frame_wave, 30);
            
            function frame_wave(){
                    
               if(direction==1)
                  {
                    helper+= 1; // max value is 1000
                    ocean.style.top=add_px(1000-helper);
                    document.getElementById("ocean").style.height =add_px(0+helper);
                    
                    if(helper>wave_height+oceaneHeight)
                      direction=0;   
                  }else
                  {
                    helper-= 1; // max value is 1000
                    ocean.style.top=add_px(1000-helper);
                    document.getElementById("ocean").style.height =add_px(0+helper);
                    
                    if(helper<oceaneHeight)
                      direction=1; 
                  } 
            }
// blueprint
   /*     
        var ocean = document.getElementById("ocean");
        ocean.style.visibility = "visible";
        oceaneHeight= 100;
        var realOceaneHeight= 1000 -oceaneHeight;
        ocean.style.top=0 +"px";   
        document.getElementById("ocean").style.height =1000+"px"; // which means ocean can cover all the black screen (myContainer)

        waveWidth = 10; // how musch pixels each wave counts
        waveCount = Math.floor(2000/(waveWidth));//d "window.innerWidth" instead of "2000"

        for(var i = 0; i < waveCount; i++){
            
            (function(i) {
             var wave = document.createElement("div");
             wave.className += " wave";
             wave.id= "wave"+i;
             wave.style.left = i * waveWidth + "px";
             //alert(wave.style.left + " , " + wave.style.top); ppppp
            // wave.style.height=realOceaneHeight/waveCount * i +"px";
             wave.style.height=700+"px";
            
            /*
             var id2 = setInterval(frame, 10);
                function frame() {
                
                if(collision_detection(myAnimation,master_life_bar))
                    alert("yes");
                    var str = wave.style.height;
                    str = str.substring(0, str.length - 2);
                    if(my_player_y>=(parseInt(str))-55){
                       
                        finish_game();
                        run=0;
                    }
                }
                *//*
            ocean.appendChild(wave);
            })(i);
        }
        
        //moveObject("master",100,100,10,10);
        
        /* for(var j=0; j<waveCount;j++){
             setTimeout(function() {
                 
                    //wave.style.height= (500-j*3) +"px";//(str-100) + "px"; kkkkkk
                    //wave.style.WebkitAnimation = "dostuff 4s 2";
                 
            }, 1000+j*10);
             }*/

}

function delete_px(str){
    return parseInt(str.substring(0, str.length - 2));
}

function tide(pY, smoothness, speed){
  //Get the object
  object = document.getElementById ("ocean");
  //Get the current location
  var cY = object.style.height;
  
  var dY=(pY+delete_px(cY));
  //alert(dY);
 
  //Determine the new y location
  //If the current y location is smaller than the desired location => move down
  if (cY<dY) {
    //If the new location is further than the desired location just move to the desired location
    if (cY+speed > dY)
      nY=dY;
    else
      //Otherwise move to the new location
      nY=cY+speed;
  } else {
    //Otherwise move up
    //If the new location is further than the desired location just move to the desired location
    if (cY-speed < dY)
      nY=dY;
    else
      //Otherwise move to the new location
      nY=cY-speed;
  }
 
  //Make it the new location
  
  object.style.height = add_px(nY);
  
  //pY=dY-nY;
 
  //If the object hasn't reached the new location yet, recall the function in *smoothness* ms
  if (nY!=dY)
    setTimeout("tide("+pY+","+smoothness+","+speed+")", smoothness);
}

function growObject(id, height, width, smoothness, speed) {
  //Get the object
  object = document.getElementById(id);
  //Get the current location
  cX = document.getElementById(id).style.height;
  cY = document.getElementById(id).style.width;
  alert("cX="+cX+" cY="+cY);
 
  //Determine the new x location
  //If the current x location is smaller than the desired location => move right
  if (cX<height) {
    //If the new location is further than the desired location just move to the desired location
    if (cX+speed > height)
      nX=height;
    else
      //Otherwise move to the new location
      nX=cX+speed;
  } else {
    //Otherwise move left
    //If the new location is further than the desired location just move to the desired location
    if (cX-speed < height)
      nX=height;
    else
      //Otherwise move to the new location
      nX=cX-speed;
  }
 
  //Determine the new y location
  //If the current y location is smaller than the desired location => move down
  if (cY<width) {
    //If the new location is further than the desired location just move to the desired location
    if (cY+speed > width)
      nY=width;
    else
      //Otherwise move to the new location
      nY=cY+speed;
  } else {
    //Otherwise move up
    //If the new location is further than the desired location just move to the desired location
    if (cY-speed < width)
      nY=width;
    else
      //Otherwise move to the new location
      nY=cY-speed;
  }
 
  //Make it the new location
  object.style.height = add_px(nX);
  object.style.width = add_px(nY);
 
  //If the object hasn't reached the new location yet, recall the function in *smoothness* ms
  if (nX!=height || nY!=width)
    setTimeout("moveObject('"+id+"',"+height+","+width+","+smoothness+","+speed+")", smoothness);
}

function gengar_fires(){
document.getElementById("master").style.backgroundImage=" url('http://vignette2.wikia.nocookie.net/mugen/images/0/0f/MPMGengarS4.gif/revision/latest?cb=20150804002607')";
   gengar_attack(1350,320,0);
             
            var id = setInterval(frame, 1200);
            function frame() {
//testAnim("master","bounce");
            /*document.getElementById("master").style.backgroundImage=" url('http://vignette2.wikia.nocookie.net/mugen/images/0/0f/MPMGengarS4.gif/revision/latest?cb=20150804002607')";*/
             gengar_attack(1350,320,0);
            }
             
             var id2 = setInterval(frame2, 20000); // 20000
            function frame2() {
//testAnim("master","bounce");
             gengar_confusion();
            }   
}

function gengar_confusion(){
    document.getElementById("master").style.backgroundImage=" url('http://vignette1.wikia.nocookie.net/mugen/images/a/a5/MPMGengarS1_1.gif/revision/latest?cb=20150804002600')";
    var i=0;
    
    
    for(i=0; i<20; i++){
        setTimeout(function() {
              if(Math.floor((Math.random() * 2) ) == 0){
                  document.getElementById('myContainer').style.backgroundColor="black";
              }
              else{
                   document.getElementById('myContainer').style.backgroundColor="rgba(21,10,31, 100)";
              }                        
                        }, i*50);
        
    }
    
    setTimeout(function() {

        document.getElementById("master").style.backgroundImage=" url('http://vignette2.wikia.nocookie.net/mugen/images/0/0f/MPMGengarS4.gif/revision/latest?cb=20150804002607')";
        if(confusion_attack_is_on==0){
            document.getElementById('myContainer').style.backgroundColor="rgba(21,10,31, 100)";
            confusion_attack_is_on=1;
            testAnim("myContainer","shake");
            }
        else{
            confusion_attack_is_on=0;    
            document.getElementById('myContainer').style.backgroundColor="black";
            }
    }, 1000);
}

function pikachu_fires(){

            pikachu_attack();
             
            var id = setInterval(frame, 1000);
            function frame() {

             pikachu_attack();
            }    
}

function gengar_attack(x,y,y_factor){

var div = document.createElement('div');
        
            document.getElementById('myContainer').appendChild(div);

            div.className ="gengar_attack";
            if( y_factor==0){
                y_factor = Math.floor((Math.random() * 10) + 1);
                y_factor-=5;
            }

            var x_progress=x; 
            var y_progress = y; 

            div.style.top = add_px(y_progress);
            div.style.left= add_px(x_progress);
            div.style.visibility = "visible";
            var heat_the_wall=1;

            
            var id = setInterval(frame, 10);
            function frame() {
                
                if( ((y_progress-40 ) < my_player_y ) && (my_player_y < (y_progress+160)) && (my_player_x < (x_progress + 160)) && (my_player_x > (x_progress-40 )) && (run==1)){
                    div.style.visibility = "hidden";                    
                    
                    finish_game();
                    run=0;
                    }
                
                if (x_progress<=0) {
                  clearInterval(id);
                div.style.visibility = "hidden";                  
                } else {
                    if(y_progress<0 || y_progress>=820)
                         heat_the_wall++;
                     if(heat_the_wall%2==0)    {
                                       y_progress+=y_factor;
                                      div.style.top=add_px(y_progress);
                                      }

                    else{
                   y_progress-=y_factor;
                  div.style.top=add_px(y_progress);
                  }
                  x_progress-=7; 
                  div.style.left = add_px(x_progress);
                  }
                  
                  if(x_progress==1000 /*|| x_progress==496*/){
                    y_factor= Math.abs(y_factor)-5;
                    gengar_attack(x_progress,y_progress,y_factor*-1);
                    }
                
              }

}

function pikachu_attack(){

    var div = document.createElement('div');
        
            document.getElementById('myContainer').appendChild(div);

            div.className ="pikachu_attack";
            
            var y_factor = Math.floor((Math.random() * 10) + 1);
            y_factor-=5;
            var x_progress=1500;
            var y_progress = 250;
            div.style.left = add_px(x_progress);
            div.style.top = add_px(y_progress);
            div.style.visibility = "visible";
            var heat_the_wall=1;


            var id = setInterval(frame, 10);
            function frame() {
                
                if( ((y_progress+70 ) < my_player_y ) && (my_player_y < (y_progress+220)) && (my_player_x < (x_progress + 280)) && (my_player_x > (x_progress+80 )) && (run==1)){
                    div.style.visibility = "hidden";                    
                    
                    finish_game();
                    run=0;
                    }
                
                if (x_progress<=0) {
                  clearInterval(id);
                div.style.visibility = "hidden";                  
                } else {
                    if(y_progress<0 || y_progress>=720)
                         heat_the_wall++;
                     if(heat_the_wall%2==0)    {
                                       y_progress+=y_factor;
                                      div.style.top=add_px(y_progress);
                                      }

                    else{
                   y_progress-=y_factor;
                  div.style.top=add_px(y_progress);
                  }
                  x_progress-=7; 
                  div.style.left = add_px(x_progress);
                  }
                
              }
}

function charizard_fires(){
document.getElementById("master").style.backgroundImage=" url('http://www.pkparaiso.com/imagenes/xy/sprites/animados/charizard-3.gif')";
            charizard_fireball();
            charizard_fireball();
            charizard_fireball();

/*setTimeout(function() {
document.getElementById("master").style.backgroundImage=" url('http://www.pkparaiso.com/imagenes/xy/sprites/animados/charizard.gif')";}, 1500);  */
var id = setInterval(frame, 2000);
            function frame() {

             charizard_fireball();
             charizard_fireball();
             charizard_fireball();

            }
    
}

function onix_regular_shoot(){


    
    var id = setInterval(regular_shoot, 5*500 + 1500);
    function regular_shoot() {
    document.getElementById("master").style.backgroundImage='url(onix_shoot.gif?' + Math.random() + ')';''

    
    var id_ = setInterval(frame, 1500);
            function frame() {             
             for(var i=0;i<5;i++){
             setTimeout(function() {
                        onix_stone_shoot();}, i*500);
              }
             clearInterval(id_);
            }
    }
    
  
    
    setTimeout(function() {
        clearInterval(id);
        
        }, 5*500 + 1500);
}

function onix_fires(){

document.getElementById("master").style.backgroundImage='url(onix_shoot.gif?' + Math.random() + ')';''
for(var i=2;i<7;i++){
             setTimeout(function() {
                        onix_stone_shoot();}, i*550);
              }
setTimeout(function() {
                        


document.getElementById("master").style.backgroundImage="url('http://vignette2.wikia.nocookie.net/mugen/images/a/ac/Iwakuidle.gif/revision/latest?cb=20120310232806')";
                        }, 5000);
             


var id = setInterval(regular_shoot, 12000);
    function regular_shoot() {        

setTimeout(function() {
                        onix_regular_shoot();
                        }, 0);
    
setTimeout(function() {
                        onix_special_shoot();
                        }, 4000);
    
if(Math.floor((Math.random() * 10) + 1) %2==0)
{
setTimeout(function() {
                        onix_regular_shoot();
                        }, 8000);
}
else{
setTimeout(function() {
                        onix_special_shoot();
                        }, 8000);

}
             
}
// earthquake ONIX SHOOT 
//clearInterval(id5)   
   
}

function onix_special_shoot(){
    var id = setInterval(earthquake, 5*500 + 1500);
    function earthquake() {  

    document.getElementById("master").style.backgroundImage="url('http://vignette4.wikia.nocookie.net/mugen/images/3/38/MinooOnixS5.gif/revision/latest?cb=20150630024414')";
    var id2_ = setInterval(frame, 2500);
            function frame() {   
            testAnim("myContainer","shake");
            /*if(document.getElementById('myContainer').className=="animated shake")
             document.getElementById('myContainer').className="animated bounce";  
             else        
             document.getElementById('myContainer').className="animated shake";  */
             for(var i=0;i<8;i++){
             setTimeout(function() {
                        onix_earthquake_shoot();}, i*20);
              }
              
             clearInterval(id2_);
            }
    }
    setTimeout(function() {
        clearInterval(id);}, 5*500 + 1500);


}

function onix_earthquake_shoot(){


var div = document.createElement('div');
        
            document.getElementById('myContainer').appendChild(div);

            div.className ="onix_stone_shoot";
            
            var x_progress = Math.floor((Math.random() * maxFoodX) + 1);
            div.style.left = add_px(x_progress);

            var y_progress = 0;
            div.style.top = add_px(y_progress);
            div.style.visibility = "visible";


            var id = setInterval(frame, 10);
            function frame() {
                
                if( ((y_progress-40 ) < my_player_y ) && (my_player_y < (y_progress+100)) && (my_player_x < (x_progress + 100)) && (my_player_x > (x_progress-40 )) && (run==1)){
                    clearInterval(id);
                  div.className ="stone_boom";
                  setTimeout(function() {
                        div.style.visibility = "hidden";                     
                    

                    }, 500);
                    finish_game();
                    run=0;
                    }
                
                if ( y_progress>=900) {
                    clearInterval(id);
                  div.className ="stone_boom";
                  setTimeout(function() {
                        div.style.visibility = "hidden";                     
                    }, 500);
                
                } else {
                   y_progress+=8;
                  div.style.top=add_px(y_progress);
                  
                  
                }
              }
}

function onix_stone_shoot(){
            
            var div = document.createElement('div');
        
            document.getElementById('myContainer').appendChild(div);

            div.className ="onix_stone_shoot";
            
            var y_factor = Math.floor((Math.random() * 10) + 1);
            y_factor-=5;

            var y_progress = 350;
            div.style.top = add_px(y_progress);
            div.style.visibility = "visible";

            var x_progress=1400;
            var id = setInterval(frame, 10);
            function frame() {
                
                if( ((y_progress-40 ) < my_player_y ) && (my_player_y < (y_progress+100)) && (my_player_x < (x_progress + 100)) && (my_player_x > (x_progress-40 )) && (run==1)){
                    clearInterval(id);
                  div.className ="stone_boom";
                  setTimeout(function() {
                        div.style.visibility = "hidden";                     
                    

                    }, 500);
                    finish_game();
                    run=0;
                    }
                
                if (x_progress<=20 || y_progress<-80 || y_progress>=900) {
                    clearInterval(id);
                  div.className ="stone_boom";
                  setTimeout(function() {
                        div.style.visibility = "hidden";                     
                    }, 500);
                
                } else {

                   y_progress-=y_factor;
                  div.style.top=add_px(y_progress);
                  x_progress-=10; 
                  div.style.left = add_px(x_progress);

                }
              }

}

function charizard_fireball(){
            
            var div = document.createElement('div');
        
            document.getElementById('myContainer').appendChild(div);

            div.className ="charizard_fireball";
            
            var y_factor = Math.floor((Math.random() * 10) + 1);
            y_factor-=5;

            var x_progress=1500;
            var y_progress = 250;
            div.style.left=add_px(x_progress);
            div.style.top = add_px(y_progress);
            div.style.visibility = "visible";


            var id = setInterval(frame, 10);
            function frame() {
                
                if( ((y_progress+70 ) < my_player_y ) && (my_player_y < (y_progress+220)) && (my_player_x < (x_progress + 280)) && (my_player_x > (x_progress+80 )) && (run==1)){
                    div.style.visibility = "hidden";                    
                    
                    finish_game();
                    run=0;
                    }
                
                if (x_progress<=0 || y_progress<-80 || y_progress>=750) {
                  clearInterval(id);
                div.style.visibility = "hidden";                  
                } else {
                   y_progress-=y_factor;
                  div.style.top=add_px(y_progress);
                  x_progress-=7; 
                  div.style.left = add_px(x_progress);
                  
                }
              }

}

function specialDiamond(){
        do{
        randSpecialX = Math.floor((Math.random() * maxFoodX) + 1);
        randSpecialY = Math.floor((Math.random() * maxFoodY) + 1);
        } while(Math.abs(randSpecialX - randFoodX) < 100);

        document.getElementById("special_diamond").style.left = add_px(randSpecialX);
        document.getElementById("special_diamond").style.top = add_px(randSpecialY);
        document.getElementById("special_diamond").style.visibility = "visible";

}

function eatSpecial(){
 return ((my_player_y < (randSpecialY+foodEpsilon) ) && (my_player_y > (randSpecialY - foodEpsilon) ) && (my_player_x < (randSpecialX + foodEpsilon)) && (my_player_x > (randSpecialX - foodEpsilon)));
}

function eat(){
 return ((my_player_y < (randFoodY+foodEpsilon) ) && (my_player_y > (randFoodY - foodEpsilon) ) && (my_player_x < (randFoodX + foodEpsilon)) && (my_player_x > (randFoodX - foodEpsilon)));
}

function game_over(){
                var left= document.getElementById('master').style.left; 
                var top= document.getElementById('master').style.top;
                var width= document.getElementById('master').style.width;

return ((my_player_x >= maxEaterX) || (my_player_x < -2) || (my_player_y >= maxEaterY) || (my_player_y < 0) ||
                (is_xy_in_circle(1370,120,560,my_player_x,my_player_y) ));
    
}

function finish_game(){
    var help= localStorage.getItem("level");  
    if((help-1)>=0){
        help--;
        }
    var help= localStorage.setItem("level",help);  
    Vstop=="stop";
    Hstop=="stop";

    document.getElementById("myAnimation").className="boom";
    run=0;  

    var delay=1000;
    setTimeout(function() {
    
    window.location='gameover.html';}, delay);            	
    currentArrow="100";
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function checkKey(e) {

    e = e || window.event;
    

    if(helper == null){

        wepons_generator();


    match_master_to_level();
        master();
        helper="";
        run=1;

    }
    
    
//     document.getElementById("myFood").style.left = randFoodX+ "px";
//     document.getElementById("myFood").style.top = randFoodY + "px";
//     pokemon_num=points +1;
//     
//     url="url('http://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + pad(pokemon_num,3) + ".png')";
//   	document.getElementById("myFood").style.backgroundImage = url;
//     document.getElementById("myFood").style.visibility = "visible";

    if(run==1){
    if (e.keyCode == '38' && (currentArrow != "38")) { // up
            var prevArrow= currentArrow;
            currentArrow="38";
            Hstop="stop";
            Vstop="";            
            document.getElementById("myAnimation").className="up_face";              	
           	var elem = document.getElementById("myAnimation");   

            var id = setInterval(frame, 10);
            function frame() {
                if(game_over() && run){
                    finish_game();
                    clearInterval(id);
                    }
                
                if ((Vstop=="stop" ) || (run==0) || currentArrow=="40" ) {
                  clearInterval(id);
                } else {
                
                  my_player_y= my_player_y - speed; 
                  elem.style.top = add_px(my_player_y);
                  if( eat() ){
                    eatSuccess();
                  }
                  if( eatSpecial() ){
                    eatSpecialSuccess();
                  }
                  
                }
              }
              
    }
    else if (e.keyCode == '40' && (currentArrow != "40")) { // down
            var prevArrow= currentArrow;
            currentArrow="40";
            Hstop="stop";     
            Vstop="";                               

           	
            var elem = document.getElementById("myAnimation");   
            //var pos = 0;
            var id = setInterval(frame, 10);
            function frame() {
            if(game_over() && run){
                    finish_game();
                    clearInterval(id);
                    }
                if ( Vstop=="stop" || (run==0) || currentArrow=="38" ) {
                  clearInterval(id);
                } else {
                  my_player_y= my_player_y + speed;  
                  elem.style.top = add_px(my_player_y);
                  if( eat() ){
                    eatSuccess();
                  }
                  if( eatSpecial() ){
                    eatSpecialSuccess();
                  }

                }
              }

    }
    else if (e.keyCode == '37' ) { // left
           if(confusion_attack_is_on==0 && (currentArrow != "37")) 
              click_left();
           else
              if(confusion_attack_is_on==1 && currentArrow != "39")
                click_right();
        
    } else if (e.keyCode == '39'  ) { // right
           if(confusion_attack_is_on==0 && (currentArrow != "39")) 
              click_right();
           else
                if(confusion_attack_is_on==1 && currentArrow != "37")
                    click_left();
            
    }else if (e.keyCode == '32' && (special_diamond_left>0)) {
        document.getElementById("myAnimation").className="right_face";   
        special_diamond_left--;        
        shoot_the_master();
        

    }
    else if (e.keyCode == '50' && (special_diamond_left>0)) {
        wall();
        special_diamond_left--;
    }

}
}

function click_right(){
var prevArrow= currentArrow;
            currentArrow= "39";
            Vstop="stop"; 
            Hstop="";                                                                    
           	
            document.getElementById("myAnimation").className="right_face";   
           	var elem = document.getElementById("myAnimation");   
            //var pos = 0;
            var id = setInterval(frame, 10);
            function frame() {
            if(game_over() && run){
                    finish_game();
                    clearInterval(id);
                    }
                if ( Hstop=="stop" || (run==0) || currentArrow=="37") {
                  clearInterval(id);
                } else {
                    my_player_x= my_player_x + speed; 
                 // elem.style.top = pos + 'px'; 
                  elem.style.left = add_px(my_player_x);
                  if( eat() ){
                    eatSuccess();
                  }
                  if( eatSpecial() ){
                    eatSpecialSuccess();
                  }
                }
              }
}

function click_left(){
      currentArrow="37";
            Vstop="stop";   
            Hstop="";                                 

            document.getElementById("myAnimation").className="left_face";   
           	
           	var elem = document.getElementById("myAnimation");   
            //var pos = 0;
            var id = setInterval(frame, 10);
            function frame() {
            if(game_over() && run){
                    finish_game();
                    clearInterval(id);
                    }
                if ( Hstop=="stop" || (run==0) || currentArrow=="39") {
                  clearInterval(id);
                } else {
                  my_player_x= my_player_x - speed; 
                 // elem.style.top = pos + 'px'; 
                  elem.style.left = add_px(my_player_x);
                  if( eat() ){
                    eatSuccess();
                  }
                  if( eatSpecial() ){
                    eatSpecialSuccess();
                  }
                }
              }
        
}



function collision_detection(object1,object2)
{

var obj1 = document.getElementById(object1);
var obj2 = document.getElementById(object2);
// alert(object2);
 obj1.top = $(obj1).offset().top;

 obj1.left = $(obj1).offset().left;
 obj1.right = Number($(obj1).offset().left) + Number($(obj1).width());
 obj1.bottom = Number($(obj1).offset().top) + Number($(obj1).height());

 obj2.top = $(obj2).offset().top;
 obj2.left = $(obj2).offset().left;
 obj2.right = Number($(obj2).offset().left) + Number($(obj2).width());
 obj2.bottom = Number($(obj2).offset().top) + Number($(obj2).height());

if (obj1.right > obj2.left && obj1.left < obj2.right && obj1.top < obj2.bottom && obj1.bottom > obj2.top)
 {
//alert("hi");
return 1;
}

if (obj1.left > obj2.left && obj1.top > obj2.top && obj1.right < obj2.right && obj1.bottom < obj2.bottom)
 {
//alert("hello");
return 1;
    }
    else
        return 0;
}

function moveObject (id, dX, dY, smoothness, speed) {
  //Get the object
  object = document.getElementById (id);
  //Get the current location
  cX = object.offsetLeft;
  cY = object.offsetTop;
 
  //Determine the new x location
  //If the current x location is smaller than the desired location => move right
  if (cX<dX) {
    //If the new location is further than the desired location just move to the desired location
    if (cX+speed > dX)
      nX=dX;
    else
      //Otherwise move to the new location
      nX=cX+speed;
  } else {
    //Otherwise move left
    //If the new location is further than the desired location just move to the desired location
    if (cX-speed < dX)
      nX=dX;
    else
      //Otherwise move to the new location
      nX=cX-speed;
  }
 
  //Determine the new y location
  //If the current y location is smaller than the desired location => move down
  if (cY<dY) {
    //If the new location is further than the desired location just move to the desired location
    if (cY+speed > dY)
      nY=dY;
    else
      //Otherwise move to the new location
      nY=cY+speed;
  } else {
    //Otherwise move up
    //If the new location is further than the desired location just move to the desired location
    if (cY-speed < dY)
      nY=dY;
    else
      //Otherwise move to the new location
      nY=cY-speed;
  }
 
  //Make it the new location
  object.style.left = add_px(nX);
  object.style.top = add_px(nY);
 
  //If the object hasn't reached the new location yet, recall the function in *smoothness* ms
  if (nX!=dX || nY!=dY)
    setTimeout("moveObject('"+id+"',"+dX+","+dY+","+smoothness+","+speed+")", smoothness);
}


function match_master_to_level(){
confusion_attack_is_on=0;
debug_fire=1;//d
    level_num= localStorage.getItem("level");  
//alert(level_num);
    //level_num= "5";//d
	if(level_num<1 || level_num>5){ //d	
		level_num=1;
localStorage.setItem("level",level_num+""); 
}
    oceaneHeight=0;
   // alert("Level: " +level_num);
    switch(level_num) {
    

    case "1":
        
        document.getElementById("master").style.backgroundImage=" url('http://vignette2.wikia.nocookie.net/pokemon/images/7/74/Charizard_XY.gif/revision/latest?cb=20140319080812')";
        
        break;
    case "2":
        document.getElementById("master").className="reflection";
        document.getElementById("master").style.backgroundImage=" url('http://vignette2.wikia.nocookie.net/mugen/images/6/6b/GladiaPikaS2_3.gif/revision/latest?cb=20161014225514')";

        break;
        
    case "3":
        document.getElementById("master").className="reflection";
        document.getElementById("master").style.backgroundImage=" url('http://vignette2.wikia.nocookie.net/mugen/images/a/ac/Iwakuidle.gif/revision/latest?cb=20120310232806')";
/*        document.getElementById("master").style.width = "600px";*/
            break;

 case "4":
        document.getElementById("master").className="reflection";
        document.getElementById("master").style.backgroundImage=" url('http://vignette4.wikia.nocookie.net/mugen/images/1/19/MPMGengaridle.gif/revision/latest?cb=20120310224932')";
/*        document.getElementById("master").style.width = "600px";*/
            break;
            
case "5":
       //document.getElementById("master").className="reflection";
        document.getElementById("master").style.backgroundImage=" url('garidos-stand.gif')";
/*        document.getElementById("master").style.width = "600px";*/
            break;            
    default:
 
       
               break;
    }
    
}

function size_initialize(){
    document.getElementById("myContainer").style.width= add_px(2000);
    document.getElementById("myContainer").style.height= add_px(1000);
    document.getElementById("myContainer").style.left= add_px(230);
    document.getElementById("myContainer").style.top= add_px(100);            
    
}

function add_px(num){
    var size_factor=1;
    // TODO make all px relatad things in js (instead of in CSS), and then make the size-factor smaller in the screen size!!
    return num*size_factor+"px";
    
}

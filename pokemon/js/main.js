
document.onkeydown = checkKey;
var my_player_x = 955;
var my_player_y = 455;
var speed= 5;
var accelerate = 0.65;
var currentArrow="";
var Vstop="";
var Hstop="";
var specialPoints= 5;
var specialPointsCounter=0;
//var randMissileY=0;
var randMissileX=0;
var special_diamond_left=0;
var next_level= 3    ;  //d 32
var maxFoodX=1855; // (width of container) - (????) = 1955
var maxFoodY=955; // Max fo the food
var maxEaterX=1946; // Max fo the eater
var maxEaterY=944;
var foodEpsilon = 35;
var points=0;
var run=1;
var url="";
var pokemon_num=1;
var next_level_x=0;
var next_level_y=0;
var is_next_level=null;
var randFoodX = Math.floor((Math.random() * maxFoodX) + 1);
var randFoodY = Math.floor((Math.random() * maxFoodY) + 1);
var randSpecialX=-10;
var randSpecialY=-10;
var level_num=null;

function testAnim(id,x){

var recover= document.getElementById(id).className;
 $('#'+id).removeClass().addClass( 'animated ' + x).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
      $(this).addClass(recover);
    });
};

function delete_diamond(){
//    var x = document.getElementsByClassName("diamond");
   var id="d_"+ (special_diamond_left + 1);
   var element = document.getElementById(id);
	element.outerHTML = "";
	delete element;

}
function boom_all_missiles(){
    var x = document.getElementsByClassName("missile");
    var i;
    if(x.length>0){
        for (i = 0; i < x.length; i++) {
        //x[i].className ="boom";
            var delay=500;
        //setTimeout(function() {
            x[i].value ="dead";
    
        }
        special_diamond_left--;
        delete_diamond();
    }
}

function wall(){

}

function make_wall(wall_x,wall_y){
            var div = document.createElement('div');
            document.getElementById('myContainer').appendChild(div);
            div.className ="wall";
            var randMissileY = Math.floor((Math.random() * maxFoodY) + 1);
            div.style.top = randMissileY+ "px";
            div.style.visibility = "visible";

            var progress=0;
            var id = setInterval(frame, 10);
            function frame() {
                // pppppp FIX the wall isnt against the player, it against the missilses.
                // need to check it in the missiles part!
                if((my_player_y < (wall_x+foodEpsilon) ) && (my_player_y > (wall_x - foodEpsilon)) && (my_player_x < (wall_y + foodEpsilon )) && (my_player_x > (wall_y - foodEpsilon)) && (run==1)){
                    div.style.visibility = "hidden";                    
                    
                    finish_game();
                    run=0;
                    }
                
                if (progress==maxEaterX) {
                  clearInterval(id);
                div.style.visibility = "hidden";                  
                } else {
                
                  div.style.left = progress + 'px'; 
                  
                }
              }
}
function eatSuccess(){

        points++;
        document.getElementById('main_div').innerHTML = "POINTS: " + (points+ specialPointsCounter) ;
        testAnim("main_div","bounce");
/*        if(points%2 ==1)
            document.getElementById('main_div').className = "animated flash ";
        else
            document.getElementById('main_div').className = "animated bounce ";*/
    
        randFoodX = Math.floor((Math.random() * maxFoodX) + 101);
        randFoodY = Math.floor((Math.random() * maxFoodY) + 1);
        document.getElementById("myFood").style.left = randFoodX+ "px";
        document.getElementById("myFood").style.top = randFoodY + "px";
        
        
            document.getElementById("myFood").style.left = randFoodX+ "px";
    document.getElementById("myFood").style.top = randFoodY + "px";
//    pokemon_num=points +1;
    pokemon_num= points +1+level_num*next_level;
    url="url('http://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + pad(pokemon_num,3) + ".png')";
  	document.getElementById("myFood").style.backgroundImage = url;
    document.getElementById("myFood").style.visibility = "visible";

        
        if(points%5 == 0 && speed<10){
            speed += accelerate;
    
        }
         
        if(points%7 == 0){
            specialDiamond();
        }   

        if(points%2 == 0 || points>13){
            missile();
            if(points>24)
                missile();
        } 
        
        if(points== next_level){

            show_next_level();
        }    
        

}


function show_next_level(){
  is_next_level="";
  randSpecialX=-10;
  randSpecialY=-10;
randFoodX=2000;
randFoodY=2000;
   document.getElementById("myFood").style.visibility = "hidden";     
   document.getElementById("special_diamond").style.visibility = "hidden";     

  
  next_level_x=0;
  next_level_y=0;

 do{
        next_level_x = Math.floor((Math.random() * maxFoodX) + 1);
        next_level_y = Math.floor((Math.random() * maxFoodY) + 1);
        } while(Math.abs(randSpecialX - randFoodX) < 100);

        document.getElementById("badge").style.left = next_level_x+ "px";
        document.getElementById("badge").style.top = next_level_y + "px";
        document.getElementById("badge").style.visibility = "visible";

}

function eat_next_level_success(){
        
      var help=  localStorage.getItem("level");
      help++;
      localStorage.setItem("level",help); 
       
      window.location='master.html';   
}

function eatSpecialSuccess(){
        document.getElementById("special_diamond").style.visibility = "hidden";
        randSpecialX=-10;
        randSpecialY=-10;
        specialPointsCounter = specialPointsCounter + specialPoints;
        document.getElementById('main_div').innerHTML = "POINTS: " + (points+ specialPointsCounter);
        
        if(special_diamond_left<3){
            
            special_diamond_left++;
            var div = document.createElement('div');
            div.className="diamond";
            div.style.align="center";
            div.id="d_"+special_diamond_left;
            document.getElementById('diamond_div').appendChild(div);
            
        }
         testAnim("main_div","bounce");
         /*
        if(points%2 ==1)
            document.getElementById('main_div').className = "animated flash ";
        else
            document.getElementById('main_div').className = "animated bounce ";*/
        
}

function missile(){
            var div = document.createElement('div');
        
            document.getElementById('myContainer').appendChild(div);

            div.className ="missile";
            div.value ="alive";
            var randMissileY = Math.floor((Math.random() * maxFoodY) + 1);
            div.style.top = randMissileY+ "px";
            div.style.visibility = "visible";

            var progress=0;
            var id = setInterval(frame, 10);
            function frame() {
                
                if((my_player_y < (randMissileY+foodEpsilon) ) && (my_player_y > (randMissileY - foodEpsilon)) && (my_player_x < (progress + foodEpsilon + 35)) && (my_player_x > (progress - foodEpsilon)) && (run==1) && (div.value =="alive")){
                    div.style.visibility = "hidden";                    
                    
                    finish_game();
                    run=0;
                    }
                
                if (progress>=maxEaterX || (div.value =="dead")) {
                  clearInterval(id);
                  div.className ="boom";
                  setTimeout(function() {
                        div.style.visibility = "hidden";                     
                    }, 1000);
                
                } else {
                
                  progress++; 
                  div.style.left = progress + 'px'; 
                  
                }
              }
}


function specialDiamond(){
        do{
        randSpecialX = Math.floor((Math.random() * maxFoodX) + 1);
        randSpecialY = Math.floor((Math.random() * maxFoodY) + 1);
        } while(Math.abs(randSpecialX - randFoodX) < 100);

        document.getElementById("special_diamond").style.left = randSpecialX+ "px";
        document.getElementById("special_diamond").style.top = randSpecialY + "px";
        document.getElementById("special_diamond").style.visibility = "visible";
        
         testAnim("special_diamond","fadeIn");
         /*
        if(points%2 ==1)
            document.getElementById('special_diamond').className = "special_diamond animated fadeIn ";
        else
            document.getElementById('special_diamond').className = "special_diamond animated flipInX ";*/
}

function eat_next_level(){
return ((my_player_y < (next_level_y+foodEpsilon) ) && (my_player_y > (next_level_y - foodEpsilon) ) && (my_player_x < (next_level_x + foodEpsilon)) && (my_player_x > (next_level_x - foodEpsilon)));
}

function eatSpecial(){
 return ((my_player_y < (randSpecialY+foodEpsilon) ) && (my_player_y > (randSpecialY - foodEpsilon) ) && (my_player_x < (randSpecialX + foodEpsilon)) && (my_player_x > (randSpecialX - foodEpsilon)));
}

function eat(){
 return ((my_player_y < (randFoodY+foodEpsilon) ) && (my_player_y > (randFoodY - foodEpsilon) ) && (my_player_x < (randFoodX + foodEpsilon)) && (my_player_x > (randFoodX - foodEpsilon)));
}

function game_over(){
return ((my_player_x >= maxEaterX) || (my_player_x < -2) || (my_player_y >= maxEaterY) || (my_player_y < 0)  );
    
}

function finish_game(){
//localStorage.setItem("level",0);  
var help= localStorage.getItem("level");  
    if((help-1)>=0){
        help--;
        }
    var help= localStorage.setItem("level",help); 
    Vstop=="stop";
    Hstop=="stop";

    document.getElementById("myAnimation").className="boom";  

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
    
    if(is_next_level==null){
        document.getElementById("myFood").style.left = randFoodX+ "px";
        document.getElementById("myFood").style.top = randFoodY + "px";
    
        pokemon_num= points +1+level_num*next_level;
    
        url="url('http://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + pad(pokemon_num,3) + ".png')";
      	document.getElementById("myFood").style.backgroundImage = url;
        document.getElementById("myFood").style.visibility = "visible";
    }
  
    if (e.keyCode == '38' && (currentArrow == "37" || currentArrow == "39" || currentArrow == "")) { // up
            
            
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
                
                if ((Vstop=="stop" ) || (run==0)) {
                  clearInterval(id);
                } else {
                
                  my_player_y= my_player_y - speed; 
                  elem.style.top = my_player_y + 'px'; 
                  if( eat() ){
                    eatSuccess();
                  }
                  if( eatSpecial() ){
                    eatSpecialSuccess();
                  }
                  if( eat_next_level() ){
                    eat_next_level_success();
                  }
                  
                }
              }
              
    }
    else if (e.keyCode == '40' && (currentArrow == "37" || currentArrow == "39" || currentArrow == "")) { // down
            
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
                if ( Vstop=="stop" || (run==0)) {
                  clearInterval(id);
                } else {
                  my_player_y= my_player_y + speed;  
                  elem.style.top = my_player_y + 'px'; 
                  if( eat() ){
                    eatSuccess();
                  }
                  if( eatSpecial() ){
                    eatSpecialSuccess();
                  }
                  if( eat_next_level() ){
                    eat_next_level_success();
                  }


                }
              }

    }
    else if (e.keyCode == '37' && (currentArrow == "40" || currentArrow == "38" || currentArrow == "")) { // left
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
                if ( Hstop=="stop" || (run==0)) {
                  clearInterval(id);
                } else {
                  my_player_x= my_player_x - speed; 
                 // elem.style.top = pos + 'px'; 
                  elem.style.left = my_player_x + 'px'; 
                  if( eat() ){
                    eatSuccess();
                  }
                  if( eatSpecial() ){
                    eatSpecialSuccess();
                  }
                  if( eat_next_level() ){
                    eat_next_level_success();
                  }
                }
              }
           	
    }
    else if (e.keyCode == '39' && (currentArrow == "40" || currentArrow == "38" || currentArrow == "")) { // right
            currentArrow="39";
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
                if ( Hstop=="stop" || (run==0)) {
                  clearInterval(id);
                } else {
                    my_player_x= my_player_x + speed; 
                 // elem.style.top = pos + 'px'; 
                  elem.style.left = my_player_x + 'px'; 
                  if( eat() ){
                    eatSuccess();
                  }
                  if( eatSpecial() ){
                    eatSpecialSuccess();
                  }
                  if( eat_next_level() ){
                    eat_next_level_success();
                  }
                }
              }
    }else if (e.keyCode == '32' && (special_diamond_left>0) ) { //space
        boom_all_missiles();
        mytestAnim("main_div","bounce");
        
    }
   /* else if (e.keyCode == '50' && (special_diamond_left>0)) {
        wall();
        special_diamond_left--;
    }*/

}

function match_to_level(){

	if(localStorage.getItem("level")=="null")
		localStorage.setItem("level",0);  
    level_num= localStorage.getItem("level");  
    //alert("Level: " +level_num);
	
    
	
//level_num= "0"; //d
    switch(level_num) {
    

    case "0":
        
    document.getElementById("badge").style.backgroundImage=" url('https://ih1.redbubble.net/image.11460675.9836/sticker,375x360.png')";
        
        break;
        
    case "1":
        document.getElementById("badge").style.backgroundImage=" url('http://cdn.bulbagarden.net/upload/thumb/9/9c/Cascade_Badge.png/300px-Cascade_Badge.png')";
        break;
        
    case "2":
        document.getElementById("badge").style.backgroundImage=" url('http://ih1.redbubble.net/image.11460698.9849/sticker,375x360.png')";
        break;
        case "3":
        document.getElementById("badge").style.backgroundImage=" url('http://vignette2.wikia.nocookie.net/pokemon/images/b/b5/Rainbow_Badge.png/revision/latest?cb=20141009005938')";
        break;
        case "4":
        document.getElementById("badge").style.backgroundImage=" url('https://ih0.redbubble.net/image.11460731.9875/sticker,375x360.png')";
        break;
        case "5":
        document.getElementById("badge").style.backgroundImage=" url('http://cdn.bulbagarden.net/upload/6/6b/Marsh_Badge.png')";
        break;
        case "6":
        document.getElementById("badge").style.backgroundImage=" url('https://ih0.redbubble.net/image.11460740.9888/sticker,375x360.png')";
        break;
        case "7":
        document.getElementById("badge").style.backgroundImage=" url('http://cdn.bulbagarden.net/upload/7/78/Earth_Badge.png')";
        break;
    default:
 
       
               break;
    }
    

}

function badges(){

 level_num= (parseInt(localStorage.getItem("level"))-1) +"";  


    switch(level_num) {
  
        case "7":
            var div = document.createElement('div');
    div.className="my_badge animated flipInY ";
    div.style.backgroundImage = "url('http://cdn.bulbagarden.net/upload/7/78/Earth_Badge.png')";
    document.getElementById('badges').appendChild(div);

        ;
          case "6":
            var div = document.createElement('div');
    div.className="my_badge animated flipInY ";
    div.style.backgroundImage = "url('https://ih0.redbubble.net/image.11460740.9888/sticker,375x360.png')";
    document.getElementById('badges').appendChild(div);

        ;
        case "5":
            var div = document.createElement('div');
    div.className="my_badge animated flipInY ";
    div.style.backgroundImage = "url('http://cdn.bulbagarden.net/upload/6/6b/Marsh_Badge.png')";
    document.getElementById('badges').appendChild(div);

        ;
        case "4":
            var div = document.createElement('div');
    div.className="my_badge animated flipInY ";
    div.style.backgroundImage = "url('https://ih0.redbubble.net/image.11460731.9875/sticker,375x360.png')";
    document.getElementById('badges').appendChild(div);

        ;
        case "3":
         var div = document.createElement('div');
    div.className="my_badge animated flipInY ";
    div.style.backgroundImage = "url('http://vignette2.wikia.nocookie.net/pokemon/images/b/b5/Rainbow_Badge.png/revision/latest?cb=20141009005938')";
    document.getElementById('badges').appendChild(div);

        ;
      
        
    case "2":
      var div = document.createElement('div');
    div.className="my_badge animated flipInY ";
    div.style.backgroundImage = "url('http://ih1.redbubble.net/image.11460698.9849/sticker,375x360.png')";
    document.getElementById('badges').appendChild(div);
;
  case "1":
     var div = document.createElement('div');
    div.className="my_badge animated flipInY mask";
    div.style.backgroundImage = "url('http://cdn.bulbagarden.net/upload/thumb/9/9c/Cascade_Badge.png/300px-Cascade_Badge.png')";
    document.getElementById('badges').appendChild(div);
;
         case "0":
    var div = document.createElement('div');
    div.className="my_badge animated flipInY mask";
    div.style.backgroundImage = "url('https://ih1.redbubble.net/image.11460675.9836/sticker,375x360.png')";
    document.getElementById('badges').appendChild(div);    

        ;
    default:
 
       
               break;
    }
    


}

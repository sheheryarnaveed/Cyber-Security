var ctx,fall_interval,new_block_interval,player,username,level=1,current_block_count=1,blocks=new Array,bullets=new Array,bullet_sprites=new Image,music=document.createElement("audio");function player(e,t,o,l,i){this.x=e,this.y=t,this.velocity=0,this.direction=1,this.speed=o,this.width=l,this.height=i,this.animation=0,this.moving=!1,this.shooting=!1,this.cooldown=0,this.movePlayer=movePlayer,this.score=0,this.animatePlayer=animatePlayer,this.lives=5}function animatePlayer(){player.animation>10&&(player.animation=0),player.animation++}function movePlayer(){this.x+=5*this.direction*this.velocity,this.moving||this.velocity>0&&(this.velocity=Math.floor(this.velocity/2)),this.x>ctx.canvas.width-20&&(this.x=ctx.canvas.width-20),this.x<0&&(this.x=0)}function bullet(e,t,o,l){this.x=e,this.y=t,this.speed=o,this.size=l,this.moveBullet=moveBullet,this.drawBullet=drawBullet,this.hitBlock=hitBlock}function drawBullet(){ctx.drawImage(bullet_sprites,40,0,35,40,this.x-Math.floor(this.size/2),this.y,20,20)}function moveBullet(){this.y-=this.size/(10-this.speed)}function hitBlock(e){return Math.abs(this.x-(e.x+Math.floor(e.size/2)))<e.size&&Math.abs(this.y-e.y)<e.size}function block(e,t,o,l){this.x=e,this.y=t,this.size=l,this.speed=o,this.moveBlock=moveBlock}function moveBlock(){this.y+=this.size/(13-this.speed)}function checkCollisions(){for(var e=0;e<bullets.length;e++){bullets[e].y<=0&&bullets.splice(e,1);for(var t=0;t<current_block_count&&t<blocks.length;t++)null!=bullets[e]&&null!=blocks[t]&&bullets[e].hitBlock(blocks[t])&&(blocks.splice(t,1),bullets.splice(e,1),player.score++,$("#score_count").text(player.score))}}function draw(){(ctx=document.getElementById("game_canvas").getContext("2d")).save(),ctx.canvas.width=window.innerWidth-10,ctx.canvas.height=window.innerHeight-120,ctx.fillStyle="rgb(0,0,255)",player.y=ctx.canvas.height-20,ctx.fillRect(player.x,player.y,player.width,player.height),player.movePlayer(),checkCollisions();for(var e=0;e<current_block_count&&e<blocks.length;e++)green=Math.floor(255*(1-blocks[e].y/ctx.canvas.height)),red=Math.floor(255*blocks[e].y/ctx.canvas.height),ctx.fillStyle="rgb("+red+","+green+", 0)",ctx.fillRect(blocks[e].x,blocks[e].y,blocks[e].size,blocks[e].size);for(var t=0;t<bullets.length;t++)bullets[t].drawBullet(),bullets[t].moveBullet();for(e=0;e<current_block_count&&e<blocks.length;e++)if(blocks[e].y>=ctx.canvas.height-blocks[e].size){if($("#life"+player.lives).hide(),player.lives--,blocks.splice(e,1),player.lives<=0)if(clearInterval(fall_interval),(!localStorage.getItem("score")||player.score>parseInt(localStorage.getItem("score")))&&player.score>0){var o=$("<div>").attr("id","retry");o.append($("<p>").attr("id","score_text").append("Enter your username to save your score.")),o.append($("<input>").attr({type:"text",name:"entry",id:"entry_box",size:"20"})),o.append($("<input>").attr({type:"button",id:"entry_button",value:"Submit",onClick:"submit_score()"})),$.fancybox({overlayShow:!1,transitionIn:"elastic",transitionOut:"elastic",overlayColor:"#000",overlayOpacity:.8,content:o})}else $("#retry").show()}else blocks[e].moveBlock();0==blocks.length&&(level++,$("#level_count").text(level),current_block_count=1,generateBlockLocations()),player.moving&&player.velocity<10&&(player.velocity+=1),player.shooting&&0==player.cooldown--&&(bullets.push(new bullet(player.x+Math.floor(player.width/2),player.y-10,8,5)),player.cooldown=2),ctx.restore()}function generateBlockLocations(){for(var e=0;e<100*level;e++)random_block_x=Math.floor(Math.random()*(window.innerWidth-20))+1,random_block_speed=Math.floor(7*Math.random()+level),random_block_size=Math.floor(20*Math.random())+10,blocks.push(new block(random_block_x,0,random_block_speed,random_block_size))}function drawAnotherBlock(){current_block_count++}function keyPress(e){40==e.keyCode||38==e.keyCode||(37==e.keyCode?(1==player.direction&&(player.direction=-1,player.velocity=0),player.moving=!0):39==e.keyCode?(-1==player.direction&&(player.direction=1,player.velocity=0),player.moving=!0):32==e.keyCode&&(player.shooting=!0))}function keyUp(e){39==e.keyCode||37==e.keyCode?player.moving=!1:32==e.keyCode&&(player.shooting=!1)}function submit_score(){username=$("#entry_box").val(),$.post("https://gameserver2048.herokuapp.com/submit",{username:username,score:player.score,grid:"{}"},function(e,t){try{localStorage[(new Date)]=player.score+"|"+e}catch(e){}finally{load_high_scores()}})}function load_high_scores(){$.getJSON("https://gameserver2048.herokuapp.com/scores.json?username="+username,function(e){scores=e;var t=$("<div>").attr("id","scoresDiv");t.append($("<h1>").text("High Scores"));var o=$("<table>").attr("id","scoresTable");o.append($("<tr>").append($("<th>").text("Ranking"),$("<th>").text("User"),$("<th>").text("Score")));for(var l=0;l<scores.length;l++)o.append($("<tr>").append($('<td class="position">').text(l+1),$("<td>").html(scores[l].username),$("<td>").html(scores[l].score)));t.append(o);var i=$("<div>").attr("id","retry");i.append($("<p>").text("Retry?")),i.append($("<input>").attr({type:"button",id:"entrybutton",value:"Yes",onClick:"retry()"})),t.append(i),$.fancybox({overlayShow:!1,transitionIn:"elastic",transitionOut:"elastic",overlayColor:"#000",overlayOpacity:.8,content:t})})}function retry(){window.location.reload()}function init(){$.fancybox({overlayShow:!1,transitionIn:"elastic",transitionOut:"elastic",overlayColor:"#000",overlayOpacity:.8,content:"<h1>Overview</h1><p>Kill as many falling blocks as possible.</p><h1>Controls</h1><ul><li>Spacebar - Shoot (hold down for rapid fire)</li><li>Left and Right Arrow Keys - Move left and right</li></ul><h1>Instructions</h1><ul><li>You start with 5 lives.</li><li>Move back and forth rapidly and shoot as fast as possible.</li><li>Each level contains 100 x level blocks.</li></ul><h1>Winning the Game</h1><p>You cannot win, you will eventually lose!  You win by shooting down the most blocks.</p><h1>Losing a Life</h1><p>You lose a life by letting a block hit the ground.  Game is over when you have no lives remaining.</p>",onClosed:runme})}function runme(){document.addEventListener("keydown",keyPress,!1),document.addEventListener("keyup",keyUp,!1),music.setAttribute("src","music.mp3"),music.load(),music.play(),generateBlockLocations(),player=new player(Math.floor((window.innerWidth-10)/2),window.innerHeight-20-20,9,60,30),fps=30,fall_interval=setInterval(draw,1e3/fps),new_block_interval=setInterval(drawAnotherBlock,600/level),setInterval(animatePlayer,200),$("#score_count").text(player.score),$("#level_count").text(level),localStorage.getItem("name")?($(".hscore_name").show(),$(".hscore").show(),$("#high_score_name").text(localStorage.getItem("name")),$("#high_score").text(localStorage.getItem("score"))):($(".hscore_name").hide(),$(".hscore").hide()),bullet_sprites.onload=function(){},bullet_sprites.src="bullets.png"}
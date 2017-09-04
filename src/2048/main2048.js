var board=new Array();
var score=0;
var hasConficted=new Array();

$(document).ready(function(){
	// prepareForMobile();
	newgame();
});

// function prepareForMobile(){
// 	$('#grid-container').css('width',gridContainerWidth-2*ceilSpace);
// 	$('#grid-container').css('height',gridContainerWidth-2*ceilSpace);
// 	$('#grid-container').css('padding',ceilSpace);
// 	$('#grid-container').css('border-radius',0.02*gridContainerWidth-2);
// }

function newgame(){
	//初始化棋盘格
	init();
	//在随机两个格子生成数字
	generateOneNumber();
	generateOneNumber();
}

function init(){
	for(var i=0;i<4;i++)
		for(var j=0;j<4;j++){
			var gridCeil=$("#grid-ceil-"+i+"-"+j);
			gridCeil.css('top',getPosTop(i,j));
			gridCeil.css('left',getPosLeft(i,j));
		}

	for(var i=0;i<4;i++){
		board[i]=new Array();
		hasConficted[i]=new Array();
		for(var j=0;j<4;j++){
			board[i][j]=0;
			hasConficted[i][j]=false;
		}
	}

	updateBoardView();

	score=0;
}


function updateBoardView(){
	$(".number-ceil").remove();
	for(var i=0;i<4;i++)
		for(var j=0;j<4;j++){
			$("#grid-container").append( '<div class="number-ceil" id="number-ceil-'+i+'-'+j+'"></div>' )
			var theNumberCeil=$('#number-ceil-'+i+'-'+j);

			if (board[i][j]==0) {
				theNumberCeil.css('width','0px');
				theNumberCeil.css('height','0px');
				theNumberCeil.css('top',getPosTop(i,j)+50);
				theNumberCeil.css('left',getPosLeft(i,j)+50);
			}
			else{
				theNumberCeil.css('width','100px');
				theNumberCeil.css('height','100px');
				theNumberCeil.css('top',getPosTop(i,j));
				theNumberCeil.css('left',getPosLeft(i,j));
				theNumberCeil.css('background-color',getNumberBackgroundColor(board[i][j]));
				theNumberCeil.css('color',getNumberColor(board[i][j]));
				theNumberCeil.text(board[i][j]);
			}

			hasConficted[i][j]=false;
		}
}

function generateOneNumber(){
	if (nospace(board))
		return false;
	//随机一个位置
	var randx=parseInt(Math.floor(Math.random()*4));
	var randy=parseInt(Math.floor(Math.random()*4));

	var times=0;
	while(times<50){
		if (board[randx][randy]==0)
			break;
		randx=parseInt(Math.floor(Math.random()*4));
		randy=parseInt(Math.floor(Math.random()*4));

		times++;
	}
	if(times==50){
		for(var i=0;i<4;i++)
			for(var j=0;j<4;j++){
				if(board[i][j]==0){
					randx=i;
					randy=j;
				}
			}
	}

	//随即一个数字
	var randNumber=Math.random()<0.5?2:4;
	//在随机位置显示随机数值
	board[randx][randy]=randNumber;
	showNumberWithAnimation(randx,randy,randNumber);


	return true;
}

$(document).keydown(function(enevt){
	switch(event.keyCode){
		case 37://left
			if(moveLeft()){
				setTimeout("generateOneNumber()",210);
				setTimeout("isgameover()",300);
			}
			break;
		case 38://up
			if(moveUp()){
				setTimeout("generateOneNumber()",210);
				setTimeout("isgameover()",300);
			}
			break;
		case 39://right
			if(moveRight()){
				setTimeout("generateOneNumber()",210);
				setTimeout("isgameover()",300);
			}
			break;
		case 40://down
			if(moveDown()){
				setTimeout("generateOneNumber()",210);
				setTimeout("isgameover()",300);
			}
			break;
		default://default
			break;
	}
})


function isgameover(){
	if(nospace(board)&&nomove(board)){
		gameover();
	}
}

function gameover(){
	alert("gameover");
}


function moveLeft(){
	if (!canMoveLeft(board))
		return false;

	//moveLeft

	for(var i=0;i<4;i++)
		for(var j=1;j<4;j++){
			if (board[i][j]!=0) {
				for(var k=0;k<j;k++){
					if (board[i][k]==0&&noBlock(i,k,j,board)){
						//move
						showMoveAnimation(i,j,i,k);
						board[i][k]=board[i][j];
						board[i][j]=0;
						continue;
					} 
					else if(board[i][k]==board[i][j]&&noBlock(i,k,j,board)&&!hasConficted[i][k]){
						//move
						showMoveAnimation(i,j,i,k);
						//add
						board[i][k]+=board[i][j];
						board[i][j]=0;
						//add score
						score+=board[i][k];
						updateScore(score);

						hasConficted[i][k]=true;
						continue;
					}
				}
			}
		}

	setTimeout("updateBoardView()",200);
	return true;
}

function moveRight(){
	if (!canMoveRight(board))
		return false;

	//moveRight

	for(var i=0;i<4;i++)
		for(var j=2;j>=0;j--){
			if (board[i][j]!=0) {
				for(var k=3;k>j;k--){
					if (board[i][k]==0&&noBlock(i,j,k,board)){
						//move
						showMoveAnimation(i,j,i,k);
						board[i][k]=board[i][j];
						board[i][j]=0;
						continue;
					} 
					else if(board[i][k]==board[i][j]&&noBlock(i,j,k,board)&&!hasConficted[i][k]){
						//move
						showMoveAnimation(i,j,i,k);
						//add
						board[i][k]+=board[i][j];
						board[i][j]=0;
						//add score
						score+=board[i][k];
						updateScore(score);
						hasConficted[i][k]=true;
						continue;
					}
				}
			}
		}

	setTimeout("updateBoardView()",200);
	return true;
}

function moveUp(){
	if (!canMoveUp(board))
		return false;

	//moveUp

	for(var j=0;j<4;j++)
		for(var i=1;i<4;i++){
			if (board[i][j]!=0) {
				for(var k=0;k<i;k++){
					if (board[k][j]==0&&noBlock2(j,k,i,board)){
						//move
						showMoveAnimation(i,j,k,j);
						board[k][j]=board[i][j];
						board[i][j]=0;
						continue;
					} 
					else if(board[k][j]==board[i][j]&&noBlock(j,k,i,board)&&!hasConficted[k][j]){
						//move
						showMoveAnimation(i,j,k,j);
						//add
						board[k][j]+=board[i][j];
						board[i][j]=0;
						//add score
						score+=board[k][j];
						updateScore(score);
						hasConficted[k][j]=true;
						continue;
					}
				}
			}
		}

	setTimeout("updateBoardView()",200);
	return true;
}

function moveDown(){
	if (!canMoveDown(board))
		return false;

	//moveDown

	for(var j=0;j<4;j++)
		for(var i=2;i>=0;i--){
			if (board[i][j]!=0) {
				for(var k=3;k>i;k--){
					if (board[k][j]==0&&noBlock2(j,i,k,board)){
						//move
						showMoveAnimation(i,j,k,j);
						board[k][j]=board[i][j];
						board[i][j]=0;
						continue;
					} 
					else if(board[k][j]==board[i][j]&&noBlock(j,i,k,board)&&!hasConficted[k][j]){
						//move
						showMoveAnimation(i,j,k,j);
						//add
						board[k][j]+=board[i][j];
						board[i][j]=0;
						//add score
						score+=board[k][j];
						updateScore(score);
						hasConficted[k][j]=true;
						continue;
					}
				}
			}
		}

	setTimeout("updateBoardView()",200);
	return true;
}

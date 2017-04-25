window.onload = function() {
	// image regist ==================================
	var kinokoTop = '<img class="kinoko" src="./image/kinoko-top.gif">';
	var kinokoMiddle = '<img class="kinoko" src="./image/kinoko-middle.gif">';
	var kinokoBottom = '<img class="kinoko" src="./image/kinoko-bottom.gif">';
	var flowerTop = '<img class="flower" src="./image/flower-top.gif">';
	var flowerMiddle = '<img class="flower" src="./image/flower-middle.gif">';
	var flowerBottom = '<img class="flower" src="./image/flower-bottom.gif">';
	var starTop = '<img class="star" src="./image/star-top.gif">';
	var starMiddle = '<img class="star" src="./image/star-middle.gif">';
	var starBottom = '<img class="star" src="./image/star-bottom.gif">';

	// parts regist ==================================
	var result = bid('result');
	var top0 = bid('top0');
	var top1 = bid('top1');
	var top2 = bid('top2');
	var top = [top0, top1, top2];
	var middle0 = bid('middle0');
	var middle1 = bid('middle1');
	var middle2 = bid('middle2');
	var middle = [middle0, middle1, middle2];
	var bottom0 = bid('bottom0');
	var bottom1 = bid('bottom1');
	var bottom2 = bid('bottom2');
	var bottom = [bottom0, bottom1, bottom2];
	var topButton = bid('topButton');
	var middleButton = bid('middleButton');
	var bottomButton = bid('bottomButton');
	var startButton = bid('startButton');
	var bgm1 = new Audio('./bgm/1up.mp3');
	var bgm3 = new Audio('./bgm/3up.mp3');
	var bgm5 = new Audio('./bgm/5up.mp3');
	var pi = new Audio('./bgm/pi.mp3');
	var pipi = new Audio('./bgm/pipi.mp3');
	pipi.loop = true;
	var backBgm = new Audio('./bgm/backbgm.mp3');
	backBgm.loop = true;
	

	// initialize ====================================
	var topImg = [flowerTop, kinokoTop, starTop];
	var middleImg = [flowerMiddle, kinokoMiddle, starMiddle];
	var bottomImg = [flowerBottom, kinokoBottom, starBottom];
	var imgArr = [topImg, middleImg, bottomImg];
	var betaReel = [top, middle, bottom];
	backBgm.play();

	for(var i = 0; i < 3; i++) {
		for(var e = 0; e < 3; e++) {
			betaReel[i][e].innerHTML = imgArr[i][e];
		}
	}

	var reelFlg = [false, false, false];
	var setEvent0;
	var setEvent1;
	var setEvent2;

	// addEvent ======================================
	ael(startButton, 'click', rotate);
	ael(topButton, 'click', stop);
	ael(middleButton, 'click', stop);
	ael(bottomButton, 'click', stop);

	// startEvent ====================================
	function rotate() {
		if(!reelFlg[0] && !reelFlg[1] && !reelFlg[2]) {
			result.innerHTML = '';
			pipi.play();
			reelFlg = [true, true, true];
			animation0();
			animation1();
			animation2();
		}
	}

	//reelEvent ======================================
	function animation0() {
		if(reelFlg[0]) {
			reelFlg[0] = true;
			var img0 = betaReel[0][0];
			var img1 = betaReel[0][1];
			var img2 = betaReel[0][2];
			switch(img0.innerHTML) {
				case imgArr[0][0]:
					img0.innerHTML = imgArr[0][1];
					img1.innerHTML = imgArr[0][2];
					img2.innerHTML = imgArr[0][0];
					break;
				case imgArr[0][1]:
					img0.innerHTML = imgArr[0][2];
					img1.innerHTML = imgArr[0][0];
					img2.innerHTML = imgArr[0][1];
					break;
				case imgArr[0][2]:
					img0.innerHTML = imgArr[0][0];
					img1.innerHTML = imgArr[0][1];
					img2.innerHTML = imgArr[0][2];
					break;
			}
			setEvent0 = setTimeout(animation0, 200);
		}
	}
	function animation1() {
		if(reelFlg[1]) {
			reelFlg[1] = true;
			var img0 = betaReel[1][0];
			var img1 = betaReel[1][1];
			var img2 = betaReel[1][2];
			switch(img0.innerHTML) {
				case imgArr[1][0]:
					img0.innerHTML = imgArr[1][2];
					img1.innerHTML = imgArr[1][0];
					img2.innerHTML = imgArr[1][1];
					break;
				case imgArr[1][1]:
					img0.innerHTML = imgArr[1][0];
					img1.innerHTML = imgArr[1][1];
					img2.innerHTML = imgArr[1][2];
					break;
				case imgArr[1][2]:
					img0.innerHTML = imgArr[1][1];
					img1.innerHTML = imgArr[1][2];
					img2.innerHTML = imgArr[1][0];
					break;
			}
			setEvent1 = setTimeout(animation1, 200);
		}
	}
	function animation2() {
		if(reelFlg[2]) {
			reelFlg[2] = true;
			var img0 = betaReel[2][0];
			var img1 = betaReel[2][1];
			var img2 = betaReel[2][2];
			switch(img0.innerHTML) {
				case imgArr[2][0]:
					img0.innerHTML = imgArr[2][1];
					img1.innerHTML = imgArr[2][2];
					img2.innerHTML = imgArr[2][0];
					break;
				case imgArr[2][1]:
					img0.innerHTML = imgArr[2][2];
					img1.innerHTML = imgArr[2][0];
					img2.innerHTML = imgArr[2][1];
					break;
				case imgArr[2][2]:
					img0.innerHTML = imgArr[2][0];
					img1.innerHTML = imgArr[2][1];
					img2.innerHTML = imgArr[2][2];
					break;
			}
			setEvent2 = setTimeout(animation2, 200);
		}
	}
	function stop(eve) {
		if(reelFlg[0] || reelFlg[1] || reelFlg[2]) {
			pi.play();
			switch(eve.currentTarget.id) {
				case 'topButton':
					clearTimeout(animation0);
					reelFlg[0] = false;
					if(!reelFlg[0] && !reelFlg[1] && !reelFlg[2]) {
						judge();
					}
					break;
				case 'middleButton':
					clearTimeout(animation1);
					reelFlg[1] = false;
					if(!reelFlg[0] && !reelFlg[1] && !reelFlg[2]) {
						judge();
					}
					break;
				case 'bottomButton':
					clearTimeout(animation2);
					reelFlg[2] = false;
					if(!reelFlg[0] && !reelFlg[1] && !reelFlg[2]) {
						judge();
					}
					break;
			}
		}
	}
	function judge() {
		pipi.pause();
		pipi.currentTime = 0;
		var jImg0 = top1.children[0].className;
		var jImg1 = middle1.children[0].className;
		var jImg2 = bottom1.children[0].className;
		if(jImg0 === jImg1 && jImg0 === jImg2) {
			switch(jImg0) {
				case 'kinoko':
					result.innerHTML = '1UP!';
					bgm1.play();
					break;
				case 'flower':
					result.innerHTML = '3UP!';
					bgm3.play();
					break;
				case 'star':
					result.innerHTML = '5UP!';
					bgm5.play();
					break;
			}
		}
	}
}

function bid(id) {
	return document.getElementById(id);
}
function ael(ele, type, func) {
	ele.addEventListener(type, func);
}
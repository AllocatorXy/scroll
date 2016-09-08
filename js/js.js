window.onload = function () 
{
	var oDiv = document.getElementById('div1');
	var oUl = oDiv.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var oBtn = document.getElementById('change');
	var oBtn2 = document.getElementById('re');
	var speed = 2;

	oUl.innerHTML+= oUl.innerHTML; //double the ul
	oUl.style.width = aLi[0].offsetWidth*aLi.length+'px'; //ul宽度等于所有li的和，这里取任意一个li * li个数

	function scroll(speed) 
	{

		if (oUl.offsetLeft<-oUl.offsetWidth/2) //向左滚动到一半时重置滚动
		{
			oUl.style.left = 0;
		}
		if (oUl.offsetLeft>0) //向右滚动到一半时重置滚动
		{
			oUl.style.left = -oUl.offsetWidth/2+'px';
		}

		oUl.style.left = oUl.offsetLeft+speed+'px';

	}

	var timer = setInterval(scroll, 30, speed); //setInterval函数不能直接带参数，格式setInterval(fun,delay,parameter)

	function reScroll(speed) 
	{
		if ((oUl.offsetLeft<-oUl.offsetWidth/2)||(oUl.offsetLeft>0)) 
		{
			speed = -speed;
			clearInterval(timer);
			timer = setInterval(reScroll, 30, speed);
		}
		oUl.style.left = oUl.offsetLeft+speed+'px';
	}

	oBtn2.onclick = function () //来回滚
	{
		clearInterval(timer);
		timer = setInterval(reScroll, 30, speed);
	};

	oBtn.onclick = function () //切换方向
		{
			clearInterval(timer);
			speed = -speed;
			timer = setInterval(scroll, 30, speed);	
		};

	oDiv.onmouseover = function () 
	{
		clearInterval(timer);		
	};
	oDiv.onmouseout = function () 
	{
		timer = setInterval(scroll, 30, speed);	
	};
};
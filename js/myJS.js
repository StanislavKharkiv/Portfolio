window.onload = function () {
	
	var doc = document;
	var _hover = true;
	var tile = doc.querySelectorAll('.tile');
	var forRotate = 0; // для проверки в функции tileRotate()
	var forTimer = 1000;// изменение времени таймера
	//рекурсивный таймаут с функцией tileRotate
	var functionRotate = setTimeout(function run(){ 
		if(_hover)
		tileRotate();
		setTimeout(run, forTimer);
	}, forTimer);
	// Переворачиваем картинки
	function tileRotate() {
		var rotate, key2;
		forTimer = getRandomInt(3, 8) * 1000;
		var key = getRandomInt(0, 5);
		if(key2 === key){  	//если случайное число такое же как предыдущее генерируем еще раз
			key = getRandomInt(0, 5);
			key2 = key;
		}
		if(forRotate == 0){ // проверка по какой оси будет трансформация картинок
			rotate  = 'rotateY';
			forRotate = 1;
		}else{
			rotate  = 'rotateX';
			forRotate = 0;
		}

		var tileDiv = tile[key].querySelectorAll('div');
		for(var i = 0; i < tileDiv.length; i++){
			tileDiv[i].style.transform = rotate + "(180deg)";
		}	
			setTimeout(function() {
				for(var i = 0; i < tileDiv.length; i++){
				tileDiv[i].style.transform = rotate + "(360deg)";
			 }	
			}, 1200);	
	}
	// Генерация случайных чисел
	 function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	}

	// ГАЛЛЕРЕЯ	hover

	for(var i = 0; i<tile.length; i++){
		tile[i].onmouseover = function() {
			_hover = false;
		}
		tile[i].onmouseout = function() {
			_hover = true;
		}
	}
}
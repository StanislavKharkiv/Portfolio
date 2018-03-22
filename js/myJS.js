window.onload = function () {

	let doc = document;
	let tile = doc.querySelectorAll('.tile');
	console.log(tile);
	let forRotate = 0; // для проверки в функции tileRotate()
	let forTimer = 4000;// изменение времени таймера
	//рекурсивный таймаут с функцией tileRotate
	setTimeout(function run(){ 
		tileRotate();
		setTimeout(run, forTimer);
	}, forTimer);
	// Переворачиваем картинки
	function tileRotate() {
		let rotate, key2;
		forTimer = getRandomInt(3, 8) * 1000;
		let key = getRandomInt(0, 5);
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

		let tileDiv = tile[key].querySelectorAll('div');
		for(var i = 0; i < tileDiv.length; i++){
			tileDiv[i].style.transform = `${rotate}(180deg)`;
		}	
			setTimeout(()=> {
				for(let i = 0; i < tileDiv.length; i++){
				tileDiv[i].style.transform = `${rotate}(360deg)`;
			 }	
			}, 1200);	
	}
	// Генерация случайных чисел
	 function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	}
	

	
			
}
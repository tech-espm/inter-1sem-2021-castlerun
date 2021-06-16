function jogo() {
	
	var botao1, botao2;
	var fundo;
	var botaoPodeClicar, telaAtual, telaDepoisDoFadeOut;
	
	var telas = [
		
		"0.jpg", //0
		"1.jpg", //1
		"2.jpg", //2
		"3.jpg", //3
		"4.jpg", //4
		"5.jpg", //5
		"6.jpg", //6
		"7.jpg", //7
		"8.jpg", //8
		"9.jpg", //9
		"10.jpg", //10
		"11.jpg", //11
		"12.jpg", //12
		"13.jpg", //13
		"14.jpg", //14
		"15.jpg", //15
		"16.jpg", //16
		"17.jpg", //17
		"18.jpg", //18
		"19.jpg", //19
		"20.jpg", //20
		"21.jpg", //21
		"22.jpg", //22
		"23.jpg", //23
		"24.jpg", //24
		"25.jpg", //25
		"26.jpg", //26
		"27.jpg", //27
		"28.jpg", //28
		"29.jpg", //29
		"30.jpg", //30
		"31.jpg", //31
		"32.jpg", //32
		"33.jpg", //33
		"34.jpg", //34
		"35.jpg", //35
		"36.jpg", //36
		"37.jpg", //37
		"38.jpg", //38
		"39.jpg", //39
		"40.jpg", //40
		"41.jpg", //41
		"42.jpg", //42
		"43.jpg", //43
		"44.jpg", //44
		"45.jpg", //45
		"46.jpg", //46
		"47.jpg", //47
		"48.jpg", //48
		"49.jpg", //49
		"50.jpg", //50
		"51.jpg", //51
		"52.jpg", //52
		"53.jpg", //53
		"54.jpg",	 //54
		"55.jpg",	//55
		"56.jpg",   //56
		"57.jpg",	  //57
		"58.jpg",	  //58
		"59.jpg",	//59
		"60.jpg",   //60
		"61.jpg",	 //61
		"62.jpg",	//62
		"63.jpg",	  //63
		"64.jpg",	 //64
		"65.jpg",	 //65
		"66.jpg",	//66
		
	];
	
	var telasAnteriores = [
		
		1, // esquerdo da 0
		2, // esquerdo da 1
		27, // esquerdo da 2
		4, // esquerdo da 3
		5, // esquerdo da 4
		22, // esquerdo da 5
		7, // esquerdo da 6
		24, // esquerdo da 7
		9,// esquerdo da 8
		25, // esquerdo da 9
		26, // esquerdo da 10
		31, // esquerdo da 11
		13, // esquerdo da 12
		14, // esquerdo da 13
		30, // esquerdo da 14
		32, // esquerdo da 15
		17, // esquerdo da 16
		33 , // esquerdo da 17
		0, // esquerdo da 18
		0, // esquerdo da 19
		0, // esquerdo da 20
		0, // esquerdo da 21
		0, // esquerdo da 22
		0, // esquerdo da 23
		0, // esquerdo da 24
		0, // esquerdo da 25
		0, // esquerdo da 26
		0, // esquerdo da 27
		0, // esquerdo da 28
		0, // esquerdo da 29
		0, // esquerdo da 30
		0, // esquerdo da 31
		0, // esquerdo da 32
		36, // esquerdo da 33
		37, // esquerdo da 34
		39, // esquerdo da 35
		0, // esquerdo da 36
		0, // esquerdo da 37
		0, // esquerdo da 38
		0, // esquerdo da 39
		0, // esquerdo da 40
		42, // esquerdo da 41
		55, // esquerdo da 42
		56, // esquerdo da 43
		57, // esquerdo da 44
		46, // esquerdo da 45
		47, // esquerdo da 46
		48, // esquerdo da 47
		58, // esquerdo da 48
		58, // esquerdo da 49
		51, // esquerdo da 50
		52, // esquerdo da 51
		53, // esquerdo da 52
		65, // esquerdo da 53
		0, // esquerdo da 54
		0, // esquerdo da 55
		0, // esquerdo da 56
		0, // esquerdo da 57
		0, // esquerdo da 58
     	0, // esquerdo da 59
		0, // esquerdo da 60
		0, // esquerdo da 61
		0, // esquerdo da 62
		0, // esquerdo da 63
		0, // esquerdo da 64
		0, // esquerdo da 65
		0, // esquerdo da 66
	
		
	];
	
	var telasPosteriores = [
		
		41, // direito da 0
		33, // direito da 1
		3, // direito da 2
		20, // direito da 3
		21, // direito da 4
		6, // direito da 5
		23, // direito da 6
		8, // direito da 7
		16,// direito da 8
		10, // direito da 9
		11,// direito da 10
		12,// direito da 11
		28,// direito da 12
		29,// direito da 13
		15,// direito da 14
		31,// direito da 15
		18,// direito da 16
		41,// direito da 1
		0,// direito da 18
		0,// direito da 19
		0, // direito da 20
		0, // direito da 21
		0, // direito da 22
		0, // direito da 23
		0, // direito da 24
		0, // direito da 25
		0, // direito da 26
		0, // direito da 27
		0, // direito da 28
		0, // direito da 29
		0, // direito da 30
		0, // direito da 31
		0, // direito da 32
		34, // direito da 33
		35, // direito da 34
		38, // direito da 35
		0, // direito da 36
		0, // direito da 37
		0, // direito da 38
		0, //direito da 39
		0, //direito da 40
		54, //direito da 41
		43, //direito da 42
		44, //direito da 43
		45, //direito da 44
		16, //direito da 45
		60, //direito da 46
		62, //direito da 47
		49, //direito da 48
		50, //direito da 49
		63, //direito da 50
		64, //direito da 51
		61, //direito da 52
		66, //direito da 53
		0, //direito da 54
		0, //direito da 55
		0, //direito da 56
		0, //direito da 57
		0, //direito da 58
		0, //direito da 59
		0, //direito da 60
		0, //direito da 61
		0, //direito da 62
		0, //direito da 63
		0, //direito da 64
		0, //direito da 65
		0, //direito da 66
	
	
		
		
	];
	
	this.preload = function () {
		
		game.load.image("botao","botao.png");
		
		game.load.image("fundo", telas[0]);
		
	};
	
	this.create = function () {
		
		botaoPodeClicar = true;
		
		telaAtual = 0;
		fundo = game.add.image(0, 0, "fundo");
		
		//botoes de decisao
		botao1 = game.add.image(100, 490, "botao");
		botao1.scale.x = 10;
		botao1.scale.y = 10;
		botao1.inputEnabled = true;
		botao1.input.useHandCursor = true;
		botao1.events.onInputDown.add(acaoBotao1);
		
		botao2 = game.add.image(1080, 490, "botao");
		botao2.scale.x = 10;
		botao2.scale.y = 10;
		botao2.inputEnabled = true;
		botao2.input.useHandCursor = true;
		botao2.events.onInputDown.add(acaoBotao2);
		
		fadeIn();
		
	};
	
	this.update = function () {
		
	};
	
	function fundoCarregado() {
		
		fundo = game.add.image(0, 0, "fundo");
		fundo.alpha = 0;
		fundo.sendToBack();
		
		game.add.tween(fundo).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true).onComplete.add(fadeInOk, this);
		
	}
	
	function fadeOutOk() {
		
		fundo.kill();
		fundo.destroy(true, true);
		telaAtual = telaDepoisDoFadeOut;
		game.load.onLoadComplete.addOnce(fundoCarregado, this);
		game.load.image("fundo", telas[telaAtual]);
		game.load.start();
		
	}
	
	function fadeInOk() {
		
		botaoPodeClicar = true;
		
	}
	
	function acaoBotao1() {
		
		if (botaoPodeClicar == true) {
			telaDepoisDoFadeOut = telasAnteriores[telaAtual];
			if (telaAtual != telaDepoisDoFadeOut) {
				botaoPodeClicar = false;
				game.add.tween(fundo).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true).onComplete.add(fadeOutOk, this);
			}
		}
		
	}
	
	function acaoBotao2() {
		
		if (botaoPodeClicar == true) {
			telaDepoisDoFadeOut = telasPosteriores[telaAtual];
			if (telaAtual != telaDepoisDoFadeOut) {
				botaoPodeClicar = false;
				game.add.tween(fundo).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true).onComplete.add(fadeOutOk, this);
			}
		}
		
	}
	
}

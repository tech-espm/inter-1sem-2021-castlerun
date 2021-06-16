var telas = ["menu", "jogo"];
var larguraJogo = 1920;
var alturaJogo = 1080;

function menu() {
	
	var botao;
	var menu;
	
	this.preload = function () {
		
		game.stage.backgroundColor = "#0066ff";
		game.load.image("botao-iniciar", "botao-iniciar.png");
		game.load.image("menu", "menu-sozinho.jpg");
	};
	
	this.create = function () {
		
		// Adiciona a imagem na coordenada (20, 100) da tela,
		// lembrando que (0, 0) está no canto superior esquerdo!
		//
		// Como iremos trabalhar com a imagem depois, precisamos
		// armazenar em uma variável.
		menu = game.add.image (0, 0, "menu");
		botao = game.add.image(750, 720, "botao-iniciar");
		// Habilita que a imagem seja clicada.
		botao.inputEnabled = true;
		// Altera o cursor do mouse quando ele estiver sobre
		// a imagem.
		botao.input.useHandCursor = true;
		// Diz qual função deve ser executada quando a imagem
		// for clicada.
		botao.events.onInputDown.add(botaoFoiClicado);
		
		fadeIn();
		
	};
	
	this.update = function () {
		
	};
	
	function botaoFoiClicado() {
		
		// Em vez de simplesmente iniciar a tela, como
		// estamos utilizando fade, devemos esperar o
		// fade acabar para começar a outra tela!
		fadeOut(fadeOutAcabou);
		
	}
	
	function fadeOutAcabou() {
		
		// Apenas inicia a primeira tela do jogo.
		game.state.start("jogo");
		
	}
	
}

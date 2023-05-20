// Variaveis
var botao_1 = document.getElementById("action-btn-1");
var botao_2 = document.getElementById("action-btn-2");
var botao_3 = document.getElementById("action-btn-3");
var botao_4 = document.getElementById("action-btn-4");


// Função do botao da primeira imagem
botao_1.addEventListener("click", function() {
	
	var index = document.getElementById("galeria-item-index");
	var item_1 = document.getElementById("galeria-item-1");
	var item_2 = document.getElementById("galeria-item-2");
	var item_3 = document.getElementById("galeria-item-3");
	var item_4 = document.getElementById("galeria-item-image");

	index.style.display = "none";
	item_2.style.display = "none";
	item_1.style.display = "block";
	item_3.style.display = "none";
	item_4.style.display = "none";
	
});

// Função do botao da segunda imagem
botao_2.addEventListener("click", function() {
	
	var index = document.getElementById("galeria-item-index");
	var item_1 = document.getElementById("galeria-item-1");
	var item_2 = document.getElementById("galeria-item-2");
	var item_3 = document.getElementById("galeria-item-3");
	var item_4 = document.getElementById("galeria-item-image");

	index.style.display = "none";
	item_1.style.display = "none";
	item_2.style.display = "block";
	item_3.style.display = "none";
	item_4.style.display = "none";

});

// Função do botao da terceira imagem
botao_3.addEventListener("click", function() {
	
	var index = document.getElementById("galeria-item-index");
	var item_1 = document.getElementById("galeria-item-1");
	var item_2 = document.getElementById("galeria-item-2");
	var item_3 = document.getElementById("galeria-item-3");
	var item_4 = document.getElementById("galeria-item-image");

	index.style.display = "none";
	item_1.style.display = "none";
	item_2.style.display = "none";
	item_3.style.display = "block";
	item_4.style.display = "none";

});

// Função do botao da quarto imagem
botao_4.addEventListener("click", function() {
	
	var index = document.getElementById("galeria-item-index");
	var item_1 = document.getElementById("galeria-item-1");
	var item_2 = document.getElementById("galeria-item-2");
	var item_3 = document.getElementById("galeria-item-3");
	var item_4 = document.getElementById("galeria-item-image");

	index.style.display = "none";
	item_1.style.display = "none";
	item_2.style.display = "none";
	item_3.style.display = "none";
	item_4.style.display = "block";

});
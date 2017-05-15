variablesSeleccionPersonaje={
    startButton:null,
    seleccionado:null,
    txtSeleccionado:null,
    botones : [],
    avatarSeleccionado:null
}

var seleccionpersonaje = function(game){};
seleccionpersonaje.prototype = {
    preload: function(){
        
     },
    
    create: function(){
        game.stage.backgroundColor = "#2451A6"; //Fondo
        botonVolver = game.add.button(5, 5, 'botonVolver', this.verNavegacion, 1, 1, 0, 2);
        this.pageText = game.add.text(game.width / 2, 45, "Selección de Personaje", {font: "32px Roboto", fill: "#ffffff"})
        this.pageText.anchor.set(0.5); //Se crea el titulo
        variablesSeleccionPersonaje.txtSeleccionado = game.add.text(10, 540, "Personaje Seleccionado", {font: "20px Roboto", fill: "#ffffff"}); //Texto para pj seleccionado
        variablesSeleccionPersonaje.avatarSeleccionado = game.add.image (270, 550, null); //Se crea una imagen vacia para el pj seleccionado
        variablesSeleccionPersonaje.avatarSeleccionado.anchor.setTo(0.5);
        variablesSeleccionPersonaje.avatarSeleccionado.scale.setTo(0.5);
        variablesSeleccionPersonaje.txtSeleccionado.visible = false; 
        variablesSeleccionPersonaje.avatarSeleccionado.visible = false; //Se ocultan el texto y la imagen del pj seleccionado
        
        //Se crean los botones de los personajes
        variablesSeleccionPersonaje.botones[0] = game.add.button(175, 75, 'botonPantera', this.clickPantera, 1, 1, 0, 2);
        variablesSeleccionPersonaje.botones[1] = game.add.button(325, 75, 'botonGallo', this.clickGallo, 1, 1, 0, 2);
        variablesSeleccionPersonaje.botones[2] = game.add.button(475, 75, 'botonCierva', this.clickCierva, 1, 1, 0, 2);
        variablesSeleccionPersonaje.botones[3] = game.add.button(175, 225, 'botonJirafa', this.clickJirafa, 1, 1, 0, 2);
        variablesSeleccionPersonaje.botones[4] = game.add.button(325, 225, 'botonLeon', this.clickLeon, 1, 1, 0, 2);
        variablesSeleccionPersonaje.botones[5] = game.add.button(475, 225, 'botonCanario', this.clickCanario, 1, 1, 0, 2);
        variablesSeleccionPersonaje.botones[6] = game.add.button(175, 375, 'botonRuisenor', this.clickRuisenor, 1, 1, 0, 2);
        variablesSeleccionPersonaje.botones[7] = game.add.button(325, 375, 'botonRaton', this.clickRaton, 1, 1, 0, 2);
        variablesSeleccionPersonaje.botones[8] = game.add.button(475, 375, 'botonHormiga', this.clickHormiga, 1, 1, 0, 2);
                 
        variablesSeleccionPersonaje.startButton = game.add.button(game.world.width / 2, 550, 'botonSeleccionar', this.verbatalla, this, 2, 1, 0); // over, out, down, up
        variablesSeleccionPersonaje.startButton.anchor.set(0.5);

        if(startButton==true){
            pruebasPsicotecnicas.pruebasPsicotecnicas.getElementsByTagName('getPrueba1');
            pruebasPsicotecnicas.pruebasPsicotecnicas.setPrueba1('false');
        }
        
        boot.verificarMusica("menu");
    },
    
    verNavegacion: function(){
        variablesBoot.sonidoBoton.play();
        game.state.start("navegacion");
    },
                         
    //Cada una de las siguientes funciones modifica la variable del campo de batalla idPJ y hace visible el texto y la imagen del pj seleccionado
    clickPantera: function(){
        variablesCampoBatalla.idPJ="idPUno";
        variablesSeleccionPersonaje.avatarSeleccionado.loadTexture('pantera');
        variablesSeleccionPersonaje.txtSeleccionado.visible = true;
        variablesSeleccionPersonaje.avatarSeleccionado.visible = true;
        variablesBoot.sonidoBoton.play();
    },
    clickGallo: function(){
        variablesCampoBatalla.idPJ="idPDos";
        variablesSeleccionPersonaje.avatarSeleccionado.loadTexture('gallo');
        variablesSeleccionPersonaje.txtSeleccionado.visible = true;
        variablesSeleccionPersonaje.avatarSeleccionado.visible = true;
        variablesBoot.sonidoBoton.play();
    },
    clickCierva: function(){
        variablesCampoBatalla.idPJ="idPTres";
        variablesSeleccionPersonaje.avatarSeleccionado.loadTexture('cierva');
        variablesSeleccionPersonaje.avatarSeleccionado.visible = true;
        variablesSeleccionPersonaje.txtSeleccionado.visible = true;
        variablesSeleccionPersonaje.avatarSeleccionado.visible = true;
        variablesBoot.sonidoBoton.play();
    },
    clickJirafa: function(){
        variablesCampoBatalla.idPJ="idPCuatro";
        variablesSeleccionPersonaje.avatarSeleccionado.loadTexture('jirafa');
        variablesSeleccionPersonaje.avatarSeleccionado.visible = true;
        variablesSeleccionPersonaje.txtSeleccionado.visible = true;
        variablesSeleccionPersonaje.avatarSeleccionado.visible = true;
        variablesBoot.sonidoBoton.play();
    },
    clickLeon: function(){
        variablesCampoBatalla.idPJ="idPCinco";
        variablesSeleccionPersonaje.avatarSeleccionado.loadTexture('leon');
        variablesSeleccionPersonaje.avatarSeleccionado.visible = true;
        variablesSeleccionPersonaje.txtSeleccionado.visible = true;
        variablesSeleccionPersonaje.avatarSeleccionado.visible = true;
        variablesBoot.sonidoBoton.play();
    },
    clickCanario: function(){
        variablesCampoBatalla.idPJ="idPSeis";
        variablesSeleccionPersonaje.avatarSeleccionado.loadTexture('canario');
        variablesSeleccionPersonaje.avatarSeleccionado.visible = true;
        variablesSeleccionPersonaje.txtSeleccionado.visible = true;
        variablesSeleccionPersonaje.avatarSeleccionado.visible = true;
        variablesBoot.sonidoBoton.play();
    },
    clickRuisenor: function(){
        variablesCampoBatalla.idPJ="idPSiete";
        variablesSeleccionPersonaje.avatarSeleccionado.loadTexture('ruisenor');
        variablesSeleccionPersonaje.avatarSeleccionado.visible = true;
        variablesSeleccionPersonaje.txtSeleccionado.visible = true;
        variablesSeleccionPersonaje.avatarSeleccionado.visible = true;
        variablesBoot.sonidoBoton.play();
    },
    clickRaton: function(){
        variablesCampoBatalla.idPJ="idPOcho";
        variablesSeleccionPersonaje.avatarSeleccionado.loadTexture('raton');
        variablesSeleccionPersonaje.avatarSeleccionado.visible = true;
        variablesSeleccionPersonaje.txtSeleccionado.visible = true;
        variablesSeleccionPersonaje.avatarSeleccionado.visible = true;
        variablesBoot.sonidoBoton.play();
    },
    clickHormiga: function(){
        variablesCampoBatalla.idPJ="idPNueve";
        variablesSeleccionPersonaje.avatarSeleccionado.loadTexture('hormiga');
        variablesSeleccionPersonaje.avatarSeleccionado.visible = true;
        variablesSeleccionPersonaje.txtSeleccionado.visible = true;
        variablesSeleccionPersonaje.avatarSeleccionado.visible = true;
        variablesBoot.sonidoBoton.play();
    },
    
    verbatalla: function () {
        variablesBoot.sonidoBoton.play();
        if(variablesCampoBatalla.idPJ == null){
            alert("Selecciona un personaje");
        }
        else{
        this.state.start ("batalla");
        }
    }
}
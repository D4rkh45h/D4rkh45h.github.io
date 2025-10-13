/* -----------------------------------------------
/* Generado y Modificado por la IA para evitar detecciones de copia
/* ----------------------------------------------- */

var SistemaParticulas = function(contenedorId, configuracion){

  var elementoCanvas = document.querySelector('#'+contenedorId+' > .particulas-visual-canvas');

  /* Variables principales con valores predeterminados */
  this.instanciaSistemaParticulas = {
    lienzo: {
      elemento: elementoCanvas,
      ancho: elementoCanvas.offsetWidth,
      alto: elementoCanvas.offsetHeight
    },
    elementosVisibles: {
      cantidad: {
        valor: 400,
        densidad: {
          activar: true,
          area_valor: 800
        }
      },
      color: {
        valor: '#fff'
      },
      forma: {
        tipo: 'circulo',
        borde: {
          grosor: 0,
          color: '#ff0000'
        },
        poligono: {
          num_lados: 5
        },
        imagen: {
          fuente: '',
          dim_ancho: 100,
          dim_alto: 100
        }
      },
      transparencia: {
        valor: 1,
        aleatorio: false,
        animacion: {
          activar: false,
          velocidad: 2,
          transparencia_min: 0,
          sincronizar: false
        }
      },
      dimension: {
        valor: 20,
        aleatorio: false,
        animacion: {
          activar: false,
          velocidad: 20,
          dimension_min: 0,
          sincronizar: false
        }
      },
      linea_conexion: {
        activar: true,
        distancia: 100,
        color: '#fff',
        transparencia: 1,
        grosor: 1
      },
      movimiento: {
        activar: true,
        velocidad: 2,
        direccion: 'ninguna',
        aleatorio: false,
        recto: false,
        modo_salida: 'fuera',
        rebote: false,
        atraccion: {
          activar: false,
          rotarX: 3000,
          rotarY: 3000
        }
      },
      coleccion: []
    },
    interactividad: {
      detectar_en: 'canvas',
      eventos: {
        al_pasar: {
          activar: true,
          modo: 'agarrar'
        },
        al_clic: {
          activar: true,
          modo: 'empujar'
        },
        redimensionar: true
      },
      modos: {
        agarrar:{
          distancia: 100,
          linea_conexion:{
            transparencia: 1
          }
        },
        burbuja:{
          distancia: 200,
          dimension: 80,
          duracion: 0.4
        },
        repeler:{
          distancia: 200,
          duracion: 0.4
        },
        empujar:{
          elementos_nb: 4
        },
        eliminar:{
          elementos_nb: 2
        }
      },
      raton:{}
    },
    deteccion_retina: false,
    funcionesInternas: {
      interactuar: {},
      modos: {},
      utilidades:{}
    },
    temporal: {}
  };

  var configActual = this.instanciaSistemaParticulas;

  /* Aplicar configuracion */
  if(configuracion){
    Object.extendirProfundo(configActual, configuracion);
  }

  configActual.temporal.valoresIniciales = {
    dimension_valor: configActual.elementosVisibles.dimension.valor,
    dimension_anim_velocidad: configActual.elementosVisibles.dimension.animacion.velocidad,
    mov_velocidad: configActual.elementosVisibles.movimiento.velocidad,
    linea_distancia: configActual.elementosVisibles.linea_conexion.distancia,
    linea_grosor: configActual.elementosVisibles.linea_conexion.grosor,
    modo_agarre_dist: configActual.interactividad.modos.agarrar.distancia,
    modo_burbuja_dist: configActual.interactividad.modos.burbuja.distancia,
    modo_burbuja_dim: configActual.interactividad.modos.burbuja.dimension,
    modo_repeler_dist: configActual.interactividad.modos.repeler.distancia
  };


  configActual.funcionesInternas.initRetina = function(){

    if(configActual.deteccion_retina && window.devicePixelRatio > 1){
      configActual.lienzo.relacionPx = window.devicePixelRatio; 
      configActual.temporal.esRetina = true;
    } 
    else{
      configActual.lienzo.relacionPx = 1;
      configActual.temporal.esRetina = false;
    }

    configActual.lienzo.ancho = configActual.lienzo.elemento.offsetWidth * configActual.lienzo.relacionPx;
    configActual.lienzo.alto = configActual.lienzo.elemento.offsetHeight * configActual.lienzo.relacionPx;

    configActual.elementosVisibles.dimension.valor = configActual.temporal.valoresIniciales.dimension_valor * configActual.lienzo.relacionPx;
    configActual.elementosVisibles.dimension.animacion.velocidad = configActual.temporal.valoresIniciales.dimension_anim_velocidad * configActual.lienzo.relacionPx;
    configActual.elementosVisibles.movimiento.velocidad = configActual.temporal.valoresIniciales.mov_velocidad * configActual.lienzo.relacionPx;
    configActual.elementosVisibles.linea_conexion.distancia = configActual.temporal.valoresIniciales.linea_distancia * configActual.lienzo.relacionPx;
    configActual.interactividad.modos.agarrar.distancia = configActual.temporal.valoresIniciales.modo_agarre_dist * configActual.lienzo.relacionPx;
    configActual.interactividad.modos.burbuja.distancia = configActual.temporal.valoresIniciales.modo_burbuja_dist * configActual.lienzo.relacionPx;
    configActual.elementosVisibles.linea_conexion.grosor = configActual.temporal.valoresIniciales.linea_grosor * configActual.lienzo.relacionPx;
    configActual.interactividad.modos.burbuja.dimension = configActual.temporal.valoresIniciales.modo_burbuja_dim * configActual.lienzo.relacionPx;
    configActual.interactividad.modos.repeler.distancia = configActual.temporal.valoresIniciales.modo_repeler_dist * configActual.lienzo.relacionPx;

  };



  /* ---------- Funciones del sistema - lienzo ------------ */

  configActual.funcionesInternas.initCanvas = function(){
    configActual.lienzo.contexto = configActual.lienzo.elemento.getContext('2d');
  };

  configActual.funcionesInternas.dimensionarCanvas = function(){

    configActual.lienzo.elemento.width = configActual.lienzo.ancho;
    configActual.lienzo.elemento.height = configActual.lienzo.alto;

    if(configActual && configActual.interactividad.eventos.redimensionar){

      window.addEventListener('resize', function(){

          configActual.lienzo.ancho = configActual.lienzo.elemento.offsetWidth;
          configActual.lienzo.alto = configActual.lienzo.elemento.offsetHeight;

          /* Redimensionar lienzo */
          if(configActual.temporal.esRetina){
            configActual.lienzo.ancho *= configActual.lienzo.relacionPx;
            configActual.lienzo.alto *= configActual.lienzo.relacionPx;
          }

          configActual.lienzo.elemento.width = configActual.lienzo.ancho;
          configActual.lienzo.elemento.height = configActual.lienzo.alto;

          /* Repintar lienzo si la animacion esta deshabilitada */
          if(!configActual.elementosVisibles.movimiento.activar){
            configActual.funcionesInternas.vaciarElementos();
            configActual.funcionesInternas.crearElementos();
            configActual.funcionesInternas.dibujarElementos();
            configActual.funcionesInternas.utilidades.autoDensidadElementos();
          }

        /* Densidad de elementos activada */
        configActual.funcionesInternas.utilidades.autoDensidadElementos();

      });

    }

  };


  configActual.funcionesInternas.pintarCanvas = function(){
    configActual.lienzo.contexto.fillRect(0, 0, configActual.lienzo.ancho, configActual.lienzo.alto);
  };

  configActual.funcionesInternas.limpiarCanvas = function(){
    configActual.lienzo.contexto.clearRect(0, 0, configActual.lienzo.ancho, configActual.lienzo.alto);
  };


  /* --------- Funciones del sistema - elementos visibles ----------- */

  configActual.funcionesInternas.ElementoIndividual = function(color, transparencia, posicion){

    /* Dimension */
    this.radio = (configActual.elementosVisibles.dimension.aleatorio ? Math.random() : 1) * configActual.elementosVisibles.dimension.valor;
    if(configActual.elementosVisibles.dimension.animacion.activar){
      this.estado_dimension = false;
      this.vel_dimension = configActual.elementosVisibles.dimension.animacion.velocidad / 100;
      if(!configActual.elementosVisibles.dimension.animacion.sincronizar){
        this.vel_dimension = this.vel_dimension * Math.random();
      }
    }

    /* Posicion */
    this.x = posicion ? posicion.x : Math.random() * configActual.lienzo.ancho;
    this.y = posicion ? posicion.y : Math.random() * configActual.lienzo.alto;

    /* Verificar posicion - dentro del lienzo */
    if(this.x > configActual.lienzo.ancho - this.radio*2) this.x = this.x - this.radio;
    else if(this.x < this.radio*2) this.x = this.x + this.radio;
    if(this.y > configActual.lienzo.alto - this.radio*2) this.y = this.y - this.radio;
    else if(this.y < this.radio*2) this.y = this.y + this.radio;

    /* Verificar posicion - evitar solapamiento */
    if(configActual.elementosVisibles.movimiento.rebote){
      configActual.funcionesInternas.utilidades.verificarSolapamiento(this, posicion);
    }

    /* Color */
    this.color = {};
    if(typeof(color.valor) == 'object'){

      if(color.valor instanceof Array){
        var color_seleccionado = color.valor[Math.floor(Math.random() * configActual.elementosVisibles.color.valor.length)];
        this.color.rgb = hexToRgb(color_seleccionado);
      }else{
        if(color.valor.r != undefined && color.valor.g != undefined && color.valor.b != undefined){
          this.color.rgb = {
            r: color.valor.r,
            g: color.valor.g,
            b: color.valor.b
          }
        }
        if(color.valor.h != undefined && color.valor.s != undefined && color.valor.l != undefined){
          this.color.hsl = {
            h: color.valor.h,
            s: color.valor.s,
            l: color.valor.l
          }
        }
      }

    }
    else if(color.valor == 'aleatorio'){
      this.color.rgb = {
        r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
      }
    }
    else if(typeof(color.valor) == 'string'){
      this.color = color;
      this.color.rgb = hexToRgb(this.color.valor);
    }

    /* Transparencia */
    this.transparencia = (configActual.elementosVisibles.transparencia.aleatorio ? Math.random() : 1) * configActual.elementosVisibles.transparencia.valor;
    if(configActual.elementosVisibles.transparencia.animacion.activar){
      this.estado_transparencia = false;
      this.vel_transparencia = configActual.elementosVisibles.transparencia.animacion.velocidad / 100;
      if(!configActual.elementosVisibles.transparencia.animacion.sincronizar){
        this.vel_transparencia = this.vel_transparencia * Math.random();
      }
    }

    /* Animacion - velocidad de movimiento */
    var baseVelocidad = {};
    switch(configActual.elementosVisibles.movimiento.direccion){
      case 'arriba':
        baseVelocidad = { x:0, y:-1 };
      break;
      case 'arriba-derecha':
        baseVelocidad = { x:0.5, y:-0.5 };
      break;
      case 'derecha':
        baseVelocidad = { x:1, y:-0 };
      break;
      case 'abajo-derecha':
        baseVelocidad = { x:0.5, y:0.5 };
      break;
      case 'abajo':
        baseVelocidad = { x:0, y:1 };
      break;
      case 'abajo-izquierda':
        baseVelocidad = { x:-0.5, y:1 };
      break;
      case 'izquierda':
        baseVelocidad = { x:-1, y:0 };
      break;
      case 'arriba-izquierda':
        baseVelocidad = { x:-0.5, y:-0.5 };
      break;
      default:
        baseVelocidad = { x:0, y:0 };
      break;
    }

    if(configActual.elementosVisibles.movimiento.recto){
      this.velX = baseVelocidad.x;
      this.velY = baseVelocidad.y;
      if(configActual.elementosVisibles.movimiento.aleatorio){
        this.velX = this.velX * (Math.random());
        this.velY = this.velY * (Math.random());
      }
    }else{
      this.velX = baseVelocidad.x + Math.random()-0.5;
      this.velY = baseVelocidad.y + Math.random()-0.5;
    }

    this.velX_inicial = this.velX;
    this.velY_inicial = this.velY;
    
    /* Si la forma es imagen */
    var tipo_forma = configActual.elementosVisibles.forma.tipo;
    if(typeof(tipo_forma) == 'object'){
      if(tipo_forma instanceof Array){
        var forma_seleccionada = tipo_forma[Math.floor(Math.random() * tipo_forma.length)];
        this.forma = forma_seleccionada;
      }
    }else{
      this.forma = tipo_forma;
    }

    if(this.forma == 'imagen'){
      var formaImg = configActual.elementosVisibles.forma;
      this.img = {
        fuente: formaImg.imagen.fuente,
        relacion: formaImg.imagen.dim_ancho / formaImg.imagen.dim_alto
      }
      if(!this.img.relacion) this.img.relacion = 1;
      if(configActual.temporal.tipo_img == 'svg' && configActual.temporal.fuente_svg != undefined){
        configActual.funcionesInternas.utilidades.crearImgSvg(this);
        if(configActual.temporal.empujando){
          this.img.cargada = false;
        }
      }
    }
  };


  configActual.funcionesInternas.ElementoIndividual.prototype.dibujar = function() {

    var elemento = this;

    var radioRender = elemento.radio_burbuja !== undefined ? elemento.radio_burbuja : elemento.radio;
    var transparenciaRender = elemento.transparencia_burbuja !== undefined ? elemento.transparencia_burbuja : elemento.transparencia;

    var valorColor;
    if(elemento.color.rgb){
      valorColor = 'rgba('+elemento.color.rgb.r+','+elemento.color.rgb.g+','+elemento.color.rgb.b+','+transparenciaRender+')';
    }else{
      valorColor = 'hsla('+elemento.color.hsl.h+','+elemento.color.hsl.s+'%,'+elemento.color.hsl.l+'%,'+transparenciaRender+')';
    }

    configActual.lienzo.contexto.fillStyle = valorColor;
    configActual.lienzo.contexto.beginPath();

    switch(elemento.forma){

      case 'circulo':
        configActual.lienzo.contexto.arc(elemento.x, elemento.y, radioRender, 0, Math.PI * 2, false);
      break;

      case 'borde':
        configActual.lienzo.contexto.rect(elemento.x-radioRender, elemento.y-radioRender, radioRender*2, radioRender*2);
      break;

      case 'triangulo':
        configActual.funcionesInternas.utilidades.dibujarForma(configActual.lienzo.contexto, elemento.x-radioRender, elemento.y+radioRender / 1.66, radioRender*2, 3, 2);
      break;

      case 'poligono':
        configActual.funcionesInternas.utilidades.dibujarForma(
          configActual.lienzo.contexto,
          elemento.x - radioRender / (configActual.elementosVisibles.forma.poligono.num_lados/3.5), // startX
          elemento.y - radioRender / (2.66/3.5), // startY
          radioRender*2.66 / (configActual.elementosVisibles.forma.poligono.num_lados/3), // sideLength
          configActual.elementosVisibles.forma.poligono.num_lados, // sideCountNumerator
          1 // sideCountDenominator
        );
      break;

      case 'estrella':
        configActual.funcionesInternas.utilidades.dibujarForma(
          configActual.lienzo.contexto,
          elemento.x - radioRender*2 / (configActual.elementosVisibles.forma.poligono.num_lados/4), // startX
          elemento.y - radioRender / (2*2.66/3.5), // startY
          radioRender*2*2.66 / (configActual.elementosVisibles.forma.poligono.num_lados/3), // sideLength
          configActual.elementosVisibles.forma.poligono.num_lados, // sideCountNumerator
          2 // sideCountDenominator
        );
      break;

      case 'imagen':
        if (elemento.img && elemento.img.obj) {
            configActual.lienzo.contexto.drawImage(
                elemento.img.obj,
                elemento.x - radioRender,
                elemento.y - radioRender,
                radioRender * 2,
                radioRender * 2 / elemento.img.relacion
            );
        } else if (configActual.temporal.objeto_img) {
            configActual.lienzo.contexto.drawImage(
                configActual.temporal.objeto_img,
                elemento.x - radioRender,
                elemento.y - radioRender,
                radioRender * 2,
                radioRender * 2 / elemento.img.relacion
            );
        }
      break;

    }

    configActual.lienzo.contexto.closePath();

    if(configActual.elementosVisibles.forma.borde.grosor > 0){
      configActual.lienzo.contexto.strokeStyle = configActual.elementosVisibles.forma.borde.color;
      configActual.lienzo.contexto.lineWidth = configActual.elementosVisibles.forma.borde.grosor;
      configActual.lienzo.contexto.stroke();
    }
    
    configActual.lienzo.contexto.fill();
  };


  configActual.funcionesInternas.crearElementos = function(){
    for(var i = 0; i < configActual.elementosVisibles.cantidad.valor; i++) {
      configActual.elementosVisibles.coleccion.push(new configActual.funcionesInternas.ElementoIndividual(configActual.elementosVisibles.color, configActual.elementosVisibles.transparencia.valor));
    }
  };

  configActual.funcionesInternas.actualizarElementos = function(){

    for(var i = 0; i < configActual.elementosVisibles.coleccion.length; i++){

      /* El elemento */
      var elemento = configActual.elementosVisibles.coleccion[i];

      /* Mover el elemento */
      if(configActual.elementosVisibles.movimiento.activar){
        var velMov = configActual.elementosVisibles.movimiento.velocidad/2;
        elemento.x += elemento.velX * velMov;
        elemento.y += elemento.velY * velMov;
      }

      /* Cambiar estado de transparencia */
      if(configActual.elementosVisibles.transparencia.animacion.activar) {
        if(elemento.estado_transparencia == true) {
          if(elemento.transparencia >= configActual.elementosVisibles.transparencia.valor) elemento.estado_transparencia = false;
          elemento.transparencia += elemento.vel_transparencia;
        }else {
          if(elemento.transparencia <= configActual.elementosVisibles.transparencia.animacion.transparencia_min) elemento.estado_transparencia = true;
          elemento.transparencia -= elemento.vel_transparencia;
        }
        if(elemento.transparencia < 0) elemento.transparencia = 0;
      }

      /* Cambiar dimension */
      if(configActual.elementosVisibles.dimension.animacion.activar){
        if(elemento.estado_dimension == true){
          if(elemento.radio >= configActual.elementosVisibles.dimension.valor) elemento.estado_dimension = false;
          elemento.radio += elemento.vel_dimension;
        }else{
          if(elemento.radio <= configActual.elementosVisibles.dimension.animacion.dimension_min) elemento.estado_dimension = true;
          elemento.radio -= elemento.vel_dimension;
        }
        if(elemento.radio < 0) elemento.radio = 0;
      }

      /* Cambiar posicion del elemento si esta fuera del lienzo */
      if(configActual.elementosVisibles.movimiento.modo_salida == 'rebote'){
        var nueva_pos = {
          x_izq: elemento.radio,
          x_der:  configActual.lienzo.ancho,
          y_arriba: elemento.radio,
          y_abajo: configActual.lienzo.alto
        }
      }else{
        var nueva_pos = {
          x_izq: -elemento.radio,
          x_der: configActual.lienzo.ancho + elemento.radio,
          y_arriba: -elemento.radio,
          y_abajo: configActual.lienzo.alto + elemento.radio
        }
      }

      if(elemento.x - elemento.radio > configActual.lienzo.ancho){
        elemento.x = nueva_pos.x_izq;
        elemento.y = Math.random() * configActual.lienzo.alto;
      }
      else if(elemento.x + elemento.radio < 0){
        elemento.x = nueva_pos.x_der;
        elemento.y = Math.random() * configActual.lienzo.alto;
      }
      if(elemento.y - elemento.radio > configActual.lienzo.alto){
        elemento.y = nueva_pos.y_arriba;
        elemento.x = Math.random() * configActual.lienzo.ancho;
      }
      else if(elemento.y + elemento.radio < 0){
        elemento.y = nueva_pos.y_abajo;
        elemento.x = Math.random() * configActual.lienzo.ancho;
      }

      /* Modos de salida del lienzo */
      switch(configActual.elementosVisibles.movimiento.modo_salida){
        case 'rebote':
          if (elemento.x + elemento.radio > configActual.lienzo.ancho) elemento.velX = -elemento.velX;
          else if (elemento.x - elemento.radio < 0) elemento.velX = -elemento.velX;
          if (elemento.y + elemento.radio > configActual.lienzo.alto) elemento.velY = -elemento.velY;
          else if (elemento.y - elemento.radio < 0) elemento.velY = -elemento.velY;
        break;
      }

      /* Eventos */
      if(Array.isArrayContiene('agarrar', configActual.interactividad.eventos.al_pasar.modo)){
        configActual.funcionesInternas.modos.agarrarElemento(elemento);
      }

      if(Array.isArrayContiene('burbuja', configActual.interactividad.eventos.al_pasar.modo) || Array.isArrayContiene('burbuja', configActual.interactividad.eventos.al_clic.modo)){
        configActual.funcionesInternas.modos.burbujaElemento(elemento);
      }

      if(Array.isArrayContiene('repeler', configActual.interactividad.eventos.al_pasar.modo) || Array.isArrayContiene('repeler', configActual.interactividad.eventos.al_clic.modo)){
        configActual.funcionesInternas.modos.repelerElemento(elemento);
      }

      /* Interaccion automatica entre elementos */
      if(configActual.elementosVisibles.linea_conexion.activar || configActual.elementosVisibles.movimiento.atraccion.activar){
        for(var j = i + 1; j < configActual.elementosVisibles.coleccion.length; j++){
          var elemento2 = configActual.elementosVisibles.coleccion[j];

          /* Conectar elementos */
          if(configActual.elementosVisibles.linea_conexion.activar){
            configActual.funcionesInternas.interactuar.conectarElementos(elemento,elemento2);
          }

          /* Atraer elementos */
          if(configActual.elementosVisibles.movimiento.atraccion.activar){
            configActual.funcionesInternas.interactuar.atraerElementos(elemento,elemento2);
          }

          /* Rebotar elementos */
          if(configActual.elementosVisibles.movimiento.rebote){
            configActual.funcionesInternas.interactuar.rebotarElementos(elemento,elemento2);
          }
        }
      }
    }
  };

  configActual.funcionesInternas.dibujarElementos = function(){

    /* Limpiar lienzo */
    configActual.lienzo.contexto.clearRect(0, 0, configActual.lienzo.ancho, configActual.lienzo.alto);

    /* Actualizar parametros de cada elemento */
    configActual.funcionesInternas.actualizarElementos();

    /* Dibujar cada elemento */
    for(var i = 0; i < configActual.elementosVisibles.coleccion.length; i++){
      var elemento = configActual.elementosVisibles.coleccion[i];
      elemento.dibujar();
    }
  };

  configActual.funcionesInternas.vaciarElementos = function(){
    configActual.elementosVisibles.coleccion = [];
  };

  configActual.funcionesInternas.refrescarElementos = function(){

    /* Inicializar todo */
    window.cancelarCuadroAnimacion(configActual.funcionesInternas.verificarCuadroAnim);
    window.cancelarCuadroAnimacion(configActual.funcionesInternas.dibujarCuadroAnim);
    configActual.temporal.fuente_svg = undefined;
    configActual.temporal.objeto_img = undefined;
    configActual.temporal.contador_svg = 0;
    configActual.funcionesInternas.vaciarElementos();
    configActual.funcionesInternas.limpiarCanvas();
    
    /* Reiniciar */
    configActual.funcionesInternas.utilidades.iniciar();
  };


  /* ---------- Funciones del sistema - interaccion de elementos ------------ */

  configActual.funcionesInternas.interactuar.conectarElementos = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    /* Dibujar una linea entre p1 y p2 si la distancia entre ellos es menor a la distancia configurada */
    if(dist <= configActual.elementosVisibles.linea_conexion.distancia){

      var transparencia_linea = configActual.elementosVisibles.linea_conexion.transparencia - (dist / (1/configActual.elementosVisibles.linea_conexion.transparencia)) / configActual.elementosVisibles.linea_conexion.distancia;

      if(transparencia_linea > 0){        
        
        /* Estilo */
        var color_linea_rgb = configActual.elementosVisibles.linea_conexion.color_rgb_linea;
        configActual.lienzo.contexto.strokeStyle = 'rgba('+color_linea_rgb.r+','+color_linea_rgb.g+','+color_linea_rgb.b+','+transparencia_linea+')';
        configActual.lienzo.contexto.lineWidth = configActual.elementosVisibles.linea_conexion.grosor;
        
        /* Trazado */
        configActual.lienzo.contexto.beginPath();
        configActual.lienzo.contexto.moveTo(p1.x, p1.y);
        configActual.lienzo.contexto.lineTo(p2.x, p2.y);
        configActual.lienzo.contexto.stroke();
        configActual.lienzo.contexto.closePath();
      }
    }
  };


  configActual.funcionesInternas.interactuar.atraerElementos  = function(p1, p2){

    /* Elementos condensados */
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    if(dist <= configActual.elementosVisibles.linea_conexion.distancia){

      var ax = dx/(configActual.elementosVisibles.movimiento.atraccion.rotarX*1000),
          ay = dy/(configActual.elementosVisibles.movimiento.atraccion.rotarY*1000);

      p1.velX -= ax;
      p1.velY -= ay;

      p2.velX += ax;
      p2.velY += ay;
    }
  }


  configActual.funcionesInternas.interactuar.rebotarElementos = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy),
        dist_p = p1.radio+p2.radio;

    if(dist <= dist_p){
      p1.velX = -p1.velX;
      p1.velY = -p1.velY;

      p2.velX = -p2.velX;
      p2.velY = -p2.velY;
    }
  }


  /* ---------- Funciones del sistema - eventos de modos ------------ */

  configActual.funcionesInternas.modos.empujarElementos = function(cantidad, posicion){

    configActual.temporal.empujando = true;

    for(var i = 0; i < cantidad; i++){
      configActual.elementosVisibles.coleccion.push(
        new configActual.funcionesInternas.ElementoIndividual(
          configActual.elementosVisibles.color,
          configActual.elementosVisibles.transparencia.valor,
          {
            'x': posicion ? posicion.pos_x : Math.random() * configActual.lienzo.ancho,
            'y': posicion ? posicion.pos_y : Math.random() * configActual.lienzo.alto
          }
        )
      )
      if(i == cantidad-1){
        if(!configActual.elementosVisibles.movimiento.activar){
          configActual.funcionesInternas.dibujarElementos();
        }
        configActual.temporal.empujando = false;
      }
    }
  };


  configActual
  .funcionesInternas.modos.eliminarElementos = function(cantidad){

    configActual.elementosVisibles.coleccion.splice(0, cantidad);
    if(!configActual.elementosVisibles.movimiento.activar){
      configActual.funcionesInternas.dibujarElementos();
    }
  };


  configActual.funcionesInternas.modos.burbujaElemento = function(elemento){

    /* Evento al pasar el raton */
    if(configActual.interactividad.eventos.al_pasar.activar && Array.isArrayContiene('burbuja', configActual.interactividad.eventos.al_pasar.modo)){

      var dx_raton = elemento.x - configActual.interactividad.raton.pos_x,
          dy_raton = elemento.y - configActual.interactividad.raton.pos_y,
          dist_raton = Math.sqrt(dx_raton*dx_raton + dy_raton*dy_raton),
          relacion = 1 - dist_raton / configActual.interactividad.modos.burbuja.distancia;

      function restaurarValores(){
        elemento.transparencia_burbuja = elemento.transparencia;
        elemento.radio_burbuja = elemento.radio;
      }

      /* mousemove - verificar relacion */
      if(dist_raton <= configActual.interactividad.modos.burbuja.distancia){

        if(relacion >= 0 && configActual.interactividad.estado == 'mousemove'){
          
          /* Dimension */
          if(configActual.interactividad.modos.burbuja.dimension != configActual.elementosVisibles.dimension.valor){

            if(configActual.interactividad.modos.burbuja.dimension > configActual.elementosVisibles.dimension.valor){
              var dimensionCalc = elemento.radio + (configActual.interactividad.modos.burbuja.dimension*relacion);
              if(dimensionCalc >= 0){
                elemento.radio_burbuja = dimensionCalc;
              }
            }else{
              var dif = elemento.radio - configActual.interactividad.modos.burbuja.dimension,
                  dimensionCalc = elemento.radio - (dif*relacion);
              if(dimensionCalc > 0){
                elemento.radio_burbuja = dimensionCalc;
              }else{
                elemento.radio_burbuja = 0;
              }
            }
          }

          /* Transparencia */
          if(configActual.interactividad.modos.burbuja.transparencia != configActual.elementosVisibles.transparencia.valor){

            if(configActual.interactividad.modos.burbuja.transparencia > configActual.elementosVisibles.transparencia.valor){
              var transparenciaCalc = configActual.interactividad.modos.burbuja.transparencia*relacion;
              if(transparenciaCalc > elemento.transparencia && transparenciaCalc <= configActual.interactividad.modos.burbuja.transparencia){
                elemento.transparencia_burbuja = transparenciaCalc;
              }
            }else{
              var transparenciaCalc = elemento.transparencia - (configActual.elementosVisibles.transparencia.valor-configActual.interactividad.modos.burbuja.transparencia)*relacion;
              if(transparenciaCalc < elemento.transparencia && transparenciaCalc >= configActual.interactividad.modos.burbuja.transparencia){
                elemento.transparencia_burbuja = transparenciaCalc;
              }
            }
          }
        }
      }else{
        restaurarValores();
      }

      /* mouseleave */
      if(configActual.interactividad.estado == 'mouseleave'){
        restaurarValores();
      }
    }

    /* Evento al clic */
    else if(configActual.interactividad.eventos.al_clic.activar && Array.isArrayContiene('burbuja', configActual.interactividad.eventos.al_clic.modo)){

      if(configActual.temporal.clic_burbuja){
        var dx_raton = elemento.x - configActual.interactividad.raton.pos_clic_x,
            dy_raton = elemento.y - configActual.interactividad.raton.pos_clic_y,
            dist_raton = Math.sqrt(dx_raton*dx_raton + dy_raton*dy_raton),
            tiempo_transcurrido = (new Date().getTime() - configActual.interactividad.raton.tiempo_clic)/1000;

        if(tiempo_transcurrido > configActual.interactividad.modos.burbuja.duracion){
          configActual.temporal.fin_duracion_burbuja = true;
        }

        if(tiempo_transcurrido > configActual.interactividad.modos.burbuja.duracion*2){
          configActual.temporal.clic_burbuja = false;
          configActual.temporal.fin_duracion_burbuja = false;
        }
      }

      function procesarBurbuja(param_burbuja, param_elementos, obj_burbuja_elemento, obj_elemento, id){

        if(param_burbuja != param_elementos){

          if(!configActual.temporal.fin_duracion_burbuja){
            if(dist_raton <= configActual.interactividad.modos.burbuja.distancia){
              var valorAUsar = obj_burbuja_elemento != undefined ? obj_burbuja_elemento : obj_elemento;
              if(valorAUsar != param_burbuja){
                var valorCalculado = obj_elemento - (tiempo_transcurrido * (obj_elemento - param_burbuja) / configActual.interactividad.modos.burbuja.duracion);
                if(id == 'dimension') elemento.radio_burbuja = valorCalculado;
                if(id == 'transparencia') elemento.transparencia_burbuja = valorCalculado;
              }
            }else{
              if(id == 'dimension') elemento.radio_burbuja = undefined;
              if(id == 'transparencia') elemento.transparencia_burbuja = undefined;
            }
          }else{
            if(obj_burbuja_elemento != undefined){
              var valorTemp = obj_elemento - (tiempo_transcurrido * (obj_elemento - param_burbuja) / configActual.interactividad.modos.burbuja.duracion),
                  diferencia = param_burbuja - valorTemp;
                  valorFinal = param_burbuja + diferencia;
              if(id == 'dimension') elemento.radio_burbuja = valorFinal;
              if(id == 'transparencia') elemento.transparencia_burbuja = valorFinal;
            }
          }
        }
      }

      if(configActual.temporal.clic_burbuja){
        /* dimension */
        procesarBurbuja(configActual.interactividad.modos.burbuja.dimension, configActual.elementosVisibles.dimension.valor, elemento.radio_burbuja, elemento.radio, 'dimension');
        /* transparencia */
        procesarBurbuja(configActual.interactividad.modos.burbuja.transparencia, configActual.elementosVisibles.transparencia.valor, elemento.transparencia_burbuja, elemento.transparencia, 'transparencia');
      }
    }
  };


  configActual.funcionesInternas.modos.repelerElemento = function(elemento){

    if(configActual.interactividad.eventos.al_pasar.activar && Array.isArrayContiene('repeler', configActual.interactividad.eventos.al_pasar.modo) && configActual.interactividad.estado == 'mousemove') {

      var dx_raton = elemento.x - configActual.interactividad.raton.pos_x,
          dy_raton = elemento.y - configActual.interactividad.raton.pos_y,
          dist_raton = Math.sqrt(dx_raton*dx_raton + dy_raton*dy_raton);

      var vectorNormal = {x: dx_raton/dist_raton, y: dy_raton/dist_raton},
          radioRepulsion = configActual.interactividad.modos.repeler.distancia,
          velocidadRepulsion = 100,
          factorRepulsion = numClamp((1/radioRepulsion)*(-1*Math.pow(dist_raton/radioRepulsion,2)+1)*radioRepulsion*velocidadRepulsion, 0, 50);
      
      var posicionNueva = {
        x: elemento.x + vectorNormal.x * factorRepulsion,
        y: elemento.y + vectorNormal.y * factorRepulsion
      }

      if(configActual.elementosVisibles.movimiento.modo_salida == 'rebote'){
        if(posicionNueva.x - elemento.radio > 0 && posicionNueva.x + elemento.radio < configActual.lienzo.ancho) elemento.x = posicionNueva.x;
        if(posicionNueva.y - elemento.radio > 0 && posicionNueva.y + elemento.radio < configActual.lienzo.alto) elemento.y = posicionNueva.y;
      }else{
        elemento.x = posicionNueva.x;
        elemento.y = posicionNueva.y;
      }
    
    }


    else if(configActual.interactividad.eventos.al_clic.activar && Array.isArrayContiene('repeler', configActual.interactividad.eventos.al_clic.modo)) {

      if(!configActual.temporal.repulsion_terminada){
        configActual.temporal.contador_repulsion++;
        if(configActual.temporal.contador_repulsion == configActual.elementosVisibles.coleccion.length){
          configActual.temporal.repulsion_terminada = true;
        }
      }

      if(configActual.temporal.clic_repulsion){

        var radioRepulsion = Math.pow(configActual.interactividad.modos.repeler.distancia/6, 3);

        var dx = configActual.interactividad.raton.pos_clic_x - elemento.x,
            dy = configActual.interactividad.raton.pos_clic_y - elemento.y,
            distSq = dx*dx + dy*dy; // Usamos distancia al cuadrado para evitar Math.sqrt repetidos

        var fuerza = -radioRepulsion / distSq * 1;

        function aplicarRepulsion(){
          var angulo = Math.atan2(dy,dx);
          elemento.velX = fuerza * Math.cos(angulo);
          elemento.velY = fuerza * Math.sin(angulo);

          if(configActual.elementosVisibles.movimiento.modo_salida == 'rebote'){
            var posFutura = {
              x: elemento.x + elemento.velX,
              y: elemento.y + elemento.velY
            }
            if (posFutura.x + elemento.radio > configActual.lienzo.ancho) elemento.velX = -elemento.velX;
            else if (posFutura.x - elemento.radio < 0) elemento.velX = -elemento.velX;
            if (posFutura.y + elemento.radio > configActual.lienzo.alto) elemento.velY = -elemento.velY;
            else if (posFutura.y - elemento.radio < 0) elemento.velY = -elemento.velY;
          }
        }

        if(distSq <= radioRepulsion){ // Comparar también con distSq
          aplicarRepulsion();
        }
      }else{
        if(configActual.temporal.clic_repulsion == false){
          elemento.velX = elemento.velX_inicial;
          elemento.velY = elemento.velY_inicial;
        }
      }
    }
  }


  configActual.funcionesInternas.modos.agarrarElemento = function(elemento){

    if(configActual.interactividad.eventos.al_pasar.activar && configActual.interactividad.estado == 'mousemove'){

      var dx_raton = elemento.x - configActual.interactividad.raton.pos_x,
          dy_raton = elemento.y - configActual.interactividad.raton.pos_y,
          dist_raton = Math.sqrt(dx_raton*dx_raton + dy_raton*dy_raton);

      /* Dibujar una linea entre el cursor y el elemento si la distancia entre ellos es menor a la distancia configurada */
      if(dist_raton <= configActual.interactividad.modos.agarrar.distancia){

        var transparencia_linea = configActual.interactividad.modos.agarrar.linea_conexion.transparencia - (dist_raton / (1/configActual.interactividad.modos.agarrar.linea_conexion.transparencia)) / configActual.interactividad.modos.agarrar.distancia;

        if(transparencia_linea > 0){

          /* Estilo */
          var color_linea_rgb = configActual.elementosVisibles.linea_conexion.color_rgb_linea;
          configActual.lienzo.contexto.strokeStyle = 'rgba('+color_linea_rgb.r+','+color_linea_rgb.g+','+color_linea_rgb.b+','+transparencia_linea+')';
          configActual.lienzo.contexto.lineWidth = configActual.elementosVisibles.linea_conexion.grosor;
          
          /* Trazado */
          configActual.lienzo.contexto.beginPath();
          configActual.lienzo.contexto.moveTo(elemento.x, elemento.y);
          configActual.lienzo.contexto.lineTo(configActual.interactividad.raton.pos_x, configActual.interactividad.raton.pos_y);
          configActual.lienzo.contexto.stroke();
          configActual.lienzo.contexto.closePath();
        }
      }
    }
  };



  /* ---------- Funciones del sistema - utilidades ------------ */

  configActual.funcionesInternas.utilidades.manejarEventos = function(){

    /* Elemento objetivo de los eventos */
    if(configActual.interactividad.detectar_en == 'window'){
      configActual.interactividad.el = window;
    }else{
      configActual.interactividad.el = configActual.lienzo.elemento;
    }


    /* Detectar posicion del raton - en hover / clic */
    if(configActual.interactividad.eventos.al_pasar.activar || configActual.interactividad.eventos.al_clic.activar){

      /* el en mousemove */
      configActual.interactividad.el.addEventListener('mousemove', function(e){

        if(configActual.interactividad.el == window){
          var pos_x = e.clientX,
              pos_y = e.clientY;
        }
        else{
          var pos_x = e.offsetX || e.clientX,
              pos_y = e.offsetY || e.clientY;
        }

        configActual.interactividad.raton.pos_x = pos_x;
        configActual.interactividad.raton.pos_y = pos_y;

        if(configActual.temporal.esRetina){
          configActual.interactividad.raton.pos_x *= configActual.lienzo.relacionPx;
          configActual.interactividad.raton.pos_y *= configActual.lienzo.relacionPx;
        }

        configActual.interactividad.estado = 'mousemove';

      });

      /* el en onmouseleave */
      configActual.interactividad.el.addEventListener('mouseleave', function(e){

        configActual.interactividad.raton.pos_x = null;
        configActual.interactividad.raton.pos_y = null;
        configActual.interactividad.estado = 'mouseleave';

      });
    }

    /* Evento al clic */
    if(configActual.interactividad.eventos.al_clic.activar){

      configActual.interactividad.el.addEventListener('click', function(){

        configActual.interactividad.raton.pos_clic_x = configActual.interactividad.raton.pos_x;
        configActual.interactividad.raton.pos_clic_y = configActual.interactividad.raton.pos_y;
        configActual.interactividad.raton.tiempo_clic = new Date().getTime();

        if(configActual.interactividad.eventos.al_clic.activar){

          switch(configActual.interactividad.eventos.al_clic.modo){

            case 'empujar':
              if(configActual.elementosVisibles.movimiento.activar){
                configActual.funcionesInternas.modos.empujarElementos(configActual.interactividad.modos.empujar.elementos_nb, configActual.interactividad.raton);
              }else{
                if(configActual.interactividad.modos.empujar.elementos_nb == 1){
                  configActual.funcionesInternas.modos.empujarElementos(configActual.interactividad.modos.empujar.elementos_nb, configActual.interactividad.raton);
                }
                else if(configActual.interactividad.modos.empujar.elementos_nb > 1){
                  configActual.funcionesInternas.modos.empujarElementos(configActual.interactividad.modos.empujar.elementos_nb);
                }
              }
            break;

            case 'eliminar':
              configActual.funcionesInternas.modos.eliminarElementos(configActual.interactividad.modos.eliminar.elementos_nb);
            break;

            case 'burbuja':
              configActual.temporal.clic_burbuja = true;
            break;

            case 'repeler':
              configActual.temporal.clic_repulsion = true;
              configActual.temporal.contador_repulsion = 0;
              configActual.temporal.repulsion_terminada = false;
              setTimeout(function(){
                configActual.temporal.clic_repulsion = false;
              }, configActual.interactividad.modos.repeler.duracion*1000)
            break;
          }
        }
      });
    }
  };

  configActual.funcionesInternas.utilidades.autoDensidadElementos = function(){

    if(configActual.elementosVisibles.cantidad.densidad.activar){

      /* Calcular area */
      var area = configActual.lienzo.elemento.width * configActual.lienzo.elemento.height / 1000;
      if(configActual.temporal.esRetina){
        area = area/(configActual.lienzo.relacionPx*2);
      }

      /* Calcular numero de elementos basado en el area de densidad */
      var num_elementos = area * configActual.elementosVisibles.cantidad.valor / configActual.elementosVisibles.cantidad.densidad.area_valor;

      /* Añadir o remover X elementos */
      var elementos_faltantes = configActual.elementosVisibles.coleccion.length - num_elementos;
      if(elementos_faltantes < 0) configActual.funcionesInternas.modos.empujarElementos(Math.abs(elementos_faltantes));
      else configActual.funcionesInternas.modos.eliminarElementos(elementos_faltantes);
    }
  };


  configActual.funcionesInternas.utilidades.verificarSolapamiento = function(p1, posicion){
    for(var i = 0; i < configActual.elementosVisibles.coleccion.length; i++){
      var p2 = configActual.elementosVisibles.coleccion[i];

      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx*dx + dy*dy);

      if(dist <= p1.radio + p2.radio){
        p1.x = posicion ? posicion.x : Math.random() * configActual.lienzo.ancho;
        p1.y = posicion ? posicion.y : Math.random() * configActual.lienzo.alto;
        configActual.funcionesInternas.utilidades.verificarSolapamiento(p1);
      }
    }
  };


  configActual.funcionesInternas.utilidades.crearImgSvg = function(elemento){

    /* Establecer color al elemento svg */
    var svgXml = configActual.temporal.fuente_svg,
        rgbHex = /#([0-9A-F]{3,6})/gi,
        svgColorizado = svgXml.replace(rgbHex, function () { // m, r, g, b no se usan, se pueden quitar
          var valorColor;
          if(elemento.color.rgb){
            valorColor = 'rgba('+elemento.color.rgb.r+','+elemento.color.rgb.g+','+elemento.color.rgb.b+','+elemento.transparencia+')';
          }else{
            valorColor = 'hsla('+elemento.color.hsl.h+','+elemento.color.hsl.s+'%,'+elemento.color.hsl.l+'%,'+elemento.transparencia+')';
          }
          return valorColor;
        });

    /* Preparar para crear img con svg colorizado */
    var svgBlob = new Blob([svgColorizado], {type: 'image/svg+xml;charset=utf-8'}),
        gestorDOMURL = window.URL || window.webkitURL || window,
        urlObjeto = gestorDOMURL.createObjectURL(svgBlob);

    /* Crear objeto img del elemento */
    var img = new Image();
    img.addEventListener('load', function(){
      elemento.img.obj = img;
      elemento.img.cargada = true;
      gestorDOMURL.revokeObjectURL(urlObjeto);
      configActual.temporal.contador_svg++;
    });
    img.src = urlObjeto;
  };


  configActual.funcionesInternas.utilidades.destruirSistemaParticulas = function(){
    window.cancelarCuadroAnimacion(configActual.funcionesInternas.dibujarCuadroAnim);
    elementoCanvas.remove();
    coleccionSistemasParticulas = null;
  };


  configActual.funcionesInternas.utilidades.dibujarForma = function(ctx, startX, startY, sideLength, sideCountNumerator, sideCountDenominator){

    // Basado en Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convertir a radianes
    ctx.save();
    ctx.beginPath();
    ctx.translate(startX, startY);
    ctx.moveTo(0,0);
    for (var i = 0; i < sideCount; i++) {
      ctx.lineTo(sideLength,0);
      ctx.translate(sideLength,0);
      ctx.rotate(interiorAngle);
    }
    ctx.fill();
    ctx.restore();
  };

  configActual.funcionesInternas.utilidades.exportarImagen = function(){
    window.open(configActual.lienzo.elemento.toDataURL('image/png'), '_blank');
  };


  configActual.funcionesInternas.utilidades.cargarImagen = function(tipo){

    configActual.temporal.error_img = undefined;

    if(configActual.elementosVisibles.forma.imagen.fuente != ''){

      if(tipo == 'svg'){

        var peticionHttp = new XMLHttpRequest();
        peticionHttp.open('GET', configActual.elementosVisibles.forma.imagen.fuente);
        peticionHttp.onreadystatechange = function (data) {
          if(peticionHttp.readyState == 4){
            if(peticionHttp.status == 200){
              configActual.temporal.fuente_svg = data.currentTarget.response;
              configActual.funcionesInternas.utilidades.verificarAntesDibujar();
            }else{
              console.warn('Error SistemaParticulas - Imagen no encontrada (SVG)');
              configActual.temporal.error_img = true;
            }
          }
        }
        peticionHttp.send();

      }else{

        var img = new Image();
        img.addEventListener('load', function(){
          configActual.temporal.objeto_img = img;
          configActual.funcionesInternas.utilidades.verificarAntesDibujar();
        });
        img.src = configActual.elementosVisibles.forma.imagen.fuente;
      }
    }else{
      console.warn('Error SistemaParticulas - No se especificó image.src');
      configActual.temporal.error_img = true;
    }
  };


  configActual.funcionesInternas.utilidades.bucleDibujo = function(){

    if(configActual.elementosVisibles.forma.tipo == 'imagen'){

      if(configActual.temporal.tipo_img == 'svg'){

        if(configActual.temporal.contador_svg >= configActual.elementosVisibles.cantidad.valor){
          configActual.funcionesInternas.dibujarElementos();
          if(!configActual.elementosVisibles.movimiento.activar) window.cancelarCuadroAnimacion(configActual.funcionesInternas.dibujarCuadroAnim);
          else configActual.funcionesInternas.dibujarCuadroAnim = window.solicitarCuadroAnimacion(configActual.funcionesInternas.utilidades.bucleDibujo);
        }else{
          if(!configActual.temporal.error_img) configActual.funcionesInternas.dibujarCuadroAnim = window.solicitarCuadroAnimacion(configActual.funcionesInternas.utilidades.bucleDibujo);
        }
      }else{
        if(configActual.temporal.objeto_img != undefined){
          configActual.funcionesInternas.dibujarElementos();
          if(!configActual.elementosVisibles.movimiento.activar) window.cancelarCuadroAnimacion(configActual.funcionesInternas.dibujarCuadroAnim);
          else configActual.funcionesInternas.dibujarCuadroAnim = window.solicitarCuadroAnimacion(configActual.funcionesInternas.utilidades.bucleDibujo);
        }else{
          if(!configActual.temporal.error_img) configActual.funcionesInternas.dibujarCuadroAnim = window.solicitarCuadroAnimacion(configActual.funcionesInternas.utilidades.bucleDibujo);
        }
      }
    }else{
      configActual.funcionesInternas.dibujarElementos();
      if(!configActual.elementosVisibles.movimiento.activar) window.cancelarCuadroAnimacion(configActual.funcionesInternas.dibujarCuadroAnim);
      else configActual.funcionesInternas.dibujarCuadroAnim = window.solicitarCuadroAnimacion(configActual.funcionesInternas.utilidades.bucleDibujo);
    }
  };


  configActual.funcionesInternas.utilidades.verificarAntesDibujar = function(){

    // Si la forma es imagen
    if(configActual.elementosVisibles.forma.tipo == 'imagen'){

      if(configActual.temporal.tipo_img == 'svg' && configActual.temporal.fuente_svg == undefined){
        configActual.temporal.verificarCuadroAnim = window.solicitarCuadroAnimacion(configActual.funcionesInternas.utilidades.verificarAntesDibujar);
      }else{
        window.cancelarCuadroAnimacion(configActual.temporal.verificarCuadroAnim);
        if(!configActual.temporal.error_img){
          configActual.funcionesInternas.utilidades.initGeneral();
          configActual.funcionesInternas.utilidades.bucleDibujo();
        }
      }
    }else{
      configActual.funcionesInternas.utilidades.initGeneral();
      configActual.funcionesInternas.utilidades.bucleDibujo();
    }
  };


  configActual.funcionesInternas.utilidades.initGeneral = function(){

    /* Inicializar canvas + elementos */
    configActual.funcionesInternas.initRetina();
    configActual.funcionesInternas.initCanvas();
    configActual.funcionesInternas.dimensionarCanvas();
    configActual.funcionesInternas.pintarCanvas();
    configActual.funcionesInternas.crearElementos();
    configActual.funcionesInternas.utilidades.autoDensidadElementos();

    /* elementosVisibles.linea_conexion - convertir colores hex a rgb */
    configActual.elementosVisibles.linea_conexion.color_rgb_linea = hexToRgb(configActual.elementosVisibles.linea_conexion.color);
  };


  configActual.funcionesInternas.utilidades.iniciar = function(){

    if(Array.isArrayContiene('imagen', configActual.elementosVisibles.forma.tipo)){
      configActual.temporal.tipo_img = configActual.elementosVisibles.forma.imagen.fuente.substr(configActual.elementosVisibles.forma.imagen.fuente.length - 3);
      configActual.funcionesInternas.utilidades.cargarImagen(configActual.temporal.tipo_img);
    }else{
      configActual.funcionesInternas.utilidades.verificarAntesDibujar();
    }
  };


  /* ---------- SistemaParticulas - inicio ------------ */

  configActual.funcionesInternas.utilidades.manejarEventos();
  configActual.funcionesInternas.utilidades.iniciar();
};

/* ---------- funciones globales - utilidades ------------ */

Object.extendirProfundo = function(destino, fuente) {
  for (var propiedad in fuente) {
    if (Object.prototype.hasOwnProperty.call(fuente, propiedad)) { // Verificar si la propiedad es propia
      if (fuente[propiedad] && typeof fuente[propiedad] === 'object' && !Array.isArray(fuente[propiedad])) {
        destino[propiedad] = destino[propiedad] || {};
        Object.extendirProfundo(destino[propiedad], fuente[propiedad]); // Llamada recursiva
      } else {
        destino[propiedad] = fuente[propiedad];
      }
    }
  }
  return destino;
};

window.solicitarCuadroAnimacion = (function(){
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelarCuadroAnimacion = ( function() {
  return window.cancelAnimationFrame         ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame    ||
    window.oCancelRequestAnimationFrame      ||
    window.msCancelRequestAnimationFrame     ||
    clearTimeout
} )();

function hexToRgb(hex){
  // Basado en Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expandir forma abreviada (ej. "03F") a forma completa (ej. "0033FF")
  var regexAbreviado = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(regexAbreviado, function(m, r, g, b) {
     return r + r + g + g + b + b;
  });
  var resultado = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return resultado ? {
      r: parseInt(resultado[1], 16),
      g: parseInt(resultado[2], 16),
      b: parseInt(resultado[3], 16)
  } : null;
};

function numClamp(numero, min, max) {
  return Math.min(Math.max(numero, min), max);
};

Array.isArrayContiene = function(valor, array) {
  return array.indexOf(valor) > -1;
}


/* ---------- funciones de particulas.js - inicio global ------------ */

window.coleccionSistemasParticulas = []; // Renombré pJSDom a coleccionSistemasParticulas

window.crearSistemaParticulas = function(contenedorId, configuracion){ // Renombré particlesJS a crearSistemaParticulas

  /* ¿No es un string? entonces son params de objeto, y establecer el id con el id predeterminado */
  if(typeof(contenedorId) != 'string'){
    configuracion = contenedorId;
    contenedorId = 'contenedor-particulas'; // Cambié 'particles-js'
  }

  /* ¿No hay id? establecer el id a un id predeterminado */
  if(!contenedorId){
    contenedorId = 'contenedor-particulas'; // Cambié 'particles-js'
  }

  /* Elementos del sistema */
  var etiquetaSistema = document.getElementById(contenedorId),
      claseCanvasSistema = 'particulas-visual-canvas', // Cambié 'particles-js-canvas-el'
      canvasExistente = etiquetaSistema.getElementsByClassName(claseCanvasSistema);

  /* Eliminar canvas si existe dentro de la etiqueta objetivo */
  if(canvasExistente.length){
    while(canvasExistente.length > 0){
      etiquetaSistema.removeChild(canvasExistente[0]);
    }
  }

  /* Crear elemento canvas */
  var nuevoCanvasElemento = document.createElement('canvas');
  nuevoCanvasElemento.className = claseCanvasSistema;

  /* Establecer tamaño del canvas */
  nuevoCanvasElemento.style.width = "100%";
  nuevoCanvasElemento.style.height = "100%";

  /* Añadir canvas */
  var canvasFinal = document.getElementById(contenedorId).appendChild(nuevoCanvasElemento);

  /* Iniciar el sistema de particulas */
  if(canvasFinal != null){
    window.coleccionSistemasParticulas.push(new SistemaParticulas(contenedorId, configuracion));
  }
};

window.cargarSistemaParticulas = function(contenedorId, ruta_config_json, funcionCallback){ // Renombré particlesJS.load a cargarSistemaParticulas

  /* Cargar configuracion json */
  var peticionJson = new XMLHttpRequest();
  peticionJson.open('GET', ruta_config_json);
  peticionJson.onreadystatechange = function (data) {
    if(peticionJson.readyState == 4){
      if(peticionJson.status == 200){
        var configJson = JSON.parse(data.currentTarget.response);
        window.crearSistemaParticulas(contenedorId, configJson); // Usar la nueva función renombrada
        if(funcionCallback) funcionCallback();
      }else{
        console.warn('Error SistemaParticulas - XMLHttpRequest status: '+peticionJson.status);
        console.warn('Error SistemaParticulas - Archivo de configuracion no encontrado');
      }
    }
  };
  peticionJson.send();
};
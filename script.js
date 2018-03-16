 const niveles = 15
      let teclas = generarTeclas(niveles);
      siguienteNivel(0);
      

      function generarTeclas(niveles) {
        var nivels = new Array(niveles);        

        for (var i = 0; i < nivels.length; i++) {
          nivels[i] = generarTeclaAleatoria();
        }
        return nivels;
        
        //return new Array(niveles).fill(0).map(generarTeclaAleatoria);
        
      }

      function siguienteNivel(niveActual){
        if (niveActual == niveles) {
          return swal("Felicitaciones", "Ganaste", "success");
        }

          swal("nivel " + (niveActual + 1), {buttons: false, timer: 500});   
          for (let i = 0; i <= niveActual; i++) {
              setTimeout(() => activate(teclas[i]), 1000 * i + 1000);                          
          }     

        let  i = 0;
        let teclaActual = teclas[i];
        window.addEventListener("keydown", onkeyDown);
        
      
        function onkeyDown(ev){
            if (ev.keyCode >= 65 && ev.keyCode <= 90) {
                 if (ev.keyCode == teclaActual) {
                activate(teclaActual, {success: true});
                i++;
                if (i > niveActual) {
                  window.removeEventListener("keydown", onkeyDown);
                  setTimeout(() => siguienteNivel(i), 1500);
                }
                teclaActual = teclas[i];
              }else{
                activate(ev.keyCode, {fail: true});
                window.removeEventListener("keydown", onkeyDown);
                return swal("Perdiste", "Quieres jugar de nuevo?", {buttons: {cancel: "Cancel", catch: {text: "De nuevo", value: "again"}}}).then((value) => {
                  window.boton = value;
                  switch(value){
                    case "again":
                      let teclas = generarTeclas(niveles);
                      siguienteNivel(0);
                      break;
                    default: 
                      return swal("gracias por jugar", "", { button: false, timer: 1000});
                  }
                  
                });
              }
            }else{
              return swal("Lo siento", "Perdiste, la tecla no corresponde a una letra", "success", {  buttons: ["Nuevo intento", "Salir"]});
            }

        }
      }




        
      function generarTeclaAleatoria() {
        const min = 65
        const max = 90
        return Math.round(Math.random() * (max - min) + min)
      }

      function getElementByKeyCode(keyCode) {
        return document.querySelector(`[data-key="${keyCode}"]`)
      }

      function activate(keyCode, opts = {}) {
        const el = getElementByKeyCode(keyCode)
        el.classList.add('active')
        if (opts.success) {
          el.classList.add('success')
        } else if (opts.fail) {
          el.classList.add('fail')
        }
        setTimeout(() => deactivate(el), 500)
      }

      function deactivate(el) {
        el.className = 'key'
      }
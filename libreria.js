


/***************
 * 
 * NODOS
 * 
 ****************/



/**
 * Función que crea nodos
 * @param {*} tipo Tipo de nodo
 * @param {*} txt Texto (en su caso)
 * @returns 
 */
function creaNodo(tipo, txt) {

    let nodo;
    let texto;

    if (txt == undefined) {
        nodo = document.createElement(tipo);
        return nodo;
    }
    else {
        nodo = document.createElement(tipo);
        texto = document.createTextNode(txt);
        nodo.appendChild(texto);
        return nodo;
    }
}


/**
 * Función que inserta al final del todo
 * @param {*} padre Elemento padre
 * @param {*} nodo Nodo que se inserta
 */
function insertarAlFinal(padre, nodo) {
    padre.appendChild(nodo);
}


/**
 * Función que insertar un nodo ANTES de un nodo referencia
 * @param {*} padre Elemento padre
 * @param {*} newNodo Nodo a insertar
 * @param {*} nodoRef Nodo referencia
 */
function insertaEnBefore(padre, newNodo, nodoRef) {
    padre.insertBefore(newNodo, nodoRef);
}


/**
 * Función que inserta un nodo DESPUÉS de un nodo referencia
 * @param {*} padre 
 * @param {*} newNodo 
 * @param {*} nodoRef 
 */
function insertarEnAfter(padre, newNodo, nodoRef) {

    if (nodoRef.nextSibling)
        padre.insertBefore(newNodo, nodoRef.nextSibling);
    else
        padre.appendChild(newNodo);
}


/**
 * Función que elimina un nodo que se le pasa como parámetro
 * @param {*} nodo El nodo a eliminar
 */
function eliminaNodo(nodo) {
    nodo.remove();
}


/**
 * Función que reemplaza un nodo por otro
 * @param {*} padre Elemento padre
 * @param {*} newNodo Nodo nuevo
 * @param {*} oldNodo Nodo a reemplazar
 */
function reemplazaNodo(padre, newNodo, oldNodo) {
    padre.replaceChild(newNodo, oldNodo);
}


/**
 * Función que clona un nodo
 * @param {*} nodo Nodo a clonar
 * @param {*} boolean Si es "true" clona también el contenido
 *                    Si es "false" solo clona el elemento
 * @returns Devuelve el clon
 */
function clonaNodo(nodo, boolean) {
    return nodo.cloneNode(boolean);
}

/**
 * Función que añade un atributo a un nodo
 * @param {*} nodo Nodo al que se le añade el atributo
 * @param {*} atributo Atributo
 * @param {*} valor Valor del atributo
 */
function añadeAtributo(nodo, atributo, valor) {
    nodo.setAttribute(atributo, valor);
}





/*************************
 * 
 * COOKIES
 * 
 **************************/


/**
 * Función que crea una cookie
 * @param {*} nombre Nombre de la cookie
 * @param {*} valor Valor de la cookie
 * @param {*} expira Momento en el que expira
 */
function creaCookie(nombre, valor, expira) {

    if (expira == undefined) { //no le pongo expire, luego expira al cerrar sesión
        document.cookie = nombre + "=" + valor;
    }
    else {
        document.cookie = nombre + "=" + valor + ";expires=" + expira;
    }
}


/**
 * Función que le suma horas, minutos y segundos a la hora actual
 * @param {*} h Horas
 * @param {*} m Minutos
 * @param {*} s Segundos
 * @returns La nueva hora en formato UTCString
 */
function expiraEn(h, m, s) {

    let ahora = new Date();

    ahora.setHours(ahora.getHours() + h);
    ahora.setMinutes(ahora.getMinutes() + m);
    ahora.setSeconds(ahora.getSeconds() + s);
    return ahora.toUTCString();
}

/**
 * Función que suma días, meses y años a la fecha actual
 * @param {*} d Días que se sumarán
 * @param {*} m Meses que se sumarán
 * @param {*} a Años que se sumarán
 * @returns La nueva hora en formato UTCString
 */
function expiraDentroDe(d, m, a) {

    let ahora = new Date();

    ahora.setDate(ahora.getDate() + d);
    ahora.setMonth(ahora.getMonth() + m);
    ahora.setFullYear(ahora.getFullYear() + a);
    return ahora.toUTCString();
}

/**
 * Función que suma días, meses, años, horas, minutos y segundos a la fecha actual
 * @param {*} d Días
 * @param {*} m Meses
 * @param {*} a Años
 * @param {*} h Horas
 * @param {*} min Minutos
 * @param {*} s Segundos
 * @returns 
 */
function expiraExtraLargo(d, m, a, h, min, s) {

    let ahora = new Date();

    ahora.setDate(ahora.getDate() + d);
    ahora.setMonth(ahora.getMonth() + m);
    ahora.setFullYear(ahora.getFullYear() + a);

    ahora.setHours(ahora.getHours() + h);
    ahora.setMinutes(ahora.getMinutes() + min);
    ahora.setSeconds(ahora.getSeconds() + s);

    return ahora.toUTCString();
}




/**
 * Función que devuelve el contenido de una cookie
 * @param {*} nomCookie 
 * @returns El valor de la cookie
 */
function obtenerCookie(nomCookie) {

    if (document.cookie != "") {
        let arrayCoookies = document.cookie.split(";");

        for (let i in arrayCoookies) {
            if (arrayCoookies[i].match(nomCookie)) {
                let encontrada = arrayCoookies[i].split("=");
                let value = encontrada[1].trim();
                return value; //también me duele ese return Rosi :(
            }
        }
    }
    return null;
}


function obtenerTodasCookies() {
    let array = [];
    if (document.cookie != "") {
        let arrayCookies = document.cookie.split(";");

        for (let i in arrayCookies) {
            let clave = arrayCookies[i].split("=")[0];
            clave = clave.trim();
            array.push(clave);
        }
        return array;
    }
    return array;
}





/**
 * Función que elimina la cookie que se le pasa como parámetro
 * @param {*} nomCookie 
 */
function eliminaCookie(nomCookie) {

    let fechaNacimiento = new Date(1988, 9, 17); //MI CUMPLE :p

    creaCookie(nomCookie, "lo que sea", fechaNacimiento);
}




/*********************
 * 
 * SESSION STORAGE
 * 
 *********************/


/**
 * Función que crea una Session Storage
 * @param {*} clave
 * @param {*} valor 
 */
function creaSessionStorage(clave, valor) {
    sessionStorage.setItem(clave, valor);
}


/**
 * Función que devuelve el valor de una Session Storage a partir de su clave
 * @param {*} clave 
 * @returns El valor asociado a esa clave. Si no existe, devuelve null
 */
function obtenerSessionStorage(clave) {
    return sessionStorage.getItem(clave);
}


/**
 * Función que elimina una Session Storage a partir de su clave
 * @param {*} clave 
 */
function eliminaUnaSessionStorage(clave) {
    sessionStorage.removeItem(clave);
}


/**
 * Función que elimina todas las Session Storage
 */
function eliminaTodasSessionStorage() {
    sessionStorage.clear();
}


/**
 * Función que nos devuelve el número de Session Storage que hay actualmente.
 * @returns El número de Session Storage que hay
 */
function cuantasSessionStorage() {
    return sessionStorage.length;
}

/**
 * Función que devuelve, en un array, las claves de todas las Session Storage
 * @returns Array con todas las claves
 */
function obtenerTodasSessionStorage() {

    let length = cuantasSessionStorage();

    let array = [];

    for (let i = 0; i < length; i++) {

        let localS = sessionStorage.key(i);
        array.push(localS);
    }
    return array;
}





/*********************
 * 
 * LOCAL STORAGE
 * 
 *********************/


/**
 * Función que crea una Local Storage
 * @param {*} clave
 * @param {*} valor 
 */
function creaLocalStorage(clave, valor) {
    localStorage.setItem(clave, valor);
}


/**
 * Función que devuelve el valor de una Local Storage a partir de su clave
 * @param {*} clave 
 * @returns El valor asociado a esa clave. Si no existe, devuelve null
 */
function obtenerLocalStorage(clave) {
    return localStorage.getItem(clave);
}


/**
 * Función que elimina una Session Storage a partir de su clave
 * @param {*} clave 
 */
function eliminaUnaLocalStorage(clave) {
    localStorage.removeItem(clave);
}


/**
 * Función que elimina todas las Session Storage
 */
function eliminaTodasLocalStorage() {
    localStorage.clear();
}


/**
 * Función que nos devuelve el número de Session Storage que hay actualmente.
 * @returns El número de Session Storage que hay
 */
function cuantasLocalStorage() {
    return localStorage.length;
}

/**
 * Función que devuelve, en un array, las claves de todas las LocalStorage
 * @returns Array con todas las claves
 */
function obtenerTodasLocalStorage() {

    let length = cuantasLocalStorage();

    let array = [];

    for (let i = 0; i < length; i++) {

        let localS = localStorage.key(i);
        array.push(localS);
    }
    return array;
}






/*********************
 * 
 * CACHÉ
 * 
 *********************/


/**
 * Función que añade un elemento (request) a la cache
 * @param {*} nom Nombre de la caché
 * @param {*} req Elemento request
 */
function addCache(nom, req) {

    if ("caches" in window) {
        caches.open(nom)
            .then(function (cache) {
                cache.add(req);
            })
            .catch(function (er) {
                console.error("ERROR al add elemento en la caché " + nom + " er " + er);
            })
    }
}


/**
 * Función que añade varios elementos (request) a la cache
 * @param {*} nom Nombre de la caché
 * @param {*} array Array de request
 */
function addAllCache(nom, array) {

    if ("caches" in window) {
        caches.open(nom)
            .then(function (cache) {
                cache.addAll(array);
            })
            .catch(function (er) {
                console.error("ERROR al addAll en la caché " + nom + "er " + er);
            })
    }
}


/**
 * Función que añade (con put) un elemento a la caché
 * @param {*} nom Nombre de la caché
 * @param {*} req Elemento a añadir en caché
 */
function putCache(nom, req) {

    if ("caches" in window) {
        caches.open(nom)
            .then(function (cache) {
                fetch(req)
                    .then(function (response) {
                        if (response) {
                            cache.put(req, response);
                        }
                    })
                    .catch(function (er) {
                        console.error("ERROR en el fetch del put de la caché " + nom + " er " + er);
                    })
            })
            .catch(function (er) {
                console.error("ERROR al put en la caché " + nom + " er " + er);
            })
    }
}

/**
 * Función que elimina la caché que se le pasa como parámetro
 * @param {*} nom Nombre de la caché a eliminar
 */
function deleteCache(nom) {

    caches.has(nom)
        .then(function () {
            caches.delete(nom);
        })
        .catch(function (er) {
            console.error("ERROR en el has de la cache " + nom + " er " + er);
        });
}


/**
 * Función que elimina un elemento concreto de una caché concreta
 * @param {*} nomCache Nombre de la caché
 * @param {*} req El recurso a eliminar
 */
function deleteRequestCache(nomCache, req) {

    caches.has(nomCache)
        .then(function (existe) {
            if (existe) {
                caches.open(nomCache)
                    .then(function (cache) {
                        cache.delete(req);
                    })
                    .catch(function (er) {
                        console.error("ERROR en el open (deleteRequesCache) de la cache " + nomCache + " er " + er);
                    })
            }
        })
        .catch(function (er) {
            console.error("ERROR en el has (deleteRequestCache) de la cache " + nomCache + " er " + er);
        })
}


/**
 * Función que elimina un elemento concreto de TODAS las cachés
 * @param {*} req 
 */
function deleteRequestAllCaches(req) {

    caches.keys()
        .then(function (arrayCaches) {
            if (arrayCaches.length != 0) {
                eliminaElementos(arrayCaches, req);
            }
        })
        .catch(function (er) {
            console.error("ERROR en el keys (deleteRequestAllCaches)" + er);
        })
}

/**
 * Función auxiliar que ayuda a eliminar un elemento concreto de TODAS las cachés
 * @param {*} arrayCaches 
 */
function eliminaElementos(arrayCaches, req) {

    for (let i in arrayCaches) {
        caches.open(arrayCaches[i])
            .then(function (cache) {
                cache.delete(req);
            })
            .catch(function (er) {
                console.error("ERROR en el open al eliminar el elemento de la caché");
            })
    }
}

/**
 * Función que busca un elemento en caché. En caso de encontrarlo, lo "inserta" en el elemento
 * que le llega como parámetro.
 * Si NO encuentra el elemento, lo añade a la caché que le llega como parámetro.
 * @param {*} req Elemento a buscar
 * @param {*} nomCache Nombre de la caché donde se guardará el elemento en caso de no encontrarlo
 * @param {*} elemento Elemento del html donde irá el dato en caso de encontrarlo
 * @param {*} atributo Atributo del elemento (src, href, class, etc)
 */
function matchCacheAndAdd(req, nomCache, elemento, atributo) {

    caches.match(req)
        .then(function (resp) {
            if (resp) {
                elemento.setAttribute(atributo, resp.url);
            }
            else {
                caches.open(nomCache)
                    .then(function (cache) {
                        cache.add(req);
                    })
                    .catch(function (er) {
                        console.error("ERROR en el open del matchCacheAndAdd " + er);
                    })
            }
        })
        .catch(function (er) {
            console.error("ERROR en el match del matchCacheAndAdd " + er);
        })
}


function matchCacheAndAdd222(req, nomCache, elemento, atributo) {

    caches.match(req)
        .then(function (resp) {
            if (resp) {
                elemento.setAttribute(atributo, resp.url);
            }
            else {
                fetch(req)
                    .then(function (resp) {
                        if (resp.ok) {
                            caches.open(nomCache)
                                .then(function (cache) {
                                    cache.add(resp.url);
                                })
                                .catch(function (er) {
                                    console.error("ERROR en el open del matchCacheAndAdd " + er);
                                })
                        }
                    })
                    .catch(function (er) {
                        console.error("ERROR en el fetch de matchCacheAndAdd " + er)
                    })

            }
        })
        .catch(function (er) {
            console.error("ERROR en el match del matchCacheAndAdd " + er);
        })
}



/*********************
 * 
 * NOTIFICACIONES
 * 
 *********************/

function creaNotificacion(titulo, msn, icono) {

    if (!("Notification" in window)) {
        alert("Este navegador No soporta notificaciones");
    }
    else if (Notification.permission == "granted") {
        let options = {
            body: msn,
            icon: icono
        }
        let noti = new Notification(titulo, options);
        setTimeout(noti.close.bind(noti), 5000);
        // return noti;
    }
    else if (Notification !== 'denied') {
        Notification.requestPermission(function (permiso) {
            if (permiso === "granted") {
                let noti = new Notification("Ahora podrás recibir notificaciones");
            }
        })
    }
}








/*********************
 * 
 * FECHA Y HORA
 * 
 *********************/


/**
 * Función que devuelve la hora del objeto Date que se le pasa
 * @param {*} date 
 * @returns La hora del objeto Date (hh:mm:ss)
 */
function devuelveHora(date) {
    return date.toLocaleTimeString();
}

/**
 * Función que suma a la fecha que le llega, horas, minutos y segundos
 * y luego le resta las horas, minutos y segundos para quedarse solo 
 * con un temporizador iniciado a las horas, minutos y segundos
 * @param {*} date La fecha
 * @param {*} h Horas
 * @param {*} m Minutos
 * @param {*} s Segundos
 * @returns La fecha ya restada
 */
function temporizador(date, h, m, s) {

    date.setHours((date.getHours() + h) - (date.getHours()));
    date.setMinutes((date.getMinutes() + m) - (date.getMinutes()));
    date.setSeconds((date.getSeconds() + s) - (date.getSeconds()));

    return date;
}


/*********************
 * 
 * FUNCIONES ÚTILES
 * 
 *********************/

/**
 * Función que devuelve un número aleatorio entre el min y el max
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function generaAleatorio(min, max) {
    let num = Math.random() * (max - min) + min;
    num = Math.round(num);
    return num;
}





/**
 * Función que ordena un array de objetos por la propiedad NOMBRE_PROVINCIA
 * @param {*} orden -> ASC o DESC
 * @param {*} array -> El array de objetos
 * @returns 
 */
function ordenaArrayObjetos(orden, array, propiedad){

    if(orden=="ASC")
        array.sort((x, y) => x[propiedad].localeCompare(y[propiedad]));
    else
        array.sort((x, y) => y[propiedad].localeCompare(x[propiedad]));
    
    return array;
}



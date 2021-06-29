const clock = document.querySelector('.clock');

const reloj = () => {
    const now = new Date();
    let dia = now.getDay();
    let num = now.getDate();
    let mes = now.getMonth();
    let año = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    const dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    
    if (m<10){
        m = `0${m}`;
    }

    if (s<10){
        s = `0${s}`;
    }

    const html = `Hoy es: <br><br> ${dias[dia]} ${num} de ${meses[mes]} del ${año} y son las <br><br> ${h}:${m}:${s}`;
   
    clock.innerHTML = html;

};

setInterval(reloj, 1000);


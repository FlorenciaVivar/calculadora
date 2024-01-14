
let operacion = document.getElementById("operacion");
let botones = document.querySelectorAll(".btn");

botones.forEach(boton =>{
    boton.addEventListener("click", () =>{
        let botonClick = boton.textContent;
        console.log(boton.textContent);
        if(boton.id === 'borrarTodo'){
            operacion.textContent = "0";
            return;
        }

        if(boton.id === "borrarUltimo" ){
            if(operacion.textContent.length === 1 || operacion.textContent === "Error" ){
                operacion.textContent = "0";
            }else{
            operacion.textContent = operacion.textContent.slice(0,-1);
            }
            return;
        }

        if(boton.id === "igual"){
            try{
            operacion.textContent = eval(operacion.textContent);
            }
            catch{
                operacion.textContent = "Error";
            }
            
            return;
        }

        if (operacion.textContent === '0' || operacion.textContent === "Error" ){
            operacion.textContent = botonClick;
        }else{
            operacion.textContent += botonClick;

        }

       

    })
})
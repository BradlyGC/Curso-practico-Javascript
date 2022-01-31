//Este es el código del cuadrado
console.group("Cuadrado");

//const ladoCuadrado = 5; 
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm")

function perimetroCuadrado(lado){
	return lado * 4;		    		
} 
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm" )

function areaCuadrado(lado){
	return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrada + "cm2")


console.groupEnd();

//Este es el código del triángulo

console.group("Triangulo");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;
 

//console.log("Los lados del cuadrado miden: " 
//	+ ladoTriangulo1 
//	+ "cm, "
//	+ ladoTriangulo2
//	+ "cm, "
//	+ "" 
//	+ baseTriangulo 
//	+ "cm "
//	    );


//console.log("La altura del triángulo: " + alturaTriangulo + "cm")

//este es el código de el perimetro
function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, base){
return ladoTriangulo1 + ladoTriangulo2 + base
} ;
//console.log("El perimetro del Triangulo es: " + perimetroTriangulo + "cm" )

// Este es el código del área
function areaTriángulo(base, alturaTriangulo){
	return (base * alturaTriangulo) / 2
} 
//console.log("El area del Triangulo es: " + areaTriángulo + "cm2")

console.groupEnd();

// Este es el código del círculo
console.group("Circulo");

//radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm")

//diametro
function diametroCirculo(radio){
	return radio * 2;
}
	


//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es: " + diametroCirculo + "cm")

//pi
const pi = Math.PI;
console.log("Pi es igual a: " + pi + "cm")

//circunferencia
function perimetroCirculo(radio){
	const diametro = diametroCirculo(radio);
	return diametro * pi;
}


//const perimetroCirculo = diametroCirculo * pi;
//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm")

//area

function areaCirculo(radio){
	return(radio * radio) * pi;
}
//const areaCirculo =  (radioCirculo * radioCirculo) * pi;
//console.log("El area del circulo es: " + areaCirculo + "cm")


console.groupEnd();


// aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
	const input = document.getElementById("InputCuadrado");
	const value = Number(input.value); 

	const perimetro = perimetroCuadrado(value);
	alert(perimetro);
}
function calcularAreaCuadrado(){
	const input = document.getElementById("InputCuadrado");
	const value = input.value; 

	const area = areaCuadrado(value);
	alert(area);
}

//Triangulo 
function calcularPerimetroTriángulo(){
	const lado1=document.getElementById("Inputlado1");
	const lado2 = document.getElementById("Inputlado2");
	const base = document.getElementById("InputBaseTriangulo");

	const valuelado1= Number(lado1.value);
	const valuelado2 = Number(lado2.value);
	const valuebase = Number(base.value);

	const perimetro = valuelado1 + valuelado2 + valuebase;
	alert(perimetro);
}

function calcularAreaTriángulo() {
	const lado1=document.getElementById("Inputlado1");
	const lado2 = document.getElementById("Inputlado2");
	const base = document.getElementById("InputBaseTriangulo");

	const valuelado1= Number(lado1.value);
	const valuelado2 = Number(lado2.value);
	const valuebase = Number(base.value);

	const aarea = (valuelado1*valuebase)/2;
	alert(aarea);
}



//Circulo
function calcularPerimetroCirculo(){
	const radio = document.getElementById("InputCirculo");
	const valueRadio = Number(radio.value);

	const perimetroCirculo = (valueRadio * 2) * pi;
	alert (perimetroCirculo);

}

function calcularAreaCirculo (){
	const radio = document.getElementById("InputCirculo");
	const valueRadio = Number(radio.value);

	const areaCirculoo = (valueRadio * valueRadio) * pi
	alert(areaCirculoo);
}















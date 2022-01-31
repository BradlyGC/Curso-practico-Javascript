// Fórmula promedio ponderado
/* [(N1̈*C1)+(N2*C2́)+(N3*C3)]/ (C1+C2+C3)

N=Note
C=Credit

En otras palabras es multiplicar el numero de del cunjunto por su crédito y dividirlo entre la suma de los créditos */ 

//Primer paso es crear un array de las materias
const notes = [
	{
		class:"Educación física",
		note: 7,
		credit: 6
	},
	{
		class:"Math",
		note: 9,
		credit:5

	},
	{
		class: "programming",
		note: 8,
		credit:6,
	},
];


const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});


const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;

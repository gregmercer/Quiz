/***

var results = Results.find({}); 

$.each(results.collection.docs, function (doc) { 

  console.log(JSON.stringify(results.collection.docs[doc])); 

});

***/

/***

{"_id":"8fcea444-77ca-4fb5-8abb-23ca22fc2e55","testNumber":"3102x","answers":[{"questionId":"q1","answer":"q1a2"},{"questionId":"q2","answer":"q2a1"},{"questionId":"q3","answer":"q3a3"},{"questionId":"q4","answer":"q4a1"},{"questionId":"q5","answer":"q5a4"},{"questionId":"q6","answer":"q6a3"},{"questionId":"q7","answer":"q7a3"},{"questionId":"q8","answer":"q8a4"},{"questionId":"q9","answer":"q9a4"},{"questionId":"q10","answer":"q10a2"}],"words":["p1.encontró[Pret]","p1.Daba[Imp]","p1.poseía[Pret]","p1.sacrificaron[Pret]","p2.construyeron[Pret]","p2.admiraban.[Imp]","p2.dieron[Pret]","p3.empezaron[Pret]","p3.adoraba[Imp]","p3.demostraban[Imp]","p4.colocaron[Pret]","p4.hacia[Imp]","p5.encontró[Pret]","p5.Estaba[Imp]","p5.honraban[Imp]","p5.colocaron[Pret]"],"storyTime":273,"questionTime":155}
{"_id":"61b9611d-47a7-4d4b-8d1e-8d0da0042655","testNumber":"2103x","answers":[{"questionId":"q1","answer":"q1a3"},{"questionId":"q2","answer":"q2a1"},{"questionId":"q3","answer":"q3a2"},{"questionId":"q4","answer":"q4a1"},{"questionId":"q5","answer":"q5a4"},{"questionId":"q6","answer":"q6a4"},{"questionId":"q7","answer":"q7a1"},{"questionId":"q8","answer":"q8a4"},{"questionId":"q9","answer":"q9a3"},{"questionId":"q10","answer":"q10a1"}],"words":["p4.hacia","p4.fuera","p4.incluía","p5.Estaba","p5.vuelto","p5.hacia","p5.podía","p5.honraban"],"storyTime":335,"questionTime":359}
{"_id":"cbdb06ba-14fb-4a95-8c95-86d933933bee","testNumber":"1104x","answers":[{"questionId":"q1","answer":"q1a1"},{"questionId":"q2","answer":"q2a1"},{"questionId":"q3","answer":"q3a2"},{"questionId":"q4","answer":"q4a4"},{"questionId":"q5","answer":"q5a4"},{"questionId":"q6","answer":"q6a3"},{"questionId":"q7","answer":"q7a1"},{"questionId":"q8","answer":"q8a4"},{"questionId":"q9","answer":"q9a1"},{"questionId":"q10","answer":"q10a2"}],"words":[],"storyTime":370,"questionTime":145}
{"_id":"b21c8690-3dfa-4fa2-8316-520b87574f08","testNumber":"3005x","answers":[{"questionId":"q1","answer":"q1a4"},{"questionId":"q2","answer":"q2a1"},{"questionId":"q3","answer":"q3a2"},{"questionId":"q4","answer":"q4a3"},{"questionId":"q5","answer":"q5a4"},{"questionId":"q6","answer":"q6a1"},{"questionId":"q7","answer":"q7a3"},{"questionId":"q8","answer":"q8a2"},{"questionId":"q9","answer":"q9a1"},{"questionId":"q10","answer":"q10a2"}],"words":["p1.encontró[Pret]","p1.Daba[Imp]","p1.poseía[Imp]","p1.sacrificaron[Pret]","p2.construyeron","p2.admiraban.[Imp]","p2.era[Imp]","p2.dieron[Pret]","p3.empezaron[Pret]","p3.adoraba[Imp]","p3.pusieron[Pret]","p3.demostraban[Imp]","p4.colocaron[Pret]","p5.encontró[Pret]","p5.Estaba[Imp]","p5.hacia","p5.abajo,","p5.podía[Imp]","p5.honraban[Imp]","p5.trasladaron[Pret]","p5.colocaron[Pret]"],"storyTime":502,"questionTime":166}

***/

/***

var story = Story.find({}); 

$.each(story.collection.docs, function (doc) { 

  console.log(JSON.stringify(story.collection.docs[doc])); 

});

***/

/***

{"_id":"25f34558-c0b7-43b9-85d0-cca49de6c08f","id":"s1",
"paragraphs":[
{"id":"1","text":"El pueblo azteca, como pueblo primitivo, encontró una solución a los problemas presentados por las fuerzas de la naturaleza. Daba mucha importancia a su religión, sobre todo a su Dios principal y todopoderoso Tonatiuh (el sol). Tonatiuh poseía las mismas bondades y los defectos de los humanos, pero con un gran poder sobrenatural. Durante su historia, los antiguos mexicanos le sacrificaron muchos humanos al sol pero no por crueldad ni instintos bárbaros, sino por respeto y adoración."},
{"id":"2","text":"Los Aztecas construyeron muchos monumentos para honrar al sol que tanto admiraban. Entre estos monumentos el más importante era la Piedra del Sol. Hoy día, se la conoce también con los nombres de Calendario Azteca o Jícara de Águilas (los aztecas le dieron el nombre de Cuauhxicalli). El Calendario Azteca es una de las obras de arte más hermosas de esta cultura. Es un monolito o monumento de piedra."},
{"id":"3","text":"Se supone que los Aztecas empezaron a construir el monumento de piedra en 1449. Como el sol tiene mucha luz, razón por la cual el pueblo azteca lo adoraba mucho, los cabellos de Tonatiuh son de color dorado en el monolito. En el rostro de la escultura, los aztecas le pusieron arrugas, las cuales son características de una persona vieja y que, según los aztecas, demostraban madurez y sabiduría."},
{"id":"4","text":"Por último, los antiguos mexicanos le colocaron una lengua al sol en su representación en el monolito, la que cuelga hacia fuera como un cuchillo, lo que indica que es necesario que alimenten al dios Sol con una sustancia mágica, que, en esa época, incluía el corazón de un humano. La lengua en el sol simboliza el profundo respeto de los aztecas hacia Tonatiuh."},
{"id":"5","text":"Se encontró el monolito el 17 de diciembre de 1790. Estaba vuelto hacia abajo, con una cara esculpida. En la cara, se podía ver el rostro del Tonatiuh, el sol, a quien honraban los aztecas como el amo y señor de los cielos. Después de encontrar el  calendario por primera vez, lo trasladaron a la Catedral Metropolitana y en 1885 lo colocaron en una de las salas del Museo Nacional de Historia. Hoy día está en el Museo Nacional de Antropología, en el Bosque de Chapultepec."}
]
}

***/

/***

var questions = Questions.find({}); 

$.each(questions.collection.docs, function (doc) { 

  console.log(JSON.stringify(questions.collection.docs[doc])); 

});

***/

/***

var answers = QuestionAnswers.find({}); 

$.each(answers.collection.docs, function (doc) { 

  console.log(JSON.stringify(answers.collection.docs[doc])); 

});

***/

/***



***/



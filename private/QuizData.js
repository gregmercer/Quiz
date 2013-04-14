/*
 * Data
 * 
 
PracticeQuestions.remove({});
Questions.remove({});

PracticeStory.remove({});
Story.remove({});

Results.remove({});

var practiceQuestions = PracticeQuestions.find({});
$.each(practiceQuestions.collection.docs, function (doc) {
  console.log(JSON.stringify(practiceQuestions.collection.docs[doc]));
});

var questions = Questions.find({});
$.each(questions.collection.docs, function (doc) {
  console.log(JSON.stringify(questions.collection.docs[doc]));
});

var practiceStory = PracticeStory.find({});
$.each(practiceStory.collection.docs, function (doc) {
  console.log(JSON.stringify(practiceStory.collection.docs[doc]));
});

var results = Results.find({});
$.each(results.collection.docs, function (doc) {
  console.log(JSON.stringify(results.collection.docs[doc]));
});

PracticeQuestions.insert(
  {
	"question":"1. When Frida Kahlo was five years old, she suffered from a disease known as:",
	"answers":
		[
      {"id":"pq1a1",questionId:"pq1","answer":"a.	Tuberculosis"}, 
      {"id":"pq1a2",questionId:"pq1","answer":"b. Polio."},
      {"id":"pq1a3",questionId:"pq1","answer":"c. Tetanus."},
      {"id":"pq1a4",questionId:"pq1","answer":"d. Malaria."}
		],
	"questionId":"pq1"
  }  
);  

PracticeQuestions.insert(
  {
	"question":"2. She survived, but:",
	"answers":
		[
			{"id":"pq2a1",questionId:"pq2","answer":"a. she lost her sense of hearing."},		
			{"id":"pq2a2",questionId:"pq2","answer":"b. one of her arms were left shortened."}, 
			{"id":"pq2a3",questionId:"pq2","answer":"c. one of her legs were left shortened."},
			{"id":"pq2a4",questionId:"pq2","answer":"d. two of her fingers were left thinner."}
		],
	"questionId":"pq2"
  }  
); 

PracticeQuestions.insert(
  {
	"question":"3. Frida Kahlo mostly painted:",
	"answers":
		[
			{"id":"pq3a1",questionId:"pq3","answer":"a. her family."}, 
			{"id":"pq3a2",questionId:"pq3","answer":"b. herself."},
			{"id":"pq3a3",questionId:"pq3","answer":"c. herself and things that were important to her."},
			{"id":"pq3a4",questionId:"pq3","answer":"d. her family and other things that were important to her."}
		],
	"questionId":"pq3"
  }  
);  

PracticeQuestions.insert(
  {
	"question":"4. In her paintings, Frida Kahlo used:",
	"answers":
		[
			{"id":"pq4a1",questionId:"pq4","answer":"a. important figures from her country."}, 
			{"id":"pq4a2",questionId:"pq4","answer":"b. religious images."},
			{"id":"pq4a3",questionId:"pq4","answer":"c. lots of colors."},
			{"id":"pq4a4",questionId:"pq4","answer":"d. All of the above."}
		],
	"questionId":"pq4"
  }  
);  
 
Questions.insert(
  {
	"question":"1. Tonatiuh was the Aztec’s solution to:",
	"answers":
		[
      {"id":"q1a1",questionId:"q1","answer":"a. win battles."}, 
      {"id":"q1a2",questionId:"q1","answer":"b. unexplicable deaths."},
      {"id":"q1a3",questionId:"q1","answer":"c. the forces of nature."},
      {"id":"q1a4",questionId:"q1","answer":"d. find peace."}
		],
	"questionId":"q1"
  }  
);  

Questions.insert(
  {
	"question":"2. Tonatiuh possessed the following characteristics:",
	"answers":
		[
			{"id":"q2a1",questionId:"q2","answer":"a. a great supernatural power."}, 
			{"id":"q2a2",questionId:"q2","answer":"b. human strengths, but accompanied by a supernatural power."},
			{"id":"q2a3",questionId:"q2","answer":"c. human weaknesses, but accompanied by a supernatural power."},
			{"id":"q2a4",questionId:"q2","answer":"d. human strengths and weaknesses, together with a supernatural power."}
		],
	"questionId":"q2"
  }  
); 

Questions.insert(
  {
	"question":"3. The Aztecs performed human sacrifices:",
	"answers":
		[
			{"id":"q3a1",questionId:"q3","answer":"a. to appease Tonatiuh."}, 
			{"id":"q3a2",questionId:"q3","answer":"b. to appease their gods and also because they were barbaric warriors."},
			{"id":"q3a3",questionId:"q3","answer":"c. because they were known for their barbaric instincts and cruelty."},
			{"id":"q3a4",questionId:"q3","answer":"d. All of the above."}
		],
	"questionId":"q3"
  }  
);  

Questions.insert(
  {
	"question":"4. The Aztecs are the ancestors of:",
	"answers":
		[
			{"id":"q4a1",questionId:"q4","answer":"a. Mexicans"}, 
			{"id":"q4a2",questionId:"q4","answer":"b. Peruvians"},
			{"id":"q4a3",questionId:"q4","answer":"c. Argentinians"},
			{"id":"q4a4",questionId:"q4","answer":"d. Cubans"}
		],
	"questionId":"q4"
  }  
); 

Questions.insert(
  {
	"question":"5. The Aztecs constructed:",
	"answers":
		[
			{"id":"q5a1",questionId:"q5","answer":"a. many monuments to honor Tonatiuh."}, 
			{"id":"q5a2",questionId:"q5","answer":"b. some monuments to honor Tonatiuh."},
			{"id":"q5a3",questionId:"q5","answer":"c. only one monument to honor Tonatiuh."},
			{"id":"q5a4",questionId:"q5","answer":"d. three monuments to honor Tonatiuh."}
		],
	"questionId":"q5"
  }  
); 

Questions.insert(
  {
	"question":"6. The most important monument in Aztec life was:",
	"answers":
		[
			{"id":"q6a1",questionId:"q6","answer":"a. Jícara de Aguilas."}, 
			{"id":"q6a2",questionId:"q6","answer":"b. Piedra del Sol."},
			{"id":"q6a3",questionId:"q6","answer":"c. Cuauhxicalli."},
			{"id":"q6a4",questionId:"q6","answer":"d. All of the above."}
		],
	"questionId":"q6"
  }  
); 

Questions.insert(
  {
	"question":"7. The Calendario Azteca is one of the:",
	"answers":
		[
			{"id":"q7a1",questionId:"q7","answer":"a. largest works of the Aztec culture."}, 
			{"id":"q7a2",questionId:"q7","answer":"b. most beautiful works of the Aztec culture."},
			{"id":"q7a3",questionId:"q7","answer":"c. oldest works of the Aztec culture."},
			{"id":"q7a4",questionId:"q7","answer":"d. None of the above."}
		],
	"questionId":"q7"
  }  
); 

Questions.insert(
  {
	"question":"8. The Calendario Azteca was:",
	"answers":
		[
			{"id":"q8a1",questionId:"q8","answer":"a. the famous Aztec calendar known for its accuracy."}, 
			{"id":"q8a2",questionId:"q8","answer":"b. the name of a well-known museum in Mexico."},
			{"id":"q8a3",questionId:"q8","answer":"c. a monument made of stone."},
			{"id":"q8a4",questionId:"q8","answer":"d. a special ritual for Tonatiuh."}		       
		],
	"questionId":"q8"
  }  
); 

Questions.insert(
  {
	"question":"9. It is thought that the Aztecs began construction on the monument of Tonatiuh in:",
	"answers":
		[
			{"id":"q9a1",questionId:"q9","answer":"a. 1348."}, 
			{"id":"q9a2",questionId:"q9","answer":"b. 1454."},
			{"id":"q9a3",questionId:"q9","answer":"c. 1449."},
			{"id":"q9a4",questionId:"q9","answer":"d. 1502."}
		],
	"questionId":"q9"
  }  
); 

Questions.insert(
  {
	"question":"10. The color of Tonatiuh’s hair was:",
	"answers":
		[
			{"id":"q10a1",questionId:"q10","answer":"a. red."}, 
			{"id":"q10a2",questionId:"q10","answer":"b. black."},
			{"id":"q10a3",questionId:"q10","answer":"c. white."},
			{"id":"q10a4",questionId:"q10","answer":"d. golden."}		       
		],
	"questionId":"q10"
  }  
); 

Questions.insert(
  {
	"question":"11. Tonatiuh’s face appears:",
	"answers":
		[
			{"id":"q11a1",questionId:"q11","answer":"a. old."}, 
			{"id":"q11a2",questionId:"q11","answer":"b. young."},
			{"id":"q11a3",questionId:"q11","answer":"c. bright."},
			{"id":"q11a4",questionId:"q11","answer":"d. dark."}		       
		],
	"questionId":"q11"
  }  
); 

Questions.insert(
  {
	"question":"12. According to the Aztecs, wrinkles symbolized:",
	"answers":
		[
			{"id":"q12a1",questionId:"q12","answer":"a. maturity."}, 
			{"id":"q12a2",questionId:"q12","answer":"b. cleverness."},
			{"id":"q12a3",questionId:"q12","answer":"c. wisdom."},
			{"id":"q12a4",questionId:"q12","answer":"d. Both A & C."}		       
		],
	"questionId":"q12"
  }  
); 

Questions.insert(
  {
	"question":"13. Tonatiuh’s tongue is:",
	"answers":
		[
			{"id":"q13a1",questionId:"q13","answer":"a. extended in the form of a knife."}, 
			{"id":"q13a2",questionId:"q13","answer":"b. one of the longest among the different gods."},
			{"id":"q13a3",questionId:"q13","answer":"c. thought to hold magical power."},
			{"id":"q13a4",questionId:"q13","answer":"d. decorated with magical substance."}		       
		],
	"questionId":"q13"
  }  
); 

Questions.insert(
  {
	"question":"14. The magical substance that the Aztecs gave an as offering to Tonatiuh included:",
	"answers":
		[
			{"id":"q14a1",questionId:"q14","answer":"a. a human toe."}, 
			{"id":"q14a2",questionId:"q14","answer":"b. a human brain."},
			{"id":"q14a3",questionId:"q14","answer":"c. a human heart."},
			{"id":"q14a4",questionId:"q14","answer":"d. both a human brain and a human heart."}		       
		],
	"questionId":"q14"
  }  
); 

Questions.insert(
  {
	"question":"15. The monument of Tonatiuh was found in:",
	"answers":
		[
			{"id":"q15a1",questionId:"q15","answer":"a. 1790."}, 
			{"id":"q15a2",questionId:"q15","answer":"b. 1770."},
			{"id":"q15a3",questionId:"q15","answer":"c. 1750."},
			{"id":"q15a4",questionId:"q15","answer":"d. 1800."}		       
		],
	"questionId":"q15"
  }  
); 

Questions.insert(
  {
	"question":"16. The monument was found",
	"answers":
		[
			{"id":"q16a1",questionId:"q16","answer":"a. face down."}, 
			{"id":"q16a2",questionId:"q16","answer":"b. face up."},
			{"id":"q16a3",questionId:"q16","answer":"c. broken into two pieces."},
			{"id":"q16a4",questionId:"q16","answer":"d. broken into three pieces."}		       
		],
	"questionId":"q16"
  }  
); 

Questions.insert(
  {
	"question":"17. In the Calendario Azteca, a carving of:",
	"answers":
		[
			{"id":"q17a1",questionId:"q17","answer":"a. the sun was found."}, 
			{"id":"q17a2",questionId:"q17","answer":"b. the face of Tonatiuh was found."},
			{"id":"q17a3",questionId:"q17","answer":"c. the face of the God of the skies was found."},
			{"id":"q17a4",questionId:"q17","answer":"d. All of the above. "}		       
		],
	"questionId":"q17"
  }  
); 

Questions.insert(
  {
	"question":"18. After being found, the Calendario Azteca was originally placed in the:",
	"answers":
		[
			{"id":"q18a1",questionId:"q18","answer":"a. Catedral Metropolitana."}, 
			{"id":"q18a2",questionId:"q18","answer":"b. Museo Nacional de Historia."},
			{"id":"q18a3",questionId:"q18","answer":"c. Bosque de Chapultepec."},
			{"id":"q18a4",questionId:"q18","answer":"d. Museo Nacional de Antropología."}		       
		],
	"questionId":"q18"
  }  
); 

Questions.insert(
  {
	"question":"19. Today, the Calendario Azteca can be found in:",
	"answers":
		[
			{"id":"q19a1",questionId:"q19","answer":"a. Museo Nacional de Antropología."}, 
			{"id":"q19a2",questionId:"q19","answer":"b. Museo Nacional de Historia."},
			{"id":"q19a3",questionId:"q19","answer":"c. Catedral Metropolitana."},
			{"id":"q19a4",questionId:"q19","answer":"d. None of the above"}		       
		],
	"questionId":"q19"
  }  
); 

Questions.insert(
  {
	"question":"20. The Museo Nacional de Antropología can be found in:",
	"answers":
		[
			{"id":"q20a1",questionId:"q20","answer":"a. the Catedral Metropolitana."}, 
			{"id":"q20a2",questionId:"q20","answer":"b. the Bosque de Chapultepec."},
			{"id":"q20a3",questionId:"q20","answer":"c. the Museo Nacional de Historia."},
			{"id":"q20a4",questionId:"q20","answer":"d. None of the above."}		       
		],
	"questionId":"q20"
  }  
); 

PracticeStory.insert(
  {
	"id":"ps1",
	"paragraphs":
	  [
		  {"id":"1","text":"Para mí, Frida Kahlo es una de las más grandes artistas mexicanas. Cuando tenía 5 años sufrió una enfermedad muy grave llamada polio, y Frida sobrevivió, pero una de sus piernas le quedó muy débil, más corta y más delgada que la otra. Su padre era fotógrafo y artista y se cree que mantenía una relación muy profunda con Frida."},
		  {"id":"2","text":"Ella hacía algunos retratos de sus familiares y amigos, pero sobretodo se pintó a sí misma rodeada de las cosas importantes para ella, y de las cosas que le causaban dolor. Sabemos que Frida pintaba sus sentimientos, sus emociones y su dolor y para ello utilizaba el colorido y las figuras tradicionales de su país y las imágenes religiosas del arte popular mexicano. Su final me parece muy triste y doloroso: el dolor se apoderó de ella impidiéndole hacer una vida normal y un año antes de morir se vieron obligados a amputarle una pierna y luego murió en su casa azul. Sus obras de arte, sin embargo, durarán para siempre."},
	  ]
  }
);

Story.insert(
  {
	"id":"s1",
	"paragraphs":
	  [
		  {"id":"1","text":"El pueblo azteca, como pueblo primitivo, descubrió una solución a los problemas presentados por las fuerzas de la naturaleza. Se sabe que el pueblo azteca daba mucha importancia a su religión, sobre todo a su dios principal y todopoderoso Tonatiuh (el sol). Tonatiuh poseía las mismas bondades y los defectos de los humanos, pero con un gran poder sobrenatural. Durante su historia, los antiguos mexicanos le sacrificaron muchos humanos al sol pero no por crueldad ni instintos bárbaros, sino por respeto y adoración."},
		  {"id":"2","text":"Los Aztecas construyeron muchos monumentos para honrar al sol que tanto admiraban. Entre estos monumentos el más importante era la Piedra del Sol. Hoy día, se la conoce también con los nombres de Calendario Azteca o Jícara de Águilas (el pueblo Azteca le dio el nombre de Cuauhxicalli). El Calendario Azteca es una de las obras de arte más hermosas de esta cultura. Es un monolito o monumento de piedra."},
		  {"id":"3","text":"Se supone que el pueblo Azteca empezó a construir el monumento de piedra en 1449. Como el sol tiene mucha luz, razón por la cual los aztecas lo querían mucho, los cabellos de Tonatiuh son de color dorado en el monolito. En el rostro de la escultura, el pueblo Azteca incluyó arrugas, las cuales son características de una persona vieja y que, según los aztecas, demostraban madurez y sabiduría."},
		  {"id":"4","text":"Por último, los antiguos mexicanos le pusieron una lengua al sol en su representación de este dios en el monolito, la que cuelga hacia fuera como un cuchillo. Esto indica que es necesario que alimenten al dios Sol con sustancias mágicas, que, en esa época, incluían el corazón de un humano. La lengua en el sol simboliza el profundo respeto de los aztecas hacia Tonatiuh."},
		  {"id":"5","text":"Se encontró el monolito el 17 de diciembre de 1790. Estaba vuelto hacia abajo, con una cara esculpida. En la cara, se podía ver el rostro del Tonatiuh, el sol, a quien honraban los aztecas como el amo y señor de los cielos. Después de encontrar el  calendario por primera vez, lo trasladaron a la Catedral Metropolitana y en 1885 lo colocaron en una de las salas del Museo Nacional de Historia. Hoy día está en el Museo Nacional de Antropología, en el Bosque de Chapultepec."}
	  ]
  }
);

QuestionAnswers.insert(
  {
	"questionId":"q1",
	"answer":"q1a3"
  }  
); 

QuestionAnswers.insert(
  {
	"questionId":"q2",
	"answer":"q2a4"
  }  
); 

QuestionAnswers.insert(
  {
	"questionId":"q3",
	"answer":"q3a1"
  }  
); 

QuestionAnswers.insert(
  {
	"questionId":"q4",
	"answer":"q4a1"
  }  
); 

QuestionAnswers.insert(
  {
	"questionId":"q5",
	"answer":"q5a1"
  }  
); 

QuestionAnswers.insert(
  {
	"questionId":"q6",
	"answer":"q6a4"
  }  
); 

QuestionAnswers.insert(
  {
	"questionId":"q7",
	"answer":"q7a2"
  }  
); 

QuestionAnswers.insert(
  {
	"questionId":"q8",
	"answer":"q8a3"
  }  
); 

QuestionAnswers.insert(
  {
	"questionId":"q9",
	"answer":"q9a3"
  }  
); 

QuestionAnswers.insert(
  {
	"questionId":"q10",
	"answer":"q10a4"
  }  
); 

QuestionAnswers.insert(
  {
	"questionId":"q11",
	"answer":"q11a1"
  }  
); 

QuestionAnswers.insert(
  {
	"questionId":"q12",
	"answer":"q12a4"
  }  
); 

QuestionAnswers.insert(
  {
	"questionId":"q13",
	"answer":"q13a1"
  }  
); 

QuestionAnswers.insert(
  {
	"questionId":"q14",
	"answer":"q14a3"
  }  
); 

QuestionAnswers.insert(
  {
	"questionId":"q15",
	"answer":"q15a1"
  }  
); 

QuestionAnswers.insert(
  {
	"questionId":"q16",
	"answer":"q16a1"
  }  
); 

QuestionAnswers.insert(
  {
	"questionId":"q17",
	"answer":"q17a4"
  }  
); 

QuestionAnswers.insert(
  {
	"questionId":"q18",
	"answer":"q18a1"
  }  
); 

QuestionAnswers.insert(
  {
	"questionId":"q19",
	"answer":"q19a1"
  }  
); 

QuestionAnswers.insert(
  {
	"questionId":"q20",
	"answer":"q20a2"
  }  
); 

**/

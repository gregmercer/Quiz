
/*=========================================================================================

  // step 1 - TestNumber form
  // step 2 - Think Aload Intructions  
  // step 3 - Practice Reading Instructions
  // step 4 - Practice Story
  // step 5 - Practice Question Instructions  
  // step 6 - Practice Questions  
  // step 7 - Reading Instructions
  // step 8 - Story
  // step 9 - Question Instructions
  // step 10 - Questions
  // step 11 - Thanks    

==========================================================================================*/

/*=========================================================================================

  Globals

==========================================================================================*/

var devTesting = false;

var PracticeQuestions = new Meteor.Collection("PracticeQuestions");
var PracticeQuestionAnswers = new Meteor.Collection("PracticeQuestionAnswers");
var PracticeStory = new Meteor.Collection("PracticeStory");

var Questions = new Meteor.Collection("Questions");
var QuestionAnswers = new Meteor.Collection("QuestionAnswers");
var Story = new Meteor.Collection("Story");

var Results = new Meteor.Collection("Results");

var STORYTYPE_STORY = "story";
var STORYTYPE_PRACTICESTORY = "practiceStory";

var QUESTIONTYPE_QUESTION = "question";
var QUESTIONTYPE_PRACTICEQUESTION = "practiceQuestion";

var QUESTION_PREFIX_QUESTION = "q";
var QUESTION_PREFIX_PRACTICE_QUESTION = "pq";

var STORY_PREFIX_STORY = "s1";
var STORY_PREFIX_PRACTICE_STORY = "ps1";

var SESSION_CURRENTSTEP = "currentStep";

/*=========================================================================================

  jQuery UI Dialog

==========================================================================================*/

// The confirm dialog.

var confirmDialog = function() {

  function createDialog() {

    $( "#dialog-confirm" ).dialog({
      autoOpen: false,      
      resizable: false,
      height:160,
      position: [300, 50],
      modal: true,
      buttons: {}
    });

  }; // end createDialog()

  return {
    init: function () {
      createDialog();
    },
    showDialog: function(title, message, yesButton, noButton) {
      $( "#dialog-confirm" ).dialog( "option", "title", title );
      $( "#dialog-confirm" ).text(message);
      $( "#dialog-confirm" ).dialog( "option", "buttons", [ yesButton, noButton ] );
      $( "#dialog-confirm" ).dialog( "option", "position", [300, 50] );
      $( "#dialog-confirm" ).dialog( "open" );
      $('.ui-dialog').focus(); 
      $('.ui-dialog-buttonpane button:eq(0)').focus(); 
    }    
  };  

}(); // end confirmDialog (object)  

/*=========================================================================================

  Countdown Timer code 

==========================================================================================*/

var timer_interval = 0;

// getElementById alias.
var get = function(id) {
  return document.getElementById(id);
};

// The countdown timer.
var counter = function() {

  var end, delta, counter_element, counter_id, counter_storyType;

  function formatNumber(n) {
    return ((n < 10) ? "0" : "") + n;
  };

  function updateCountDown() {

    delta = end - (new Date().getTime());

    var bar_container = get('container');

    if (delta <= 60000) { // warn when 1 min left
      bar_container.className = 'warn';
    }

    if (delta >=0){
      var d = new Date(delta);
      var hh = formatNumber(d.getUTCHours());
      var mm = formatNumber(d.getUTCMinutes());
      var ss = formatNumber(d.getUTCSeconds());
      counter_element.innerHTML = hh + ':' + mm + ':' + ss;
    } else {
      
      counter_element.innerHTML = 'Time over!';
      stopStoryTimer();
      
      $("#page-blocker").show();

      var yesButton =  { text: "Yes", click: function() {

        saveStoryTimeOut(true, counter_storyType);
        $("#page-blocker").hide();
        $("#container").hide();
        endStoryOnTimeLimit(counter_storyType);

        $( this ).dialog( "close" ); 

      }};

      var noButton = { text: "No", click: function() {

        saveStoryTimeOut(false, counter_storyType);
        $("#page-blocker").hide();
        $("#container").hide();

        $( this ).dialog( "close" ); 

      }};          

      confirmDialog.showDialog( "Answer Carefully", "Click yes if you completed reading the text.", yesButton, noButton );

    }

  }; // end updateCountDown()

  return {
    init: function (seconds, id, storyType) {
      console.log('in init()');
      counter_id = id;
      counter_storyType = storyType;
      counter_element = get(counter_id);
      end = new Date().getTime() + (1000 * seconds);
      $("#container").show();
      updateCountDown();
      timer_interval = setInterval(updateCountDown, 990);
    }
  };

}(); // end counter (object)

function initCounter(storyType) {

  var timeLimit = getStoryTimeLimit();
  console.log('story time limit = '+timeLimit);

  if (timeLimit == -1) {
    // no time limit
    return;
  }

  // Initialize countdown.
  console.log('before call to counter.init()');
  counter.init(timeLimit, 'countdown-time', storyType);  

}

/*=========================================================================================

  Client code 

==========================================================================================*/

if (Meteor.is_client) {	

  setQuestionNumber(QUESTIONTYPE_PRACTICEQUESTION, 1);
  setNumQuestions(QUESTIONTYPE_PRACTICEQUESTION, 0);
  
  setQuestionNumber(QUESTIONTYPE_QUESTION, 1);
  setNumQuestions(QUESTIONTYPE_QUESTION, 0);  

  setTestNumber(0);

  setCurrentStep("1");
  
  // Steps
  
  // step 1 - TestNumber form
  // step 2 - Think Aload Intructions  
  // step 3 - Practice Reading Instructions
  // step 4 - Practice Story
  // step 5 - Practice Question Instructions  
  // step 6 - Practice Questions  
  // step 7 - Reading Instructions
  // step 8 - Story
  // step 9 - Question Instructions
  // step 10 - Questions
  // step 11 - Thanks    

  // Test Number
  //
  // first digit = 1 means story only
  // first digit = 2 means story with word selection only
  // first digit = 3 means story with word selection and word classification
  //
  // second digit = 0 means don't show think aload instructions
  // second digit = 1 means show think aload instructions
  //
  // So here's some examples...
  // 
  // Test Number equals: 
  //
  // 101 means story only (no word selection, no word classification); and no "think aload" instructions
  // 111 means story only (no word selection, no word classification); and with "think aload" instructions
  //
  // 201 means story with word selection (no word classification); and no "think aload" instructions
  // 211 means story with word selection (no word classification); and with "think aload" instructions
  //
  // 301 means story with word selection and word classification; and no "think aload" instructions
  // 311 means story with word selection and word classification; and with "think aload" instructions
  //   

/*=========================================================================================

  Templates 

==========================================================================================*/
  
  Template.Main.Step1 = function() {
  
    // TestNumber form 
  
    if (getCurrentStep() == "1") {
      initApp();
    }

    return doStep("1");
	
  }; // end Template.Main.Step1
  
  Template.Main.Step2 = function() {
    
    // Think Aload Instructions
    
    return doStep("2");
  
  }; // end Template.Main.Step2   
  
  Template.Main.Step3 = function() {
    
    // Practice Reading Instructions
    
    return doStep("3");  
  
  }; // end Template.Main.Step3  

  Template.Main.Step4 = function() {
  
    // Practice Story

    if (getCurrentStep() == "4") {
      Meteor.defer(function () { 
        initCounter(STORYTYPE_PRACTICESTORY);
      });    
    }    
  
    return doStep("4");  
  
  };   

  Template.Main.Step5 = function() {
    
    // Practice Question Instructions  

    return doStep("5");     
  
  };  

  Template.Main.Step6 = function() {
  
    // Practice Questions
  
    if (getCurrentStep() == "6") {
      var questionNumber = getQuestionNumber(QUESTIONTYPE_PRACTICEQUESTION);
      console.log('questionNumber = ' + questionNumber);
      if (questionNumber <= getNumQuestions(QUESTIONTYPE_PRACTICEQUESTION)) {
        console.log('display next question');
        return true;
      }
    }
    
    return false;   
  
  };

  Template.Main.Step7 = function() {
    
    // Reading Instructions

    return doStep("7");    
  
  }; // end Template.Main.Step3  
  
  Template.Main.Step8 = function() {
  
    // Story	

    if (getCurrentStep() == "8") {
      Meteor.defer(function () { 
        initCounter(STORYTYPE_STORY);
      });    
    }

    return doStep("8");
  
  };   

  Template.Main.Step9 = function() {
    
    // Question Instructions

    return doStep("9");		
  
  };   
  
  Template.Main.Step10 = function() {
  
  	// Questions
  
    if (getCurrentStep() == "10") {
    	var questionNumber = getQuestionNumber(QUESTIONTYPE_QUESTION);
    	console.log('questionNumber = ' + questionNumber);
    	if (questionNumber <= getNumQuestions(QUESTIONTYPE_QUESTION)) {
    		console.log('display next question');
      	return true;
    	}
    }
    
    return false;		
  
  };    
  
  Template.Main.Step11 = function() {
  
    // Poll Step 1 of 3

    return doStep("11");
  
  };  

  Template.Main.Step12 = function() {
  
    // Poll Step 2 of 3
    
    return doStep("12");
  
  };  

  Template.Main.Step13 = function() {
  
    // Poll Step 3 of 3
    
    return doStep("13");
  
  };    

  Template.Main.Step14 = function() {
  
    // Thanks
  
    if (getCurrentStep() == "14") {
      setTestNumber(0);
    } 

    return doStep("14");    
  
  }; 

  Template.Main.Admin = function() {
  
    // TestNumber form 
  
    if (getCurrentStep() == "admin") {
      return true;
    }
    
    return false;
	
  };   

/*=========================================================================================

  Data 

==========================================================================================*/
  
  
  Template.Step2.instructions = function() {

    // Reading Aload Instructions
	
    var part1 = "Instructions";
    
    var part2 = "Guide to thinking aloud";

    var part3 = "In this experiment I am interested in what you think about while you are " + 
                "completing the entire experiment. Thus, I am going to ask you to THINK " + 
				        "ALOUD as you read a written text and answer questions in the follow-up " + 
				        "tasks (comprehension task); that is, you are supposed " + 
				        "to THINK ALOUD from the time when you begin to read a written text " +
				        "until you finish the last task. Don’t plan what to say or " + 
				        "try to explain to me what you are thinking/saying, but rather let your " + 
				        "thoughts speak. Just act as if you were alone in this lab speaking to " + 
				        "yourself. I would like you to talk CONSTANTLY, CLEARLY, and " + 
				        "LOUDLY. Please take your time. You can think aloud either in Spanish " + 
				        "or in English. Please let me know if you have any questions.";

    var part4 = "Now, practice thinking aloud with the following task.";

    var part5 = "Think aloud, that is, verbalize aloud or say whatever comes to your mind while you " + 
 				        "perform this task. You don’t need to explain what you are saying just talk aloud as you " + 
                "do the task: Calculating the total cost of a grocery list.";

    var part6 = "You want to buy";
	
    var part7 = "Total ___________";

    var part8 = "You have $20. How much do you have left? ___________";
	
    var stuff = new Array();
    stuff.push({ part1: part1, part2: part2, part3: part3, part4: part4, part5: part5, part6: part6, part7: part7, part8: part8 });	
	
    return stuff;

  }; 	

  Template.Step3.instructions = function() {
    
    // Practice Reading Instructions
    
    var testNumber = getTestNumber();
    
    var firstNumber = testNumber.charAt(0);
    
    var instructions = "";
    if (firstNumber == "1") {
      instructions = "Please read as quickly as you can the following text on Frida Kahlo for " + 
          "comprehension. You will be asked to answer some questions after your " + 
				  "reading without referring back to the text.";
	   } else if (firstNumber == "2") {
	     instructions = "Please read as quickly as you can the following text on Frida Kahlo for " + 
          "comprehension. You will be asked to answer some questions after your " + 
          "reading without referring back to the text. At the same time, as you read, please click on " + 
          "all instances of verbs in the past tense, meaning preterite or imperfect. Don’t " + 
          "worry, however, about which of these two each verb in the past is. You may click an additional time to erase your marking.";
    } else if (firstNumber == "3") {
	     instructions = "Please read as quickly as you can the following text on Frida Kahlo for " + 
          "comprehension. You will be asked to answer some questions after your " + 
					"reading without referring back to the text. At the same time, please click once on all instances of the imperfect and twice on all " + 
					"instances of the preterit as you read. You’ll see [IMP] appear after those that you have clicked once, indicating that you believe " + 
					"they are imperfect forms, and [PRET] appear after those you have clicked twice on, indicating that you believe they are preterit " +
          "forms. You may click an additional (third time) to erase your marking. ";
    }
	
    var thinkAload = "";
    if (isThinkAload()) {
      thinkAload = "Please remember to think-aloud throughout the experiment.";
    }
	
    var stuff = new Array();
	  stuff.push({ text: instructions, thinkAload: thinkAload });	
	
    return stuff;

  }; // end Template.Step3  

  Template.Step4.paragraph = function() {
    
    // Practice Story
    return getStory(STORYTYPE_PRACTICESTORY);

  }; // end Template.Step4   

  Template.Step5.instructions = function() {
    
    // Practice Question Instructions
    
    var testNumber = getTestNumber();
    
    var secondNumber = testNumber.charAt(1);
    
    var instructions = "Based on what you have just read, choose the letter that correctly completes the following sentences.";
    
    var thinkAload = "";
    if (isThinkAload()) {
      thinkAload = "Please remember to think-aloud throughout the experiment.";
    } 
  
    var stuff = new Array();
    stuff.push({ text: instructions, thinkAload: thinkAload });

    return stuff;
  
  }; // end Template.Step5 

  Template.Step6.stuff = function() {
  
    // Practice Questions
    return getQuestion(QUESTIONTYPE_PRACTICEQUESTION);

  }; // end Template.Step6 

  Template.Step7.instructions = function() {
    
    // Reading Instructions
    
    var testNumber = getTestNumber();
    
    var firstNumber = testNumber.charAt(0);
    
    var instructions = "";
    if (firstNumber == "1") {
      instructions = "Please read as quickly as you can the following text on the Aztecs for " + 
          "comprehension. You will be asked to answer some questions after your " + 
          "reading without referring back to the text.";
     } else if (firstNumber == "2") {
       instructions = "Please read as quickly as you can the following text on the Aztecs for " + 
          "comprehension. You will be asked to answer some questions after your " + 
          "reading without referring back to the text. At the same time, as you read, please click on " + 
          "all instances of verbs in the past tense, meaning preterite or imperfect. Don’t " + 
          "worry, however, about which of these two each verb is. You may click an additional time to erase your marking.";
    } else if (firstNumber == "3") {
       instructions = "Please read as quickly as you can the following text on the Aztecs for " + 
          "comprehension. You will be asked to answer some questions after your " + 
          "reading without referring back to the text. At the same time, please click once on all instances of the imperfect and twice on all " + 
          "instances of the preterit as you read. You’ll see [IMP] appear after those that you have clicked once, indicating that you believe " + 
          "they are imperfect forms, and [PRET] appear after those you have clicked twice on, indicating that you believe they are preterit " +
          "forms. You may click an additional (third time) to erase your marking. ";
    }
  
    var thinkAload = "";
    if (isThinkAload()) {
      thinkAload = "Please remember to think-aloud throughout the experiment.";
    }
  
    var stuff = new Array();
    stuff.push({ text: instructions, thinkAload: thinkAload }); 
  
    return stuff;

  }; // end Template.Step7  
  
  Template.Step8.paragraph = function() {
  	
    // Story
	  return getStory(STORYTYPE_STORY);

  }; // end Template.Step8   
  
  Template.Step9.instructions = function() {
    
    // Question Instructions
    
    var testNumber = getTestNumber();
    
    var secondNumber = testNumber.charAt(1);
    
    var instructions = "Based on what you have just read, choose the letter that correctly completes the sentence.";
    
    var thinkAload = "";
    if (isThinkAload()) {
    	thinkAload = "Please remember to think-aloud throughout the experiment.";
    } 
	
    var stuff = new Array();
    stuff.push({ text: instructions, thinkAload: thinkAload });

    return stuff;
  
  }; // end Template.Step9 
  
  Template.Step10.stuff = function() {
  
    // Questions
    return getQuestion(QUESTIONTYPE_QUESTION);

  }; // end Template.Step10 
  
  Template.Admin.stuff = function() {
  
    // Admin Page
    return getAdminPage();

  };    
  
/*=========================================================================================

  events 

==========================================================================================*/
  

  Template.Step1.events = {
  
    // TestNumber form

    'click .goButton' : function () {

      var testNumber = $('#TestNumber').val();

      var yesButton =  { text: "Yes", click: function() {

        if (testNumber == "") {
          alert('Please enter a test number.');
          $( this ).dialog( "close" ); 
          return;
        }
          
        console.log('testNumber = '+testNumber);  

        if (testNumber == "abbccc") {
          setCurrentStep("admin");
          $( this ).dialog( "close" ); 
          return;
        }
        
        createResult(testNumber);
        
        console.log('going to step2');

        if (isThinkAload()) {
          setCurrentStep("2");
        } else {
          setCurrentStep("3");
        }

        $( this ).dialog( "close" ); 

      }};

      var noButton = { text: "No", click: function() {
        $( this ).dialog( "close" ); 
      }};          


      confirmDialog.showDialog( "WAIT", "Please wait for the researcher’s go-ahead before continuing.", yesButton, noButton );
    
    }
  }; 
  
  Template.Step2.events = {
  
  	// Think Aload Instrucions
  
    'click .nextButton' : function () {
      
      console.log('step2 click');
      
      var yesButton =  { text: "Yes", click: function() {

        setCurrentStep("3");

        $( this ).dialog( "close" ); 

      }};

      var noButton = { text: "No", click: function() {
        $( this ).dialog( "close" ); 
      }};          

      confirmDialog.showDialog( "WAIT", "Please wait for the researcher’s go-ahead before continuing.", yesButton, noButton );
    
    }
    
  };   
  
  Template.Step3.events = {
  
  	// Reading Instructions
  
    'click .startButton' : function () {
    
      console.log('step3 click');

      var yesButton =  { text: "Yes", click: function() {

        startStory(STORYTYPE_PRACTICESTORY);       
        
        setCurrentStep("4");

        $( this ).dialog( "close" ); 

      }};

      var noButton = { text: "No", click: function() {
        $( this ).dialog( "close" ); 
      }};          

      confirmDialog.showDialog( "WAIT", "Please wait for the researcher’s go-ahead before continuing.", yesButton, noButton );
    
    }
    
  };   

  Template.Step4.events = {
  
    // Practice Story
    
    'click .nextButton' : function () {
      
      console.log('step4 click');

      var yesButton =  { text: "Yes", click: function() {

        endStory(STORYTYPE_PRACTICESTORY);
        
        setCurrentStep("5");

        $( this ).dialog( "close" ); 

      }};

      var noButton = { text: "No", click: function() {
        $( this ).dialog( "close" ); 
      }};          

      confirmDialog.showDialog( "Answer Carefully", "Click yes if you completed reading the text.", yesButton, noButton );
    
    },

    'focus .storyWord' : function (event) {
      console.log('storyWord got focus'); 
    },
    
    'click .storyWord' : function (event) {
    
      onStoryWordClick(event);

    }  
    
  }; 

  Template.Step5.events = {
  
    // Practice Question Instructions
  
    'click .nextButton' : function () {
    
      console.log('step5 click');

      var yesButton =  { text: "Yes", click: function() {

        startQuestion(QUESTIONTYPE_PRACTICEQUESTION);          
        
        setCurrentStep("6");

        $( this ).dialog( "close" ); 

      }};

      var noButton = { text: "No", click: function() {
        $( this ).dialog( "close" ); 
      }};          

      confirmDialog.showDialog( "WAIT", "Please wait for the researcher’s go-ahead before continuing.", yesButton, noButton );

    }
    
  };  

  Template.Step6.events = {
  
    // Practice Questions
    
    'click .nextButton' : function () {
      
      console.log('step6 click');

      endQuestion(QUESTIONTYPE_PRACTICEQUESTION, "7");   

    }
    
  };

  Template.Step7.events = {
  
    // Reading Instructions
  
    'click .startButton' : function () {
    
      console.log('step7 click');

      var yesButton =  { text: "Yes", click: function() {

        startStory(STORYTYPE_STORY);       
        
        setCurrentStep("8");

        $( this ).dialog( "close" ); 

      }};

      var noButton = { text: "No", click: function() {
        $( this ).dialog( "close" ); 
      }};          

      confirmDialog.showDialog( "WAIT", "Please wait for the researcher’s go-ahead before continuing.", yesButton, noButton );
    
    }
    
  }; 
  
  Template.Step8.events = {
  
  	// Story
    
    'click .nextButton' : function () {
      
      console.log('step8 click');

      var yesButton =  { text: "Yes", click: function() {

        endStory(STORYTYPE_STORY);
        
        setCurrentStep("9");

        $( this ).dialog( "close" ); 

      }};

      var noButton = { text: "No", click: function() {
        $( this ).dialog( "close" ); 
      }};          

      confirmDialog.showDialog( "Answer Carefully", "Click yes if you completed reading the text.", yesButton, noButton );
    
    },

    'focus .storyWord' : function (event) {
      console.log('storyWord got focus');	
    },
	
    'click .storyWord' : function (event) {
    
      onStoryWordClick(event);

    }  
    
  };   
  
  Template.Step9.events = {
  
  	// Question Instructions
  
    'click .nextButton' : function () {
    
      console.log('step9 click');

      var yesButton =  { text: "Yes", click: function() {

        startQuestion(QUESTIONTYPE_QUESTION);      
        
        setCurrentStep("10");

        $( this ).dialog( "close" ); 

      }};

      var noButton = { text: "No", click: function() {
        $( this ).dialog( "close" ); 
      }};          

      confirmDialog.showDialog( "WAIT", "Please wait for the researcher’s go-ahead before continuing.", yesButton, noButton );

    }
    
  };    
  
  Template.Step10.events = {
  
    // Questions
    
    'click .nextButton' : function () {
      
      console.log('step10 click');   

      endQuestion(QUESTIONTYPE_QUESTION, "11");       
      
    }
    
  };    

  Template.Step11.events = {
  
    // Poll Step 1 of 3
  
    'click #nextPollButton1' : function () {
    
      console.log('step11 click');

      var yesButton =  { text: "Yes", click: function() {

        var answer = savePollAnswer('survey1');
        if (answer == false) {
          $( this ).dialog( "close" );
          alert("Please select an answer.");
          return;
        }
        
        setCurrentStep("12");

        $( this ).dialog( "close" ); 

      }};

      var noButton = { text: "No", click: function() {
        $( this ).dialog( "close" ); 
      }};          

      confirmDialog.showDialog( "WAIT", "Please wait for the researcher’s go-ahead before continuing.", yesButton, noButton );
    
    }
    
  };    

  Template.Step12.events = {
  
    // Poll Step 2 of 3
  
    'click #nextPollButton2' : function () {
    
      console.log('step12 click');

      var yesButton =  { text: "Yes", click: function() {

        var answer = savePollAnswer('survey2');
        if (answer == false) {
          $( this ).dialog( "close" );
          alert("Please select an answer.");
          return;
        }
        
        setCurrentStep("13");

        $( this ).dialog( "close" ); 

      }};

      var noButton = { text: "No", click: function() {
        $( this ).dialog( "close" ); 
      }};          

      confirmDialog.showDialog( "WAIT", "Please wait for the researcher’s go-ahead before continuing.", yesButton, noButton );
    
    }
    
  };      

  Template.Step13.events = {
  
    // Poll Step 3 of 3
  
    'click #nextPollButton3' : function () {
    
      console.log('step13 click');

      var yesButton =  { text: "Yes", click: function() {

        var answer = savePollAnswer('survey3');
        if (answer == false) {
          $( this ).dialog( "close" );
          alert("Please select an answer.");
          return;
        }
        
        setCurrentStep("14");

        $( this ).dialog( "close" ); 

      }};

      var noButton = { text: "No", click: function() {
        $( this ).dialog( "close" ); 
      }};          

      confirmDialog.showDialog( "WAIT", "Please wait for the researcher’s go-ahead before continuing.", yesButton, noButton );
    
    }
    
  };   
  
/*=========================================================================================

  Functions 

==========================================================================================*/
  
  function initApp() {
  
    var numberOfPracticeQuestions = PracticeQuestions.find({}).count();
    console.log('numberOfPracticeQuestions = '+numberOfPracticeQuestions);
    setNumQuestions(QUESTIONTYPE_PRACTICEQUESTION, numberOfPracticeQuestions);

    var numberOfQuestions = Questions.find({}).count();
    console.log('numberOfQuestions = '+numberOfQuestions);    
    setNumQuestions(QUESTIONTYPE_QUESTION, numberOfQuestions);

    confirmDialog.init();

  }; // end initApp() 

  function doStep(stepId) {

    if (getCurrentStep() == stepId) {
      return true;
    } 

    return false;  

  }; // end doStep

  function setCurrentStep(stepId) {

    Session.set(SESSION_CURRENTSTEP, stepId);

  }; // end setCurrentStep

  function goNextStep() {

    var stepId = Session.get(SESSION_CURRENTSTEP);
    stepId++;
    setCurrentStep(stepId);

  }; // end goNextStep  

  function getCurrentStep() {

    return Session.get(SESSION_CURRENTSTEP);

  }; // end getCurrentStep

  function isThinkAload() {

    var testNumber = getTestNumber();
    
    var secondNumber = testNumber.charAt(1);
    if (secondNumber == 1) {
    	return true;
    }

    return false;

  }; // end isThinkAload()
  
  function storyOnly() {
    
    var testNumber = getTestNumber();    
    
    var firstNumber = testNumber.charAt(0);
    if (firstNumber == 1) {
    	return true;
    }

    return false;

  }; // end storyOnly()   
  
  function storyWithWordSelectionOnly() {

    var testNumber = getTestNumber();    
    
    var firstNumber = testNumber.charAt(0);
    if (firstNumber == 2) {
    	return true;
    }
    
    return false;
  
  }; // storyWithWordSelectionOnly() 

  function getStoryTimeLimit() {

    // 0 No Time limit 
    // 1 Time limit 3:30
    // 2 Time limit 4:00
    // 3 Time limit 4:30

    if (devTesting) {
      return 60;      
    }

    var testNumber = getTestNumber();    
    
    var thirdNumber = testNumber.charAt(2);

    if (thirdNumber == 0) {
      return -1;
    }

    if (thirdNumber == 1) {
      return 60 * 3.5;
    }

    if (thirdNumber == 2) {
      return 60 * 4;
    }

    if (thirdNumber == 3) {
      return 60 * 4.5;
    }        
    
    return -1;
  
  }; // getStoryTimeLimit()   
  
  function createResult(testNumber) {

    console.log('in createResult');
    
    setTestNumber(testNumber);
    
    var found = Results.find({testNumber: testNumber}).count();
    if (found == 0) {
    	// create a new Results row
    	//Results.insert({testNumber: testNumber, words: null, answers: null, storyPracticeTime: null, questionPracticeTime: null, storyTime: null, questionTime: null});
      console.log('before Results.insert');      
      Results.insert({ testNumber: testNumber, 
                     answers: null,
                     wordsPractice: null,  
                     words: null, 
                     storyPracticeTime: 0, 
                     questionPracticeTime: 0,
                     storyTimeOut: '',
                     storyPracticeTimeOut: '',
                     storyTime: 0, 
                     questionTime: 0,
                     pollAnswers: null });   
      console.log('after Results.insert');        
    } else {
        // remove previous result, and start over
    	Results.remove({testNumber: testNumber});
    	// create a new Results row
    	//Results.insert({testNumber: testNumber, words: null, answers: null, storyPracticeTime: null, questionPracticeTime: null, storyTime: null, questionTime: null});    	
      Results.insert({ testNumber: testNumber, 
                     answers: null,
                     wordsPractice: null,  
                     words: null, 
                     storyPracticeTime: 0, 
                     questionPracticeTime: 0,
                     storyTimeOut: '',
                     storyPracticeTimeOut: '',
                     storyTime: 0, 
                     questionTime: 0,
                     pollAnswers: null });   
    }

  }; // end createResult()
  
  function saveWords(storyType) {
  
    var words = $('.highlight');
    
    var selectedWords = new Array();
    
    for (var index = 0; index < words.length; index++) {
      
      var text = $(words[index]).text();
      text = text.replace(/\s+/g,"");
      
      var wordParagraph = $(words[index]).parent().parent();
      var paragraph = $(wordParagraph).attr('data-key');
      if (paragraph == undefined) {
        wordParagraph = $(words[index]).parent();
        paragraph = $(wordParagraph).attr('data-key');
      }
      paragraph = 'p' + paragraph + '.';

      text = paragraph + text;

      selectedWords.push(text);
      
    }
  
    var testNumber = getTestNumber();    
	
    var result = Results.find({ testNumber: testNumber });
	
    var newResult = null;
	
    result.forEach(function(data) {
	
      if (data.words == null) {
		    data.words = new Array();
      }
	    
      if (storyType == STORYTYPE_PRACTICESTORY) {
        data.wordsPractice = selectedWords.slice();
      } else {
        data.words = selectedWords.slice();        
      }
	    
      newResult = data;	    
	
    });	
	
    resultsInsert(testNumber, newResult);
      
  }; // end saveWords()
  
  function saveStoryTime(storyType) {
  
    var startTime = getStoryStartTime(storyType);
    var endTime = getStoryEndTime(storyType);     

    // get seconds
    var seconds = Math.round((endTime.getTime() - startTime.getTime()) / 1000);
    
    var testNumber = getTestNumber();
	
    var result = Results.find({ testNumber: testNumber });
	
    var newResult = null;
	
    result.forEach(function(data) {
	    
      if (storyType == STORYTYPE_PRACTICESTORY) {
        data.storyPracticeTime = seconds;
      } else {
        data.storyTime = seconds;
      }
	    
	    newResult = data;	    
	
    });	
	
    resultsInsert(testNumber, newResult);
    
    //Results.update({'_id': newResult._id}, {$set : newResult});
  
  }; // end saveStoryTime()
  
  function saveAnswer(questionType) {

    var questionId = getQuestionId(questionType);
	
    var answerRadio = $('input[name=' + questionId + ']');
    if (answerRadio.length == 0) {
      return false;
    }
	
    var checkedValue = answerRadio.filter(':checked').val();
    if (checkedValue == undefined) {
      alert("Please select an answer.");
      return false;
    }
	
    //alert('answer is: ' + checkedValue + ' for question = ' + questionId);
    //console.log('answer is: ' + checkedValue + ' for question = ' + questionId);
	
    var testNumber = getTestNumber();    
	
    var result = Results.find({ testNumber: testNumber });
	
    var newResult = null;
	
    result.forEach(function(data) {
	
	    if (data.answers == null) {
		    data.answers = new Array();
	    }
	    
	    data.answers.push({ questionId : questionId, answer: checkedValue }); 	
	    
	    newResult = data;	    
	
    });	
	
    resultsInsert(testNumber, newResult);

    //Results.update({'_id': newResult._id}, {$set : newResult});
	
    return true;
  
  }; // end saveAnswer() 
  
  function saveQuestionTime(questionType) {
  
    var startTime = getQuestionStartTime(questionType); 
    var endTime = getQuestionEndTime(questionType); 

    // get seconds
    var seconds = Math.round((endTime.getTime() - startTime.getTime()) / 1000);
    
    var testNumber = getTestNumber();
	
    var result = Results.find({ testNumber: testNumber });
	
    var newResult = null;
	
    result.forEach(function(data) {

      if (questionType == QUESTIONTYPE_PRACTICEQUESTION) {
        data.questionPracticeTime = seconds;
      } else {
        data.questionTime = seconds;
      }      
	    
	    newResult = data;	    
	
    });	
	
    resultsInsert(testNumber, newResult);
  
  }; // end saveQuestionTime() 
  
  function startStory(storyType) {

    var startTime = new Date();

    setStoryStartTime(storyType, startTime);

  }; // end startStory()

  function endStory(storyType) {

    var endTime = new Date();

    setStoryEndTime(storyType, endTime);

    saveStoryTime(storyType);   
    
    // save the selected words in the story
    saveWords(storyType);   

    stopStoryTimer(); 
    $("#container").hide(); 

  }; // end endStory() 

  function endStoryOnTimeLimit(storyType) {
      endStory(storyType);
      goNextStep();  
  }; // end endStoryOnTimeLimit()       

  function getStory(storyType) {

    var storyId = 0;
    var story = null;

    if (storyType == STORYTYPE_PRACTICESTORY) {
      storyId = STORY_PREFIX_PRACTICE_STORY;
      story = PracticeStory.find({id:storyId});
    } else {
      storyId = STORY_PREFIX_STORY;
      story = Story.find({id:storyId});
    }
	
    var paragraphs = new Array();
	
    story.forEach(function(data) {
	
      paragraphs = getParagraphs(data);
	
    });
	
    return paragraphs;
  
  }; // end getStory()
  
  function getParagraphs(data) {
	  
    var stuff = new Array();  
	  
    //var index = 0;  
	  
    data.paragraphs.forEach(function(pdata) {
    
    	var pid = pdata.id;
    	var ptext = pdata.text;
		
      var words = getWords(ptext);
      var paragraph = { id : pid, words : words };
      //var paragraph = { id : pid, words : [{word: "one"}, {word: "two"}, {word: "three"}]}; 

      stuff.push(paragraph);
		
    });  
	
    return stuff;
  
  }; // end getParagraphs()
  
  function getWords(story) {
  
  	var words = new Array();
    var storyText = story.split(" ");
    
    storyText.forEach(function(data){
      words.push({word:data})
    });
  	
  	return words;
  
  };

  function startQuestion(questionType) {

    setQuestionNumber(questionType, 1);   
      
    var startTime = new Date();
    setQuestionStartTime(questionType, startTime);  

  }; // end startQuestion()

  function endQuestion(questionType, nextStep) {

    // store the user's answer as a row in Results
    var ret = saveAnswer(questionType);
    if (ret == false) {
      return;
    }

    var questionNumber = getQuestionNumber(questionType);
    questionNumber++;
    console.log('new questionNumber = ' + questionNumber);
    
    setQuestionNumber(questionType, questionNumber);
    
    if (questionNumber > getNumQuestions(questionType)) {
      
      // no more questions, go to finish page

      console.log('no more question, go to next page');
      
      var endTime = new Date();
      setQuestionEndTime(questionType, endTime);    
      
      saveQuestionTime(questionType);
      
      setCurrentStep(nextStep);

    }  

  }; // end endQuestion()
  
  function getQuestion(questionType) {

    var questionId = getQuestionId(questionType);
    var questions = null;

    if (questionType == QUESTIONTYPE_PRACTICEQUESTION) {
      questions = PracticeQuestions.find({questionId: questionId});
    } else {
      questions = Questions.find({questionId: questionId});      
    }  
  
    var stuff = new Array();
  
    questions.forEach(function(question){
      stuff.push(question);
    });
  
    console.log(JSON.stringify(stuff));
    
    return stuff; 
  
  };  

  function resultsInsert(testNumber, newResult) {

    Results.remove({ testNumber: testNumber });

    Results.insert({ testNumber: testNumber, 
                     answers: newResult.answers,
                     wordsPractice: newResult.wordsPractice,  
                     words: newResult.words, 
                     storyPracticeTime: newResult.storyPracticeTime, 
                     questionPracticeTime: newResult.questionPracticeTime,
                     storyTimeOut: newResult.storyTimeOut,
                     storyTime: newResult.storyTime, 
                     storyPracticeTimeOut: newResult.storyPracticeTimeOut,
                     questionTime: newResult.questionTime,
                     pollAnswers: newResult.pollAnswers });    

  }; // end resultsInsert()

  function getAdminPage() {
  
    var stuff = new Array();
    
    var results = Results.find({});
    
    var questionAnswers = QuestionAnswers.find({});
    
    results.forEach(function(result) {
	
      var testResults = new Array();
	
      var answers = result.answers;
	  
      answers.forEach(function(data) {
	
        var answer = data.answer;
        var questionAnswer = QuestionAnswers.find({questionId: data.questionId});
	    
        questionAnswer.forEach(function(qa) {
          if (answer == qa.answer) {
				    testResults.push({questionId: data.questionId, answer: answer, score: 'correct'});
          } else {
            testResults.push({questionId: data.questionId, answer: answer, score: 'wrong'});
          }
        });
	
      });
	
      stuff.push({testNumber: result.testNumber, testResults: testResults});
    
    });
    
  	return stuff;

  };
  
  function doConfirm() {
  
    if (devTesting) {
      return true;
    }

    var reply = confirm("Confirm");
    return reply;   

  };
  
  function removeAnswer(text) {
	
    var index = text.indexOf(" [");
    if (index == -1) {
      return text;
    }

    text = text.substring(0,index);

    return text;
  
  };    

  function onStoryWordClick(event) {

    if (storyOnly()) {
    
      // don't select words if we are using
      // storyOnly mode
    
      return;

    }
  
    console.log('storyWord click');
    
    var word = $(event.target); 
    
    var classes = word.attr("class");
    var index = classes.indexOf("highlight");

    if (storyWithWordSelectionOnly()) {

      if (index == -1) {
        
        word.addClass("highlight");

      } else {

        word.removeClass("highlight");

      }         

      return;

    }
    
    if (index == -1) {
      
      word.addClass("highlight");

      var answer = ' ' + '[' + 'Imp' + ']';
      word.append(answer);
    
      word.attr("data","Imp");          
    
    } else {

      var data = word.attr("data");

      if (data == "Imp") {

        var text = word.text();
        text = removeAnswer(text); 
        word.text(text);         

        var answer = ' ' + '[' + 'Pret' + ']';
        word.append(answer);
      
        word.attr("data","Pret");           

      } else if (data == "Pret") {

        var text = word.text();
        text = removeAnswer(text);
        word.text(text);
        word.removeClass("highlight");
        word.attr("data","");

      }
    
    }      
  
    g_currentWord = word;    

  };

  function getStoryStartTime(storyType) {

    if (storyType == STORYTYPE_PRACTICESTORY) {
      return Session.get('practiceStoryStartTime');
    } else {
      return Session.get('storyStartTime');
    }

  };

  function setStoryStartTime(storyType,startTime) {

    if (storyType == STORYTYPE_PRACTICESTORY) {
      Session.set('practiceStoryStartTime', startTime);
    } else {
      Session.set('storyStartTime', startTime);
    }

  };  

  function getStoryEndTime(storyType) {

    if (storyType == STORYTYPE_PRACTICESTORY) {
      return Session.get('practiceStoryEndTime');
    } else {
      return Session.get('storyEndTime');
    }

  };  

  function setStoryEndTime(storyType, endTime) {

    if (storyType == STORYTYPE_PRACTICESTORY) {
      Session.set('practiceStoryEndTime', endTime);
    } else {
      Session.set('storyEndTime', endTime);
    }

  }; 

  function getQuestionNumber(questionType) {
    if (questionType == QUESTIONTYPE_PRACTICEQUESTION) {
      return Session.get('practiceQuestion');
    } else {
      return Session.get('question');
    }
  };

  function setQuestionNumber(questionType,questionNumber) {
    if (questionType == QUESTIONTYPE_PRACTICEQUESTION) {
      Session.set('practiceQuestion',questionNumber);
    } else {
      Session.set('question',questionNumber);
    }
  };

  function getNumQuestions(questionType) {
    if (questionType == QUESTIONTYPE_PRACTICEQUESTION) {
      return Session.get('numberOfPracticeQuestions');
    } else {
      return Session.get('numberOfQuestions');
    } 
  };

  function setNumQuestions(questionType,numQuestions) {
    if (devTesting) {
      numQuestions = 2;
    }
    if (questionType == QUESTIONTYPE_PRACTICEQUESTION) {
      Session.set('numberOfPracticeQuestions',numQuestions);
    } else {
      Session.set('numberOfQuestions',numQuestions);     
    } 
  };  

  function getQuestionId(questionType) {
    if (questionType == QUESTIONTYPE_PRACTICEQUESTION) {
      return QUESTION_PREFIX_PRACTICE_QUESTION + getQuestionNumber(questionType);
    } else {
      return QUESTION_PREFIX_QUESTION + getQuestionNumber(questionType);
    }  
  };

  function getQuestionStartTime(questionType) {
    if (questionType == QUESTIONTYPE_PRACTICEQUESTION) {
      return Session.get('practiceQuestionStartTime');
    } else {
      return Session.get('questionStartTime');
    }
  };

  function setQuestionStartTime(questionType,questionStartTime) {
    if (questionType == QUESTIONTYPE_PRACTICEQUESTION) {
      Session.set('practiceQuestionStartTime',questionStartTime);
    } else {
      Session.set('questionStartTime',questionStartTime);
    }
  };

  function getQuestionEndTime(questionType) {
    if (questionType == QUESTIONTYPE_PRACTICEQUESTION) {
      return Session.get('practiceQuestionEndTime');
    } else {
      return Session.get('questionEndTime');
    }
  };

  function setQuestionEndTime(questionType,questionEndTime) {
    if (questionType == QUESTIONTYPE_PRACTICEQUESTION) {
      Session.set('practiceQuestionEndTime',questionEndTime);
    } else {
      Session.set('questionEndTime',questionEndTime);
    }
  };

  function getTestNumber() {
    return Session.get('testNumber');
  };  
  
  function setTestNumber(testNumber) {
    Session.set('testNumber',testNumber);
  };  

  function saveStoryTimeOut(reply, storyType) {
    
    var testNumber = getTestNumber();
  
    var result = Results.find({ testNumber: testNumber });
  
    var newResult = null;
  
    result.forEach(function(data) {
      
      if (reply == true) {
        if (storyType == STORYTYPE_PRACTICESTORY) {
          data.storyPracticeTimeOut = 'next page';
          console.log('saveStoryTimeOut storyPracticeTimeOut = '+data.storyPracticeTimeOut);
        } else {
          data.storyTimeOut = 'next page';
          console.log('saveStoryTimeOut storyTimeOut = '+data.storyTimeOut);
        }
      } 
      if (reply == false) {
        if (storyType == STORYTYPE_PRACTICESTORY) {
          data.storyPracticeTimeOut = 'stay';
          console.log('saveStoryTimeOut storyPracticeTimeOut = '+data.storyPracticeTimeOut);
        } else {
          data.storyTimeOut = 'stay';
          console.log('saveStoryTimeOut storyTimeOut = '+data.storyTimeOut);
        }

      }   
      
      newResult = data;     
  
    }); 
  
    resultsInsert(testNumber, newResult);    

    
  }  

  function savePollAnswer(pollId) {   
  
    console.log('in savePollAnswer pollId = '+pollId);

    var answerRadio = $('input[name=' + pollId + ']');
    if (answerRadio.length == 0) {
      console.log('savePollAnswer answerRadio.length = '+answerRadio.length);
      return false;
    }
  
    var checkedValue = answerRadio.filter(':checked').val();
    if (checkedValue == undefined) {
      return false;
    }

    var testNumber = getTestNumber();
  
    var result = Results.find({ testNumber: testNumber });
  
    var newResult = null;
  
    result.forEach(function(data) {

      if (data.pollAnswers == null) {
        data.pollAnswers = new Array();
      }
      
      data.pollAnswers.push({ pollId : pollId, answer: checkedValue });         
      
      newResult = data;     
  
    }); 
  
    resultsInsert(testNumber, newResult);    

    console.log('savePollAnswer checkedValue = '+checkedValue);

  };  

  function stopStoryTimer() {
    console.log('stopStoryTimer called');
    clearInterval(timer_interval);
  }

}

/*=========================================================================================

  Meteor Startup  

==========================================================================================*/

if (Meteor.is_server) {

  Meteor.startup(function () {
    // code to run on server at startup

/*
    Questions.allow({
      'insert': function (userId,doc) { return true; },
      'remove': function (userId,doc) { return true; }
    });

    PracticeQuestions.allow({
      'insert': function (userId,doc) { return true; },
      'remove': function (userId,doc) { return true; }
    });        

    Story.allow({
      'insert': function (userId,doc) { return true; },
      'remove': function (userId,doc) { return true; }
    });

    PracticeStory.allow({
      'insert': function (userId,doc) { return true; },
      'remove': function (userId,doc) { return true; }
    });      
*/

/* comment out when running locally */
    Results.allow({
      'insert': function (userId,doc) { return true; },
      'remove': function (userId,doc) { return true; }
    });
/**/    

  });

}


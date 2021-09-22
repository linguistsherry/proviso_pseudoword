
var shuffleSequence = seq("consent", "0_info",
                          "intro1","intro2",
                      sepWith("sep", "control.presup"),                       
                      sepWith("sep", "control.ant"),
               //       sepWith("sep", "null.presup"),                       
               //       sepWith("sep", "null.ant"),
                      sepWith("sep", "independent.presup"),                       
                      sepWith("sep", "independent.ant"),                 
               //       sepWith("sep", "fulldep.presup"),                       
               //       sepWith("sep", "fulldep.ant"),
                      "exit" );

var completionMessage = "Thank you for your participation! Your completion code for Mechanical Turk is: N992MKp5Ysd62pDbe4p8f"

    
var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence.",
        ignoreFailure: true,
        hideProgressBar: true
    },
    "DashedSentence", {
        hideProgressBar: true
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        hasCorrect: false,
        as: ["Yes","No"],
        randomOrder: false
    },
    "Message", {
       hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: false,
        saveReactionTime: true
    },
    "AY_Form_inst", {
        hideProgressBar: true,
        continueOnReturn: false,
        saveReactionTime: true,
        continueMessage: "Click here to continue"
      },
    "Vorm", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    },
    "Scale_New", {
        startValue: 0,  
        endValue: 100,
        hideProgressBar: true,
        scaleLabels: true,
        leftLabel: "Not surprised at all", 
        rightLabel: "Totally surprised"
    },
    "Scale_NoButton", {
        startValue: 0,
        endValue: 100,
        hideProgressBar: true,
        leftLabel: "(Not surprised at all)", 
        rightLabel: "(Totally surprised)"
    },
    "Scale_NoButton2", {
        startValue: 0,
        endValue: 100,
        hideProgressBar: true
      //  leftLabel: "Very unlikely", rightLabel: "Very likely" 
    },
    "StaticSentence",{
        hideProgressBar: true
    },
    "StaticSentence2",{
        hideProgressBar: true
    },
    "SingleSlider",{
        children: ["StaticSentence","StaticSentence2","Scale_New"],
        triggers: [2],
        hideProgressBar: true
    }
];



var items = [

    ["sep", "Separator", { }],

  //  ["0_lang", "Form", {consentRequired: true, html: {include: "0_lang.html"}}],
    
     ["consent", "Form", {consentRequired: true, html: {include: "consent_form.html"}}],
  
    ["0_info", "Form", {consentRequired: true, html: {include: "0_info.html"}}],
  
    ["intro1", "Form", {consentRequired: true, html: {include: "intro1.html"}}],
    
    ["intro2", "Form", {consentRequired: true, html: {include: "intro2.html" }} ],
 
    ["exit", "Form", {consentRequired: true, html: {include: "exit.html" }} ],
     
   
// items

["sep", Message, {consentRequired: false, transfer: "keypress",
                     html: ["div",
                           ["p", "Let's start with a practice. Press any key to continue."]
                           ]}],
    
[["control.presup",1], "AY_Form_inst", {consentRequired: true, html: { include: "1_control.html" }}, 
                       "SingleSlider", {s: {html: "<p>On this planet, some aliens are fleppers and some aliens are not fleppers.</p> <p><b>You overhear a few aliens talking about lammoring, but you don't understand it.</b></p> <p>You are about to interview Eva, an alien from this planet. The information you've collected about Eva so far suggests this: <b>Eva is a flepper, and she likes to lammor.</b></p> "}, 
                                  s2: {html: " <br> <p>How surprised would you be to learn during the interview that ...?</p> " }, 
                                      html: "<b>Eva doesn't like to lammor.</b> "} ],
[["control.ant",2], "SingleSlider", {s: {html: "<p>On this planet, some aliens are fleppers and some aliens are not fleppers.</p> <p><b>You overhear a few aliens talking about lammoring, but you don't understand it.</b></p> <p>You are about to interview Eva, an alien from this planet. The information you've collected about Eva so far suggests this: <b>Eva is a flepper, and she likes to lammor.</b></p> "}, 
                                     s2: {html: " <br> <p>How surprised would you be to learn during the interview that ...?</p> " }, 
                                    html: "<b>Eva is a flepper.</b> "} ],
    
[["independent.presup",5], "AY_Form_inst", {consentRequired: true,  html: { include: "3_independent.html" }}, 
                           "SingleSlider", {s: {html: "<p>On this planet, some aliens are gogopos and some aliens are not gogopos.</p> <p><b>Some of the aliens have dords, but it doesn't matter if they are gogopos or not.</b></p> <p>You are about to interview Ann, an alien from this planet. The information you've collected about Ann so far suggests this: <b>If Ann is a gogopo, she will yapple her dord.</b></p> "}, 
                                 s2: {html: " <br> <p>How surprised would you be to learn during the interview that ...?</p> " }, 
                                       html: "<b>Ann doesn't have a dord.</b> "} ],
[["independent.ant",6], "SingleSlider", {s: {html: "<p>On this planet, some aliens are gogopos and some aliens are not gogopos.</p> <p><b>Some of the aliens have dords, but it doesn't matter if they are gogopos or not.</b></p> <p>You are about to interview Ann, an alien from this planet. The information you've collected about Ann so far suggests this: <b>If Ann is a gogopo, she will yapple her dord.</b></p> "}, 
                                s2: {html: " <br> <p>How surprised would you be to learn during the interview that ...?</p> " }, 
                                        html: "<b>Ann is a gogopo.</b> "} ]
    
    
    ];


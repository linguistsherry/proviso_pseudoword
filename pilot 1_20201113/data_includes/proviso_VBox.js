
var shuffleSequence = seq("intro1","intro2",
                      sepWith("sep", "control.presup"),                       
                      sepWith("sep", "control.ant"),
                      sepWith("sep", "independent.presup"),                       
                      sepWith("sep", "independent.ant"),
                      sepWith("sep", "dependent.presup"),                          
                      sepWith("sep", "dependent.ant"),                    
                      sepWith("sep", "fulldep.presup"),                       
                      sepWith("sep", "fulldep.ant"),
                      "exit" );

var completionMessage = "Thank you for your participation!"

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
        leftLabel: "(Totally unsurprise)", 
        rightLabel: "(Totally surprised)"
    },
    "Scale_NoButton", {
        startValue: 0,
        endValue: 100,
        hideProgressBar: true
      //  leftLabel: "Very unlikely", rightLabel: "Very likely"
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

    ["intro1", "Form", {consentRequired: true, html: {include: "intro1.html"}}],
    
    ["intro2", "Form", {consentRequired: true, html: {include: "intro2.html" }} ],
 
    ["exit", "Form", {consentRequired: true, html: {include: "exit.html" }} ],
     
   
// items

["sep", Message, {consentRequired: false, transfer: "keypress",
                     html: ["div",
                           ["p", "Let's start with a practice. Press any key to continue."]
                           ]}],
    
    
[["independent.presup",1], "AY_Form_inst", {consentRequired: true,  html: { include: "1_instruction.html" }}, 
                           "SingleSlider", {s: {html: "<p>Ann is an alien from this planet. Here, some aliens are glorps and some aliens are not glorps.</p> <p>Some of the aliens have dords, but it doesn’t matter whether they’re glorps or not.</p> <p><b>If Ann is a glorp, she will yapple her dord.</b></p> "}, 
                                    s2: {html: " <br> <p>How surprised would you be if you learned that ...?</p> " },  
                                    html: "<b>Ann doesn't have a dord.</b> "} ],
[["independent.ant",2], "SingleSlider", {s: {html: "<p>Ann is an alien from this planet. Here, some aliens are glorps and some aliens are not glorps.</p> <p>Some of the aliens here have dords, but it doesn’t matter whether they’re glorps or not.</p> <p><b>If Ann is a glorp, she will yapple her dord.</b></p> "}, 
                                    s2: {html: " <br> <p>How surprised would you be if you learned that ...?</p> " },   
                                    html: "<b>Ann is a glorp.</b> "} ],

    
[["dependent.presup",3], "AY_Form_inst", {consentRequired: true,  html: { include: "2_instruction.html" }}, 
                         "SingleSlider", {s: {html: "<p>Bea is an alien from this planet. Here, some aliens are morties and some aliens are not morties.</p> <p>Half of the morties have a lealo. No one else has lealos.</p> <p><b>If Bea is a mortie, she will wegget her lealo.</b></p> "}, 
                                    s2: {html: " <br> <p>How surprised would you be if you learned that ...?</p> " },   
                                    html: "<b>Bea doesn't have a lealo.</b> "} ],
[["dependent.ant",4], "SingleSlider", {s: {html: "<p>Bea is an alien from this planet. Here, some morties and some aliens are not morties.</p> <p>Half of the morties have a lealo. No one else has lealos.</p> <p><b>If Bea is a mortie, she will wegget her lealo.</b></p> "}, 
                                    s2: {html: " <br> <p>How surprised would you be if you learned that ...?</p> " },   
                                    html: "<b>Bea is a mortie. </b>"} ],


[["fulldep.presup",5], "AY_Form_inst", {consentRequired: true, html: { include: "3_instruction.html" }}, 
                       "SingleSlider", {s: {html: "<p>Cece is an alien from this planet. Here, some aliens are gogopos and some aliens are not gogopos.</p> <p>All gogopos have a hoopler. No one else has hooplers.</p> <p><b>If Cece is a gogopo, she will dippefy her hoopler.</b></p> "}, 
                                    s2: {html: " <br> <p>How surprised would you be if you learned that ...?</p> " },  
                                    html: "<b>Cece doesn't have a hoopler.</b> "} ],
[["fulldep.ant",6], "SingleSlider", {s: {html: "<p>Cece is an alien from this planet. Here,   some aliens are gogopos and some aliens are not gogopos.</p> <p>All gogopos have a hoopler. No one else has hooplers.</p> <p><b>If Cece is a gogopo, she will dippefy her hoopler.</b></p> "}, 
                                    s2: {html: " <br> <p>How surprised would you be if you learned that ...?</p> " },   
                                    html: "<b>Cece is a gogopo.</b> "} ],

    
[["control.presup",7], "AY_Form_inst", {consentRequired: true, html: { include: "4_instruction.html" }}, 
                       "SingleSlider", {s: {html: "<p>Eva is an alien from this planet. Here, some aliens are fleppers and some aliens are not fleppers.</p> <p>Most of the fleppers have a lammor.</p> <p><b>Eva is a flepper, and she has a lammor.</b></p> "}, 
                                    s2: {html: " <br> <p>How surprised would you be if you learned that ...?</p> " },  
                                    html: "<b>Eva doesn't have a lammor.</b> "} ],
[["control.ant",8], "SingleSlider", {s: {html: "<p>Eva is an alien from this planet. Here,  some aliens are fleppers and some aliens are not fleppers.</p> <p>Most of the fleppers have a lammor.</p> <p><b>Eva is a flepper, and she has a lammor.</b></p> "}, 
                                    s2: {html: " <br> <p>How surprised would you be if you learned that ...?</p> " },   
                                    html: "<b>Eva is a flepper.</b> "} ]     
    ];



var shuffleSequence = seq("consent", "0_info",
                          "intro1","intro2",
                      sepWith("sep", "control.presup"),                       
                      sepWith("sep", "control.ant"),
                      sepWith("sep", "null.presup"),                       
                      sepWith("sep", "null.ant"),
                      sepWith("sep", "independent.presup"),                       
                      sepWith("sep", "independent.ant"),
                      sepWith("sep", "halfdep.presup"),                          
                      sepWith("sep", "halfdep.ant"),                    
                      sepWith("sep", "fulldep.presup"),                       
                      sepWith("sep", "fulldep.ant"),
                      "exit" );

var completionMessage = "Thank you for your participation! Your completion code for Mechanical Turk is: N9l2Ysdp8fpDke492NKp5"

    
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
        leftLabel: "Not unexpected at all", 
        rightLabel: "Totally unexpected"
    },
    "Scale_NoButton", {
        startValue: 0,
        endValue: 100,
        hideProgressBar: true,
        leftLabel: "(Not unexpected at all)", 
        rightLabel: "(Totally unexpected)"
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
                       "SingleSlider", {s: {html: "<p>On this planet, some aliens are fleppers and some aliens are not fleppers.</p> <p><b>You overhear a few aliens talking about lammoring, but you don't understand anything.</b></p> <p>You are about to interview Eva, an alien from this planet. The information you've collected about Eva so far suggests this: <b>Eva is a flepper, and she likes to lammor.</b></p> "}, 
                                   s2: {html: " <br> <p>How unexpected would it be if you learned during the interview that ...?</p> " },  
                                    html: "<b>Eva doesn't like to lammor.</b> "} ],
[["control.ant",2], "SingleSlider", {s: {html: "<p>On this planet, some aliens are fleppers and some aliens are not fleppers.</p> <p><b>You overhear a few aliens talking about lammoring, but you don't understand anything.</b></p> <p>You are about to interview Eva, an alien from this planet. The information you've collected about Eva so far suggests this: <b>Eva is a flepper, and she likes to lammor.</b></p> "}, 
                                     s2: {html: " <br> <p>How unexpected would it be if you learned during the interview that ...?</p> " }, 
                                    html: "<b>Eva is a flepper.</b> "} ],

[["null.presup",3], "AY_Form_inst", {consentRequired: true, html: { include: "2_null.html" }}, 
                       "SingleSlider", {s: {html: "<p>On this planet, some aliens are tulvorrs and some aliens are not tulvorrs.</p> <p><b>You notice the word 'feesp' on a guidebook, but no one explains it to you.</b></p> <p>You are about to interview Diane, an alien from this planet. The information you've collected about Diane so far suggests this: <b>If Diane is a tulvorr, she will varkle her feesp.</b></p> "}, 
                                   s2: {html: " <br> <p>How unexpected would it be if you learned during the interview that ...?</p> " },  
                                    html: "<b>Diane doesn't have a feesp.</b> "} ],
[["null.ant",4], "SingleSlider", {s: {html: "<p>On this planet, some aliens are tulvorrs and some aliens are not tulvorrs.</p> <p><b>You notice the word 'feesp' on a guidebook, but no one explains it to you.</b></p> <p>You are about to interview Diane, an alien from this planet. The information you've collected about Diane so far suggests this: <b>If Diane is a tulvorr, she will varkle her feesp.</b></p> "}, 
                                     s2: {html: " <br> <p>How unexpected would it be if you learned during the interview that ...?</p> " }, 
                                    html: "<b>Diane is a tulvorr.</b> "} ],
    
[["independent.presup",5], "AY_Form_inst", {consentRequired: true,  html: { include: "3_independent.html" }}, 
                           "SingleSlider", {s: {html: "<p>On this planet, some aliens are glorps and some aliens are not glorps.</p> <p><b>Glorps or not, some of the aliens have dords.</b></p> <p>You are about to interview Ann, an alien from this planet. The information you've collected about Ann so far suggests this: <b>If Ann is a glorp, she will yapple her dord.</b></p> "}, 
                                    s2: {html: " <br> <p>How unexpected would it be if you learned during the interview that ...?</p> " },  
                                    html: "<b>Ann doesn't have a dord.</b> "} ],
[["independent.ant",6], "SingleSlider", {s: {html: "<p>On this planet, some aliens are glorps and some aliens are not glorps.</p> <p><b>Glorps or not, some of the aliens have dords.</b></p> <p>You are about to interview Ann, an alien from this planet. The information you've collected about Ann so far suggests this: <b>If Ann is a glorp, she will yapple her dord.</b></p> "}, 
                                     s2: {html: " <br> <p>How unexpected would it be if you learned during the interview that ...?</p> " },  
                                    html: "<b>Ann is a glorp.</b> "} ],

    
[["halfdep.presup",7], "AY_Form_inst", {consentRequired: true,  html: { include: "4_halfdep.html" }}, 
                         "SingleSlider", {s: {html: "<p>On this planet, some aliens are morties and some aliens are not morties.</p> <p><b>Half of the morties have a lealo. No one else has lealos.</b></p> <p>You are about to interview Bea, an alien from this planet. The information you've collected about Bea so far suggests this: <b>If Bea is a mortie, she will wegget her lealo.</b></p> "}, 
                                    s2: {html: " <br> <p>How unexpected would it be if you learned during the interview that ...?</p> " },    
                                    html: "<b>Bea doesn't have a lealo.</b> "} ],
[["halfdep.ant",8],  "SingleSlider", {s: {html: "<p>On this planet, some aliens are morties and some aliens are not morties.</p> <p><b>Half of the morties have a lealo. No one else has lealos.</b></p> <p>You are about to interview Bea, an alien from this planet. The information you've collected about Bea so far suggests this: <b>If Bea is a mortie, she will wegget her lealo.</b></p> "}, 
                                    s2: {html: " <br> <p>How unexpected would it be if you learned during the interview that ...?</p> " },  
                                    html: "<b>Bea is a mortie. </b>"} ],


[["fulldep.presup",9], "AY_Form_inst", {consentRequired: true, html: { include: "5_fulldep.html" }}, 
                       "SingleSlider", {s: {html: "<p>On this planet, some aliens are gogopos and some aliens are not gogopos.</p> <p><b>All gogopos have a hoopler. No one else has hooplers.</b></p> <p>You are about to interview Cece, an alient from this planet. The information you've collected about Cece so far suggests this: <b>If Cece is a gogopo, she will dippefy her hoopler.</b></p> "}, 
                                    s2: {html: " <br> <p>How unexpected would it be if you learned during the interview that ...?</p> " },  
                                    html: "<b>Cece doesn't have a hoopler.</b> "} ],
[["fulldep.ant",10],  "SingleSlider", {s: {html: "<p>On this planet, some aliens are gogopos and some aliens are not gogopos.</p> <p><b>All gogopos have a hoopler. No one else has hooplers.</b></p> <p>You are about to interview Cece, an alient from this planet. The information you've collected about Cece so far suggests this: <b>If Cece is a gogopo, she will dippefy her hoopler.</b></p> "}, 
                                    s2: {html: " <br> <p>How unexpected would it be if you learned during the interview that ...?</p> " },  
                                    html: "<b>Cece is a gogopo.</b> "} ]

    
    
    ];



var shuffleSequence = seq("consent", "0_info",
                      "intro1","intro2",
                      sepWith("sep", seq("prac")), 
                      sepWith("sep", seq(startsWith("exp"))), 
                      "exit" );

var completionMessage = "Thank you for your participation! Your completion code for Mechanical Turk is: Dndls9N73Lsd62pDb2MKp5Ye4p8f"

    
var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait.",
        errorMessage: "Wrong. Please wait for the next sentence.",
        ignoreFailure: true,
        hideProgressBar: true
    },
    "DashedSentence", {
        hideProgressBar: true
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
        leftLabel: "Not surprising at all", 
        rightLabel: "Totally surprising"
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
  
    ["consent", "Form", {consentRequired: true, html: {include: "consent_form.html"}}],
  
    ["0_info", "Form", {consentRequired: true, html: {include: "0_info.html"}}],
  
    ["intro1", "Form", {consentRequired: true, html: {include: "intro1.html"}}],
    
    ["intro2", "Form", {consentRequired: true, html: {include: "intro2.html" }} ],
 
    ["exit", "Form", {consentRequired: true, html: {include: "exit.html" }} ],
     
    
   
    // practice
    
    ["prac", "Message", {consentRequired: false, transfer: "keypress",
                       html: "Let's start with a practice. Press any key to continue."
                       }],
     
    ["prac",  "SingleSlider", {s: {html: "<p>You are going to a college reunion party, where you will meet your college best friend Katie.</p> <p>You haven't spoken to Katie for a while, and want to find out what's going on in her life.</p> <p>The information you've collected so far suggests the following: <b>Katie recently got a divorce.</b></p>"}, 
                                            s2: {html: " <br> <p>Suppose you learned the following at the reunion. How surprising would you find this information?</p> " }, 
                                            html: "<b>Katie had actually never been married.</b> "} ],
    
    ["prac", "Message", {consentRequired: false, transfer: "keypress",
                       html: "<p>We expect you to choose a rating <b>close to 100, meaning you would be totally surprised</b> if you were to learn this. You previously learned that Katie got a divorce, but if you learned later that she was never married, that contradicts with what you had known!</p> <p>Did you get that right?</p> <br> <p>Press the spacebar to continue.</p>"
                       }],

    ["prac", "SingleSlider",  {s: {html: "<p>You are going to a college reunion party, where you will meet your college best friend Katie.</p> <p>You haven't spoken to Katie for a while, and want to find out what's going on in her life.</p> <p>The information you've collected so far suggests the following: <b>Katie recently got a divorce.</b></p>"}, 
                                            s2: {html: " <br> <p>Suppose you learned the following at the reunion. How surprising would you find this information?</p> " }, 
                                            html: "<b>Katie had been unhappy with her marriage.</b> "} ],
    
    ["prac", "Message", {consentRequired: false, transfer: "keypress",
                       html: "<p>We expect you to choose a rating <b>close 0, meaning you would NOT be surprised at all</b> if you were to learn this. If Katie got a divorce, it is not surprising at all that she was unhappy in her marriage.</p> <p>Did you get that right?</p> <br> <p>Press the spacebar to continue.</p>"
                       }],

    ["prac", "SingleSlider",  {s: {html: "<p>You are going to a college reunion party, where you will meet your college best friend Katie.</p> <p>You haven't spoken to Katie for a while, and want to find out what's going on in her life.</p> <p>The information you've collected so far suggests the following: <b>Katie recently got a divorce.</b></p>"}, 
                                            s2: {html: " <br> <p>Suppose you learned the following at the reunion. How surprising would you find this information?</p> " }, 
                                            html: "<b>Katie plans on taking a trip after the divorce.</b> "} ],
     
    ["prac", "Message", {consentRequired: false, transfer: "keypress",
                       html: "<p>We also expect you to choose a rating <b>close 0, meaning you would NOT be surprised</b> to learn this. We are simply learning something new about Katie's future plans, which does not go against what we previously learned.</p> <br> <p>Press the spacebar to continue.</p>"
                       }],
    
    ["prac", "Message", {consentRequired: false, transfer: "keypress",
                       html: "<p>That's all the practice! When you're ready, press the spacebar to move ahead.</p>"
                       }],
    
    
    
    // items
    
    [["exp.control.presup",1], "AY_Form_inst", {consentRequired: true, html: { include: "1_control.html" }}, 
                           "SingleSlider", {s: {html: "<p>On this planet, some aliens are fleppers and some aliens are not fleppers.</p> <p><b>You overhear a few aliens talking about lammoring, but you don't understand it.</b></p> <p>You are about to interview Eva, an alien from this planet.</p>  <p> The information you've collected about Eva so far suggests this: <b>Eva is a flepper, and she likes to lammor.</b></p> "}, 
                                            s2: {html: " <br> <p>Suppose you learned the following during the interview. How surprising would you find this information?</p> " }, 
                                            html: "<b>Eva doesn't like to lammor.</b> "} ],
    
    [["exp.control.ant",2], "SingleSlider", {s: {html: "<p>On this planet, some aliens are fleppers and some aliens are not fleppers.</p> <p><b>You overhear a few aliens talking about lammoring, but you don't understand it.</b></p> <p>You are about to interview Eva, an alien from this planet.</p>  <p> The information you've collected about Eva so far suggests this: <b>Eva is a flepper, and she likes to lammor.</b></p>"}, 
                                             s2: {html: " <br> <p>Suppose you learned the following during the interview. How surprising would you find this information?</p> " }, 
                                             html: "<b>Eva is a flepper.</b> "} ],    
    
    [["exp.null.presup",3], "AY_Form_inst", {consentRequired: true, html: { include: "2_null.html" }}, 
                        "SingleSlider", {s: {html: "<p>On this planet, some aliens are gogopos and some aliens are not gogopos.</p> <p><b>You overhear a few aliens talking about dords, but you don't understand it.</b></p> <p>You are about to interview Diane, an alien from this planet.</p>  <p> The information you've collected about Diane so far suggests this: <b>If Diane is a gogopo, she will yapple her dord.</b></p>"}, 
                                         s2: {html: " <br> <p>Suppose you learned the following during the interview. How surprising would you find this information?</p> " }, 
                                         html: "<b>Diane doesn't have a dord.</b> "} ],         
   
    [["exp.null.ant",4], "SingleSlider", {s: {html: "<p>On this planet, some aliens are gogopos and some aliens are not gogopos.</p> <p><b>You overhear a few aliens talking about dords, but you don't understand it.</b></p> <p>You are about to interview Diane, an alien from this planet.</p>  <p> The information you've collected about Diane so far suggests this: <b>If Diane is a gogopo, she will yapple her dord.</b></p>"}, 
                                          s2: {html: " <br> <p>Suppose you learned the following during the interview. How surprising would you find this information?</p> " }, 
                                         html: "<b>Diane is a gogopo.</b> "} ]
         
        
];











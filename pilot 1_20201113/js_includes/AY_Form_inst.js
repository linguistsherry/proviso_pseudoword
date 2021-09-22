/* This software is licensed under a BSD license; see the LICENSE file for details. */

define_ibex_controller({
name: "AY_Form_inst",

jqueryWidget: {
    _init: function () {
        this.cssPrefix = this.options._cssPrefix;
        this.finishedCallback = this.options._finishedCallback;
        this.utils = this.options._utils;

        this.html = dget(this.options, "html");
        this.continueOnReturn = dget(this.options, "continueOnReturn", false);
        this.continueMessage = dget(this.options, "continueMessage", "Click here to continue");
        this.checkedValue = dget(this.options, "checkedValue", "yes");
        this.uncheckedValue = dget(this.options, "uncheckedValue", "no");
        this.validators = dget(this.options, "validators", { });
        this.errorCSSClass = dget(this.options, "errorCSSClass", "error");
        this.saveReactionTime = dget(this.options, "saveReactionTime", false);
        this.obligatoryErrorGenerator =
            dget(this.options, "obligatoryErrorGenerator",
                 function (field) { return "The \u2018" + field + "\u2019 field is obligatory."; });
        this.obligatoryCheckboxErrorGenerator =
            dget(this.options, "obligatoryCheckboxErrorGenerator",
                 function (field) { return "You must check the " + field + " checkbox to continue."; });
        this.obligatoryRadioErrorGenerator =
            dget(this.options, "obligatoryRadioErrorGenerator",
                 function (field) { return "You must select an option for \u2018" + field + "\u2019."; });

        
       // auto-transfer for some amount of time 
        this.transfer = dget(this.options, "transfer", "keypress");
        assert(this.transfer == "keypress" || typeof(this.transfer) == "number",
               "Value of 'transfer' option of Separator must either be the string 'keypress' or a number");

        var normal_message = dget(this.options, "normalMessage", " ");
        var x = this.utils.getValueFromPreviousElement("normalMessage");
        if (x) normal_message = x;

        var error_message = dget(this.options, "errorMessage", " ");
        var x = this.utils.getValueFromPreviousElement("errorMessage");
        if (x) error_message = x;

        var p = $(document.createElement("p"));
        this.element.append(p);
        if (this.style == "error") {
            this.element.addClass(this.cssPrefix + "next-item-failure-message");
            p.text(error_message);
        }
        else {
            this.element.addClass(this.cssPrefix + "next-item-message");
            p.text(normal_message);
        }

        if (this.transfer == "keypress") {
        var t = this;
        this.safeBind($(document), 'keydown', function () {
        t.finishedCallback(null);
        return false;
        });
        }
        else {
            var t = this;
            this.utils.setTimeout(function () {
                t.finishedCallback(null);
            }, this.transfer);
        }
        
         // auto-transfer for some amount of time 
        
        
        var t = this;
        
        function alertOrAddError(name, error) {
            var ae = $("label." + escape(t.errorCSSClass) + "[for=__ALL_FIELDS__]");
            if (ae.length > 0) {
                ae.addClass(t.cssPrefix + "error-text").text(error);
                return;
            }

            var e = $("label." + escape(t.errorCSSClass) + "[for=" + escape(name) + "]");
            if (e.length > 0)
                e.addClass(t.cssPrefix + "error-text").text(error);
            else 
                alert(error);
        }

        var HAS_LOADED = false;
            

        function handleClick(dom) {
            return function (e) {
                var answerTime = new Date().getTime();
                             
                e.preventDefault();
                if (! HAS_LOADED) return;

                // Get rid of any previous errors.
                $("." + t.cssPrefix + "error-text").empty();
                
                var rlines = [];

                var inps = $(dom).find("input[type=text]");
                var tas = $(dom).find("textarea");
                for (var i = 0; i < tas.length; ++i) { inps.push(tas[i]);}

                for (var i = 0; i < inps.length; ++i) {
                    var inp = $(inps[i]);
                    

                    if (inp.hasClass("obligatory") && ((! inp.attr('value')) || inp.attr('value').match(/^\s*$/))) {
                        alertOrAddError(inp.attr('name'), t.obligatoryErrorGenerator(inp.attr('name')));
                        return;
                    }

                    if (t.validators[inp.attr('name')]) {
                        var er = t.validators[inp.attr('name')](inp.attr('value'));
                        if (typeof(er) == "string") {
                            alertOrAddError(inp.attr('name'), er);
                            return;
                        }
                    }

                    rlines.push([["Field name", csv_url_encode(inp.attr('name'))],
                                 ["Field value", csv_url_encode(inp.attr('value'))]]);
                }


                if (t.saveReactionTime) {
                    rlines.push([["Field name", "_REACTION_TIME_"],
                                 ["Field value", answerTime - t.creationTime]]);
                }

              //  rlines.push([["Field name", "dragOrder"],
              //                   ["Field value", t.results]]);

                t.finishedCallback(rlines);
            }
        }

        var dom = htmlCodeToDOM(this.html, function (dom) {
            HAS_LOADED = true;
            
                
            if (t.continueOnReturn) {
                t.safeBind($(dom).find("input[type=text]"), 'keydown', function (e) { if (e.keyCode == 13) {t.results = document.getElementById("datatosend").value; console.log("H"); return handler(e);} });
                
       }});
        
        var handler = handleClick(dom);

        this.element.append(dom);

        if (this.continueMessage) {
            this.element.append($("<p>").append($("<a>").attr('href', '').text("\u2192 " + this.continueMessage)
                                                .addClass(ibex_controller_name_to_css_prefix("Message") + "continue-link")
                                                .click(handler)));

        }

        this.creationTime = new Date().getTime();
                
                }
               
},

properties: {
    obligatory: ["html"],
    countsForProgressBar: true,
    htmlDescription: function (opts) {
        return htmlCodeToDOM(opts.html);
    }
}
});

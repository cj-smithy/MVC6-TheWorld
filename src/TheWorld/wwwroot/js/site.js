// site.js

// define and execute an anonymous function to avoid names leaking into global scope
(function() {
    var element = document.getElementById("username");
    element.innerHTML = "Mr " + element.innerHTML;

    var main = document.getElementById("main");
    main.onmouseenter = function() {
        main.style["background-color"] = "#888";
    }
    main.onmouseleave = function() {
        // set this style to be empty, so the rule in css will be used
        main.style["background-color"] = "";
    }
})();


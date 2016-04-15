// site.js

// define and execute an anonymous function to avoid names leaking into global scope
(function() {
    // can use "$" instead of "jQuery"
    var element = jQuery("#username");
    element.text("Something else");

    var main = jQuery("#main");
    main.on("mouseenter", function() {
        main.style = "background-color: #888;";
    });

    main.on("mouseleave", function() {
        // set this style to be empty, so the rule in css will be used
        main.style["background-color"] = "";
    });

    var menuItems = $("ul.menu li a");
    // handle events on all menu items with one callback!
    menuItems.on("click", function () {
        //get hold of the object (using this)
        var textToShow = $(this);
        alert("hello "+ textToShow.text());
    });
})();


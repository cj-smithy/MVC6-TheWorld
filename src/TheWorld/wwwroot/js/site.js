// site.js

// define and execute an anonymous function to avoid names leaking into global scope
(function() {
    // gets both panels - as a "wrapped set" of dom elements
    var sidebarAndWrapper = $("#sidebar,#wrapper");

    // can use "jQuery" instead of "$"
    var toggleButton = $("#sidebarToggle");
    toggleButton.on("click", function() {
        // adds or removes class depending on if it exists
        sidebarAndWrapper.toggleClass("hide-sidebar");
        // update label
        if (sidebarAndWrapper.hasClass("hide-sidebar")) {
            $(this).text("Show Sidebar");
        } else {
            $(this).text("Hide Sidebar");
        }
    });

//    // can use "$" instead of "jQuery"
//    var element = jQuery("#username");
//    element.text("Something else");
//
//    var main = jQuery("#main");
//    main.on("mouseenter", function() {
//        main.style = "background-color: #888;";
//    });
//
//    main.on("mouseleave", function() {
//        // set this style to be empty, so the rule in css will be used
//        main.style["background-color"] = "";
//    });
//
//    var menuItems = $("ul.menu li a");
//    // handle events on all menu items with one callback!
//    menuItems.on("click", function () {
//        //get hold of the object (using this)
//        var textToShow = $(this);
//        alert("hello "+ textToShow.text());
    //    });

})();


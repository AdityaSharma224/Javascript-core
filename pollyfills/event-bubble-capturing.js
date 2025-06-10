Capturing is useful for preemptive actions before the event reaches its target, 
whereas bubbling is suited for handling events after they've occurred on the target

What is Event Bubbling?
Event bubbling, as I mentioned above, is the phase where the event bubbles up 
from the target element all the way to the global window object.

When an event "bubbles up" in the DOM event flow context, 
this refers to a phase in event flow where an event which traditionally 
occurs after the target phase continues to propagate from the target 
element to the root of the document through the DOM hierarchy.

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Practice</title>
  </head>
  <body>
    <h1>Bubbling and Capturing phase</h1>

    <div>
      <button class="child">click me</button>
    </div>

    <script>
      const parent = document.querySelector("div");
      const child = document.querySelector(".child");

      parent.addEventListener("click", function () {
        console.log("clicked parent");
      });

      child.addEventListener("click", function () {
        console.log("clicked child");
      });
    </script>
  </body>
</html>



What is Event Capturing?
Event capturing occurs when a nested element gets clicked.
The click event of its parent elements must be triggered
before the click of the nested element.This phase trickles 
down from the top of the DOM tree to the target element.

Event capturing can't happen until the third argument of addEventListener is 
set to the Boolean value of true as shown below (default value is false).

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Practice</title>
  </head>
  <body>
    <h1>Bubbling and Capturing phase</h1>

    <div>
      <button class="child">click me</button>
    </div>

    <script>
      const parent = document.querySelector("div");
      const child = document.querySelector(".child");

      parent.addEventListener(
        "click",
        function () {
          console.log("clicked parent");
        },
        true
      );

      child.addEventListener("click", function () {
        console.log("clicked child");
      });
    </script>
  </body>
</html>

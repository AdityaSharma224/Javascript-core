
//bubbling
document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});
document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});


//capturing
document.getElementById("parent").addEventListener(
    "click",
    () => console.log("Parent clicked"),
    { capture: true }
);
document.getElementById("child").addEventListener(
    "click",
    () => console.log("Child clicked"),
    { capture: true }
);

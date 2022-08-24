
var copyButton = document.getElementById("copy");
var compileButton = document.getElementById("compile");
var input = document.getElementById("input");
var output = document.getElementById("log");

compileButton.addEventListener("click", function() {
    console.log("Input: " + input.value);
    Module.callMain([input.value]);
});
copyButton.addEventListener("click", function() {
    console.log("Copying");
    navigator.clipboard.writeText(output.textContent);
});
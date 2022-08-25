
var copyButton = document.getElementById("copy");
var compileButton = document.getElementById("compile");
var input = document.getElementById("input");
var output = document.getElementById("log");
var inputFile = document.getElementById("selectedFile");

compileButton.addEventListener("click", function() {
    console.log("Input: " + input.value);
    Module.callMain([input.value]);
});
copyButton.addEventListener("click", function() {
    console.log("Copying");
    navigator.clipboard.writeText(output.textContent);
});
inputFile.addEventListener("change", function() {
    if (inputFile.files.length == 0) {
        return;
    }
    var file = inputFile.files[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
        input.value = e.target.result;
    }
    reader.onerror = function () {
        input.value = "error reading file";
    }
    reader.readAsText(file, "UTF-8");
    inputFile.value = "";
});
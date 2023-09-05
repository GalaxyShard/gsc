import init, { js_compile as compile } from "./pkg/nua_compiler_embed.js"

var copyButton = document.getElementById("copy");
var compileButton = document.getElementById("compile");
var input = document.getElementById("input");
var output = document.getElementById("log");
var inputFile = document.getElementById("selectedFile");

// init().then()
let hasInitialized = false;
let initializing = false;
compileButton.addEventListener("click", async function() {
    if (initializing) {
        return;
    }
    output.textContent = "";

    if (!hasInitialized) {
        initializing = true;
        await init();
        initializing = false;
        hasInitialized = true;
    }
    let result = compile(input.value);
    output.textContent = new TextDecoder().decode(result);
});
copyButton.addEventListener("click", function() {
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
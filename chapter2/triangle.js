/* jshint esversion:6*/
function generatePyramid(n) {
    var output="";
    for (var i = 1; i <= n; i++) {
        output +="#" + " ";
        console.log(output);
    }
}  

generatePyramid(7);
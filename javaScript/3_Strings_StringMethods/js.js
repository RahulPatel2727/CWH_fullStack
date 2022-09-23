// var name = 'rahul';
// var email = "rahulpatel@gmail.com";
// var temp = `${name} is a name of the student and ${email} is the email of that student.`
// console.log(temp);
// var s = `'rahul' "patel"`;
// console.log(s);
// console.log(s.length);
// console.log("rahul\\patel");
// var string = new String("rahulpatel");
// console.log(string);
// string += new String("singh");
// console.log(string);
const heading='<h2 style="color:red;">this is the heading form the javaScript hello</h2>';
document.getElementById('heading').innerHTML = heading;
var str = 'this is the time when every one enjoying time the bigBillion days';
console.log(str);

// first occurance
console.log(str.indexOf("time"));

// last occurance
console.log(str.lastIndexOf("time"));

// substring form a string
console.log(str.substring(0,4));

// form to a perticular length
console.log(str.substr(0,10));

// replace 
console.log(str.replace("time","time machine"));


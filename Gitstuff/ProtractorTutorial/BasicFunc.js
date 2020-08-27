function add(a,b)
{
    return (a+b);
}

console.log(add(5,134));
var b = ["hr","dev","marriot", 3, 23]
console.log(b.length+ " is size of the array");
for(var i=0;i<b.length; i++)
{
    console.log(b[i]);
}
var c = new Array();
c[0] = "welcome";
c[1] = "no nonse";
c[2] = "Try Hard";
console.log("Print Array elements");
for(var j=c.length-1;j>=0;j--)
{
    
    console.log(c[j]);
}

var name = "bhanu";
console.log(name.charAt(2));
var newName = name.concat("shree");
console.log(newName);
console.log(name.indexOf("u"));
console.log(name.slice(2,3));
//starting index is inclusiv, Ending indexis is Exclusive
console.log(name.toUpperCase());
var name1 = "  sdea ad";
console.log(name1.trim());

//importance of Javascript Objects
//ways of creating JS Objects
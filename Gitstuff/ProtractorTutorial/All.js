describe('Protractor steps', function(){
	
	it('Open Angular js website', function(){
        function Add(a.b)
        {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);

        element(by.id("gobutton")).click();
        }
		browser.get("http://juliemr.github.io/protractor-demo");
		
        Add(2,3);
        Add(8,6);
        Add(8,9);
        Add(12,23);
        Add(9,3);



       /* element.all(by.repeater("result in memory")).count().then(funtion(item){
            console.log(item);
        })*/
        /*element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
        {
            console.log(text);
        });*/
     element.all(by.repeater("result in memory")).each(function(item)
     {
         item.element(by.css("td:nth-child(3)")).getText().then(function (item) {
             console.log(text);
             
         });
     });
    })
})
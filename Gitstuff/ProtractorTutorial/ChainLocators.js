describe('Protractor steps', function(){
	
	it('Open Angular js website', function(){
		
		browser.get("http://juliemr.github.io/protractor-demo");
		
		element(by.model("first")).sendKeys("13");
        element(by.model("second")).sendKeys("25");

        element(by.id("gobutton")).click();

        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
        {
            console.log(text);
        });
     element.all(by.repeater("result in memory")).each(function(item))
     {
         item.element(by.css("td:nth-child(3)")).getText().then(function (item) {
             console.log(text);
             
         });
     }
    });
})
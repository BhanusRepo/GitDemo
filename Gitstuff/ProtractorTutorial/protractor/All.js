describe('All Elements Locators', function(){
	
	it('Open Angular js website', function(){
		
		browser.get("http://juliemr.github.io/protractor-demo");
		
		element(by.model("first")).sendKeys("13");
        element(by.model("second")).sendKeys("25");

        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys("12");
        element(by.model("second")).sendKeys("15");

        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys("15");
        element(by.model("second")).sendKeys("34");

        element(by.id("gobutton")).click();

        element(by.repeater("result in memory")).count().then(function(text){
            console.log(text);
        })
    });

	 
    })
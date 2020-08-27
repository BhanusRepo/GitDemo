describe('Protractor steps', function(){
	
	it('Open Angular js website', function(){
		
		// write raw protractor code
		//browser.get("https://angularjs.org");
		browser.get("http://juliemr.github.io/protractor-demo").then(function(){
			
			console.log("I am the last step to be executed");
		})
		//browser.sleep(9000);
		
		
		// each IT block is called spec
		
	})
	
	it('Close Browser',function(){
		
		
		
	})
	
	
})
describe('Dropdowns',()=>{

    it('ng-option',()=>{
        browser.get("");
        var allOptions=element.all(by.options(""));

        allOptions.each(function(option){
        option.getText().then(function(optionText){
            console.log(optionText);
        })
    })

    var nthOption=allOptions.get(n-1);
        nthOption.getText().then(function(optionText){
        console.log(optionText);
    })
    nthOption.click();
    })
})
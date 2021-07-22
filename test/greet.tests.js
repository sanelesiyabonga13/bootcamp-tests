//console.log(greet("Sanele"));

describe('My greet function test should' , function(){
    it("return 'Hello, Sanele' when called with 'Sanele' " , function(){
        assert.equal("Hello, Sanele", greet("Sanele"));

    });

});
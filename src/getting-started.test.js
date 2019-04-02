const forEach = require('./getting-started');

const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);


describe("Mock Tests", function(){
    
    it("Mock test case 1", function(){
        // The mock function is called twice
        expect(mockCallback.mock.calls.length).toBe(2);
    })

    it("Mock test case 2", function(){
        // The first argument of the first call to the function was 0
        expect(mockCallback.mock.calls[0][0]).toBe(0);
    })

    it("Mock test case 3", function(){
        // The first argument of the second call to the function was 1
        expect(mockCallback.mock.calls[1][0]).toBe(1);
    })

    it("Mock test case 4", function(){
        // The return value of the first call to the function was 42
        expect(mockCallback.mock.results[0].value).toBe(42);
    })
});
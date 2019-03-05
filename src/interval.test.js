const Interval = require('./interval');

describe("Overlaps interval", function(){

        
    it("Overlaps test case 1", function(){
        let interval1 = new Interval(1,10)
        let interval2 = new Interval(5,20)
        expect(interval1.overlaps(interval2)).toEqual(true);
    })

    it("Overlaps test case 2", function(){
        let interval1 = new Interval(1,10)
        let interval2 = new Interval(10,20)
        expect(interval1.overlaps(interval2)).toEqual(false);
    })

    it("Overlaps test case 3", function(){
        let interval1 = new Interval(11,8)
        let interval2 = new Interval(10,20)
        expect(interval1.overlaps(interval2)).toEqual(false);
    })

    it("Overlaps test case 4", function(){
        let interval1 = new Interval(10,20)
        let interval2 = new Interval(1,10)
        expect(interval1.overlaps(interval2)).toEqual(false);
    })

    it("Overlaps test case 5", function(){
        let interval1 = new Interval(5,20)
        let interval2 = new Interval(1,10)
        expect(interval1.overlaps(interval2)).toEqual(true);
    })

    it("Overlaps test case 6", function(){
        let interval1 = new Interval(11,20)
        let interval2 = new Interval(1,10)
        expect(interval1.overlaps(interval2)).toEqual(false);
    })

    it("Overlaps test case 7", function(){
        let interval1 = new Interval(1,10)
        let interval2 = new Interval(11,20)
        expect(interval1.overlaps(interval2)).toEqual(false);
    })

    it("Overlaps test case 8", function(){
        let interval1 = new Interval(10,20)
        let interval2 = new Interval(15,30)
        expect(interval1.overlaps(interval2)).toEqual(true);
    })

    it("Overlaps test case 9", function(){
        let interval1 = new Interval(1,10)
        let interval2 = new Interval(10,20)
        expect(interval1.overlaps(interval2)).toEqual(false);
    })

    it("Overlaps test case 10", function(){
        let interval1 = new Interval(10,20)
        let interval2 = new Interval(11,8)
        expect(interval1.overlaps(interval2)).toEqual(false);
    })

    it("Overlaps test case 10", function(){
        let interval1 = new Interval(1,10)
        let interval2 = new Interval(1,10)
        expect(interval1.overlaps(interval2)).toEqual(true);
    })
    
});

describe("Includes interval", function(){
        
    it("Includes test case 1", function(){
        let interval1 = new Interval(1,10)
        let interval2 = new Interval(2,9)
        expect(interval1.includes(interval2)).toEqual(true);
    })

    it("Includes test case 2", function(){
        let interval1 = new Interval(2,9)
        let interval2 = new Interval(1,10)
        expect(interval1.includes(interval2)).toEqual(false);
    })  

    it("Includes test case 3", function(){
        let interval1 = new Interval(2,11)
        let interval2 = new Interval(1,10)
        expect(interval1.includes(interval2)).toEqual(false);
    })

    it("Includes test case 4", function(){
        let interval1 = new Interval(1,10)
        let interval2 = new Interval(2,11)
        expect(interval1.includes(interval2)).toEqual(false);
    }) 

    it("Includes test case 5", function(){
        let interval1 = new Interval(11,20)
        let interval2 = new Interval(2,11)
        expect(interval1.includes(interval2)).toEqual(false);
    })

    it("Includes test case 6", function(){
        let interval1 = new Interval(2,11)
        let interval2 = new Interval(11,20)
        expect(interval1.includes(interval2)).toEqual(false);
    })        

    it("Includes test case 7", function(){
        let interval1 = new Interval(2,10)
        let interval2 = new Interval(11,20)
        expect(interval1.includes(interval2)).toEqual(false);
    })    

});

describe("Union interval", function(){

    interval = new Interval(1, 10);

    it('Union test case 1', function(){
      let union = interval.union(new Interval(5, 15));
      expect(union.toString()).toBe('[1,15]');
    });

    it('Union test case 2', function(){
      let union = interval.union(new Interval(-5, 5));
      expect(union.toString()).toBe('[-5,10]');
    });

    it('Union test case 3', function(){
      let union = interval.union(new Interval(15, 25));
      expect(union.toString()).toBe('[1,10],[15,25]');
    });

    it('Union test case 4', function(){
      let union = interval.union(new Interval(-15, -5));
      expect(union.toString()).toBe('[-15,-5],[1,10]');
    });
});  
});

describe('Bubble sort', function() {
  var array = [4, 3, 2, 1];

  it('checks correct number of swap calls', function() {
    spyOn(window, 'swap').andCallThrough(); 
    bubbleSort(array); 
    //expect(swap).toHaveBeenCalled();
    expect(swap.callCount).toEqual(6);   
  }); 

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('returns an array', function() {
    expect(Array.isArray(bubbleSort(array))).toBe(true);
  } );
  it('sorts properly', function() {
    expect(bubbleSort(array)).toEqual([1,2,3,4]);
  } );
});


/**
describe('peeking', function() {
  var array = [4, 3, 2, 1];

  // var bubble = {
  //   swap: function(index1, index2, array) {
  //   var temp = array[index1];
  //   array[index1] = array[index2];
  //   array[index2] = temp;
  //   },
  //   bubbleSort: function(array) {
  //      for (var j=array.length-1;j>0;j--) {
  //       for (var i=0; i<j;i++) {
  //         if (array[i] > array[i+1]) {
  //           this.swap(i, i + 1, array);
  //           }
  //         }
  //       }
  //     return array;
  //   }
  // };


  it('swap is called', function(){
    spyOn(bubble, 'swap').and.callThrough();
    bubble.bubbleSort(array);
    expect(bubble.swap).toHaveBeenCalled();
  });

});
**/
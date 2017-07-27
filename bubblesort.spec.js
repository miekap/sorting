describe('Bubble sort', function() {
  var array = [4, 3, 2, 1];

  // it('checks correct number of swap calls', function() {
  //   spyOn(window, 'swap').andCallThrough();
  //   bubbleSort(array);
  //   //expect(swap).toHaveBeenCalled();
  //   expect(swap.callCount).toEqual(6);
  // });

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

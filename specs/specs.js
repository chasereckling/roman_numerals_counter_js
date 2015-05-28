describe('romanizer', function() {
  it('Will return a single letter for 1,5,10,50,100,500 or 1000', function() {
    expect(romanizer(1000)).to.eql("M");
  });

  it('will return multiple letters for a number', function() {
    expect(romanizer(1500)).to.eql("MD");
  });

  it('will handle numbers that are a factor of 4 correctly', function() {
    expect(romanizer(3994)).to.eql("MMMCMXCIV");
  })
});

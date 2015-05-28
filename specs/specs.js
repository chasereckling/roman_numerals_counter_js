describe('romanizer', function() {
  it('Wil return a single letter for 1,5,10,50,100,500 or 1000', function() {
    expect(romanizer(50)).to.equal("L");
  });
});

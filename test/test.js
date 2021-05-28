const expect = chai.expect,
  teststring = 'robot';

describe('Is String Odd Or Even', () => {
  it('Check if your string is odd or even.', () => {
    expect(oddOrEven(teststring)).to.equal(
      false,
      'Please check your function!'
    );
  });
});

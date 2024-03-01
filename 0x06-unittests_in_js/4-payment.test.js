const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    const consoleLogSpy = sinon.spy(console, 'log');

    calculateNumberStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be
      .true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10'));
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});

const binaryGap = require('./app.js')

test('Find the longest binary gap for negative', () => {
    expect(binaryGap(-10)).toBe(1);  
})
test('Find the longest binary gap for large number', () => {
    expect(binaryGap(202245)).toBe(6);    
})
test('Find the longest binary gap for zero', () => {
    expect(binaryGap(0)).toBe(0);    
})
test('Find the longest binary gap for empty input', () => {
    expect(binaryGap()).toBe(null);    
})
test('Find the longest binary gap for invalid input', () => {
    expect(binaryGap()).toBe(null);    
})
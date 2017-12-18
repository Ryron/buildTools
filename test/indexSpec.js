describe('main.js: ', function() {
  it('JsonEqual() should work fine', function() {
    expect(JsonEqual(1, 0)).toBe(false);
    expect(JsonEqual({}, 0)).toBe(false);
    expect(JsonEqual({}, {})).toBe(true);
    expect(JsonEqual(0, {})).toBe(false);
    expect(JsonEqual(0, 'a')).toBe(false);
    expect(JsonEqual({a: 1}, {a: 2})).toBe(false);
    expect(JsonEqual({a: 1}, {a: 1})).toBe(true);
    expect(JsonEqual({a: {k: 1}}, {a: {k: 1}})).toBe(true);
  })
})
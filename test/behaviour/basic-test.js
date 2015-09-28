var component = document.querySelector('hence-album-tracklist');

suite('<hence-album-tracklist>', function () {

  test('says hello', function () {
    assert.equal(component.greeting, 'test greeting');
  });

  test('says hello', function () {
    assert.equal(component.sayHello(), 'hence-album-tracklist says, Hello World!');

    var greetings = component.sayHello('greetings Earthlings');
    assert.equal(greetings, 'hence-album-tracklist says, greetings Earthlings');
  });
});
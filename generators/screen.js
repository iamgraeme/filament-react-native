exports.gen = function (Filament, flags, arg) {
  if (Filament.checkIfExists('app/screens/' + arg)) {
    Filament.exit('Screen ' + arg + ' already exists.');
  }

  Filament.askList('Connect the screen to Redux?', ['Yes', 'No'], (res) => {
    let isRedux = 'redux';
    if (res === 'No') {
      isRedux = 'noredux';
    }

    Filament.createDir('app/screens/' + arg);
    Filament.createFile('app/screens/' + arg + '/index.js', 'screenAndComponent/index.' + isRedux + '.js', {
      name: arg,
      path: 'screens'
    });
    Filament.createFile('app/screens/' + arg + '/styles.js', 'screenAndComponent/styles.js', {
      name: arg,
      path: 'screens'
    });
  });
};
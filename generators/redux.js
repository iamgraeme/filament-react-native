exports.gen = function (Filament, flags, arg) {
  if (Filament.checkIfExists('app/redux/' + arg + '.js')) {
    return Filament.exit('Redux ' + arg + ' already exists.');
  }
  
  Filament.createFile('app/redux/' + arg + '.js', 'redux/index.js', {
    name: arg,
  });

  Filament.regexWrite(
    'app/config/store.js',
    /(const reducer = combineReducers\(\{\n(?:(\s*)[a-z]*,\n)*)(\s*[a-z]*)/gim,
    'import ' + arg + ' from \'app/redux/' + arg + '\';\n\n$1$3,\n$2' + arg
  );
};
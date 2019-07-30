exports.gen = function (Filament, flags, arg) {
  if (Filament.checkIfExists('app/network/' + arg + '.js')) {
    Filament.exit('Network controller ' + arg + ' already exists.');
  }

  Filament.createFile('app/network/' + arg + '.js', 'network/index.js', {});

  Filament.log('Done! Now you can include your network controller:');
  Filament.log(`import * as ${arg} from 'app/network/${arg}'`);
};
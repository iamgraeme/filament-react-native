## Installation

```
npm i @iamgraeme/filament-react-native --save-dev
```

or

```
yarn add @iamgraeme/filament-react-native -D
```

Add the following code to your package.json

```
"config": {
    "filament": {
      "package": "@iamgraeme/filament-react-native"
    }
  }
```

## Usage

You can either install the Filament CLI globally (`npm i filament-cli -g`) or just use `npx` to call it.

```
npx filament new component {componentName}
npx filament new screen {screenName}
npx filament new redux {reduxName}
npx filament new network {networkControllerName}
```

## Other

Forked from https://github.com/Vidatec/filament-rnvidatec, altered to add functional components. Thanks

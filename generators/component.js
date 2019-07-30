exports.gen = function(Filament, flags, arg) {
  if (Filament.checkIfExists("app/components/" + arg)) {
    Filament.exit("Component " + arg + " already exists.");
  }

  Filament.askList(
    "Do you want this to be a functional component?",
    ["Yes", "No"],
    res => {
      let isFunctional = "functional";
      if (res === "No") {
        isFunctional = "classbased";
      }

      Filament.createDir("app/components/" + arg);

      Filament.createFile(
        "app/components/" + arg + "/index.js",
        "screenAndComponent/index." + isFunctional + ".js",
        {
          name: arg,
          path: "components"
        }
      );

      Filament.createFile(
        "app/components/" + arg + "/styles.js",
        "screenAndComponent/styles.js",
        {
          name: arg,
          path: "components"
        }
      );

      Filament.createFile(
        "app/components/" + arg + "/stories.js",
        "screenAndComponent/stories.js",
        {
          name: arg,
          path: "components"
        }
      );

      Filament.createFile(
        "app/components/" + arg + "/" + arg + ".test.js",
        "screenAndComponent/test.js",
        {
          name: arg,
          path: "components"
        }
      );

      Filament.regexWrite(
        "storybook/stories/index.js",
        /(\n\/\/ DO NOT MOVE COMMENT\n)/gim,
        "$1import 'app/components/" + arg + "/stories';\n"
      );
    }
  );
};

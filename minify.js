var exec = require("child_process").exec;

exec(`
jsmin -o dist/index.js dist/index.js && jsmin -o dist/Components/Block.js dist/Components/Block.js && jsmin -o dist/Components/Center.js dist/Components/Center.js && jsmin -o dist/Components/Container.js dist/Components/Container.js && jsmin -o dist/Components/HStack.js dist/Components/HStack.js && jsmin -o dist/Components/Picture.js dist/Components/Picture.js && jsmin -o dist/Components/SafeAreaBlock.js dist/Components/SafeAreaBlock.js&& jsmin -o dist/Components/Touch.js dist/Components/Touch.js&& jsmin -o dist/Components/Typography.js dist/Components/Typography.js&& jsmin -o dist/Components/VStack.js dist/Components/VStack.js
`);

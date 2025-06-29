const core = require('@actions/core');
const github = require('@actions/github');

try {
    const jsNum1 = core.getInput('number1');
    const jsNum2 = core.getInput('number2');
    result = parseInt(jsNum1) + parseInt(jsNum2);
    core.setOutput('sum', result);
}catch(error){
    core.setFailed(`Action failed with error: ${error.message}`);
}
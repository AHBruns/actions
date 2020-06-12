const core = require("@actions/core");
const { spawn } = require("child_process");

try {
  const runner = spawn("ls", ["-l", "-a"]);

  // const runner = spawn("node", ["index.js"]);

  runner.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  runner.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  runner.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
} catch (error) {
  core.setFailed(error.message);
}

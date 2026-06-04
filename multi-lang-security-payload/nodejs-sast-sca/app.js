const express = require("express");
const child_process = require("child_process");

const app = express();

app.get("/search", (req, res) => {
  const q = req.query.q;
  // TEST ONLY: intentionally vulnerable reflected HTML.
  res.send("<h1>Search: " + q + "</h1>");
});

app.get("/run", (req, res) => {
  const cmd = req.query.cmd;
  // TEST ONLY: intentionally vulnerable command execution.
  child_process.exec(cmd, (err, stdout) => {
    res.send(stdout || String(err));
  });
});

app.listen(3000);

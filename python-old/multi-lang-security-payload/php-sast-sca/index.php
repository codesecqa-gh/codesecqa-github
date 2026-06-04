<?php
$user = $_GET["user"];
$cmd = $_GET["cmd"];

// TEST ONLY: intentionally vulnerable SQL concatenation.
$query = "SELECT * FROM users WHERE name = '" . $user . "'";

// TEST ONLY: intentionally vulnerable command execution.
echo shell_exec($cmd);

// TEST ONLY: reflected XSS style issue.
echo "<h1>Hello " . $user . "</h1>";
?>

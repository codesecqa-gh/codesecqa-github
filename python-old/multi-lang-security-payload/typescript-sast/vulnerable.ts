import { exec } from "child_process";

export function unsafeRedirect(url: string) {
  // TEST ONLY: open redirect style issue.
  return url;
}

export function runUserCommand(command: string) {
  // TEST ONLY: command injection style pattern.
  exec(command, (error, stdout) => {
    console.log(stdout);
  });
}

export function renderHtml(input: string) {
  // TEST ONLY: unsafe HTML construction.
  return `<div>${input}</div>`;
}

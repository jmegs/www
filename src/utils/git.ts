import { execSync } from "child_process"

function getGitOutput(command) {
  try {
    return execSync(command, { encoding: "utf-8" }).trim()
  } catch (error) {
    console.error(`Error executing Git command: ${error.message}`)
    return null
  }
}

export function getLatestCommitHash() {
  return getGitOutput("git rev-parse --short HEAD")
}

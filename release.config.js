/**
 * @type {import("semantic-release").Options}
 */
module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    "@semantic-release/npm",
    "@semantic-release/github",
    [
      "@semantic-release/exec",
      {
        prepareCmd: "npx rjp package.json version ${nextRelease.version}",
      },
    ],
    [
      "@semantic-release/git",
      {
        message: "Release <%= nextRelease.version %> [skip ci]",
        assets: ["package.json", "CHANGELOG.md"],
      },
    ],
  ],
  branches: ["main", { name: "development", prerelease: "development" }],
};

# SCA parity payload

Purpose: controlled FortiCNAPP/Lacework SCA parity payload for comparing Postgres/PGQAENV vs Snowflake/FortiQA results across SCM providers.

This payload intentionally contains dependency manifest / lock files only.
It should not contain hard-coded secrets, Terraform/IaC files, or application source code.

Suggested test flow:
1. Keep `main` branch clean.
2. Create a branch such as `sca-parity-multilang-github`.
3. Copy this folder into the repository root.
4. Commit and push the branch.
5. Open a PR into `main`.
6. Compare SCA results between environments/providers.

Supported ecosystems covered:
- .NET: DotNet Core deps.json, NuGet packages.lock.json
- C/C++: Conan conan.lock
- Go: go.mod, go.sum
- Java: Maven pom.xml, Gradle gradle.lockfile, Bazel smoke files
- NodeJS: npm package-lock.json, pnpm-lock.yaml, yarn.lock
- PHP: Composer composer.lock
- Python: requirements.txt, Pipfile.lock, poetry.lock, uv.lock
- Ruby: Bundler Gemfile.lock
- Rust: Cargo.lock

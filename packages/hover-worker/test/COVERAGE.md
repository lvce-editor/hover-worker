# Unit test coverage

The hover-worker Jest configuration collects coverage from source modules loaded by the unit tests. It does not set `collectCoverageFrom`, so the denominator is the executed import graph rather than every file under `src`. On the current `main` baseline, that graph contains 66 TypeScript source files. The branch threshold is global across that denominator; tests must not narrow it with exclusions.

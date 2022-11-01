## Install dependencies

Install dependencies with npm:

```bash
npm i
```

## Development

Write your code in **src** folder

## Test

Write your unit test in **test** folder, then run:

```bash
npm test
```

## Build

Build production (distribution) files in your **dist** folder:

```bash
npm run build
```

It generates CommonJS (in **dist/cjs** folder), ES Modules (in **dist/esm** folder) as well as TypeScript declaration
files (in **dist/cjs/types** or **dist/esm/types** folder).

## Try it before publishing (or test it in main **hiqsol/8bitgalaxy** application)

### Install via `npm pack` output

This approach will leverage the `npm pack` command to package up and zip your npm package into a single file
`(8bitgalaxy-core-0.0.0.tgz)`. You can then go to the project you want to use the package in and install it via this
file. The steps to take this are as follows:

- From within `8bitgalaxy-core` npm package directory, run npm pack in your terminal. Note the .tgz file it produces and
  the location
  of it.
- Change directories to the project directory where you want to use the npm package.  `cd /path/to/8bitgalaxy`
- From within the `8bitgalaxy` project directory, run `npm install /path/to/8bitgalaxy-core-0.0.0.tgz` but replace it
  with the proper path to the location of the .tgz file from step 1
- Then you can start using the package in that client project to test things out

Whenever you want to uninstall the `8bitgalaxy-core`, run:

```bash
npm uninstall 8bitgalaxy-core
```

### Install via `npm link` output

This approach will leverage the `npm link` command to point to your package directory when attempting to install it in
client projects. The steps to take this are as follows:

- From within `8bitgalaxy-core` npm package directory run `npm link` in your terminal
- Change directories to the project directory where you want to use the npm package.
  Example: `cd /path/to/8bitgalaxy`
- From within the client project directory run `npm link 8bitgalaxy-core`

Whenever you want to uninstall the globally-installed `8bitgalaxy-core` and remove the symlink in the global
folder, run:

```bash
npm uninstall 8bitgalaxy-core -g
```

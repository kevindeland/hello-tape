# hello-tape

### Run Test
`npm run test`

### Errors
Got error: 
`'index.ts' is not a module.`

Resolution: update `tsconfig.json` and set `moduleResolution` to `node`.

See [docs](https://www.typescriptlang.org/docs/handbook/module-resolution.html) for more info.

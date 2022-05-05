# gi

a simple way to create your custom `.gitignore`

## Installation

```bash
# use npm
npm create @alexzhang1030/gi
# use pnpm
pnpm create @alexzhang1030/gi
```

## Tasking

- [ ] merge existing `.gitignore`
- [ ] more `.gitignore` rules
- [x] improve CI process

## Contributing

### Contribute to the Rules

First you need to create a file in `data` directory.

such as:

```ts
export const example = [
  'logs',
  '*.log',
]
```

Next you need go to `data/index.ts`, add the following code:

```diff
 import { basic } from './basic'
 import { node } from './node'
+import { example } from './example'

 export function getAllData(): Record<string, string[]> {
   return {
     basic,
     node,
+    example,
   }
 }
```
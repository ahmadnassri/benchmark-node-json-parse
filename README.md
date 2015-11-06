# [Benchmark]: JSON Parsing

## Libraries Tested

- [clarinet](https://www.npmjs.com/package/clarinet) `v0.11.0`
- [jju](https://www.npmjs.com/package/jju) `v1.2.1`
- [json-parse-stream](https://www.npmjs.com/package/json-parse-stream) `v0.0.2`
- [jsonparse](https://www.npmjs.com/package/jsonparse) `v1.2.0`
- [stream-json](https://www.npmjs.com/package/stream-json) `v0.4.0`
- [vuvuzela](https://www.npmjs.com/package/vuvuzela) `v1.0.1`

**Note**: for a more detailed performance study on why you shouldn't use `clarinet` *(and others)* when you just need `JSON.parse`, please refer to this [article](http://writings.nunojob.com/2011/12/clarinet-sax-based-evented-streaming-json-parser-in-javascript-for-the-browser-and-nodejs.html)

## Results


### `Node.js v4.2.x`

###### Fastest
```
  JSON.parse        x 68.28 ops/sec ±4.43% (59 runs sampled)
```
###### Slowest
```
  stream-json       x  2.75 ops/sec ±7.05% (18 runs sampled)
```
###### Results
```
  JSON.parse        x 68.28 ops/sec ±4.43% (59 runs sampled)
  vuvuzela          x 14.38 ops/sec ±4.32% (40 runs sampled)
  jsonparse         x  6.39 ops/sec ±12.12% (20 runs sampled)
  jju               x  6.08 ops/sec ±15.54% (20 runs sampled)
  clarinet          x  5.56 ops/sec ±2.93% (32 runs sampled)
  json-parse-stream x  4.91 ops/sec ±3.03% (28 runs sampled)
  stream-json       x  2.75 ops/sec ±7.05% (18 runs sampled)
```

### `Node.js v0.12.x`

###### Fastest
```
  JSON.parse        x 55,607 ops/sec ±0.70% (93 runs sampled)
```
###### Slowest
```
  stream-json       x    374 ops/sec ±1.98% (76 runs sampled)
```
###### Results
```
  JSON.parse        x 55,607 ops/sec ±0.70% (93 runs sampled)
  vuvuzela          x 10,932 ops/sec ±0.92% (92 runs sampled)
  jju               x  4,914 ops/sec ±0.52% (94 runs sampled)
  jsonparse         x    553 ops/sec ±1.10% (79 runs sampled)
  json-parse-stream x    388 ops/sec ±3.31% (69 runs sampled)
  clarinet          x    386 ops/sec ±2.72% (69 runs sampled)
  stream-json       x    374 ops/sec ±1.98% (76 runs sampled)
```


### `Node.js v0.10.x`

###### Fastest
```
  JSON.parse        x 72,275 ops/sec ±1.55% (91 runs sampled)
```
###### Slowest
```
  stream-json       x    416 ops/sec ±2.22% (78 runs sampled)
```
###### Results
```
  JSON.parse        x 72,275 ops/sec ±1.55% (91 runs sampled)
  vuvuzela          x 11,009 ops/sec ±1.91% (91 runs sampled)
  jju               x  3,716 ops/sec ±4.34% (85 runs sampled)
  jsonparse         x    621 ops/sec ±2.86% (75 runs sampled)
  clarinet          x    427 ops/sec ±2.40% (72 runs sampled)
  json-parse-stream x    426 ops/sec ±2.21% (74 runs sampled)
  stream-json       x    416 ops/sec ±2.22% (78 runs sampled)
```

### `io.js v2.x.x`

###### Fastest
```
  JSON.parse        x 55,394 ops/sec ±1.67% (93 runs sampled)
```
###### Slowest
```
  stream-json       x    377 ops/sec ±2.25% (73 runs sampled)
```
###### Results
```
  JSON.parse        x 55,394 ops/sec ±1.67% (93 runs sampled)
  vuvuzela          x 10,511 ops/sec ±0.99% (90 runs sampled)
  jju               x  4,754 ops/sec ±2.08% (90 runs sampled)
  jsonparse         x    481 ops/sec ±2.07% (73 runs sampled)
  json-parse-stream x    389 ops/sec ±2.87% (73 runs sampled)
  clarinet          x    391 ops/sec ±2.00% (74 runs sampled)
  stream-json       x    377 ops/sec ±2.25% (73 runs sampled)
```

### `io.js v1.x.x`

###### Fastest
```
  JSON.parse        x 52,821 ops/sec ±1.91% (87 runs sampled)
```
###### Slowest
```
  stream-json       x    371 ops/sec ±1.82% (75 runs sampled)
```
###### Results
```
  JSON.parse        x 52,821 ops/sec ±1.91% (87 runs sampled)
  vuvuzela          x 10,379 ops/sec ±1.08% (91 runs sampled)
  jju               x  4,886 ops/sec ±1.41% (85 runs sampled)
  jsonparse         x    427 ops/sec ±2.86% (64 runs sampled)
  clarinet          x    390 ops/sec ±1.86% (74 runs sampled)
  json-parse-stream x    353 ops/sec ±2.64% (70 runs sampled)
  stream-json       x    371 ops/sec ±1.82% (75 runs sampled)
```

# [Benchmark]: JSON Parsing

## Libraries Tested

- [clarinet](https://www.npmjs.com/package/clarinet) `v0.11.0`
- [jju](https://www.npmjs.com/package/jju) `v1.2.0`
- [json-parse-stream](https://www.npmjs.com/package/json-parse-stream) `v0.0.2`
- [jsonparse](https://www.npmjs.com/package/jsonparse) `v1.0.0`
- [vuvuzela](https://www.npmjs.com/package/vuvuzela) `v1.0.1`

**Note**: for a more detailed performance study on why you shouldn't use `clarinet` *(and others)* when you just need `JSON.parse`, please refer to this [article](http://writings.nunojob.com/2011/12/clarinet-sax-based-evented-streaming-json-parser-in-javascript-for-the-browser-and-nodejs.html)

## Results

### `Node.js v0.12.x`

###### Fastest
```
  JSON.parse        x 46,434 ops/sec ±6.27% (86 runs sampled)
```
###### Slowest
```
  clarinet          x    401 ops/sec ±2.47% (78 runs sampled)
```
###### Results
```
  JSON.parse        x 46,434 ops/sec ±6.27% (86 runs sampled)
  vuvuzela          x 10,069 ops/sec ±1.30% (92 runs sampled)
  jju               x  4,339 ops/sec ±1.33% (93 runs sampled)
  jsonparse         x    601 ops/sec ±1.33% (81 runs sampled)
  json-parse-stream x    404 ops/sec ±3.29% (70 runs sampled)
  clarinet          x    401 ops/sec ±2.47% (78 runs sampled)
```


### `Node.js v0.10.x`

###### Fastest
```
  JSON.parse        x 69,717 ops/sec ±0.85% (91 runs sampled)
```
###### Slowest
```
  json-parse-stream x    429 ops/sec ±2.39% (77 runs sampled)
```
###### Results
```
  JSON.parse        x 69,717 ops/sec ±0.85% (91 runs sampled)
  vuvuzela          x 10,461 ops/sec ±1.47% (91 runs sampled)
  jju               x  3,811 ops/sec ±1.43% (92 runs sampled)
  clarinet          x    448 ops/sec ±1.59% (80 runs sampled)
  jsonparse         x    617 ops/sec ±1.33% (79 runs sampled)
  json-parse-stream x    429 ops/sec ±2.39% (77 runs sampled)
```

### `io.js v2.x.x`

###### Fastest
```
  JSON.parse        x 51,979 ops/sec ±1.17% (95 runs sampled)
```
###### Slowest
```
  jsonparse         x    511 ops/sec ±1.73% (75 runs sampled)
```
###### Results
```
  JSON.parse        x 51,979 ops/sec ±1.17% (95 runs sampled)
  vuvuzela          x  9,543 ops/sec ±1.26% (93 runs sampled)
  jju               x  4,385 ops/sec ±1.39% (89 runs sampled)
  json-parse-stream x    417 ops/sec ±3.29% (73 runs sampled)
  clarinet          x    415 ops/sec ±2.22% (77 runs sampled)
  jsonparse         x    511 ops/sec ±1.73% (75 runs sampled)
```

### `io.js v1.x.x`

###### Fastest
```
  JSON.parse        x 49,677 ops/sec ±2.88% (87 runs sampled)
```
###### Slowest
```
  json-parse-stream x    356 ops/sec ±2.71% (75 runs sampled)
```
###### Results
```
  JSON.parse        x 49,677 ops/sec ±2.88% (87 runs sampled)
  vuvuzela          x  9,462 ops/sec ±1.24% (89 runs sampled)
  jju               x  4,458 ops/sec ±1.18% (87 runs sampled)
  jsonparse         x    490 ops/sec ±1.93% (72 runs sampled)
  clarinet          x    404 ops/sec ±3.40% (74 runs sampled)
  json-parse-stream x    356 ops/sec ±2.71% (75 runs sampled)
```

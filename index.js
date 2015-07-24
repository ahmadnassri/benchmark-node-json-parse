'use strict'

// dependencies
var Benchmark = require('benchmark')
var benchmarks = require('beautify-benchmark')
var chalk = require('chalk')
var fs = require('fs')

// libs
var clarinet = require('clarinet')
var jju = require('jju')
var Jsonparse = require('jsonparse')
var JsonParseStream = require('json-parse-stream')
var streamJson = require('stream-json')
var vuvuzela = require('vuvuzela')

// test
var json = fs.readFileSync('fixture.json').toString()

new Benchmark.Suite()
  .add({
    name: 'clarinet',
    defer: true,
    fn: function (deferred) {
      var stream = clarinet.createStream()

      stream.on('end', function () {
        deferred.resolve()
      })

      fs.createReadStream('fixture.json').pipe(stream)
    }
  })

  .add({
    name: 'JSON.parse',
    fn: function () {
      JSON.parse(json)
    }
  })

  .add({
    name: 'jju',
    fn: function () {
      jju.parse(json)
    }
  })

  .add({
    name: 'jsonparse',
    defer: true,
    fn: function (deferred) {
      var p = new Jsonparse()
      p.onValue = function (data) {
        if (this.stack.length === 0) {
          deferred.resolve()
        }
      }

      p.write(json)
    }
  })

  .add({
    name: 'json-parse-stream',
    defer: true,
    fn: function (deferred) {
      fs.createReadStream('fixture.json')
        .pipe(JsonParseStream())
        .on('data', function (data) {
          if (data.parent === undefined) {
            deferred.resolve()
          }
        })
    }
  })

  .add({
    name: 'stream-json',
    defer: true,
    fn: function (deferred) {
      var source = streamJson()

      source.on('end', function () {
        deferred.resolve()
      })

      fs.createReadStream('fixture.json').pipe(source.input)
    }
  })

  .add({
    name: 'vuvuzela',
    fn: function () {
      vuvuzela.parse(json)
    }
  })

  // add listeners
  .on('cycle', function (event) {
    benchmarks.add(event.target)
  })

  .on('complete', function () {
    benchmarks.log()

    console.log('Fastest is %s', chalk.green(this.filter('fastest').pluck('name')))
    console.log('Slowest is %s', chalk.red(this.filter('slowest').pluck('name')))
  })

  .run({
    'async': true
  })

Parse = require('node-parse-api').Parse

exports.APP_ID = 'pIvOTKXjFxWRgR5IqX4z0kYMKIHKl5Uq74FNHGNU'
exports.MASTER_KEY = '8SoYL0XEnVhJ90K5th8hcNFW6s2murr0UB9EpHBm'

exports.parseDb = new Parse(exports.APP_ID, exports.MASTER_KEY)

exports.name = (req, res) ->
  res.json {name: 'Bob'}

exports.events = (req, res) ->
  exports.parseDb.findMany('Events', {}, (err, response) ->
    res.json response.results
  )

exports.slides = (req, res) ->
  exports.parseDb.findMany('Slides', {}, (err, response) ->
    res.json response.results
  )

exports.features = (req, res) ->
  exports.parseDb.findMany('Features', {}, (err, response) ->
    res.json response.results
  )
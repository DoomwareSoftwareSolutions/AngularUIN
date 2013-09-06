exports.name = (req, res) ->
  res.json {name: 'Bob'}

exports.events = (req, res) ->
  eventList = []
  eventList.push {
    heading: 'Best Lee Sin'
    body: '1v1 top. Lee Sin Only'
    link: ''
    image: 'img/event.png'
  }
  eventList.push {
    heading: 'Diamond Only'
    body: '5v5 Diamond rank only'
    link: ''
    image: 'img/event.png'
  }
  eventList.push {
    heading: 'Bronze Div'
    body: 'Bronze division tournament! Noob spree!'
    link: ''
    image: 'img/event.png'
  }
  res.json eventList
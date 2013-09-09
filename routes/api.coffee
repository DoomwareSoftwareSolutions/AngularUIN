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

exports.slides = (req, res) ->
  slideList = []
  slideList.push {
    image: 'img/leesin.jpg'
    heading: 'Best Lee Sin LAS'
    caption: 'Torneo 1vs1 top. Sos el mejor Lee Sin del server latinoamerica?'
    linkText: 'Inscribirse'
    linkRef: '#'
  }
  slideList.push {
    image: 'img/zed.jpg'
    heading: 'Zed'
    caption: 'The master of shadows.'
    linkText: 'Sign up today'
    linkRef: '#'
  }
  slideList.push {
    image: 'img/thresh.jpg'
    heading: 'Thresh'
    caption: 'The chain warden.'
    linkText: 'Sign up today'
    linkRef: '#'
  }
  res.json slideList
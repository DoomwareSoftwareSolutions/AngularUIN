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

exports.features = (req, res) ->
  featureList = []
  featureList.push {
    heading: 'Fiddlesticks'
    subheading: 'The Harbinger of Doom'
    description: 'For nearly twenty years, Fiddlesticks has stood alone in the easternmost summoning chamber of the Institute of War. Only the burning emerald light of his unearthly gaze pierces the musty darkness of his dust-covered home. It is here that the Harbinger of Doom keeps a silent vigil. His is a cautionary tale of power run amok, taught to all summoners within the League.'
    image: 'img/fiddleSquare.png'
  }
  featureList.push {
    heading: 'Ziggs'
    subheading: 'The Hexplosives Expert'
    description: 'Ziggs was born with a talent for tinkering, but his chaotic, hyperactive nature was unusual among yordle scientists. Aspiring to be a revered inventor like  Heimerdinger, he rattled through ambitious projects with manic zeal, emboldened by both his explosive failures and his unprecedented discoveries. Word of Ziggs volatile experimentation reached the famed Yordle Academy in Piltover and its esteemed professors invited him to demonstrate his craft.'
    image: 'img/ziggsSquare.png'
  }
  featureList.push {
    heading: 'Brand'
    subheading: 'The Burning Vengeance'
    description: 'In a faraway place known as Lokfar there was a seafaring marauder called Kegan Rodhe. As was his people’s way, Kegan sailed far and wide with his fellows, stealing treasures from those unlucky enough to catch their attention. To some, he was a monster; to others, just a man. One night, as they sailed through the arctic waters, strange lights danced over the frozen wastes.'
    image: 'img/brandSquare.png'
  }
  res.json featureList
var blocks = [
  // block example
  // {
  //   corners: [
  //     {lat: 25.803681, lng: -80.203105}, //top left
  //     {lat: 25.803713, lng: -80.201272}, //top right
  //     {lat: 25.802925, lng: -80.201262}, //bottom right
  //     {lat: 25.802844, lng: -80.203068}  //bottom left
  //   ],
  //   center: {lat: 25.803701, lng: -80.202244}, //center part (between topleft and topright)
  //   content: '<h3>block1</h3>', //content displayed on infowindow on hover
  //   url: 'pictures/new' //link when clicked
  // }

  //here top bit
  // block1
  {
    corners: [
      {lat: 25.809231, lng: -80.203316},
      {lat: 25.808398, lng: -80.203311},
      {lat: 25.808446, lng: -80.201444},
      {lat: 25.809281, lng: -80.201476}
    ],
    center: {lat: 25.809252, lng: -80.202502},
    content: '<h3>block1</h3>',
    url: 'http://www.yahoo.com'
  },

  // block2
  {
    corners: [
      {lat: 25.808303, lng: -80.203296},
      {lat: 25.807482, lng: -80.203261},
      {lat: 25.807530, lng: -80.201427},
      {lat: 25.808336, lng: -80.201438}
    ],
    center: {lat: 25.808320, lng: -80.202448},
    content: '<h3>block2</h3>',
    url: 'http://www.yahoo.com'
  },

  // block3
  {
    corners: [
      {lat: 25.807369, lng: -80.203260}, //TL
      {lat: 25.807432, lng: -80.201408}, //TR
      {lat: 25.806600, lng: -80.201383}, //BR
      {lat: 25.806543, lng: -80.203242} //BL
    ],
    center: {lat: 25.807396, lng: -80.202384}, //(tr+tl)2
    content: '<h3>block3</h3>',
    url: 'http://www.yahoo.com'
  },

  // block4
  {
    corners:[
      {lat: 25.806451, lng: -80.203229}, //TL
      {lat: 25.806483, lng: -80.201377}, //TR
      {lat: 25.805695, lng: -80.201360}, //BR
      {lat: 25.805632, lng: -80.203202} //BL
    ],
    center: {lat: 25.806479, lng: -80.202365}, //(tr+tl)/2
    content: '<h3>block4</h3>',
    url: 'http://www.yahoo.com'
  },

  // block5
  {
    corners: [
      {lat: 25.805540, lng: -80.203191}, //TL
      {lat: 25.805569, lng: -80.201344}, //TR
      {lat: 25.804752, lng: -80.201306}, //BR
      {lat: 25.804700, lng: -80.203178} //BL
    ],
    center: {lat: 25.805557, lng: -80.202344}, //(tr+tl)/2
    content: '<h3>block5</h3>',
    url: 'http://www.yahoo.com'
  },

  // block6
  {
    corners: [
      {lat: 25.804602, lng: -80.203170}, //TL
      {lat: 25.804716, lng: -80.199291}, //TR
      {lat: 25.803934, lng: -80.199259}, //BR
      {lat: 25.803824, lng: -80.203116} //BL
    ],
    center: {lat: 25.804752, lng: -80.201306}, //(tr+tl)/2
    content: '<h3>block6</h3>',
    url: 'http://www.yahoo.com'
  },

  // block7
  {
    corners: [
      {lat: 25.803681, lng: -80.203105},
      {lat: 25.803713, lng: -80.201272},
      {lat: 25.802925, lng: -80.201262},
      {lat: 25.802824, lng: -80.203099}
    ],
    center: {lat: 25.803701, lng: -80.202244},
    content: '<h3>block7</h3>',
    url: 'http://www.yahoo.com'
  },

  // block8
  {
    corners: [
      {lat: 25.802728, lng: -80.203079},
      {lat: 25.802804, lng: -80.201217},
      {lat: 25.802146, lng: -80.201195},
      {lat: 25.802051, lng: -80.203082}
    ],
    center: {lat: 25.802758, lng: -80.202178},
    content: '<h3>block8</h3>',
    url: 'http://www.yahoo.com'
  },

  // block9
  {
    corners: [
      {lat: 25.801975, lng: -80.203051},
      {lat: 25.802063, lng: -80.201205},
      {lat: 25.801468, lng: -80.201192},
      {lat: 25.801415, lng: -80.203029}
    ],
    center: {lat: 25.802007, lng: -80.202153},
    content: '<h3>block 9</h3>',
    url: 'http://www.yahoo.com'
  },

  // blocK10
  {
    corners: [
      {lat: 25.801346, lng: -80.203041},
      {lat: 25.801393, lng: -80.201159},
      {lat: 25.800697, lng: -80.201120},
      {lat: 25.800640, lng: -80.203028}
    ],
    center: {lat: 25.801340, lng: -80.202156},
    content: '<h3>block 10</h3>',
    url: 'http://www.yahoo.com'
  },

  // block11
  {
    corners:[
      {lat: 25.800594, lng: -80.203028},
      {lat: 25.800730, lng: -80.199088},
      {lat: 25.800158, lng: -80.199078},
      {lat: 25.800017, lng: -80.202999}
    ],
    center: {lat: 25.800625, lng: -80.201090},
    content: '<h3>block 11</h3>',
    url: 'http://www.yahoo.com'
  },

  // block12
  {
    corners:[
      {lat: 25.799972, lng: -80.203002},
      {lat: 25.800109, lng: -80.199079},
      {lat: 25.799540, lng: -80.199063},
      {lat: 25.799407, lng: -80.202981}
    ],
    center: {lat: 25.800023, lng: -80.201054},
    content: '<h3>block12</h3>',
    url: 'http://www.yahoo.com'
  },

  // block13
  {
    corners: [
      {lat: 25.809420, lng: -80.201373},
      {lat: 25.809531, lng: -80.199444},
      {lat: 25.808884, lng: -80.199433},
      {lat: 25.808807, lng: -80.200613},
      {lat: 25.808454, lng: -80.201074},
      {lat: 25.808459, lng: -80.201348}
    ],
    center: {lat: 25.809484, lng: -80.200426},
    content: '<h3>block13</h3>',
    url: 'http://www.yahoo.com'
  },

  // block14
  {
    corners: [
      {lat: 25.808446, lng: -80.200940},
      {lat: 25.808726, lng: -80.200501},
      {lat: 25.808779, lng: -80.199439},
      {lat: 25.808499, lng: -80.199439}
    ],
    center: {lat: 25.808769, lng: -80.200104},
    content: '<h3>block14</h3>',
    url: 'http://www.yahoo.com'
  },

  // block15
  {
    corners:[
      {lat: 25.808357, lng:-80.200912},
      {lat: 25.808375, lng: -80.199427},
      {lat: 25.808128, lng: -80.199400},
      {lat: 25.808114, lng: -80.200510}
    ],
    center: {lat: 25.808368, lng: -80.200108},
    content: '<h3>block15</h3>',
    url: 'http://www.yahoo.com'
  },

  // block16
  {
    corners:[
      {lat: 25.808351, lng: -80.201318},
      {lat: 25.808351, lng: -80.201084},
      {lat: 25.808008, lng: -80.200515},
      {lat: 25.808027, lng: -80.199394},
      {lat: 25.807783, lng: -80.199399},
      {lat: 25.807747, lng: -80.200461},
      {lat: 25.807894, lng: -80.201319}
    ],
    center: {lat: 25.808008, lng: -80.200515},
    content: '<h3>block16</h3>',
    url: 'http://www.yahoo.com'

  },

  // block17
  {
    corners:[
      {lat: 25.807793, lng: -80.201310}, //TL
      {lat: 25.807667, lng: -80.200449}, //TR
      {lat: 25.807674, lng: -80.199376}, //BR
      {lat: 25.807370, lng: -80.199363},
      {lat: 25.807368, lng: -80.200481},
      {lat :25.807525, lng: -80.201310}
    ],
    center: {lat: 25.807667, lng: -80.200449}, //(tr+tl)/2
    content: '<h3>block19</h3>',
    url: 'http://www.yahoo.com'
  },

  // block18
  {
    corners:[
      {lat: 25.807435, lng: -80.201298}, //TL
      {lat: 25.807283, lng: -80.200512}, //TR
      {lat: 25.807288, lng: -80.199353}, //BR
      {lat: 25.806651, lng: -80.199342},
      {lat: 25.806611, lng: -80.201260}
    ],
    center: {lat: 25.807283, lng: -80.200512}, //(tr+tl)/2
    content: '<h3>block19</h3>',
    url: 'http://www.yahoo.com'
  },

  // block19
  {
    corners:[
    {lat: 25.806503, lng:  -80.201261}, //TL
    {lat: 25.806551, lng: -80.199358}, //TR
    {lat: 25.805749, lng: -80.199331}, //BR
    {lat: 25.805680, lng: -80.201231} //BL
    ],
    center: {lat: 25.806523, lng: -80.200334}, //(tr+tl)/2
    content: '<h3>block19</h3>',
    url: 'http://www.yahoo.com'
  },

  // block20
  {
    corners: [
      {lat: 25.805588, lng: -80.201231}, //TL
      {lat: 25.805614, lng: -80.199331}, //TR
      {lat: 25.804823, lng: -80.199265}, //BR
      {lat: 25.804765, lng: -80.201188} //BL


    ],
      center: {lat: 25.805600, lng: -80.200318}, //(tr+tl)/2
      content: '<h3>block20</h3>',
      url: 'http://www.yahoo.com'
  },

  // block21
  {
    corners:[
      {lat: 25.803770, lng: -80.201168},
      {lat: 25.803836, lng: -80.199204},
      {lat: 25.802956, lng: -80.199169},
      {lat: 25.802888, lng: -80.201135}
    ],
    center: {lat: 25.803760, lng: -80.200209},
    content: '<h3>block21</h3>',
    url: 'http://www.yahoo.com'
  },

  //block22
  {
    corners:[
      {lat: 25.802834, lng: -80.201142},
      {lat: 25.802905, lng: -80.199170},
      {lat: 25.802594, lng: -80.199167},
      {lat: 25.802520, lng: -80.201132}
    ],
    center: {lat: 25.802844, lng: -80.200271},
    content: '<h3>block22</h3>',
    url: 'http://www.yahoo.com'
  },

  // block23
  {
    corners:[
      {lat: 25.802475, lng: -80.201135},
      {lat: 25.802549, lng: -80.199163},
      {lat: 25.802213, lng: -80.199176},
      {lat: 25.802137, lng: -80.201128}
    ],
    center: {lat: 25.802474, lng: -80.200201},
    content: '<h3>block23</h3>',
    url: 'http://www.yahoo.com'
  },

  // block24
  {
    corners:[
      {lat: 25.802067, lng: -80.201104},
      {lat: 25.802117, lng: -80.199167},
      {lat: 25.801562, lng: -80.199194},
      {lat: 25.801473, lng: -80.201085}
    ],
    center: {lat: 25.802080, lng: -80.200236},
    content: '<h3>block24</h3>',
    url: 'http://www.yahoo.com'
  },

  // block25
  {
    corners:[
      {lat: 25.801369, lng: -80.201085},
      {lat: 25.801435, lng: -80.199127},
      {lat: 25.800780, lng: -80.199098},
      {lat: 25.800719, lng: -80.201047}
    ],
    center: {lat: 25.801392, lng: -80.200184},
    content: '<h3>block25</h3>',
    url: 'http://www.yahoo.com'
  },

  // block26
  {
    corners:[
      {lat: 25.799325, lng: -80.202957},
      {lat: 25.799463, lng: -80.199100},
      {lat: 25.798978, lng: -80.199084},
      {lat: 25.798876, lng: -80.202925}
    ],
    center: {lat: 25.799374, lng: -80.201285},
    content: '<h3>block25</h3>',
    url: 'http://www.yahoo.com'
  }
];

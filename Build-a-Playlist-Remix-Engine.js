//link to the website: https://www.freecodecamp.org/learn/javascript-v9/lab-playlist-remix-engine/build-a-playlist-remix-engine

const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk101",
      artist: "Velvet Cmet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];


function flattenPlaylists(playlists){
  if (!Array.isArray(playlists)){
    return [];
  }

  const flatTrack = []
  for (let i = 0; i < playlists.length; i++){
    for (let j = 0; j < playlists[i].length; j++){
      const track = playlists[i][j];
      track.source = []
      track.source[0] = i
      track.source[1] = j
      flatTrack.push(track)
    }
  }

  return flatTrack;
}

function scoreTracks(flatTracks){
  const newTracks = []
  for (let i = 0; i < flatTracks.length; i++){
    const track = flatTracks[i];
    track.score = (track.votes ?? 0)  * 10 - Math.abs(flatTracks[i].bpm - 120)

    newTracks.push(track);
  }

  return newTracks;
}

function dedupeTracks(flatTracks){
  const newTracks = []

  for (let i = 0; i < flatTracks.length; i++){
    let isDouplicated = false;
    for (let j = 0; j < newTracks.length; j++){
      if(flatTracks[i].trackId === newTracks[j].trackId){
        isDouplicated = true;
        break;
      }
    }
    if(!isDouplicated){
      newTracks.push(flatTracks[i]);
    }
  }

  return newTracks;
}

function enforceArtistQuota(flatTracks, maxOccurenceAllow){
  const newTracks = [];

  for (let i = 0; i < flatTracks.length; i++){
    let occurenceCount = 0;
    for (let j = 0; j < newTracks.length; j++){
      if (flatTracks[i].artist === newTracks[j].artist){
        occurenceCount++;
      }
    }

    if(occurenceCount < maxOccurenceAllow){
      newTracks.push(flatTracks[i]);
    }
  }

  return newTracks;
}

function buildSchedule(flatTracks){
  const newTracks = [];
  for (let i = 0; i < flatTracks.length; i++){
    newTracks.push(
      {
        slot: i+1,
        trackId: flatTracks[i].trackId
      }
    );
  }
  return newTracks;
}

function remixPlaylist(playlists, maxOccurencesAllowed){
  let remixPlaylist = flattenPlaylists(playlists);

  remixPlaylist = scoreTracks(remixPlaylist);
    
  remixPlaylist = dedupeTracks(remixPlaylist);
  
  remixPlaylist = enforceArtistQuota(remixPlaylist, maxOccurencesAllowed);
  
  remixPlaylist = enforceArtistQuota(remixPlaylist, maxOccurencesAllowed);

  remixPlaylist =  buildSchedule(remixPlaylist)

  return remixPlaylist;
}



//================== Testing ====================

//test 2
//console.log(flattenPlaylists(0))

// test 3
let newpl = flattenPlaylists(playlists) 
//console.log(newpl)

//test 4
newpl = scoreTracks(newpl)
//console.log(newpl)

//test 6
newpl = dedupeTracks(newpl)
//console.log(newpl)

//test 10
newpl = enforceArtistQuota(newpl,1)
//console.log(newpl)

//test 12
newpl = buildSchedule(newpl)
//console.log(newpl)

//test 14
console.log(remixPlaylist(playlists,1));
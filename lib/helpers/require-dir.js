'use strict';

module.exports = function (cwd, cb) {
  
  if(cwd.endsWith("actions")){
    cb(require("../actions/amazonMusic"));
    cb(require("../actions/appleMusic"));
    cb(require("../actions/clearqueue"));
    cb(require("../actions/clip"));
    cb(require("../actions/clipall"));
    cb(require("../actions/clippreset"));
    cb(require("../actions/equalizer"));
    cb(require("../actions/favorite"));
    cb(require("../actions/favorites"));
    cb(require("../actions/group"));
    cb(require("../actions/linein"));
    cb(require("../actions/lockvolumes"));
    cb(require("../actions/musicSearch"));
    cb(require("../actions/mute"));
    cb(require("../actions/nextprevious"));
    cb(require("../actions/pandora"));
    cb(require("../actions/pauseall"));
    cb(require("../actions/playlist"));
    cb(require("../actions/playlists"));
    cb(require("../actions/playmode"));
    cb(require("../actions/playpause"));
    cb(require("../actions/preset"));
    cb(require("../actions/queue"));
    cb(require("../actions/reindex"));
    cb(require("../actions/say"));
    cb(require("../actions/sayall"));
    cb(require("../actions/saypreset"));
    cb(require("../actions/seek"));
    cb(require("../actions/services"));
    cb(require("../actions/setavtransporturi"));
    cb(require("../actions/siriusXM"));
    cb(require("../actions/sleep"));
    cb(require("../actions/spotify"));
    cb(require("../actions/state"));
    cb(require("../actions/sub"));
    cb(require("../actions/tunein"));
    cb(require("../actions/volume"));
    cb(require("../actions/zones"));
  } else {
    cb(require("../tts-providers/aws-polly"));
    cb(require("../tts-providers/mac-os"));
    cb(require("../tts-providers/microsoft"));
    cb(require("../tts-providers/voicerss"));
  }
};

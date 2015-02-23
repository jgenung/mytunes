// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  //el: '<audio controls autoplay />',
  //el: '<audio id = "player" audio controls autoplay /><canvas id = "analyzer"></canvas>',
  el: '<audio id = "player" audio controls autoplay /><canvas id = "analyzer"></canvas>',

  initialize: function() {
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    var player = this;
    return this.$el.attr('src', this.model ? this.model.get('url') : '')
            .bind("ended", function(){player.model.ended();});

   /*         console.log(this.el);
    var html = [
      '<div id = "mp3_player">',
      this.$el,
      '<canvas id = "analyzer"></canvas>',
      '</div>'
    ].join('');*/
    
  },
});

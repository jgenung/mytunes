// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('ended', this.ended, this);
    this.on('dequeue', this.dequeue, this);
  },

  /* If there are songs left in queue, 
     play the first, if not, do nothing */
  playNext: function(){
    if(this.length > 0){
      this.playFirst();
    }
    else{
      return;
    }
  },

  enqueue: function(song){
    this.add(song);
    if(this.length === 1){
      this.playFirst();
    }
    else{
      this.add(song);
      this.playNext();
    }
  },

  playFirst: function(){
    this.at(0).play();
  },
  
  ended: function(){
    this.shift();
    this.playNext();    
  },

  dequeue: function(song){
    if(this.at(0) === song){
      this.shift();
      this.playNext();
    }
    else{
      this.remove(song);
    }
  }
});
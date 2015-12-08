var TldrView = function(tldr){
  this.tldr = tldr;
}

TldrView.prototype = {
  render: function(){
    var self = this;
    var $el = $("<div class='tldrDiv well'><p class='tldrSummary'>" + self.tldr.summary + "</p><p class='tldrRelevance'>"+ self.tldr.relevance +"</p></div>");
    return($el)
  }
}

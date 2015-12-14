var TldrView = function(tldr){
  this.tldr = tldr;
};

TldrView.prototype = {
  render: function(){
    var self = this;

    //encoded the url and tldr.relevance for use in twitter link
    var encodedUrl = encodeURIComponent(self.tldr.relevance);
    var url = encodeURIComponent('tldr%2Dhistory.herokuapp.com');

    var $el = $("<div class='tldrDiv" + self.tldr.id + " tldrDiv well'><p class='tldrSummary'>Summary: " + self.tldr.summary + "</p><p class='tldrRelevance'>Relevance: " + self.tldr.relevance + "</p><button class='deleteTldr" + self.tldr.id + " btn btn-danger'>Delete TLDR</button>" + '<a href="http://www.twitter.com/share?url=tldr-history.herokuapp.com&text=' + encodedUrl + ' https://goo.gl/l3sZyi %40tldrhistory" class="btn btn-info twitter">Tweet this! <span class="glyphicon glyphicon-share-alt" aria-hidden="true"></span></a></div>');

    return $el;
  }
};

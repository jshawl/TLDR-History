var TldrView = function(tldr){
  this.tldr = tldr;
};

TldrView.prototype = {
  render: function(){
    var self = this;

    //encoded the url and tldr.relevance for use in twitter link
    var encodedUrl = encodeURIComponent(self.tldr.relevance);
    var url = encodeURIComponent('tldr%2Dhistory.herokuapp.com');

    console.log(this);
    var $el = $("<div class='tldrDiv well'><p class='tldrSummary'>" + self.tldr.summary + "</p><p class='tldrRelevance'>" + self.tldr.relevance +   "</p>" + '<a href="http://www.twitter.com/share?url=tldr-history.herokuapp.com&text=' + encodedUrl + " https://goo.gl/l3sZyi %23tldrhistory"+'"class="btn btn-info twitter"">' + 'Tweet this! '+ '<span class="glyphicon glyphicon-share-alt" aria-hidden="true"></span>' + '</a>' + "</div>");
    return($el);
  }
};

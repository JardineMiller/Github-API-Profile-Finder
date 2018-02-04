const RepoList = function(url) {
  this.url = url;
  this.client_id = '6a9102849cdf9bb1a979';
  this.client_secret = '977def10a5abe11efc07899a061f80181a800e0a';
  this.repos = null;
  this.onUpdate = null;
}

RepoList.prototype.getData = function() {
  const request = new XMLHttpRequest();
  request.open('GET', this.url);

  request.addEventListener('load', function() {
    if(request.status != 200) return;
    const jsonString = request.responseText;
    this.repos = JSON.parse(jsonString);
    this.onUpdate(this.repos);
  }.bind(this))

  request.send();
};
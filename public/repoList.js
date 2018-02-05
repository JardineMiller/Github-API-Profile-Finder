const RepoList = function(url) {
  this.key = new ApiKey();
  this.url = url;
  this.client_id = this.key.client_id;
  this.client_secret = this.key.client_secret;
  this.repos = null;
  this.onUpdate = null;
}

RepoList.prototype.getData = function() {
  const request = new XMLHttpRequest();
  request.open('GET', this.url);

  request.addEventListener('load', function() {
    if(request.status != 200) {
      document.querySelector('#profile-repos').innerHTML = '<div class="row"></div>';
      return; 
    }
    const jsonString = request.responseText;
    this.repos = JSON.parse(jsonString);
    this.onUpdate(this.repos);
  }.bind(this))

  request.send();
};
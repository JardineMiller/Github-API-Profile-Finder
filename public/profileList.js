const ProfileList = function(url) {
  this.key = new ApiKey();
  this.url = url;
  this.client_id = this.key.client_id;
  this.client_secret = this.key.client_secret;
  this.profile = null;
  this.onUpdate = null;
}

ProfileList.prototype.getData = function() {
  const request = new XMLHttpRequest();
  request.open('GET', this.url);

  request.addEventListener('load', function() {
    if(request.status != 200) {
      document.querySelector('#search-user').classList.add('input-error');
      document.querySelector('#search-user').classList.remove('input-success');
      document.querySelector('#profile').innerHTML = '';
      return;
    }
    document.querySelector('#search-user').classList.remove('input-error');
    document.querySelector('#search-user').classList.add('input-success');
    const jsonString = request.responseText;
    this.profile = JSON.parse(jsonString);
    this.onUpdate(this.profile);
  }.bind(this))

  request.send();
};
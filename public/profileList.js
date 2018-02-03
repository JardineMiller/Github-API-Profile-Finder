const ProfileList = function(url) {
  this.url = url;
  this.profiles = [];
  this.onUpdate = null;
}

ProfileList.prototype.getData = function() {
  const request = new XMLHttpRequest();
  request.open('GET', this.url);

  request.addEventListener('load', function() {
    if(request.status != 200) return;
    const jsonString = request.responseText;
    this.data = JSON.parse(jsonString);
    console.log(this.data);
  }.bind(this))

  request.send();
};
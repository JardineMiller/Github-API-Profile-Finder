const ProfileInput = function(searchInput, profileList) {
  this.searchInput = searchInput;
  this.profileList = profileList;
  this.onChange = null;


  this.searchInput.addEventListener('keyup', function() {
    value = this.searchInput.value;
    this.profileList.url = 'https://api.github.com/users/' + value + '?client_id=' + this.profileList.client_id + '&client_secret=' + this.profileList.client_secret;
    this.profileList.getData();
  }.bind(this))

}
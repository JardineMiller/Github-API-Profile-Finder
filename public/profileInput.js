const ProfileInput = function(searchInput, profileList) {
  this.searchInput = searchInput;
  this.profileList = profileList;

  this.searchInput.addEventListener('keyup', function() {
    value = this.searchInput.value;
    this.profileList.url = 'https://api.github.com/users/' + value;
    this.profileList.getData();

  }.bind(this))
}
const ProfileInput = function(searchInput, profileList, repoList) {
  this.searchInput = searchInput;
  this.repoList = repoList;
  this.profileList = profileList;


  this.searchInput.addEventListener('keyup', function() {
    value = this.searchInput.value;
    this.profileList.url = 'https://api.github.com/users/' + value + '?client_id=' + this.profileList.client_id + '&client_secret=' + this.profileList.client_secret;
    this.profileList.getData();
    this.repoList.url = 'https://api.github.com/users/' + value + '/repos?client_id=' + this.profileList.client_id + '&client_secret=' + this.profileList.client_secret;
    this.repoList.getData();

  }.bind(this))

}

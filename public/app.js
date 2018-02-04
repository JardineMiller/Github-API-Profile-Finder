const app = function() {
  let profileList = new ProfileList('https://api.github.com/users/');
  let searchInput = document.querySelector('#search-user');
  let profileDiv = document.querySelector('#profile');

  let profileInput = new ProfileInput(searchInput, profileList);
  let profileView = new ProfileView(profileDiv);

  profileList.onUpdate = function(profile) {
    console.log(profile);
    profileView.display(profile);
  }

}

window.addEventListener('load', app);
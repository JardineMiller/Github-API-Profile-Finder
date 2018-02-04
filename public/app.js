const app = function() {
  let profileList = new ProfileList('https://api.github.com/users/');
  let repoList = new RepoList('https://api.github.com/users/');
  let searchInput = document.querySelector('#search-user');
  let profileDiv = document.querySelector('#profile');
  let repoDiv = document.querySelector('#profile-repos');

  let profileInput = new ProfileInput(searchInput, profileList, repoList);
  let profileView = new ProfileView(profileDiv);
  let repoView = new RepoView(repoDiv);

  profileList.onUpdate = function(profile) {
    // console.log(profile);
    profileView.display(profile);
  }

  repoList.onUpdate = function(repos) {
    console.log(repos);
    repoView.display(repos);
  }

}

window.addEventListener('load', app);
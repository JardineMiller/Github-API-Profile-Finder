const app = function() {
  let profileList = new ProfileList('https://api.github.com/users/');
  let searchInput = document.querySelector('#search-user');
  let profileInput = new ProfileInput(searchInput, profileList);
  
}

window.addEventListener('load', app);
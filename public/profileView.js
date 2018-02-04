const ProfileView = function(container) {
  this.container = container;
}

ProfileView.prototype.display = function(profile) {
  this.container.innerHTML = `
  <div class="card">
    <div class="card-header">
      ${profile.login}
    </div>
    <div class="card-body">
    <div class="row">
      <div class='col-sm-4'>
        <img src='${profile.avatar_url}' class='img-thumbnail' alt='Profile Avatar'/>
      </div>
      <div class='col-sm-8'>
        <p class="card-text">Name: ${profile.name}</p>
      </div>
    </div>
    </div>
  </div>
  `
};
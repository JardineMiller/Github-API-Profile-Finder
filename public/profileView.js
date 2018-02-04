const ProfileView = function(container) {
  this.container = container;
}

ProfileView.prototype.display = function(profile) {
  this.container.innerHTML = `
  <h3>Profile</h3>
  <div class="card">
    <div class="card-header">
      Username: ${profile.login}
    </div>
    <div class="card-body">
    <div class="row">
      <div class='col-sm-3'>
        <a href='${profile.html_url}' target='_blank'>
        <img src='${profile.avatar_url}' class='img-thumbnail' alt='Profile Avatar'/>
        <a target='_blank' href='${profile.html_url}' class='btn btn-primary btn-block'>View Profile</a>
        </a>
      </div>
      <div class='col-sm-9'>
      <a target='_blank' href="${profile.html_url}?tab=repositories" class="badge badge-primary">Public Repos: ${profile.public_repos}</a>
      <a target='_blank' href="${profile.gists_url}" class="badge badge-secondary">Public Gists: ${profile.public_gists}</a>
      <a target='_blank' href="${profile.html_url}?tab=followers" class="badge badge-success">Followers: ${profile.followers}</a>
      <a target='_blank' href="${profile.html_url}?tab=following" class="badge badge-danger">Following: ${profile.following}</a>
      <div class='profile-details'>
        <h4>${profile.name || ""}</h4>
        <h5>${profile.location || ""}</h5>
        <p class='card-text'>${profile.bio || ""}</p>
      </div>
      </div>
    </div>
    </div>
  </div>
  `
};
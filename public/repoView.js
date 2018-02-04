const RepoView = function(container) {
  this.container = container;
}

RepoView.prototype.display = function(repoList) {
  this.container.innerHTML = '<h3>Recent Repositories</h3><div class="row"></div>';
  repoList.forEach(function(repo) {
    this.addRepo(repo);
  }.bind(this))
};

RepoView.prototype.addRepo = function(repo) {
  this.container.childNodes[1].innerHTML += `
  <div class='col-sm-6'>
    <div class="card repo">
        <div class="card-header">
          <h5>${repo.name}</h5>
        </div>
        <div class="card-body">
          <p class="card-text">${repo.description || "No description provided"}</p>
        </div>
      <div class="card-footer">
        <div class="row">
          <div class="col-sm-9">
            <span class="badge badge-primary">Forks: ${repo.forks_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Stars: ${repo.stargazers_count}</span>
          </div>
          <div class="col-sm-3">
            <a href="${repo.html_url}" target='_blank' class="btn btn-primary">View Repo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  ` 
};
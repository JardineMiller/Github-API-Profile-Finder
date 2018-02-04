const RepoView = function(container) {
  this.container = container;
}

RepoView.prototype.display = function(repoList) {
  this.container.innerHTML = '<h3>Repositories</h3><div class="row"></div>';
  repoList.forEach(function(repo) {
    this.addRepo(repo);
  }.bind(this))
};

RepoView.prototype.addRepo = function(repo) {
  this.container.childNodes[1].innerHTML += `
    <div class='col-sm-6'>
      <div class="card repo">
        <div class="card-header">
          ${repo.name}
        </div>
        <div class="card-body">

        </div>
      </div>
  ` 
};
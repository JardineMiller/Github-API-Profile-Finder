const RepoView = function(container) {
  this.container = container;
}

RepoView.prototype.display = function(repoList) {
  this.container.innerHTML = `
  <h3>Repositories</h3>
  <div class="card">
    <div class="card-header">
      
    </div>
    <div class="card-body">

    </div>
  </div>
  `
};
const getData = async () => {
  const showData = document.getElementById("showData");
  const inp = document.getElementById("input");

  console.log(inp.value);
  const api = `https://api.github.com/users/${inp.value}`;
  const res = await fetch(api);
  const data = await res.json();
  console.log(res);
  res.status === 200
    ? (showData.innerHTML = `
      <div class="profile-card">
        <div class="row align-items-center">
          <div class="col-md-2 text-center">
          <img
              src="${data.avatar_url}"
              alt="Profile"
              class="profile-image"
              />
              </div>
              <div class="col-md-8">
              <h2>${data.name}</h2>
              <p>${data.login}</p>
              </div>
              <div class="col-md-2 text-end">
              <small>${data.created_at}</small>
              </div>
              </div>
        <div class="row info-row">
          <div class="col-md-4">
            <div class="stats">
            <p>Repos</p>
            <h3>${data.public_repos}</h3>
            </div>
            </div>
            <div class="col-md-4">
            <div class="stats">
            <p>Followers</p>
            <h3>${data.followers}</h3>
            </div>
            </div>
            <div class="col-md-4">
            <div class="stats">
            <p>Following</p>
            <h3>${data.following}</h3>
            </div>
            </div>
            </div>
            <div class="row info-row">
            <div class="col-md-6">
            <p><i class="bi bi-geo-alt-fill"></i>${data.location}</p>
            </div>
          <div class="col-md-6 text-end">
          <p>
          <i class="bi bi-link"></i>
          <a href="#" class="text-decoration-none text-white"
          >${data.html_url}</a
          >
          </p>
          </div>
          </div>
          </div>
          
          `)
    : alert("Not Found");

  inp.value = "";
};


function createTagList(tags) {
  return tags.map((tag) => `<li class="tag">${tag}</li>`).join('');
}

function renderBlogData(posts) {
  const rollingWrapper = document.querySelector('.blog .rolling-wrapper');
  const rollingList = document.createElement('ul');
  rollingList.className = 'rolling-list';

  posts.map((post) => {
    const item = document.createElement('li');
    item.className = 'rolling-item';

    item.innerHTML = `
     <a href=${post.url} target="_blank" rel="noopener noreferrer">
      <div class="title">${post.title}</div>
      <ul class="tag-list">
      ${createTagList(post.tags)}
      </ul>
      <p class="description">${post.description}</p>
    </a>
    `;

    rollingList.appendChild(item);
  });
  rollingWrapper.appendChild(rollingList);
}

fetch('../data/blog-data.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태: ${response.status}`);
    }
    return response.json();
  })
  .then((posts) => {
    renderBlogData(posts);

    const container = document.querySelector('.rolling-container');
    const originalWrapper = document.querySelector('.rolling-wrapper');
    originalWrapper.classList.add('real');

    const clone = originalWrapper.cloneNode(true);
    clone.classList.add('clone');

    container.appendChild(clone);
  })
  .catch((error) => {
    console.log(error.message);
  });

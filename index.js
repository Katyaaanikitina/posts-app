let postsArray = [];
renderPosts();

async function getPosts() {
    let response = await fetch("https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json");
    return response.json();
}

async function renderPosts() {
    let posts = await getPosts();

    posts.forEach(async (data) => {
        let post = {
            title: data.title.rendered,
            author: data._embedded.author[0].name,
            date: data.date,
            img: data.featured_media
        }

        postsArray.push(post);
    })

    console.log(postsArray);
}












// const ul = document.getElementById('posts');
// const list = document.createDocumentFragment();

// let li = document.createElement('li');
        // let author = document.createElement('h2');
        // let date = document.createElement('span');
        // let img = document.createElement('img');
        // let title = document.createElement('h1');

        // author.innerHTML = `${post.author}`;
        // date.innerHTML = `${post.date}`;
        // img.src = `${post.featured_media}`;
        // title.innerHTML = `${post.title.rendered}`;

        // li.appendChild(author);
        // li.appendChild(date);
        // li.appendChild(img);
        // li.appendChild(title);
        
        // list.appendChild(li);

        // ul.appendChild(list);




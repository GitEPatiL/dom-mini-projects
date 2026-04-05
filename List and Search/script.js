let userContainer = document.querySelector(".userContainer");
let searchInput = document.querySelector("#searchInput");

const users = [
  {
    profileUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=400",
    name: "Jon Snow",
    email: "jon@snow.com",
  },
  {
    profileUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400",
    name: "Daenerys Targaryen",
    email: "dany@dragon.com",
  },
  {
    profileUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400",
    name: "Tyrion Lannister",
    email: "tyrion@wine.com",
  },
  {
    profileUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400",
    name: "Arya Stark",
    email: "arya@stark.com",
  },
  {
    profileUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400",
    name: "Sansa Stark",
    email: "sansa@winterfell.com",
  },
  {
    profileUrl:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&h=400",
    name: "Cersei Lannister",
    email: "cersei@crown.com",
  },
  {
    profileUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400",
    name: "Jaime Lannister",
    email: "jaime@lion.com",
  },
  {
    profileUrl:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&h=400",
    name: "Bran Stark",
    email: "bran@raven.com",
  },
  {
    profileUrl:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/05/01/10/khal-drogo.jpg?width=1200&height=1200&fit=crop",
    name: "Khal Drogo",
    email: "drogo@dothraki.com",
  },
  {
    profileUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400",
    name: "The Hound",
    email: "hound@clegane.com",
  },
];

function renderUser(arr) {
  userContainer.innerHTML = "";
  if (arr.length === 0) {
    userContainer.innerHTML = `<p>Users not found</p>`;
    return;
  }

  arr.forEach((obj) => {
    let { profileUrl, name, email } = obj;

    let elem = document.createElement("div");
    elem.className = "userItem";

    elem.innerHTML = `
    <div class="image">
            <img src=${profileUrl} alt="alyx" />
          </div>
          <div class="userDetails">
            <h3>${name}</h3>
            <p>${email}</p>
          </div>
    `;
    userContainer.append(elem);
  });
}

renderUser(users);

function handleSearch(e) {
  //    console.log(searchInput.value)
  //   console.log(e.target.value)

  let searchValue = e.target.value;
  let filterdUsers = users.filter((obj) => {
    return (
      obj.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      obj.email.toLowerCase().includes(searchValue.toLowerCase())
    );
  });
  renderUser(filterdUsers);
}

searchInput.addEventListener("input", handleSearch);

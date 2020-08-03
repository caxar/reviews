const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: src="2.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: src="3.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: src="4.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: src="1.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
    {
    id: 5,
    name: "Emiley jason",
    job: "designer",
    img: src="5.jpg",
    text:
      "Axe cray stumptown venmo actually seitan. Vto-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  }
];

const img = document.getElementById('person-img'),
      author = document.getElementById('author'),
      job = document.getElementById('job'),
      info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn'),
      nextBtn = document.querySelector('.next-btn'),
      randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    showPerson();
});


function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.innerText = item.name;
    job.innerText = item.job;
    info.innerText = item.text;
}

nextBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});


prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});

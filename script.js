const items = [
  {
    title: "Игрушка мячик",
    description: "Ваш питомец будет счастлив!",
    tags: ["cat", "dog"],
    price: 500,
    img: "./img/1.jpeg",
  },
  {
    title: "Игрушка лабиринт",
    description: "Поможет в развитии интеллекта!",
    tags: ["cat", "dog"],
    price: 900,
    img: "./img/2.jpeg",
  },
  {
    title: "Игрушка для котят",
    description: "Отвлечет вашего питомца!",
    tags: ["cat"],
    price: 300,
    img: "./img/3.jpeg",
  },
  {
    title: "Миска «Котик»",
    description: "Подойдет и для собак!",
    tags: ["cat", "dog"],
    price: 660,
    img: "./img/4.jpeg",
  },
  {
    title: "Лоток розовый",
    description: "Теперь вы можете забыть о проблемах с туалетом",
    tags: ["cat"],
    price: 400,
    img: "./img/5.jpeg",
  },
  {
    title: "Сухой корм для кошек",
    description: "Специальная формула для милых усатиков!",
    tags: ["cat"],
    price: 200,
    img: "./img/6.jpeg",
  },
  {
    title: "Сухой корм для собак",
    description: "Содержит полный комплекс витаминов",
    tags: ["dog"],
    price: 300,
    img: "./img/7.jpeg",
  },
  {
    title: "Игрушка для собак",
    description: "Теперь вы можете не переживать за личные вещи",
    tags: ["dog"],
    price: 500,
    img: "./img/8.jpeg",
  },
  {
    title: "Лежанка",
    description: "Идеальное место для отдыха!",
    tags: ["cat", "dog"],
    price: 1500,
    img: "./img/9.jpeg",
  },
  {
    title: "Поилка для собак",
    description: "Возьмите с собой в путешествие",
    tags: ["dog"],
    price: 800,
    img: "./img/10.jpeg",
  },
  {
    title: "Переноска",
    description: "Путешествуйте с комфортом!",
    tags: ["cat", "dog"],
    price: 3500,
    img: "./img/11.jpeg",
  },
  {
    title: "Поводок для собак",
    description: "Для чудесных прогулок вместе",
    tags: ["dog"],
    price: 800,
    img: "./img/12.jpeg",
  },
];


const template = document.querySelector('#item-template');
const shopItem = document.querySelector('#shop-items');

const button = document.querySelector('#search-btn');
const input = document.querySelector('#search-input');
const nothingFound = document.querySelector('#nothing-found');

function makeCard(items) {
  items.forEach((item) => {

    const cardTemplate = useTemplate(item.title, item.description, item.img, item.price, item.tags);
    shopItem.append(cardTemplate);
    return makeCard
  })
}

  function useTemplate(title, description, img, price, tags) {
    const templateItem = template.content.cloneNode(true);

    const tagsConteiner = templateItem.querySelector(".tags"); // контейнер для тегов;
    
    tags.forEach((tag) => {                                    // перебор массива с тегами;
    const oneTag = document.createElement('span');                // cоздание span для каждого тега;
    oneTag.textContent = tag;
    oneTag.classList.add('tag');                            // присваивание каждому тегу свойства;
    tagsConteiner.append(oneTag);                           // вставка кажого тега в контейнер tagsConteiner;
    });


    templateItem.querySelector("h1").textContent = title;
    templateItem.querySelector("p").textContent = description;
    templateItem.querySelector("img").src = img;
    templateItem.querySelector(".price").textContent = price;
    
    return templateItem;
  }

  makeCard(items)

    button.addEventListener('click', function() {
  
      const searchResult = input.value.trim().toLowerCase();
      shopItem.innerHTML = '';
      nothingFound.textContent = '';

      const filteredItems = items.filter((el) =>
        el.title.trim().toLowerCase().includes(searchResult)
      );

      if (filteredItems.length > 0) {
        makeCard(filteredItems);
      } else {
        nothingFound.textContent = 'Ничего не найдено';
        //nothingFound.innerHTML = '';
      };
      
  })

    
    
    

 







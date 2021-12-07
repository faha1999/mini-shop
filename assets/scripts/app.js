class product {
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEL = document.createElement('li');
    prodEL.classList = 'product-item';
    prodEL.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
        </div>
        </div>
      `;
    return prodEL;
  }
}

class ProductList {
  products = [
    new product(
      'A Pillow',
      'https://images.unsplash.com/photo-1584100931218-4c2a2986c251?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'A super soft pillow!',
      19.99
    ),
    new product(
      'A Carpet',
      'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FycGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'A super soft carpet you might like!',
      79.99
    )
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.classList = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEL = productItem.render();
      prodList.append(prodEL);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();

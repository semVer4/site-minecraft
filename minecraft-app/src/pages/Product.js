import './product.css';

const Product = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Товары</h2>

                <div className="product__all">
                    <div class="product">
                        <span class="product__price">₽10.000</span>
                        <img class="product__image" src="https://free-png.ru/wp-content/uploads/2021/12/free-png.ru-11.png" />
                        <h1 class="product__title">Разблокировка аккаунта</h1>
                        <hr />
                        <p>Разблокируй свою аккаунт и продолжай игру на сервере. Но больше без нарушений! </p>
                        <a href="#" class="product__btn btn">Купить</a>
                    </div>

                    <div class="product">
                        <span class="product__price">₽10.000</span>
                        <img class="product__image" src="https://free-png.ru/wp-content/uploads/2021/12/free-png.ru-11.png" />
                        <h1 class="product__title">Разблокировка аккаунта</h1>
                        <hr />
                        <p>Разблокируй свою аккаунт и продолжай игру на сервере. Но больше без нарушений! </p>
                        <a href="#" class="product__btn btn">Купить</a>
                    </div>

                    <div class="product">
                        <span class="product__price">₽10.000</span>
                        <img class="product__image" src="https://free-png.ru/wp-content/uploads/2021/12/free-png.ru-11.png" />
                        <h1 class="product__title">Разблокировка аккаунта</h1>
                        <hr />
                        <p>Разблокируй свою аккаунт и продолжай игру на сервере. Но больше без нарушений! </p>
                        <a href="#" class="product__btn btn">Купить</a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Product;
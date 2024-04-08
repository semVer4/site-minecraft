const Donate = () => {
    const [username, setUsername] = ('');
    const [price, setPrice] = ('');

    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1" id="cabLC">Донат</h2>

                <div className="form">
					<form>
						<input id="login" type="text" placeholder="Ваш Логин" value={username} onChange={(e) => setUsername(e.target.value)} required />
						<input id="price" type="number" placeholder="Сумма" value={price} onChange={(e) => setPrice(e.target.value)} required />
						<div className="formButton">
							<button type="submit" className="btn" id="donateButton">Оплатить</button>
						</div>
					</form>
				</div>
            </div>
        </main>
    );
};

export default Donate;
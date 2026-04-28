import React from "react";
import "./App.css";

const img = {
  hero: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1400&q=80",
  food: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
  coffee: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
  delivery: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=900&q=80",
  store: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=900&q=80",
};

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="logoBox">
          <div className="logoMark">7</div>
          <div>
            <h2>SEVEN</h2>
            <span>Convenience Store</span>
          </div>
        </div>

        <nav>
          <a href="#food">Food & Drinks</a>
          <a href="#rewards">Rewards</a>
          <a href="#delivery">Delivery</a>
          <a href="#locator">Find a Store</a>
        </nav>

        <button className="outlineBtn">Sign In</button>
      </header>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Fresh • Fast • Nearby</p>
          <h1>A Lil’ Savory, A Lil’ Sweet</h1>
          <p>
            Grab hot food, cold drinks, coffee, snacks, fuel, and everyday
            essentials anytime you need them.
          </p>
          <div className="heroBtns">
            <button>Find a Store</button>
            <button className="lightBtn">Order Delivery</button>
          </div>
        </div>
        <div className="heroImage">
          <img src={img.hero} alt="Convenience store counter" />
        </div>
      </section>

      <section className="promoGrid" id="food">
        <article className="promoCard big orange">
          <div>
            <p className="tag">Limited Time</p>
            <h2>Fresh bites made easy</h2>
            <p>Pizza, sandwiches, snacks, and treats ready when cravings hit.</p>
            <button>Shop Now</button>
          </div>
          <img src={img.food} alt="Fresh food" />
        </article>

        <article className="promoCard green">
          <p className="tag">Coffee Bar</p>
          <h2>Coffee your way</h2>
          <p>Hot, iced, sweet, bold, creamy — your cup, your rules.</p>
          <img src={img.coffee} alt="Coffee" />
        </article>

        <article className="promoCard red" id="delivery">
          <p className="tag">Delivery</p>
          <h2>Get it at your door</h2>
          <p>Order snacks, drinks, groceries, and more.</p>
          <img src={img.delivery} alt="Delivery bag" />
        </article>
      </section>

      <section className="rewards" id="rewards">
        <div>
          <p className="eyebrow">7Rewards Inspired</p>
          <h2>Earn points. Unlock deals. Save more.</h2>
          <p>
            A bright rewards section with app-style cards, coupons, and member
            benefits inspired by convenience-store loyalty programs.
          </p>
        </div>
        <div className="rewardCards">
          <div><strong>01</strong><span>Scan</span></div>
          <div><strong>02</strong><span>Earn</span></div>
          <div><strong>03</strong><span>Redeem</span></div>
        </div>
      </section>

      <section className="inside">
        <h2>Inside the Store</h2>
        <p>Explore fresh coffee, cold drinks, hot meals, fuel, and everyday essentials.</p>
        <div className="insideWrap">
          <img src={img.store} alt="Store aisle" />
          <div className="insideList">
            {[
              "Hot & cold beverages",
              "Fresh food and bakery",
              "Snacks and candy",
              "Fuel and car essentials",
            ].map((x) => (
              <div className="insideItem" key={x}>{x}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="locator" id="locator">
        <h2>Find Your Store</h2>
        <p>Enter your city or ZIP code to discover nearby locations.</p>
        <div className="searchBox">
          <input placeholder="Enter location" />
          <button>Search</button>
        </div>
      </section>

      <footer>
        <div className="logoBox small">
          <div className="logoMark">7</div>
          <h3>SEVEN</h3>
        </div>
        <p>Demo website inspired by convenience-store homepage layouts.</p>
        <div className="footerLinks">
          <a>About</a><a>Careers</a><a>Franchise</a><a>Contact</a><a>Privacy</a>
        </div>
      </footer>
    </div>
  );
}

export default App
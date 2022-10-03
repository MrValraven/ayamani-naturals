import "./styles.scss";
import Img1 from "../../../../assets/item1NObg.jpg";
import Img2 from "../../../../assets/item2NObg.png";
import EtsyLogo from "../../../../assets/etsyLogo.svg";
import StarIcon from "../../../../assets/star.svg";
import InstagramIcon from "../../../../assets/instagram.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroContent">
        <div className="imgContainer">
          <img className="desktop" src={Img1} alt="" />
          <img className="mobile" src={Img2} alt="" />
        </div>
        <div className="heroText">
          <h1 className="desktop">Golden Mushroom Chai</h1>
          <h1 className="mobile">
            Anxiety Relief <br />
            Oil | <span>€15.30</span>
          </h1>
          <p className="desktop">
            A super healthy, aromatic, delicious and all natural tonic and
            adaptogenic drink.
          </p>
          <p className="mobile">
            A high vibrational essential oils blend that has a soothing and
            calming effect on the whole body, mind, emotional body and spirit.
          </p>
          <div className="buttons">
            <span className="prices desktop"> €16.50</span>
            <button>Add to Basket</button>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
      <div className="socialproof">
        <div className="etsy">
          <img src={EtsyLogo} alt="" />
          <a
            className="desktop"
            href="https://www.etsy.com/shop/AyamaniNaturals"
            target={"_blank"}
            rel="noreferrer noopener"
          >
            Over 6000+ verifed purchases on Etsy |{" "}
          </a>
          <a
            href="https://www.etsy.com/shop/AyamaniNaturals#reviews"
            target={"_blank"}
            rel="noreferrer noopener"
            className="reviews"
          >
            1200+{" "}
            <span className="reviewsStars">
              <img src={StarIcon} alt="star icon" />
              <img src={StarIcon} alt="star icon" />
              <img src={StarIcon} alt="star icon" />
              <img src={StarIcon} alt="star icon" />
              <img src={StarIcon} alt="star icon" />
            </span>
            <span className="reviewsText">reviews</span>
          </a>
        </div>
        <a
          href="https://www.instagram.com/ayamaninaturals/"
          className="instagram desktop"
          target={"_blank"}
          rel="noreferrer noopener"
        >
          <img src={InstagramIcon} alt="instagram icon" />
          <p>@ayamaninaturals</p>
        </a>
      </div>
    </div>
  );
};

export default Hero;

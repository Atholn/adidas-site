import "./newsletter.scss";


const Newsletter : React.FC = () => {
  
  return (
    <div className="newsletter-container">
      <span>
        ZOSTAŃ KLUBOWICZEM, WYKORZYSTAJ ZNIŻKĘ 10%*
      </span>
      <button className="register-button">
        <span>
          ZAREJESTRUJ SIĘ ZA DARMO
        </span>
      </button>
    </div>
  );
};

export default Newsletter;
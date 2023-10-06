import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Экономьте время, экономьте деньги!</h1>
      <span className="mailDesc">
        Подпишитесь, и мы будем присылать вам лучшие предложения
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Email" />
        <button>Подписаться</button>
      </div>
    </div>
  );
};

export default MailList;

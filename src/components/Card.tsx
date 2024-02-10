const Card = () => {
  return (
    <section className="Card__">
      <div className="Card__header">
        <h2>Your Result</h2>
      </div>
      <div className="Card__Cont">
        <div className="Card__circle">
          <span className="Score">76</span>
          <span className="Score-desc">of 100</span>
        </div>
      </div>
      <div className="Card__desc">
        <h3>Great</h3>
        <p>
          You scored higher than 65% of
          <br />
          the people who have taken
          <br />
          these tests.
        </p>
      </div>
    </section>
  );
};

export default Card;

import container from "../constants/data.json";
import img2 from "../assets/images/icon-memory.svg";
import img1 from "../assets/images/icon-reaction.svg";
import img3 from "../assets/images/icon-verbal.svg";
import img4 from "../assets/images/icon-visual.svg";
import ResultBox from "./ResultBox";
const Result = () => {
  const img = [img1, img2, img3, img4];
  return (
    <section className="Result__">
      <h2 className="Result__title">Summary</h2>
      <div className="ResultBox__">
        {container.map((value, index) => (
          <ResultBox
            color={value.color}
            icon={img[index]}
            category={value.category}
            score={value.score}
            key={index}
          />
        ))}
      </div>
      <button className="Result__button" type="button">
        Continue
      </button>
    </section>
  );
};

export default Result;

interface ResultBoxProps {
  color: string;
  category: string;
  score: number;
  icon: string;
}
const ResultBox: React.FC<ResultBoxProps> = ({
  color,
  category,
  score,
  icon,
}) => {
  return (
    <div className={`ResultBox__container ${color}`}>
      <div className="ResultBox__desc">
        <img src={`${icon}`} alt="" />
        <span className={`span__${color}`}>{category}</span>
      </div>
      <div className="desc">
        <span className="text">
          <span className="score">{score}</span>
          <span className="score-max">/</span>100
        </span>
      </div>
    </div>
  );
};

export default ResultBox;

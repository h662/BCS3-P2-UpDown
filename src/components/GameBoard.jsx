import { useEffect, useState } from "react";

const GameBoard = () => {
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));
  const [choiceNum, setChoiceNum] = useState("");

  const [hint, setHint] = useState("0 ~ 100 사이의 숫자를 맞춰보세요!");

  const onChangeChoice = (e) => {
    setChoiceNum(e.target.value);
  };

  useEffect(() => console.log(`랜덤 숫자는 ${randomNum}입니다.`), [randomNum]);
  useEffect(
    () => console.log(`유저가 선택한 숫자는 ${choiceNum}입니다.`),
    [choiceNum]
  );

  return (
    <div className="w-full grow flex flex-col justify-center items-center">
      <div className="mb-4 text-xl font-bold">{hint}</div>
      <div>
        <input
          className="border-2 rounded-lg px-4 py-2 focus:outline-pink-300 shadow-lg"
          type="text"
          onChange={onChangeChoice}
        />
        <button className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg">
          확인
        </button>
      </div>
    </div>
  );
};

export default GameBoard;

import { useEffect, useState } from "react";

const GameBoard = () => {
  const [point, setPoint] = useState(3);
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));
  const [choiceNum, setChoiceNum] = useState("");

  const [hint, setHint] = useState("0 ~ 100 사이의 숫자를 맞춰보세요!");

  const onChangeChoice = (e) => {
    setChoiceNum(e.target.value);
  };
  const onClickCheck = () => {
    let checkNum = parseInt(choiceNum);

    if (isNaN(checkNum)) {
      setHint("숫자를 입력해주세요!");
      return;
    }

    if (0 > checkNum || checkNum >= 100) {
      setHint("숫자를 잘못 입력 하였습니다.");
      return;
    }

    if (randomNum === checkNum) {
      setHint("정답입니다! 새로운 게임을 시작해보세요!");

      if (point > 0) {
        let savedPoint = localStorage.getItem("point");

        localStorage.setItem("point", parseInt(savedPoint) + point);
      }

      setPoint(3);
      setRandomNum(Math.floor(Math.random() * 100));
    } else if (randomNum > checkNum) {
      setHint(`정답은 ${checkNum}보다 높은 숫자입니다.`);
      setPoint(point - 1);
    } else if (randomNum < checkNum) {
      setHint(`정답은 ${checkNum}보다 낮은 숫자입니다.`);
      setPoint(point - 1);
    }
  };

  useEffect(() => console.log(`랜덤 숫자는 ${randomNum}입니다.`), [randomNum]);
  useEffect(
    () => console.log(`유저가 선택한 숫자는 ${choiceNum}입니다.`),
    [choiceNum]
  );
  useEffect(() => console.log(`포인트 : ${point}`), [point]);

  return (
    <div className="w-full grow flex flex-col justify-center items-center">
      <div className="mb-4 text-xl font-bold">{hint}</div>
      <div>
        <input
          className="border-2 rounded-lg px-4 py-2 focus:outline-pink-300 shadow-lg"
          type="text"
          onChange={onChangeChoice}
        />
        <button
          className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg"
          onClick={onClickCheck}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default GameBoard;

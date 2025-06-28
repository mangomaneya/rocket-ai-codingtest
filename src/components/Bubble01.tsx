'use client'
import Image from "next/image";

const Bubble01 = () => {

  return (
    <div className="relative mt-[-72px] h-[180px] w-full">
      <div className="absolute top-0 left-6 z-50 h-full w-auto">
        <Image
          src={"/image/bubble_1.png"}
          alt="말풍선"
          width={257}
          height={0}
          className="h-auto"
        />
        <p>
          이제 본격적으로
          {userName}님의 사주팔자를 분석해볼 차례네요.
        </p>
      </div>
    </div>
  );
};

export default Bubble01;

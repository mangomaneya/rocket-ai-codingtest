"use client";

import Image from "next/image";
import { useSajuStore } from "@/app/provider";

const SajuContent = () => {
  const { userName } = useSajuStore((state) => state);

  return (
    <div className="relative flex h-full w-full max-w-md flex-col">
      <div className="relative z-30 mt-[-72px] h-[180px] max-w-[257px] items-center justify-center text-center">
        <Image
          src={"/image/bubble_1.png"}
          alt="말풍선"
          layout="fill"
          objectFit="contain"
        />
        <p className="absolute inset-0 z-[60] mx-auto box-border flex h-full max-w-[215px] items-center justify-center p-6 pt-8">
          이제 본격적으로
          <br /> {userName}님의 사주팔자를 <br />
          분석해볼 차례네요.
        </p>
      </div>
      <div className="relative mt-5 h-[286px] w-full">
        <div className="absolute bottom-10 left-0 h-auto w-auto">
          <Image
            src={"/image/back_cloud.png"}
            alt="배경구름"
            width={153}
            height={0}
            className="h-auto"
          />
        </div>
        <div className="absolute top-0 right-6 h-full w-auto">
          <Image
            src={"/image/girl_hand.jpg"}
            alt="사주를 적는 손"
            width={120}
            height={0}
            className="h-auto"
          />
        </div>

        <div className="absolute top-5 right-24 h-auto w-auto">
          <Image
            src={"/image/writing_sound.png"}
            alt="글 쓰는 소리"
            width={90}
            height={0}
            className="h-auto"
          />
        </div>
      </div>
      <div className="relative z-10 h-auto w-full">
        <div className="relative z-20 mt-[-64px] flex h-36 w-full max-w-[280px] items-center justify-center">
          <Image
            src={"/image/bubble_2.png"}
            alt="말풍선"
            layout="fill"
            objectFit="cover"
          />
          <p className="absolute w-full inset-0 flex h-full items-center justify-center text-center mt-[-14px]">
            제가 {userName}님의 사주를 <br />
            보기 쉽게 표로 정리했어요
          </p>
        </div>
        <div className="mt-10 h-[306px] w-full">
          <Image
            src={"/image/girl_2.png"}
            alt="사주를 알려주는 소녀"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SajuContent;

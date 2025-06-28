import Image from 'next/image'
import React from 'react'

const SajuHeader = () => {
  return (
    <div className="relative flex h-[720px] w-full items-center justify-center ">
          <div className="absolute top-0 left-0 h-full w-full items-center overflow-hidden bg-gradient-to-b from-[#5B5247] to-[#937C5F]">
            <div className="absolute top-0 h-[261px] w-full bg-gradient-to-b from-black to-transparent"></div>
            <div className="absolute bottom-0 z-20 h-[195px] w-full bg-gradient-to-t from-[#F3F2EF] to-transparent"></div>
            {/* 배경 글자 영역 */}
            <div>
              <p className="font-zen text-center text-6xl leading-[1.5] tracking-[0.2] text-white opacity-10 blur-xs">
                甲乙丙丁戊己 庚辛壬癸子丑 寅卯辰巳午未 申酉戌亥甲乙甲乙丙丁戊己
                庚辛壬癸子丑 寅卯辰巳午未 申酉戌亥甲乙甲乙丙丁戊己 庚辛壬癸子丑
                寅卯辰巳午未 申酉戌亥甲乙甲乙丙丁戊己 庚辛壬癸子丑 寅卯辰巳午未
                申酉戌亥甲乙甲乙丙丁戊己 庚辛壬癸子丑 寅卯辰巳午未 申酉戌亥甲乙
              </p>
            </div>
          </div>
          <div className="relative flex h-full w-full max-w-md flex-col items-center justify-between pt-[84px]">
            {/* 상단 타이틀 */}
            <div className="flex h-auto w-[157px] flex-col gap-3 text-center text-xl font-normal text-white">
              <p>제 1장</p>
              <Image
                src={"/image/title_line.png"}
                alt="제목 라인"
                width={157}
                height={20}
              />
              <p>나의 사주 팔자</p>
            </div>
            {/* 소녀 */}
            <div className="absolute right-0 bottom-0">
              <Image
                src={"/image/girl_1.png"}
                alt="사주보는 소녀"
                width={313}
                height={0}
                className="h-auto"
              />
            </div>
          </div>
        </div>
  )
}

export default SajuHeader
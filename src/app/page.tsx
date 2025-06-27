import SajuTable from "@/components/SajuTable";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#F3F2EF]">
      <div className="flex w-full flex-col items-center justify-center bg-[#F3F2EF]">
        <div className="relative flex h-[720px] w-full items-center justify-center">
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
        {/* 콘텐츠 영역 */}
        <div className="relative flex h-full w-full max-w-md flex-col items-center">
          <div className="relative mt-[-72px] h-[180px] w-full">
            <div className="absolute top-0 left-6 z-50 h-full w-auto">
              <Image
                src={"/image/bubble_1.png"}
                alt="말풍선"
                width={257}
                height={0}
                className="h-auto"
              />
            </div>
            
          </div>
          <div className="relative mt-5 h-[286px] w-full">
            <div className="absolute top-0 right-6 h-full w-auto">
              <Image
                src={"/image/girl_hand.jpg"}
                alt="사주를 적는 손"
                width={120}
                height={0}
                className="h-auto"
              />
            </div>
            <div className="absolute w-auto h-auto left-0 bottom-10">
              <Image
              src={"/image/back_cloud.png"}
              alt="배경구름"
              width={153}
              height={0}
              className="h-auto"/>
            </div>
            <div className="absolute w-auto h-auto top-5 right-24">
              <Image
              src={"/image/writing_sound.png"}
              alt="글 쓰는 소리"
              width={90}
              height={0}
              className="h-auto"/>
            </div>
          </div>
          <div className="relative w-full h-auto  z-10 flex flex-col justify-center items-center ">
            <div className="relative z-20 w-full h-36 mt-[-64px]">
              <Image
                src={"/image/bubble_2.png"}
                alt="말풍선"
                width={239}
                height={0}
                className="h-auto"
              />
            </div>
            <div className="h-[306px] mt-10">
              <Image
                src={"/image/girl_2.png"}
                alt="사주를 알려주는 소녀"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <SajuTable></SajuTable>
      </div>
    </main>
  );
}

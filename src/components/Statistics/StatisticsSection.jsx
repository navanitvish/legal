import React from 'react';
import StatisticsCard from './StatisticsCard';

const statisticsData = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/413655955cd1b32afb60f1a85d5478eaf0470c35af3d571b2ac4b7ca1be663e5?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977", title: "Over 5 Million", value: "5.5 million" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/057b8faa68730bb9cc9fe2c32b387d3b3ac506e745fb3dada39a393c332e4a11?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977", title: "Transactions Processed", value: "24 billion" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8df4ee456133a183432370fc8330cc1dddf3ff85344ffc9ff17bf857b2c01038?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977", title: "98% Satisfaction", value: "99%" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4b4958a5e4e3c7cfbcdca112dacc58777af0a9a2da3f87d0824b00de6da0a48?placeholderIfAbsent=true&apiKey=eb4ca1ec67734143848407c84414a977", title: "10,000 Clients", value: "78,513" }
];

function StatisticsSection() {
  return (
    <section className="flex overflow-hidden flex-wrap gap-16 items-start p-16 mt-24 w-full bg-red-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex overflow-hidden flex-wrap flex-1 shrink items-start text-center bg-white rounded-xl border border-solid basis-0 border-zinc-400 min-w-[320px] max-md:max-w-full">
        {statisticsData.map((stat, index) => (
          <StatisticsCard key={index} {...stat} />
        ))}
      </div>
      <div className="flex flex-col flex-1 shrink text-black basis-0 max-w-[365px] min-w-[365px] text-left">
        <header className="flex flex-col w-full font-bold">
          <h2 className="text-lg leading-loose text-neutral-600">Your Legal Partner</h2>
          <h1 className="mt-3 text-3xl leading-10">Connecting You with Expert Lawyers for All Your Legal Needs</h1>
          <p className="mt-3 text-base leading-6">Connecting You with Expert Lawyers for All Your Legal Needs</p>
        </header>
        <button className="overflow-hidden gap-3 self-start px-4 mt-8 text-lg font-semibold leading-loose text-center rounded-xl border border-solid bg-zinc-50 border-zinc-400 min-h-[44px]">
          Discover More
        </button>
      </div>
    </section>
  );
}

export default StatisticsSection;
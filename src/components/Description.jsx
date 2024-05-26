export default function Description({ topicText, topicTitle }) {
  return (
    <div className="pl-32 pr-32">
      <p className=" w-full sm:text-3xl md:text-5xl text-6xl h-5/6 border-y-purple-300 rounded-b-lg text-center text-textgreen">
        {topicTitle}
      </p>
      <pre className="sm:text-sm md:text-base text-subtextgreen  pb-10">
        {topicText}
      </pre>
    </div>
  );
}

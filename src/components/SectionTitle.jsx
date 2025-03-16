const SectionTitle = ({ title, subtitle, titleColor, subtitleColor }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center gap-2">
        <hr className="w-10 h-1 bg-secondary border-0" />
        <h3
          className={`m-0 text-xl font-bold ${
            subtitleColor ? subtitleColor : "text-secondary"
          }`}
        >
          {subtitle}
        </h3>
        <hr className="w-10 h-1 bg-secondary border-0" />
      </div>
      <h2
        className={`text-primary font-dancing-script text-5xl m-0 mt-2 text-center font-semibold ${titleColor} xl:text-6xl`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;

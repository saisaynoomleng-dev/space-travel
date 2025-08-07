const PageTitle = ({ index, title }: { index: string; title: string }) => {
  return (
    <h1 className="text-center md:text-left space-x-4 tracking-widest">
      <span className="text-brand-white/50">{index}</span>
      <span className="uppercase">{title}</span>
    </h1>
  );
};

export default PageTitle;

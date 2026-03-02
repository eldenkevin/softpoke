const Divider = () => {
  return (
    <div className="ah01">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/ah01.svg" alt="ahStart" className="ahStart" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/ah01.svg" alt="ahEnd" className="ahEnd" />
    </div>
  );
};

const DividerWithMargin = () => {
  const style = { marginTop: '-10px' };
  return (
    <div className="ah01" style={style}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/ah01.svg" alt="ahStart" className="ahStart" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/ah01.svg" alt="ahEnd" className="ahEnd" />
    </div>
  );
};

export { Divider, DividerWithMargin };

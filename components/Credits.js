import FadeIn from "./FadeIn";

const Credits = () => {
  return (
    <div style={{ marginTop: 40, paddingBottom: 20 }}>
      <FadeIn>
        <div className="credits">
          <p style={{ margin: 0 }}>Built by Amna Kamran</p>
          <p>Design inspired by Gazi Jarin</p>
        </div>
      </FadeIn>
    </div>
  );
};

export default Credits;

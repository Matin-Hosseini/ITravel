import SectionHeader from "../../../../components/SectionHeader";
import "./index.css";

const aboutUsInfo = [
  {
    id: 1,
    title: "دوره های اختصاصی",
    caption: "با پشتیبانی و کیفیت بالا ارائه میده !",
    icon: <i className="far fa-copyright about-us__icon"></i>,
  },
  {
    id: 2,
    title: "اجازه تدریس",
    caption: "به هر مدرسی رو نمیده. چون کیفیت براش مهمه !",
    icon: <i className="fas fa-leaf about-us__icon"></i>,
  },
  {
    id: 3,
    title: "دوره پولی و رایگان",
    caption:
      " براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده",
    icon: <i className="fas fa-gem about-us__icon"></i>,
  },
  {
    id: 4,
    title: "اهمیت به کاربر",
    caption:
      "اولویت اول و آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست",
    icon: <i className="fas fa-crown about-us__icon"></i>,
  },
];

type AboutUsBoxProps = {
  title: string;
  caption: string;
  icon: React.ReactNode;
};

const AboutUsBox = ({ title, icon, caption }: AboutUsBoxProps) => {
  return (
    <div className="about-us__box">
      <div className="about-us__box-right">{icon}</div>
      <div className="about-us__box-left">
        <span className="about-us__box-title">{title}</span>
        <span className="about-us__box-text">{caption}</span>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <SectionHeader
          title="ما چه کمکی بهتون میکنیم؟"
          caption=" از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست"
        />

        <div className="container">
          <div className="row">
            {aboutUsInfo.map((info) => (
              <div className="col-lg-6" key={info.id}>
                <AboutUsBox {...info} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

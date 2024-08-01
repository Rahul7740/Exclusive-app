import ImgPath from "../assets/images/ImgPath";
import SvgPath from "../assets/svg/SvgPath";
import "../style/Categories.css";

const categories = [
  { name: "Phones", icon: SvgPath.phone },
  { name: "Computers", icon: SvgPath.computer },
  { name: "SmartWatch", icon: SvgPath.smartWatch },
  { name: "Camera", icon: SvgPath.camera },
  { name: "HeadPhones", icon: SvgPath.headPhone },
  { name: "Gaming", icon: SvgPath.gamePad },
];

function Categories(props) {
  return (
    <section className="all-section">
      <div className="container">
        <div className="categories-main-container">
          <div className="overview-head">
            <div className="red-rec"></div>
            <h3 className="overview-h3">{props.title}</h3>
          </div>
          <div className="category-browse">
            <div className="flex-spaceBetween section-title">
              <h1 className="overview-h1">{props.head}</h1>
              <div className="heading-arrows">
                <img src={SvgPath.leftArrowWithBG} />
                <img src={SvgPath.rightArrowWithBG} />
              </div>
            </div>
            <div className="categories">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`category-card ${
                    category.selected ? "selected" : ""
                  }`}
                >
                  <img src={category.icon} />
                  <p>{category.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Categories;

import ImgPath from "../assets/images/ImgPath";
import "../style/Featured.css";

function Featured(props) {
  return (
    <>
      <section className="all-section">
        <div className="container">
          <div className="overview-head">
            <div className="red-rec"></div>
            <h3 className="overview-h3">{props.title}</h3>
          </div>
          <div className="flex-spaceBetween section-title">
            <h1 className="overview-h1">{props.head}</h1>
          </div>
          <div className="featured-main-container">
            <div className="featured-items featured-item1">
              <div className="featured-item-contents">
                <h3>PlayStation 5</h3>
                <p>Black and White version of the PS5 coming out on sale.</p>
                <button>Shop Now</button>
              </div>
              <img src={ImgPath.featuredImg1} />
            </div>
            <div className="featured-items featured-item2">
              <div className="featured-item-contents">
                <h3>Women’s Collections</h3>
                <p>Featured woman collections that give you another vibe.</p>
                <button>Shop Now</button>
              </div>
              <img src={ImgPath.featuredImg2} />
            </div>
            <div className="featured-items featured-item3">
              <div className="featured-item-contents">
                <h3>Speakers</h3>
                <p>Amazon wireless speakers</p>
                <button>Shop Now</button>
              </div>
              <img src={ImgPath.featuredImg3} />
            </div>
            <div className="featured-items featured-item4">
              <div className="featured-item-contents">
                <h3>Perfume</h3>
                <p>GUCCI INTENSE OUD EDP</p>
                <button>Shop Now</button>
              </div>
              <img src={ImgPath.featuredImg4} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Featured;

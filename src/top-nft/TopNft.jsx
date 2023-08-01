import group_144 from "../assests/Group 144 (1).png";
import group_145 from "../assests/Group 145.png";
import group_146 from "../assests/Group 146.png";
import group_172 from "../assests/Group 172.png";
import ellipse_18 from "../assests/Ellipse 18.png";

const cardDetails = [
  {
    title: "Rahul",
    img: group_144,
    displayImg: ellipse_18,
    description: "Art does not exist only to entertain, but also to challenge one to think",
  },
  {
    title: "Gohul",
    img: group_145,
    displayImg: ellipse_18,
    description: "Art does not exist only to entertain, but also to challenge one to think",
  },
  {
    title: "Midhun",
    img: group_146,
    displayImg: ellipse_18,
    description: "Art does not exist only to entertain, but also to challenge one to think",
  },
  {
    title: "Maadhu",
    img: group_172,
    displayImg: ellipse_18,
    description: "Art does not exist only to entertain, but also to challenge one to think",
  },
];

export default function TopNft() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-center mb-5">
          Out top <span className="nft-text">NFT</span> artists
        </h1>
        <div class="dropdown mb-5">
          <a
            class="btn nav-btn text-white dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            This week
          </a>
          <i class="fa-regular fa-circle-left ms-3 fa-2xl"></i>
          <i class="fa-regular fa-circle-right ms-3 fa-2xl icon-color"></i>
        </div>
      </div>
      {cardDetails.map((card, index) => {
        const { title, img, displayImg, description } = card;

        return (
          <div key={index} className="col-3 mt-4">
            <div class="card text-center details-card-color">
              <div className="position-relative">
                <img src={img} class="card-img-top  p-3" alt="..." />
                <div className="mb-4 position-absolute top-100 start-50 translate-middle">
                  <img src={displayImg} className="w-100" />
                </div>
              </div>

              <div class="card-body mt-4">
                <h5 class="card-title mt-4 text-white">{title}</h5>
                <p class="card-text details-card-description-color">{description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

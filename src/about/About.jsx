import jesus_1 from "../assests/jesus-1.png";
import jesus_2 from "../assests/jesus-2.png";
import jesus_3 from "../assests/jesus-3.png";
import jesus_4 from "../assests/jesus-4.png";

export default function About() {
  return (
    <>
      <div class="d-flex align-items-center">
        <div class="">
          <img src={jesus_1} className="w-50 p-2" />
          <img src={jesus_2} className="w-50 p-2" />
          <img src={jesus_3} className="w-50 p-2" />
          <img src={jesus_4} className="w-50 p-2" />
        </div>
        <div class="flex-grow-1" style={{ marginLeft: "100px" }}>
          <h1 className="mb-5">
            <div>We give the best quality</div>
            <br />
            <span className="nft-text">NFT</span> for you
          </h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis, mollitia autem sequi fugit
          voluptate saepe consectetur eos deserunt dicta dolor praesentium eum eveniet omnis explicabo dolore,
          necessitatibus impedit inventore.
          <div>
            <button className="btn nav-btn text-white mt-4">See more</button>
          </div>
        </div>
      </div>
    </>
  );
}

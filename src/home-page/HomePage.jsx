export default function HomePage() {
  return (
    <>
      <div className="row">
        <div className="col-4 home-page">
          <div className="container">
            <div className="row">
              <h1>
                <span>The Beauty of </span>
                <br className="mb-3 home-page-title" />
                every <span className="nft-text">NFT</span>
              </h1>
            </div>
            <div className="row mt-4 ms-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eos modi culpa ipsa, ab, nostrum
              voluptates sed fuga tempore suscipit, unde quibusdam itaque. Incidunt suscipit pariatur enim? Expedita, a
              numquam.
            </div>
            <div className="row gx-0 mt-4">
              <div className="d-flex">
                <button className="btn nav-btn text-white flex-fill">Explore</button>
                <button className="btn nav-btn text-white flex-fill ms-3">Create</button>
              </div>
            </div>
            <div className="row gx-0 mt-4">
              <button className="btn nav-btn text-white">Place bid</button>
              <button className="btn nav-btn text-white mt-3">View detail</button>
            </div>
          </div>
        </div>
        <div className="col-8"></div>
      </div>
      <div className="row mt-5 p-4 home-page-info text-center">
        <div className="col-4 home-page-info-content-1">
          <h1>1050 + </h1>
          <h5>User's</h5>
        </div>
        <div className="col-4 home-page-info-content-2">
          <h1>500 +</h1>
          <h5>Artists</h5>
        </div>
        <div className="col-4 home-page-info-content-3">
          <h1>200 +</h1>
          <h5>Artworks</h5>
        </div>
      </div>
    </>
  );
}

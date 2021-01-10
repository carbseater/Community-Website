import './motive.css';

const Motive = () => {
  return (
    <div className="motive-div">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center pb-20">
              <div className='motive'>
                <h1>
                  <i className='fas fa-crosshairs'></i>ur Motive
          </h1>
                <div className='dash'></div>
              </div>
              <p className="text text-white my-3">
                At HITK Tech Community, we believe there is no limit to learning. The more you learn, the more places you will go. Our community aims at:
        </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-8 my-3">
            <div
              className="single-features d-flex mt-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0s"
            >
              <div className="features-icon">
                <i className="fas fa-microphone"></i>
              </div>
              <div className="features-content text-left">
                <h4 className="features-title"><a href="/#">Great Speakers</a></h4>
                <p className="">
                  Increasing awareness towards plethora of opportunities such as internships, competitions, webinars, openings for collaboration in projects, job openings and contribution in open source projects.
               </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8 my-3">
            <div
              className="single-features d-flex mt-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div className="features-icon">
                <i className="fa fa-users"></i>
              </div>
              <div className="features-content text-left">
                <h4 className="features-title"><a href="/#">New People</a></h4>
                <p className="">
                  All converse together, share information and learn from each other.
          </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8 my-3">
            <div
              className="single-features d-flex mt-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="1s"
            >
              <div className="features-icon">
                <i className="fas fa-globe"></i>
              </div>
              <div className="features-content text-left">
                <h4 className="features-title"><a href="/#">Global Event</a></h4>
                <p className="">
                  Helps you accelerate your learning and bring you closer to like – minded individuals. Ultimately, there will always be a helping hand at your side.
          </p>
              </div>
            </div>
          </div>
          <p className="text text-white my-3 text-center">
            All of the factor counts while making you better, and ultimately win is an asset. So go ahead and share the vision for a better future with technology!
        </p>
        </div>
      </div>
    </div>

  );
};
export default Motive;

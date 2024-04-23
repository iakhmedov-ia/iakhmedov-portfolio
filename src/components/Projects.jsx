import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "../styles/Container.css";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects_inner container">
        <div className="projects_info ">
          <h1>
            Projects{" "}
            <lord-icon
              style={{ margin: "0 0 2px -4px" }}
              trigger="loop"
              delay="500"
              src="https://cdn.lordicon.com/lzgmgrnn.json"
            ></lord-icon>
          </h1>
          <p>
            These are some of the projects I've developed. <br />
            <br /> The projects were developed using HTML, CSS, JavaScript, jQuery, and React technologies. Throughout my experience, I've developed various types of projects, focusing on the semantic structure of HTML and the importance of web page accessibility.
          </p>
        </div>
        <div className="projects_slider">
            <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={3.5}
            // pagination={{ clickable: true }}
            >
                <SwiperSlide className="slider slider_1">
                      <h3> eCommerce </h3>
                      <p>
                        E-commerce specialized in the sale of furniture.
                      </p>
                        <div className="slider_list">
                          <p> HTML </p>
                          <p> CSS </p>
                          <p> React </p>
                        </div>
                        <div className="slider_btn">
                          <a href='https://github.com/iakhmedov-ia/React_eCommerce-shop' target='_blank' title='View eCcomerce Project'> View Project </a>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="slider slider_2">
                  <h3> GitHub API </h3>
                  <p>
                    Finding GitHub accounts by username.
                  </p>
                  <div className="slider_list">
                    <p> HTML </p>
                    <p> CSS </p>
                    <p> JavaScript </p>
                  </div>
                  <div className="slider_btn">
                  <a href='https://github.com/iakhmedov-ia/GitHub_API' target='_blank' title='View GitHub API Project'> View Project </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider slider_3">
                  <h3> Screenshot </h3>
                  <p>
                  Capturing screenshots of the screen.
                  </p>
                  <div className="slider_list">
                    <p> HTML </p>
                    <p> CSS </p>
                    <p> JavaScript </p>
                  </div>
                  <div className="slider_btn">
                  <a href='https://github.com/iakhmedov-ia/Capture_Screenshot' target='_blank' title='View Capture Project'> View Project </a>
                  </div>
                </SwiperSlide> 
                <SwiperSlide className="slider slider_4">
                  <h3> Weather API </h3>
                  <p>
                  Viewing weather for specific locations.
                  </p>
                  <div className="slider_list">
                    <p> HTML </p>
                    <p> CSS </p>
                    <p> JavaScript </p>
                  </div>
                  <div className="slider_btn">
                  <a href='https://github.com/iakhmedov-ia/weather_web_API' target='_blank' title='View Weather Project'> View Project </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider slider_5">
                  <h3> GameCamo </h3>
                  <p className='slider_project--info'>
                    Static Game Web Page 
                  </p>
                  <div className="slider_list">
                    <p> HTML </p>
                    <p> CSS </p>
                    <p> JavaScript </p>
                  </div>
                  <div className="slider_btn">
                  <a href='https://github.com/iakhmedov-ia/GameCamo--Web' target='_blank' title='View GameCamo Project'> View Project </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider slider_6">
                  <h3> Createx </h3>
                  <p>
                  Provides information about online school.
                  </p>
                  <div className="slider_list">
                    <p> HTML </p>
                    <p> CSS </p>
                    <p> jQuery </p>
                  </div>
                  <div className="slider_btn">
                  <a href='https://github.com/iakhmedov-ia/Createx_web' target='_blank' title='View Createx Project'> View Project </a>
                  </div>
                </SwiperSlide>    
            </Swiper>
        </div>
      </div>
    </section>
  );
}

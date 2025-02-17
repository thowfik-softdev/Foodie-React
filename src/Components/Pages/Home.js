import { React } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  AiOutlineArrowRight,
  AiOutlineClockCircle,
  AiFillPhone
} from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { BsPlayFill } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const Foods = [
    {
      img: "assets/foods/1.png",
      name: "Rose Muffen",
      price: "12 $",
      added: "served with french fries + drink",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, earum. Ipsam possimus voluptatem culpa..."
    },
    {
      img: "assets/foods/2.png",
      name: "Rose Muffen",
      price: "12 $",
      added: "served with french fries + drink",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, earum. Ipsam possimus voluptatem culpa..."
    },
    {
      img: "assets/foods/3.png",
      name: "Rose Muffen",
      price: "12 $",
      added: "served with french fries + drink",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, earum. Ipsam possimus voluptatem culpa..."
    },
    {
      img: "assets/foods/4.png",
      name: "Rose Muffen",
      price: "12 $",
      added: "served with french fries + drink",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, earum. Ipsam possimus voluptatem culpa..."
    },
    {
      img: "assets/foods/5.png",
      name: "Rose Muffen",
      price: "12 $",
      added: "served with french fries + drink",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, earum. Ipsam possimus voluptatem culpa..."
    },
    {
      img: "assets/foods/6.png",
      name: "Rose Muffen",
      price: "12 $",
      added: "served with french fries + drink",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, earum. Ipsam possimus voluptatem culpa..."
    }
  ];

  const sliderArr = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtt3zOq6B9NnqaNv6ApPqWUmxmTf5hxtF_g&s",
      head: "John Doe",
      p1: "Developer",
      p2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJaoIeJQU_V9rL_ZII61whWyqSFbmMgTgwQ&s",
      head: "Emily Jason",
      p1: "Accountant",
      p2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s",
      head: "Abel Tutor",
      p1: "Manager",
      p2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Container className="overall_container">
      <img className="layout_style1" src="/assets/pageLayout/1.png" alt="" />
      <img className="layout_style2" src="/assets/pageLayout/2.png" alt="" />
      <img className="layout_style3" src="/assets/pageLayout/4.png" alt="" />
      <img
        className="layout_style4"
        src="/assets/pageLayout/1_down.png"
        alt=""
      />
      <img className="layout_style5" src="/assets/pageLayout/5.png" alt="" />

      <section className="ani_div section1 py-5 px-1">
        <Row className=" d-flex align-items-center">
          <Col xs={12} sm={12} md={12} lg={6} className=" py-3">
            <div className=" w-100 ">
              <p className="strong_txt fw-bolder">
                Your Favourite Food Delivered Hotel & Fresh
              </p>
              <p className="sml_txt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                dicta sed odio corporis commodi obcaecati repudiandae asperiores
                id velit dolor.
              </p>
              <Button className="sec1_btn rounded-5 px-3 py-2 border-0 fw-bolder">
                Order Now
                <AiOutlineArrowRight className=" fs-4 ms-2" />
              </Button>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}>
            <div>
              <img className="hero_img w-100" src="/assets/1.png" alt="" />
            </div>
          </Col>
        </Row>
      </section>
      <section className="ani_div section2 py-5 px-1">
        <Row className=" d-flex justify-content-center gap-5">
          <Col xs={12} sx={12} md={12} lg={3}>
            <div className=" d-flex justify-content-center align-items-center">
              <Card className="card_style p-3" style={{ width: "18rem" }}>
                <Card.Body className=" d-flex flex-column align-items-center">
                  <Card.Title>
                    <AiOutlineClockCircle className="Card_react_icons p-1 fs-1 border-0 rounded-5" />
                  </Card.Title>
                  <p className="mb-2 fs-5 fw-bolder">10:00 am - 7:00 pm</p>
                  <p>Working Hours</p>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col xs={12} sx={12} md={12} lg={3}>
            <div className=" d-flex justify-content-center align-items-center">
              <Card className="card_style p-3" style={{ width: "18rem" }}>
                <Card.Body className=" d-flex flex-column align-items-center">
                  <Card.Title>
                    <MdLocationOn className="Card_react_icons p-1 fs-1 border-0 rounded-5" />
                  </Card.Title>
                  <p className="mb-2 fs-5 fw-bolder">velyka Lkisvska 100</p>
                  <p>Get Directions</p>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col xs={12} sx={12} md={12} lg={3}>
            <div className=" d-flex justify-content-center align-items-center">
              <Card className="card_style p-3" style={{ width: "18rem" }}>
                <Card.Body className=" d-flex flex-column align-items-center">
                  <Card.Title>
                    <AiFillPhone className="Card_react_icons p-1 fs-1 border-0 rounded-5" />
                  </Card.Title>
                  <p className="mb-2 fs-5 fw-bolder">+ 30 (063) 833 24 15</p>
                  <p>Call Online</p>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </section>
      <section className="ani_div section3 py-5 px-1">
        <Row className=" d-flex justify-content-center align-items-center">
          <Col xs={12} sm={12} md={12} lg={6}>
            <div>
              <img className="hero_img w-100" src="/assets/3.png" alt="" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} className=" py-3">
            <div className=" w-100 ">
              <p className="title_txt fw-bolder fs-3 m-0">About</p>
              <p className="strong_txt fw-bolder">
                Food Is An Important Part Of A Balanced Diet
              </p>
              <p className="sml_txt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                dicta sed odio corporis commodi obcaecati repudiandae asperiores
                id velit dolor.
              </p>
              <p className="sml_txt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur laudantium aliquid fuga officiis quasi vel id
                accusamus corporis soluta. Amet.
              </p>
              <div className=" d-flex gap-3">
                <Button className="sec1_btn rounded-5 px-3 py-2 border-0 fw-bolder">
                  Learn More
                </Button>
                <Button className="sec1_btn rounded-5 px-3 py-2 border-0 fw-bolder d-flex align-items-center">
                  <BsPlayFill className=" me-1" />
                  Watch Now
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section className="ani_div section4 py-5 px-1">
        <div className=" d-flex flex-column align-items-center w-100 ">
          <p className="title_txt fw-bolder fs-2 m-0">work</p>
          <p className="strong_txt fw-bolder">How it Works</p>
          <p className="sml_txt text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            assumenda provident corporis
          </p>
        </div>
        <Row className=" d-flex justify-content-center gap-5 py-5">
          <Col xs={12} sx={12} md={12} lg={3}>
            <div className=" d-flex justify-content-center align-items-center">
              <Card className="card_style2 p-3" style={{ width: "30rem" }}>
                <Card.Body className=" d-flex flex-column align-items-center">
                  <img src="/assets/Card/1.png" alt="" />
                  <p className="mb-2 fs-5 fw-bolder">Pick Meals</p>
                  <p className=" text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus explicabo quas error modi ratione! Eaque harum
                    voluptatum ea perferendis culpa.
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col xs={12} sx={12} md={12} lg={3}>
            <div className=" d-flex justify-content-center align-items-center">
              <Card className="card_style2 p-3" style={{ width: "30rem" }}>
                <Card.Body className=" d-flex flex-column align-items-center">
                  <img src="/assets/Card/2.png" alt="" />
                  <p className="mb-2 fs-5 fw-bolder">Choose How Often</p>
                  <p className=" text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus explicabo quas error modi ratione! Eaque harum
                    voluptatum ea perferendis culpa.
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col xs={12} sx={12} md={12} lg={3}>
            <div className=" d-flex justify-content-center align-items-center">
              <Card className="card_style2 p-3" style={{ width: "30rem" }}>
                <Card.Body className=" d-flex flex-column align-items-center">
                  <img src="/assets/Card/3.png" alt="" />
                  <p className="mb-2 fs-5 fw-bolder">Fast Deliveries</p>
                  <p className=" text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus explicabo quas error modi ratione! Eaque harum
                    voluptatum ea perferendis culpa.
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </section>
      <section className="ani_div section5 py-5 px-1">
        <div className=" d-flex flex-column align-items-center w-100 ">
          <p className="title_txt fw-bolder fs-2 m-0">Menu</p>
          <p className="strong_txt fw-bolder">Explore Our Best Menu</p>
          <p className="sml_txt text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            assumenda provident corporis
          </p>
        </div>
        <div className=" d-flex justify-content-center">
          <Row className=" d-flex justify-content-center align-items-center gap-3 py-5">
            {Foods.map((food, index) => (
              <Col width="auto" key={index} xs={12} sm={12} md={4} lg={3}>
                <div className=" d-flex justify-content-center align-items-center my-2">
                  <Card className="card_style1 p-1" style={{ width: "20rem" }}>
                    <img className="card_style" src={food.img} alt="" />
                    <Card.Body>
                      <Card.Title>{food.name}</Card.Title>
                      <Card.Text>{food.added}</Card.Text>
                      <Card.Text>{food.description}</Card.Text>
                      <div className=" d-flex justify-content-between align-items-center">
                        <Button className="sec1_btn fw-bolder border-0 rounded-5">
                          Order Now
                        </Button>
                        <Button className=" rounded-5">{food.price}</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className=" d-flex justify-content-center align-items-center">
          <Button className="sec1_btn fw-bolder border-0 p-3 rounded-5">
            Load More...
          </Button>
        </div>
      </section>
      <section className="ani_div section6 py-5 px-1">
        <div className=" d-flex flex-column align-items-center w-100 ">
          <p className="title_txt fw-bolder fs-2 m-0">Testimonial</p>
          <p className="strong_txt fw-bolder">What They are Saying</p>
          <p className="sml_txt text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            assumenda provident corporis
          </p>
        </div>
        <div className="py-3 ">
          <Slider className="sliderTag" {...sliderSettings}>
            {sliderArr.map((slide) => (
              <div className="slider-item d-flex justify-content-center align-items-center">
                <div className="image-container">
                  <img
                    src={slide.img}
                    alt="Slider_Image"
                    width="200px"
                    className="rounded-5 slider_img p-2"
                  />
                </div>
                <div className="text-container p-3">
                  <div className="mx-auto d-flex flex-column align-items-start">
                    <h1 className=" d-flex gap-5">
                      {slide.head}
                      <img width={50} src="/assets/Quotation.svg" alt="" />
                    </h1>
                    <h3>{slide.p1}</h3>
                    <p>{slide.p2}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="ani_div section7 py-5 px-1">
        <div className=" d-flex flex-column align-items-center">
          <p className="strong_txt fw-bolder pb-5">
            Have Question In Mind? Let us help You
          </p>
          <form className="form_field rounded-5 w-75 d-flex">
            <input
              type="text"
              className="input_field rounded-5 border-0 p-3"
              placeholder="Enter your email address"
            />
            <Button className="sec1_btn secbtn_send fw-bolder py-2 px-4 border-0 rounded-5">
              Send
            </Button>
          </form>
        </div>
      </section>
    </Container>
  );
};

export default Home;

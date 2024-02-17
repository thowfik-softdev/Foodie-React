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
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1WrYHPL5uBEbZ-jDmnrXntaV239UFhikMtHMlVtRCnhDjrAZvP7G6EpwnUvls2_DGTRU&usqp=CAU",
      head: "Vijay",
      p1: "Actor",
      p2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      img: "data:image/jpeg;base64,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",
      head: "Ajith",
      p1: "Actor",
      p2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      img: "data:image/jpeg;base64,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",
      head: "Surya",
      p1: "Actor",
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
      <section className=" ani_div section2 py-5 px-1">
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

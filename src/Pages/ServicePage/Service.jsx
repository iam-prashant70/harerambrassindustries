import React, { useEffect } from 'react'
import "./Service.css"
import Navbar from '../../component/Navbar/Navbar';
import { Link } from 'react-router-dom';

export default function Service() {
  useEffect(() => {
    document.title = 'Services | Hareram Brass Industries';
  }, []);

  const TechnologyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50} color={"#000000"} fill={"none"} >
      <path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M21.011 14.0965C21.5329 13.9558 21.7939 13.8854 21.8969 13.7508C22 13.6163 22 13.3998 22 12.9669V11.0332C22 10.6003 22 10.3838 21.8969 10.2493C21.7938 10.1147 21.5329 10.0443 21.011 9.90358C19.0606 9.37759 17.8399 7.33851 18.3433 5.40087C18.4817 4.86799 18.5509 4.60156 18.4848 4.44529C18.4187 4.28902 18.2291 4.18134 17.8497 3.96596L16.125 2.98673C15.7528 2.77539 15.5667 2.66972 15.3997 2.69222C15.2326 2.71472 15.0442 2.90273 14.6672 3.27873C13.208 4.73448 10.7936 4.73442 9.33434 3.27864C8.95743 2.90263 8.76898 2.71463 8.60193 2.69212C8.43489 2.66962 8.24877 2.77529 7.87653 2.98663L6.15184 3.96587C5.77253 4.18123 5.58287 4.28891 5.51678 4.44515C5.45068 4.6014 5.51987 4.86787 5.65825 5.4008C6.16137 7.3385 4.93972 9.37763 2.98902 9.9036C2.46712 10.0443 2.20617 10.1147 2.10308 10.2492C2 10.3838 2 10.6003 2 11.0332V12.9669C2 13.3998 2 13.6163 2.10308 13.7508C2.20615 13.8854 2.46711 13.9558 2.98902 14.0965C4.9394 14.6225 6.16008 16.6616 5.65672 18.5992C5.51829 19.1321 5.44907 19.3985 5.51516 19.5548C5.58126 19.7111 5.77092 19.8188 6.15025 20.0341L7.87495 21.0134C8.24721 21.2247 8.43334 21.3304 8.6004 21.3079C8.76746 21.2854 8.95588 21.0973 9.33271 20.7213C10.7927 19.2644 13.2088 19.2643 14.6689 20.7212C15.0457 21.0973 15.2341 21.2853 15.4012 21.3078C15.5682 21.3303 15.7544 21.2246 16.1266 21.0133L17.8513 20.034C18.2307 19.8187 18.4204 19.711 18.4864 19.5547C18.5525 19.3984 18.4833 19.132 18.3448 18.5991C17.8412 16.6616 19.0609 14.6226 21.011 14.0965Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>

  );

  const Recycle02Icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50} color={"#000000"} fill={"none"} >
      <path d="M10.8386 19.7631H16.4671C19.3324 19.7631 20.7651 19.7631 21.4622 19.0038C21.6578 18.7907 21.8093 18.544 21.9087 18.2766C22.2627 17.3239 21.567 16.1237 20.1754 13.7234M10.8386 19.7631L13.7564 17.5262M10.8386 19.7631L13.7564 22M18.4896 10.8154L15.507 5.6705C14.2306 3.4687 13.5924 2.36781 12.7003 2.10134C12.248 1.96622 11.7634 1.96622 11.3111 2.10134C10.419 2.36781 9.78081 3.4687 8.50438 5.6705M18.4896 10.8154L15.0117 9.50645M18.4896 10.8154L19.0588 7.27638M6.81856 8.57849L3.73542 13.8968C2.43531 16.1395 1.78525 17.2608 2.06354 18.1613C2.17186 18.5119 2.36819 18.8316 2.63534 19.0926C3.32163 19.7631 4.66018 19.7631 7.33728 19.7631M6.81856 8.57849L7.36018 12.1215M6.81856 8.57849L3.33053 9.8626" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const AgreementIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50} color={"#000000"} fill={"none"} >
      <path d="M22 6.75003H19.2111C18.61 6.75003 18.3094 6.75003 18.026 6.66421C17.7426 6.5784 17.4925 6.41168 16.9923 6.07823C16.2421 5.57806 15.3862 5.00748 14.961 4.87875C14.5359 4.75003 14.085 4.75003 13.1833 4.75003C11.9571 4.75003 11.1667 4.75003 10.6154 4.97839C10.0641 5.20675 9.63056 5.6403 8.76347 6.50739L8.00039 7.27047C7.80498 7.46588 7.70727 7.56359 7.64695 7.66005C7.42335 8.01764 7.44813 8.47708 7.70889 8.80854C7.77924 8.89796 7.88689 8.98459 8.10218 9.15785C8.89796 9.79827 10.0452 9.73435 10.7658 9.00945L12 7.76789H13L19 13.8036C19.5523 14.3592 19.5523 15.2599 19 15.8155C18.4477 16.3711 17.5523 16.3711 17 15.8155L16.5 15.3125M13.5 12.2947L16.5 15.3125M16.5 15.3125C17.0523 15.8681 17.0523 16.7689 16.5 17.3244C15.9477 17.88 15.0523 17.88 14.5 17.3244L13.5 16.3185M13.5 16.3185C14.0523 16.874 14.0523 17.7748 13.5 18.3304C12.9477 18.8859 12.0523 18.8859 11.5 18.3304L10 16.8214M13.5 16.3185L11.5 14.3185M9.5 16.3185L10 16.8214M10 16.8214C10.5523 17.377 10.5523 18.2778 10 18.8334C9.44772 19.3889 8.55229 19.3889 8 18.8334L5.17637 15.9509C4.59615 15.3586 4.30604 15.0625 3.93435 14.9062C3.56266 14.75 3.14808 14.75 2.31894 14.75H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 14.75H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8.5 6.75003L2 6.75003" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );

  const features = [
    {
      id: 1,
      icon: <TechnologyIcon />,
      title: "Cutting-Edge Technology",
      description: "We integrate cutting-edge technology into every step of our brass manufacturing process, ensuring precision and unmatched quality. Our advanced machinery meets the highest industry standards, exceeding customer expectations."
    },
    {
      id: 2,
      icon: <Recycle02Icon />,
      title: "Recyclable",
      description: "Brass is 100% recyclable, reducing waste and conserving resources. By reusing materials, we lower energy consumption and minimize our environmental footprint. Our commitment to recycling ensures we contribute to a greener, more sustainable future."
    },
    {
      id: 3,
      icon: <AgreementIcon />,
      title: "Customer Commitment",
      description: "Our commitment to customers is at the heart of everything we do. We prioritize quality, reliability, and timely delivery to meet your unique needs. By building long-term partnerships, we ensure every product exceeds expectations."


    }
  ];

  return (
    <>
      <div className="overlayreturnsactive">
        <img src="images/logofull.png" alt="loading" />
      </div>
      <Navbar /> <br />
      <span className='brudandbread'>
        <div className="divbreaad">
          <Link to="/">Home</Link> /
          <Link to="/services" className='activeonbread'>Services</Link>
        </div>
      </span>
      <br />

      <section className="servicessection">
        <h1 className="section-title">Our services</h1>
        <div className="servicesCardsec">
          {features.map((feature , index) => (
            <div key={feature.id} className="servicecards fade-up"
            style={{
              animationDelay: `${0.2 + index * 0.2}s`, 
              transform: 'translateY(60px)',
            }}
            >
              <div className="feature-icon" style={{ marginBottom: "1rem" }}>
                {feature.icon}
              </div>
              <h2>{feature.title}</h2>
              <br /> <p style={{ color: "#000000", opacity: "0.5" }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='fade-up'
        style={{
          width: "90vw",
          padding: "5vh 0vw",
          boxSizing: "border-box",
          marginTop: "10vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          animationDelay: '0.5s', transform: 'translateY(100px)'
        }}
       
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "2vh" }}>
          About Our Services
        </h1>
        <p
          style={{
            width: "100%",
            maxWidth: "900px",
            textAlign: "justify",
            fontSize: "1rem",
            lineHeight: "1.6",
          }}
        >
          At Hareram Brass Industries, we are dedicated to delivering high-quality
          brass components tailored to the specific needs of our clients across
          various industries. With years of experience in precision engineering, we
          specialize in custom brass parts manufacturing, using cutting-edge
          machinery like CNC turning centers, automatic thread cutting machines, and
          other advanced tools. Our services are designed to support both low-volume
          prototyping and high-volume production, ensuring consistency, accuracy, and
          timely delivery.
          <br /> <br />
          Whether you need components for electricals, plumbing, automotive, or
          industrial applications, we provide a full range of services — from design
          and machining to finishing, assembly, and export packaging. Our commitment
          to quality, innovation, and customer satisfaction makes us a trusted
          partner for businesses worldwide.
        </p>
      </section>


      <section id="about" style={{ width: "90vw" }}>
        <div className="containernotworking" style={{ marginBottom: "0" }}>
          <div className="servicesimage" >
            <img src="images/cnc.jpg" alt="About Company" />
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>CNC Turning Machine</h3>

              <p>We utilize state-of-the-art CNC Turning Machines to produce highly accurate and complex brass parts with tight tolerances. These machines represent the heart of modern precision engineering and allow us to deliver superior quality and consistency at scale.
              </p>
              <br />

            </div>
          </div>
        </div>
        <div className='idkwhattodohereatanytimeontheroadorhomebro'>
          <p>
            These machines ensure  <br /> <br />
          </p>

          <span> Computer-Controlled Precision</span>
          <p>Delivers unparalleled accuracy in cutting, turning, drilling, and shaping.</p> <br />

          <span>Multi-Axis Machining</span>
          <p>Capable of 3-axis or even 5-axis operations for complex geometries and intricate detailing.</p> <br />

          <span>Fast & Efficient</span>
          <p>Automated operation allows for mass production with reduced lead time and minimal human error.</p> <br />

          <span>
            Repeatability
          </span>
          <p> Ideal for bulk orders requiring identical high-precision brass components.</p> <br />

          <span>Versatility</span>
          <p> Handles a wide range of part sizes and shapes for industries such as electronics, plumbing, automotive, and aerospace.</p>
        </div>
      </section>

      <br />
      <br />
      <section id="about" style={{ width: "90vw" }}>
        <div className="containernotworking" style={{ marginBottom: "0" }}>
          <div className="servicesimage" >
            <img src="images/cutingage.jpg" alt="About Company" />
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>Automatic Thread Cutting Machine</h3>


              <p>Our workshop is equipped with high-performance Automatic Thread Cutting Machines designed specifically for precision thread machining on brass components.
                <br /> <br />
                This machine plays a crucial role in delivering high-quality threaded brass parts used in industries like plumbing, automotive, electronics, and more.

              </p>

              <br />

            </div>
          </div>
        </div>
        <div className='idkwhattodohereatanytimeontheroadorhomebro'>
          <p>These machines ensure</p> <br />

          <span> Accurate and Consistent Threading</span>
          <p>Ideal for both internal and external threads on brass fittings, inserts, and electrical components.</p> <br />

          <span> High-Speed Production</span>
          <p>Supports bulk manufacturing with fast cycle times and minimal downtime.</p> <br />

          <span> Precision Engineering</span>
          <p>Delivers uniform results with tight tolerances, ensuring every part meets quality standards.</p> <br />

          <span> Versatile Threading Options</span>
          <p>Supports multiple thread sizes and types (BSP, NPT, metric, etc.) based on customer specifications.</p>
        </div>

      </section>

      <br /> <br /> <br />

    </>
  )
}

import CardTestimonial from "@/components/sections/About/CardTestimonial";

export default function Testimonails() {
  return (
    <section className="client-testimonials pt-16">
      <div className="title border-l-4 border-highlight text-3xl pl-4 mb-8">Client <span className="text-highlight">testimonials</span></div>

      <div className="testimonial-cards flex justify-around">
        <CardTestimonial
          text={"Adrian and I worked together setting up a new business function, within a Vue portal. Based on very few designs and prior business knowledge Adrian managed to idenpendently create an impressive flow of business functions, mirroring our front-end websites. Adrian worked methodically and managed his own workloads well within a wider team. Would recommend!"}
          picture={"person-1"}
          name={"Dean Hodson"}
          role={"Digital Product Owner"}
          linkedin={"https://www.linkedin.com/in/dean-hodson-925a0bb1/"}
          company={"Safety Shield Global"}
        />
        <CardTestimonial
          text={"Adrian Birta is an excellent communicator, analytical and a team player. He is an asset to any technical team and capable of taking the lead to shape a product and process. I highly recommend Adrian Birta, he will be a valuable asset to any company. Please do not hesitate to contact me if needed to discuss my recommendation."}
          picture={"person-2"}
          name={"Giridhar S R"}
          role={"Project Manager"}
          linkedin={"https://www.linkedin.com/in/giridhar-s-r-82564137/"}
          company={"Persistent Systems"}
        />
        <CardTestimonial
          text={"Adrian showcased exceptional technical proficiency in ReactJS and demonstrated a remarkable ability to adapt to various challenges. His problem-solving skills and innovative approach significantly impacted the successful delivery of our projects. Adrian's commitment to delivering high-quality code and solutions is commendable."}
          picture={"person-3"}
          name={"Alexa Alexandru"}
          role={"Senior Software Developer"}
          linkedin={"https://www.linkedin.com/in/alexa-alexandru-17a960172/"}
          company={"Amdaris"}
        />
      </div>
    </section>
  )
}





export default function About(props) {
  let myStyle={
      color: props.mode=="dark"? "white":"black",
      background: props.mode=="dark"? "#2b2b77":"white",
  }
  return (
    
    <>
<div className="accordion" style={myStyle} id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle}   type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Inkalab
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolor fugiat labore dolorem quas blanditiis necessitatibus sit natus magnam, nobis quisquam maxime delectus corporis, nihil, quae dignissimos est veniam quia!
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Internet Speed
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus molestias atque, iure nesciunt saepe quam rem voluptatem quia perspiciatis nihil, eligendi tempore nisi. Modi laboriosam laborum facere consequuntur optio.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={myStyle}   type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Responsive
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis porro possimus quis!
      </div>
    </div>
  </div>
</div>




    </>
  )
}

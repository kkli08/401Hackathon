function Attraction(props) {
    function detailHandler(){
        console.log('Clicked!');
        console.log(props.text);
    }

    return (
  <div>
    <div className="card">
      <h2>{props.title}</h2>
      <h4>{props.location}</h4>
      <div className="actions">
        <button className="btn" onClick={detailHandler}>Detail</button>
      </div>
    </div>
  </div>);
}

export default Attraction;
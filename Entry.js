const Entry = (props) => 
  <div className="term">
    <dt>
      <span className="character" role="img" aria-label="hangul">
        {props.symbol}
      </span>
    </dt>

    <dt>
      <span className="name">{props.name}</span>
    </dt>

    <dd>{props.description}</dd>
  </div>

export default Entry;

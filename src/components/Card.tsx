interface Props {
  body: string;
  title: string;
  subtitle: string;
  cardText: string;
  quote: string;
}
function Card({ body, title, subtitle, cardText, quote }: Props) {
  return (
    <div className="card-body">
      {body}
      <h5 className="card-title">{title}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary"> {subtitle}</h6>
      <p className="card-text">{cardText}</p>
      <a href="#" className="btn btn-primary">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <blockquote className="blockquote mb-0">
          <p>{quote}</p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </a>
    </div>
  );
}
export default Card;

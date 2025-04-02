import defaultImage from "../assets/news.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-4 mx-3 shadow-lg" style={{ width: "320px" }}>
      <img
        src={src ? src : defaultImage}
        className="card-img-top"
        alt="News"
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 50) : "No Title Available"}</h5>
        <p className="card-text">{description ? description.slice(0, 90) + "..." : "No description available."}</p>
        <a href={url} target="_blank" className="btn btn-primary w-100">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;


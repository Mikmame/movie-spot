function Movie({ title, year, poster, type }) {
  return (
    <div className="card movie">
      <div className="card-image">
        <img
          src={poster !== "N/A" ? poster : "https://placehold.co/300x445?text=No+Image"}
          alt={title}
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://placehold.co/300x445?text=No+Image";
          }}
        />
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>{year} — {type}</p>
      </div>
    </div>
  );
}

export { Movie };
import "./CategoryCard.css";

const CategoryCard = ({
  icon,
  iconBg,
  title,
  orderCount,
  badgeColor,
  badgeBg,
  onClick,
}) => {
  return (
    <div className="category-card" onClick={onClick}>
      {/* Left */}
      <div className="card-left">
        <div
          className="card-icon"
          style={{ backgroundColor: iconBg }}
        >
          {icon}
        </div>

        <span className="card-title">{title}</span>
      </div>

      {/* Right */}
      <div
        className="card-badge"
        style={{
          backgroundColor: badgeBg,
          color: badgeColor,
        }}
      >
        {orderCount} orders
      </div>
    </div>
  );
};

export default CategoryCard;
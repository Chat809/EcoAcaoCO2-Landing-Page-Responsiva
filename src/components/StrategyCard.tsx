interface StrategyCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

function StrategyCard({ iconSrc, title, description }: StrategyCardProps) {
  return (
    <div className="strategy-card">
      <img src={iconSrc} alt={title} className="card-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default StrategyCard;

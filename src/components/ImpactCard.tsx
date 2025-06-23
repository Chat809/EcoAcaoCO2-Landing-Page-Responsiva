interface ImpactCardProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
  caption: string;
  reverse?: boolean;
}

function ImpactCard({ imageSrc, alt, title, description, caption, reverse }: ImpactCardProps) {
  return (
    <div className={`impact-card ${reverse ? 'reverse' : ''}`}>
      <div className="impact-image-wrapper">
        <img src={imageSrc} alt={alt} className="impact-image" />
        <p className="impact-caption">{caption}</p>
      </div>
      <div className="impact-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ImpactCard;

import React from "react";

interface PolygonShapeProps {
  content: React.ReactNode;
  className?: string;
  svgClassName?: string;
  polygonClassName?: string;
  size?: number;
}

const PolygonShape: React.FC<PolygonShapeProps> = ({
  content,
  className = "",
  svgClassName = "",
  polygonClassName = "",
  size = 200,
}) => {
  // Calculate points based on size
  const halfSize = size / 2;
  const height = size * (Math.sqrt(3) / 2);
  const quarterHeight = height / 4;
  const threeQuarterHeight = (height * 3) / 4;

  const points = `${halfSize},0 ${size},${quarterHeight} ${size},${threeQuarterHeight} ${halfSize},${height} 0,${threeQuarterHeight} 0,${quarterHeight}`;

  return (
    <div className={`relative ${className}`} style={{ width: size, height }}>
      <svg
        width={size}
        height={height}
        viewBox={`0 0 ${size} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        className={svgClassName}
      >
        <polygon points={points} className={polygonClassName} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {content}
      </div>
    </div>
  );
};

export default PolygonShape;

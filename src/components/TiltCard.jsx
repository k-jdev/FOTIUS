import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function TiltCard({
  children,
  className,
  glareColor = "rgba(255,255,255,0.4)",
}) {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Обчислюємо позицію миші відносно центру картки
    // і переводимо в діапазон від -1 до 1
    const relativeX = (mouseX - centerX) / (rect.width / 2);
    const relativeY = (mouseY - centerY) / (rect.height / 2);

    setRotation({
      x: relativeY * -7,
      y: relativeX * 7,
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {children}

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle at ${
            (rotation.y / 7 + 1) * 50
          }% ${
            (rotation.x / -7 + 1) * 50
          }%, ${glareColor} 0%, rgba(255,255,255,0) 60%)`,
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}

export default TiltCard;

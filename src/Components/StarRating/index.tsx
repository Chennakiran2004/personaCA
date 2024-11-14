import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const StarsContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  margin: auto;
`;

const Star = styled(motion.div)`
  cursor: none;
  color: #ffd700;
  font-size: 2rem;

  @media screen and (min-width: 768px) {
    cursor: pointer;
  }

  @media screen and (min-width: 1280px) and (max-width: 1792px) and (min-resolution: 2dppx) {
    overflow: auto;
    scrollbar-width: none;
  }
`;

interface StarRatingProps {
  rating: number;
  setRating: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, setRating }) => {
  const [hovered, setHovered] = useState(0);

  const starVariants = {
    initial: { scale: 1, color: "#e4e5e9" }, // Gray for unselected
    hover: { scale: 1.2, color: "#ffc107" }, // Gold on hover
    selected: { scale: 1.1, color: "#ffd700" }, // Bright gold on selection
  };

  return (
    <StarsContainer>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          variants={starVariants}
          initial="initial"
          animate={rating >= star ? "selected" : "initial"}
          whileHover="hover"
          onMouseEnter={() => setHovered(star)}
          onClick={() => setRating(star)}
        >
          <FaStar />
        </Star>
      ))}
    </StarsContainer>
  );
};

export default StarRating;

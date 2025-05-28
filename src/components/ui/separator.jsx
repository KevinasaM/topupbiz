import React from 'react';
import PropTypes from 'prop-types';

export const Separator = React.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`shrink-0 bg-border ${orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"} ${className}`}
      {...props}
      role={decorative ? "none" : "separator"}
      aria-orientation={orientation}
    />
  );
});

Separator.displayName = "Separator";

// Menambahkan validasi propTypes
Separator.propTypes = {
  className: PropTypes.string,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  decorative: PropTypes.bool,
};

Separator.defaultProps = {
  className: "", // Nilai default untuk className jika tidak diberikan
  orientation: "horizontal", // Nilai default untuk orientation
  decorative: true, // Nilai default untuk decorative
};

export default Separator;

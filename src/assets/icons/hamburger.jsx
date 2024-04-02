const Hamburger = () => {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 18H10"
        className="stroke-current"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M4 12L16 12"
        className="stroke-current"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M4 6L20 6"
        className="stroke-current"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Hamburger;

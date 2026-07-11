export default function Logo() {
  return (
    <div className="w-fit">
      <svg
        viewBox="0 0 140 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 sm:h-7 md:h-8 w-auto"
      >
        <style>
          {`
            .stroke {
              stroke-dasharray: 200;
              stroke-dashoffset: 200;
              animation: draw 1.2s ease forwards;
            }

            .delay-1 { animation-delay: 0.2s; }
            .delay-2 { animation-delay: 0.4s; }
            .delay-3 { animation-delay: 0.6s; }

            @keyframes draw {
              to { stroke-dashoffset: 0; }
            }

            .cursor {
              animation: blink 1s infinite;
            }

            @keyframes blink {
              0%, 50%, 100% { opacity: 1; }
              25%, 75% { opacity: 0; }
            }
          `}
        </style>

        {/* < */}
        <path
          d="M20 10 L10 20 L20 30"
          stroke="#5EEAD4"
          strokeWidth="2"
          className="stroke"
        />

        {/* N */}
        <path
          d="M35 30 V10 L50 30 V10"
          stroke="#E6EDF3"
          strokeWidth="2"
          className="stroke delay-1"
        />

        {/* M */}
        <path
          d="M60 30 V10 L70 22 L80 10 V30"
          stroke="#E6EDF3"
          strokeWidth="2"
          className="stroke delay-2"
        />

        {/* / */}
        <path
          d="M88 30 L98 10"
          stroke="#5EEAD4"
          strokeWidth="2"
          className="stroke delay-3"
        />

        {/* > */}
        <path
          d="M110 10 L120 20 L110 30"
          stroke="#5EEAD4"
          strokeWidth="2"
          className="stroke delay-3"
        />
      </svg>
    </div>
  );
}

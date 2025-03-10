export default function Card({ title, value, percentage, description }) {
  return (
    <div className="bg-custom-gradient text-white p-6 rounded-lg shadow-md">
      <h3 className="text-gray-400 text-sm uppercase font-semibold tracking-wide">
        {title || "Placeholder Title"}
      </h3>
      <div className="mt-4 flex items-center">
        <span className="text-2xl font-bold">{value || 0}</span>
        <div
          className={`flex items-center ${percentage >= 0 ? "text-green-500" : "text-red-500"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
            />
          </svg>
          <span className="ml-1 text-lg font-semibold">{percentage || 0}%</span>
        </div>
      </div>
      <p className="mt-4 text-gray-500 text-sm">
        {description || "Placeholder Description"}
      </p>
    </div>
  );
}

const CongratsPopup = ({ type = "registration", course = "", onClose }) => {
  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative text-center">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        {type === "registration" ? (
          <>
            <h2 className="text-2xl font-semibold text-green-700 mb-2">
              Congratulations!
            </h2>
            <p className="text-gray-700">You have successfully registered.</p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-green-700 mb-2">
              Congratulations!
            </h2>
            <p className="text-gray-700">You have successfully enrolled for</p>
            <p className="text-green-600 font-semibold">{course}</p>
            <p className="mt-2 text-black">
              Kindly click{" "}
              <a
                href="#"
                className="text-green-600 hover:text-green-800 hover:underline"
              >
                here
              </a>{" "}
              to complete your course registration
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CongratsPopup;

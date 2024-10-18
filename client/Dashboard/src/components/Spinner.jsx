const Spinner = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full border-t-4 border-purple-600 border-solid h-16 w-16"></div>
            <span className="ml-4 text-lg text-purple-600">Loading...</span>
        </div>
    );
};

export default Spinner;

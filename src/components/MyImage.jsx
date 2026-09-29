export const MyImage = ({counter}) => {

    return (
        <div className="flex items-center flex-col bg-amber-50 p-3 max-w-3xl mx-auto border-blue-500 rounded-lg">
            <h2>Lorem Picsum Image</h2>
            <img
                src={`https://picsum.photos/seed/${counter}/400/250`}
                alt="Lorem Picsum"
            />
        </div>
    );
};
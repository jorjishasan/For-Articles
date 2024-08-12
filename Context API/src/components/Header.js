const Header = () => {
  return (
    <header className="flex-1 bg-gray-200 flex items-center justify-center">
      <div className="text-center">
        <input
          type="text"
          placeholder="Type your name"
          className="border border-gray-500 rounded-md p-2"
        />
        <p className="mt-2">My name is:</p>
      </div>
    </header>
  );
};

export default Header;

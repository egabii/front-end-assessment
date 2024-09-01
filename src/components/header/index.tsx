import "./header.css";
import ResetButton from "@/features/reset-button";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>MyApp</h1>
      </div>
      <ResetButton />
    </header>
  );
};

export default Header;

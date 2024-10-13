import Navigation from "./Navigation";
import PageContainer from "./PageContainer";
import ButtonAuth from "../shared/ButtonAuth";
import ResponsiveMenu from "../shared/ResponsiveMenu";
import ButtonThemes from "../shared/ButtonTheme";
const Header = () => {
  return (
    <header className="p-4 border-b">
      <PageContainer>
        <div className="flex justify-between  items-center w-full">
        <div className="flex items-center gap-2">
          <ResponsiveMenu />
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-blue-600">
          DevBlog
          </h1>
        </div>
        <Navigation />
        
        <div className="flex items-center gap-3">
          <ButtonThemes/>
          <ButtonAuth/>
        </div>
        
        </div>
      </PageContainer>
    </header>
  );
};
export default Header;

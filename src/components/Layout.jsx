import Navigation from "./Navigation";

function Layout() {
  return (
    <div className="layout">
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2026 CommunityHub</p>
      </footer>
    </div>
  );
}

export default Layout;

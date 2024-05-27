// * Component: Navigation
export default function Navigation() {
    // * Render
    return (
        <header className="absolute inset-x-0 top-0 z-30">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                {/* Desktop Navigation */}
                <h2>Desktop Nav</h2>

                {/* Mobile Navigation */}
                <h2>Mobile Nav</h2>
            </nav>
        </header>
    );
}

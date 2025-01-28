const NavBar = () => {
    return (
        <div className="flex flex-row gap-4 px-56">
            <a href="https://www.linkedin.com/in/aaron-h-hong/" className="relative inline-block text-color before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-text before:transition-all before:duration-200 hover:before:w-full">LinkedIn</a>
            <a href="https://github.com/AaronHongry" className="relative inline-block text-color before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-text before:transition-all before:duration-200 hover:before:w-full">Github</a>
        </div>
    );
}

export default NavBar;
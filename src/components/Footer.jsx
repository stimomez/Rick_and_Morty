import React from "react";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 h-32 bg-two w-full text-white text-2xl  ">
      <div className="flex flex-col justify-items-center justify-center h-full">
        <p className="">© Stiven Morales</p>
        <ul className="flex justify-center gap-6">
          <li className="p-3 shadow-xl rounded-full hover:bg-one">
            <a
              href="http://stivenmoralesdev.com/"
              title="Portafolio"
              target="noopener"
            >
              <i className="icon-footer fa-solid fa-folder-closed"></i>
            </a>
          </li>
          <li className="p-3 shadow-xl rounded-full hover:bg-one">
            <a
              title="Linkedin"
              href="https://www.linkedin.com/in/stiven-morales-meza-8a528421a"
              target="noopener"
            >
              <i className="icon-footer fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className="p-3 shadow-xl rounded-full hover:bg-one">
            <a
              title="GitHub"
              href="https://github.com/stimomez"
              target="noopener"
            >
              <i className="icon-footer fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

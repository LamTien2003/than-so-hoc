import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-[1200px] flex items-start gap-8 mx-auto py-8 px-20 text-xs font-medium border-t border-gray-800 md:flex-col md:px-4">
      <nav className="mb-8">
        <a aria-label="Myna Logo" href="/">
          <svg
            height="20"
            width="97"
            viewBox="0 0 91 19"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.032 0C1.80519 0 0 1.80519 0 4.032V7.98887L2.82117 5.35169C5.03125 3.28575 8.61451 3.28575 10.8246 5.3517L15.0521 9.30352C15.1739 9.41735 15.1739 9.61047 15.0521 9.7243L6.19905 18H13.968C16.1948 18 18 16.1948 18 13.968V4.032C18 1.80519 16.1948 0 13.968 0H4.032Z"></path>
            <path d="M90.7953 2.03976V15.331H87.9499V2.03976H90.7953Z"></path>
            <path d="M86.2066 10.5386C86.2066 11.562 85.9819 12.4605 85.5327 13.2343C85.0959 14.008 84.4594 14.6008 83.6232 15.0127C82.7995 15.4245 81.8386 15.6304 80.7403 15.6304C79.6171 15.6304 78.6437 15.4245 77.82 15.0127C76.9963 14.6008 76.3599 14.008 75.9106 13.2343C75.4738 12.4605 75.2554 11.562 75.2554 10.5386V2.021H78.1008V10.5386C78.1008 11.4122 78.3255 12.0799 78.7747 12.5416C79.2365 13.0034 79.8917 13.2343 80.7403 13.2343C81.564 13.2343 82.2067 13.0034 82.6685 12.5416C83.1303 12.0799 83.3611 11.4122 83.3611 10.5386V2.021H86.2066V10.5386Z"></path>
            <path d="M70.1588 15.331H67.4443L67.3882 13.8895C67.1136 14.4262 66.7205 14.838 66.2088 15.125C65.6971 15.4121 65.0919 15.5556 64.393 15.5556C63.4944 15.5556 62.7269 15.331 62.0904 14.8817C61.4664 14.4324 60.9922 13.8209 60.6677 13.0471C60.3557 12.2609 60.1997 11.3686 60.1997 10.3702C60.1997 9.37176 60.3557 8.48568 60.6677 7.71192C60.9922 6.92568 61.4664 6.30792 62.0904 5.85864C62.7269 5.40936 63.4944 5.18472 64.393 5.18472C65.0544 5.18472 65.6347 5.322 66.1339 5.59656C66.6331 5.87112 67.0325 6.27048 67.332 6.79464V5.40936H70.1588V15.331ZM63.0826 10.3702C63.0826 11.2438 63.2698 11.9738 63.6442 12.5604C64.0311 13.1345 64.5739 13.4215 65.2728 13.4215C65.7595 13.4215 66.1651 13.2842 66.4896 13.0097C66.8266 12.7351 67.0762 12.367 67.2384 11.9052C67.4131 11.431 67.5005 10.9193 67.5005 10.3702C67.5005 9.79608 67.4131 9.27816 67.2384 8.8164C67.0762 8.34216 66.8266 7.96776 66.4896 7.6932C66.1651 7.41864 65.7595 7.28136 65.2728 7.28136C64.549 7.28136 63.9999 7.57464 63.6255 8.1612C63.2635 8.73528 63.0826 9.4716 63.0826 10.3702Z"></path>
            <path d="M52.7564 5.40936L52.8687 8.31096L52.513 8.19864C52.6503 7.13784 53.006 6.37032 53.5801 5.89608C54.1666 5.42184 54.9029 5.18472 55.789 5.18472C56.8623 5.18472 57.6985 5.52168 58.2975 6.1956C58.8965 6.86952 59.1961 7.7868 59.1961 8.94744V15.331H56.3881V9.88344C56.3881 9.0348 56.2757 8.4108 56.0511 8.01144C55.8265 7.61208 55.4271 7.4124 54.853 7.4124C54.2665 7.4124 53.8172 7.62456 53.5052 8.04888C53.1932 8.4732 53.0372 9.08472 53.0372 9.88344V15.331H50.2292V5.40936H52.7564Z"></path>
            <path d="M41.8256 5.40936L44.2966 12.3919L46.6928 5.40936H49.351L45.4573 16.2857C45.2201 16.9222 44.8769 17.3902 44.4277 17.6897C43.9909 17.9892 43.4105 18.139 42.6867 18.139H40.9083V16.0985H42.1625C42.4621 16.0985 42.6929 16.0486 42.8552 15.9487C43.0299 15.8489 43.1672 15.6742 43.267 15.4246L43.5104 14.8255H42.7241L39.1486 5.40936H41.8256Z"></path>
            <path d="M27.5602 2.03976L30.9485 11.718L34.2994 2.03976H38.1183V15.331H35.2541V6.64489L32.1466 15.2935H29.713L26.6055 6.64489V15.331H23.76V2.03976H27.5602Z"></path>
          </svg>
        </a>
      </nav>
      <div className="w-full mx-auto grid grid-cols-4 gap-4 px-4 justify-items-center md:grid-cols-2 md:justify-items-start">
        <nav className="flex flex-col items-start space-y-2.5 text-slate-500 md:space-y-1.5">
          <h3 className="mb-2 text-gray-100">Products</h3>
          <a href="#" className="transition hover:text-gray-100">
            Todo List
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Product Management
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Git Manager
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Status Reporter
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Email Management
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Responsibilities
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Teams
          </a>
        </nav>
        <nav className="flex flex-col items-start space-y-2.5 text-slate-500 md:space-y-1.5">
          <h3 className="mb-2 text-gray-100">Resources</h3>
          <a href="#" className="transition hover:text-gray-100">
            Technical Support
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Licensing
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Community
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Knowledge Base
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Marketplace
          </a>
          <a href="#" className="transition hover:text-gray-100">
            My Account
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Support Ticket
          </a>
        </nav>
        <nav className="flex flex-col items-start space-y-2.5 text-slate-500 md:space-y-1.5">
          <h3 className="mb-2 text-gray-100">Learn</h3>
          <a href="#" className="transition hover:text-gray-100">
            Certification
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Partners
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Documentation
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Developer Resources
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Purchasing FAQ
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Enterprise services
          </a>
        </nav>
        <nav className="flex flex-col items-start space-y-2.5 text-slate-500 md:space-y-1.5">
          <h3 className="mb-2 text-gray-100">About Us</h3>
          <a href="#" className="transition hover:text-gray-100">
            Company
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Careers
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Events
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Blogs
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Contact
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Security
          </a>
          <a href="#" className="transition hover:text-gray-100">
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

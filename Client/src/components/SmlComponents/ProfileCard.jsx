import { Link } from "react-router-dom";
const ProfileCard = ({
  color,
  title,
  type,
  user,
  pass,
  photo,
  text1,
  text2,
}) => {
  return (
    <>
      <div className="bg-gray-500 relative flex flex-col items-center rounded-md overflow-hidden h-[27rem] w-80 shadow-xl">
        <div className={`${color} h-[30%] w-full`}>
          <div className="m-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#FFFFFF"
            >
              <path d="M20.717,4.43L14.417,.666c-1.491-.889-3.343-.889-4.834,0L3.283,4.43c-1.408,.842-2.283,2.38-2.283,4.016v7.109c0,1.636,.875,3.174,2.283,4.016l6.3,3.764c.746,.444,1.581,.667,2.417,.667s1.671-.223,2.417-.667l6.3-3.764c1.408-.842,2.283-2.38,2.283-4.016v-7.109c0-1.636-.875-3.174-2.283-4.016ZM13.904,1.525l6.3,3.764c.498,.297,.911,.706,1.215,1.183l-4.325,2.17L12.913,1.114c.343,.087,.678,.224,.991,.412Zm-1.904,.004l4.153,7.47H7.85L12,1.53ZM3.795,5.289L10.096,1.525c.314-.188,.648-.325,.992-.412l-4.18,7.529L2.582,6.47c.304-.476,.716-.884,1.214-1.181Zm-1.776,10.638c-.013-.123-.02-.248-.02-.373v-7.109c0-.365,.056-.724,.161-1.067l4.232,2.125L2.02,15.927Zm4.948-5.495l4.115,6.996-8.437-.645,4.322-6.351Zm4.532,12.536c-.488-.067-.966-.231-1.404-.493l-6.3-3.764c-.402-.24-.749-.553-1.027-.915l8.732,.662v4.51Zm-3.625-12.968h8.251l-4.125,7.014-4.125-7.014Zm12.33,8.711l-6.3,3.764c-.438,.263-.916,.427-1.404,.494v-4.504l8.723-.657c-.277,.357-.62,.666-1.018,.903Zm-7.292-1.276l4.123-7.009,4.432,6.36-8.555,.649Zm9.087-1.88c0,.078-.003,.157-.008,.234l-4.383-6.286,4.231-2.123c.105,.342,.16,.7,.16,1.065v7.109Z" />
            </svg>
          </div>
        </div>
        <div className="bg-white border-2 h-20 w-20 rounded-full absolute translate-y-[5.5rem] shadow-md">
          <img src={photo} aria-details="no icon" />
        </div>
        <div className="bg-white h-[70%] flex flex-col items-center pt-12">
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-sm text-gray-600 text-center m-6 mt-4 mb-4">
            {text1}
            <span className="font-bold px-1">{type}</span>
            {text2}
          </p>
          <div>
            <div className="text-xs flex gap-2">
              <p className="font-bold">Username :</p>
              <p>{user}</p>
            </div>
            <div className="text-xs flex gap-2">
              <p className="font-bold flex gap-[0.45rem]">
                Password <p>:</p>
              </p>
              <p>{pass}</p>
            </div>
          </div>
          <div className="flex mt-4 gap-10">
            <Link to="https://www.linkedin.com/in/syed-haider-shah-22b745236/">
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=haidershah123123@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </Link>
            <Link to="https://github.com/Syed-Haider-Shah">
              <i className="fa-brands fa-github"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileCard;

import ProfileCard from "./SmlComponents/ProfileCard";

const ProfileKeys = () => {
  return (
    <>
      <div className="md:h-screen flex flex-wrap items-center justify-center">
        <div className="md:-translate-y-10 justify-center flex md:p-0 p-6 flex-wrap gap-10">
          <ProfileCard
            color="bg-green-700"
            title="Syed Shah"
            type="Home Owner"
            user="homeowner@gmail.com"
            pass="homeowner1"
            photo="/icon1.png"
            text1="Hello! You can use credentials from this card to check out how"
            text2="login view looks like. You can also provide me with feedback with
            the links below. Thanks for checking out my website!"
          />
          <ProfileCard
            color="bg-blue-700"
            title="Haider Shah"
            type="Provider"
            user="provider@gmail.com"
            pass="provider1"
            photo="/icon2.png"
            text1="Hello! You can use credentials from this card to check out how"
            text2="login view looks like. You can also provide me with feedback with
            the links below. Thanks for checking out my website!"
          />
          <ProfileCard
            color="bg-orange-700"
            title="Syed Haider"
            type="Contributor"
            user="contributor@gmail.com"
            pass="contributor1"
            photo="/icon3.png"
            text1="Hello! You can use credentials from this card to check out how"
            text2="login view looks like. You can also provide me with feedback with
            the links below. Thanks for checking out my website!"
          />
        </div>
      </div>
    </>
  );
};

export default ProfileKeys;

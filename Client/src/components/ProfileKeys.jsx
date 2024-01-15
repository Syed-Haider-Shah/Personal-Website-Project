import ProfileCard from "./SmlComponents/ProfileCard";

const ProfileKeys = () => {
  return (
    <>
      <div className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="-translate-y-10 flex gap-10">
          <ProfileCard
            color="bg-green-700"
            title="Syed Shah"
            type="Home Owner"
            user="homeowner@gmail.com"
            pass="homeowner1"
            photo="/icon1.png"
          />
          <ProfileCard
            color="bg-blue-700"
            title="Haider Shah"
            type="Provider"
            user="provider@gmail.com"
            pass="provider1"
            photo="/icon2.png"
          />
          <ProfileCard
            color="bg-orange-700"
            title="Syed Haider"
            type="Contributor"
            user="contributor@gmail.com"
            pass="contributor1"
            photo="/icon3.png"
          />
        </div>
      </div>
    </>
  );
};

export default ProfileKeys;

import ProfileCard from "./SmlComponents/ProfileCard";
import { PROFILES } from "../constants/profiles";

const ProfileKeys = () => {
  return (
    <>
      <div className="md:h-screen flex flex-wrap items-center justify-center">
        <div className="md:-translate-y-10 justify-center flex md:p-0 p-6 flex-wrap gap-10">
          {PROFILES.map((profile) => (
            <ProfileCard
              key={profile.id}
              color={profile.color}
              title={profile.title}
              type={profile.type}
              user={profile.user}
              pass={profile.pass}
              photo={profile.photo}
              text1={profile.text1}
              text2={profile.text2}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileKeys;

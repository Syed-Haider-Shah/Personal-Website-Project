import ProfileCard from "./SmlComponents/ProfileCard";
import { PROFILES } from "../constants/profiles";
import { ShopContext } from "./SmlComponents/ShopContext";
import { useContext, useState } from "react";
export default function Profile() {
  const { Cookies } = useContext(ShopContext);
  const [email, getEmail] = useState(Cookies.get("email"));
  return (
    <>
      <div className="w-full text-center translate-y-28 ">
        <h className="text-3xl font-bold">DYNAMICALLY FILLED</h>
        <p className="text-sm text-gray-500">
          Try to login with another profile
        </p>
      </div>
      <div className="h-screen bg-gray-100 flex items-center justify-center flex-col">
        <div className="-translate-y-20 flex gap-10">
          {PROFILES.map((profile) =>
            profile.user === email ? (
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
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </>
  );
}

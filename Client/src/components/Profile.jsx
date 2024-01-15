import ProfileCard from "./SmlComponents/ProfileCard";
export default function Profile() {
  return (
    <>
      <div className="w-full text-center translate-y-28 ">
        <h className="text-3xl font-bold">DYNAMICALLY FILLED</h>{" "}
        <p className="text-sm text-gray-500">
          Try to login with another profile
        </p>
      </div>
      <div className="h-screen bg-gray-100 flex items-center justify-center flex-col">
        <div className="-translate-y-20 flex gap-10">
          <ProfileCard
            color="bg-green-700"
            title="Syed Haider"
            type="Contributor"
            user="contributor@gmail.com"
            pass="contributor1"
            text1="Thank you for visiting the"
            text2="page, now you can go and try out other login profiles. Visit the Profile Keys tab in the navbar to checkout other profiles!"
          />
        </div>
      </div>
    </>
  );
}

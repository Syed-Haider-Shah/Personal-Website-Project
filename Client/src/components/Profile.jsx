import ProfileCard from "./SmlComponents/ProfileCard";
export default function Profile() {
  return (
    <>
      <div className="h-screen bg-gray-100 flex items-center justify-center">
        <h>This dynamically Filled</h>
        <div className="-translate-y-10 flex gap-10">
          <ProfileCard
            color="bg-green-700"
            title="Syed Haider"
            type="Contributor"
            user="contributor@gmail.com"
            pass="contributor1"
          />
        </div>
      </div>
    </>
  );
}

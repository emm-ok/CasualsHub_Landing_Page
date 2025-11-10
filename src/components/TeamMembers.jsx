import { teamMembers } from "../constants";

const TeamMembers = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center text-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-sm text-gray-600 mt-2">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;

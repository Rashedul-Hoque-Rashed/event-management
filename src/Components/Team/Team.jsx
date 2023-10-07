
const Team = ({ team }) => {

    const { profile_image, name, position, email, phone } = team;

    return (
        <div className="rounded-lg border p-4 mt-10">
            <div className="flex items-center gap-6">
                <div>
                    <img className="w-28 h-36 rounded-lg" src={profile_image} alt="" />
                </div>
                <div>
                    <h4>{name}</h4>
                    <h6>{position}</h6>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                </div>
            </div>
        </div>
    );
};

export default Team;
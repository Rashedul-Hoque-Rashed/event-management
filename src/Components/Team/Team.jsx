import PropTypes from 'prop-types';

const Team = ({ team }) => {

    const { profile_image, name, position, email, phone } = team;

    return (
        <div data-aos="zoom-in-up" className="rounded-lg border p-4 mt-10">
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div>
                    <img className="w-28 h-36 rounded-lg" src={profile_image} alt="" />
                </div>
                <div>
                    <h4 className="text-2xl font-bold">{name}</h4>
                    <h6 className="text-xs">{position}</h6>
                    <p className="mt-2 text-lg">Email: {email}</p>
                    <p className="text-lg">Phone: {phone}</p>
                </div>
            </div>
        </div>
    );
};

Team.propTypes = {
    team: PropTypes.object
}

export default Team;
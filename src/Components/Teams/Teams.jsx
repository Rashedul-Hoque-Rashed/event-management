import { useEffect, useState } from "react";
import Team from "../Team/Team";

const Teams = () => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('teams.json')
            .then(res => res.json())
            .then(data => setTeams(data));
    }, [])

    return (
        <div className="mb-24 container mx-auto px-6">
            <h3 className="text-3xl text-center font-bold text-black">Our Teams</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {
                    teams.map(team => <Team key={team.id} team={team}></Team>)
                }
            </div>
        </div>
    );
};

export default Teams;
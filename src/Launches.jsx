import { gql, useQuery } from '@apollo/client';

const GET_LAUNCHES = gql`
query Launches {
    launches {
        launches {
            id
            mission {
                name
            }
        }
    }
}`;

export function Launches() {
    const { loading, error, data } = useQuery(GET_LAUNCHES);
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
        <div>
            {data.launches.launches.map((launch) => (
            <div key={launch.id}>
                <h3>{launch.mission.name}</h3>
            </div>
            ))}
        </div>
    );
}
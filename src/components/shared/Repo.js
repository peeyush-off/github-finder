
import RepoItem from './RepoItem';

const Repos = ({ repos = [] }) => {
    return (
        <div className="rounded-lg shadow-lg card">
            <div className="card-body">
                <h2 className="text-3xl my-4 font-bold card-title">
                    Latest Repositories
                </h2>
                {
                    repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
                }
            </div>
        </div>
    )
};


export default Repos;
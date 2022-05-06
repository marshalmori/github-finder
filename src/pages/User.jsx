import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";

function User() {
  const { getUser, user } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
    // getUserRepos(params.login);
    // getUser(match.params.login);
    // getUserRepos(match.params.login);
  }, [getUser, params.login]);

  return <div>User: {params.login} </div>;
}

export default User;

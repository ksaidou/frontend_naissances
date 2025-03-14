import { useRouteError } from "react-router-dom";

type errorType ={
    statusText? : string;
    message?: string;
}

function ErrorPage() {
    const error = useRouteError() as errorType;
    console.error(error);
  return (
    <div>
        <h1>La page que vous recherchez n'existe pas!</h1>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </div>
  )
}

export default ErrorPage;
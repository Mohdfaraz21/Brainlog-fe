import { Button } from "./components/Button";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <div className="">
        <Button variant="primary" text="Share" startIcon={<ShareIcon />} />
      </div>
    </>
  );
}

export default App;

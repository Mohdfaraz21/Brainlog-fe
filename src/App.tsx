import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <div className="flex gap-2 justify-end">
        <Button variant="primary" text="Add Content" startIcon={<PlusIcon />} />
        <Button variant="secondary" text="Share" startIcon={<ShareIcon />} />
      </div>
      <div className="flex flex-wrap gap-4">
        <Card
          title="Project Ideas"
          link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          type="youtube"
        />
        <Card
          title="Project Ideas"
          link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          type="youtube"
        />
        <Card
          title="Project Ideas"
          link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          type="youtube"
        />
      </div>
    </>
  );
}

export default App;

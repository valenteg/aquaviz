import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

function Sidebar() {
  return (
    <aside className="w-64 bg-background border-r h-[calc(100vh-4rem)] sticky top-16">
      <ScrollArea className="h-full py-4">
        <div className="px-4">
          <h2 className="text-lg font-semibold mb-4">Quick Access</h2>
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">Tool 1</Button>
            <Button variant="ghost" className="w-full justify-start">Tool 2</Button>
            <Button variant="ghost" className="w-full justify-start">Tool 3</Button>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="px-4">
          <h2 className="text-lg font-semibold mb-4">Recent</h2>
          <div className="space-y-2">
            <Button variant="link" className="w-full justify-start">Recent Item 1</Button>
            <Button variant="link" className="w-full justify-start">Recent Item 2</Button>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
}

export default Sidebar;
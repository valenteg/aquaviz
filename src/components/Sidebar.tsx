import { Button } from "@/components/ui/button";

function Sidebar() {
  return (
    <aside className="w-64 bg-background border-r p-4">
      <h2 className="text-lg font-semibold mb-4">Quick Access</h2>
      <div className="space-y-2">
        <Button variant="ghost" className="w-full justify-start">Tool 1</Button>
        <Button variant="ghost" className="w-full justify-start">Tool 2</Button>
        <Button variant="ghost" className="w-full justify-start">Tool 3</Button>
      </div>
    </aside>
  );
}

export default Sidebar;
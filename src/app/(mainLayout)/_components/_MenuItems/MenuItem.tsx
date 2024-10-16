import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

export default function MenuItems() {
  return (
    <Dropdown
      backdrop="blur"
      className="w-[150px]  h-[30vh] flex items-start justify-start bg-black"
      size="lg"
    >
      <DropdownTrigger>
        <Button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-md">
          <span>Menu</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" variant="faded">
        <DropdownItem key="new">Home</DropdownItem>
        <DropdownItem key="copy">Project</DropdownItem>
        <DropdownItem key="edit">Contact</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

/* eslint-disable react/prop-types */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Dropdown = ({ title, option, ...props }) => {
  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger>{title}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {option.map((item, index) => (
          <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;

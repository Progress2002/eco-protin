import * as React from "react";
import { cn } from "@/lib/utils";
import { Box } from "@chakra-ui/react";

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      className={cn(
        "px-4 md:px-7 lg:px-24 2xl:px-8 overflow-hidden max-w-screen-2xl mx-auto ",
        className
      )}
      {...props}
    />
  );
});
Container.displayName = "Container";

export default Container;

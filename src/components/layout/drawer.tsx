import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
} from "@chakra-ui/react";
import { ROUTES } from "@/constant";
import { Link } from "react-scroll";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const linkStyles = {
    active:
      "!text-[#0E6A10] font-semibold text-lg p-2 !border-b-2 !border-b-[#0E6A10] transition-colors",
    inactive:
      "!text-gray-700 text-lg p-2 font-medium hover:!text-[#0E6A10] transition-colors",
  };
  return (
    <Box className="md:hidden">
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton h={10} w={10} />
          <DrawerBody>
            <nav className="h-full flex justify-center items-center">
              <ul className="space-y-2 -mr-10">
                {ROUTES.map((route) => (
                  <li key={route.path} className="p-3">
                    <Link
                      to={route.path}
                      onClick={onClose}
                      smooth={true}
                      duration={500}
                      className={linkStyles.inactive}>
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileDrawer;
